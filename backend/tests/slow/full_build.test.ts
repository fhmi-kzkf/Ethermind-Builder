import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import prisma, { initDatabase } from '../../src/db/prisma';
import { Orchestrator } from '../../src/services/agents/orchestrator';
import previewManager from '../../src/services/deployment/previewManager';
import llmClient from '../../src/services/llm/client';
import llmRouter from '../../src/services/llm/router';
import { resumeJob } from '../../src/services/queue/resume';
import { shopSpecRaw } from '../fixtures/specs';
import { makeUser } from '../helpers/platform';
import { shopFixtures, useScriptedLlm } from '../helpers/scriptedLlm';

/**
 * Real builds: the orchestrator runs against a scripted model, but everything after the model is real:
 * npm install, Prisma, lint, vitest with coverage, npm audit, a running server, HTTP smoke checks.
 */

const projectIds: string[] = [];

/** The sales route with a syntax error, in the block format the agents use. */
function brokenSales(): string {
  return shopFixtures.sales.replace('router.post(', 'router.post( ((');
}

async function newJob(type: 'build' | 'revision' = 'build', prompt?: string, from?: { projectId: string; specId: string }) {
  const owner = await makeUser('client');
  const project = from
    ? await prisma.project.findUniqueOrThrow({ where: { id: from.projectId } })
    : await prisma.project.create({ data: { userId: owner.id, name: 'Toko Berkah Jaya', status: 'building', conversation: { create: {} } } });
  if (!from) projectIds.push(project.id);

  const spec = from
    ? await prisma.spec.findUniqueOrThrow({ where: { id: from.specId } })
    : await prisma.spec.create({ data: { projectId: project.id, content: JSON.stringify(shopSpecRaw), approvedAt: new Date() } });
  const job = await prisma.job.create({ data: { projectId: project.id, specId: spec.id, type, prompt, status: 'pending', model: 'nvidia/nemotron-3-super-120b-a12b', maxSteps: 40, tokenBudget: 2_000_000 } });
  return { project, spec, job };
}

const events = (jobId: string) => prisma.jobEvent.findMany({ where: { jobId }, orderBy: { createdAt: 'asc' } });

describe('building a real app end to end', () => {
  beforeAll(async () => {
    await initDatabase();
  });

  afterEach(() => {
    llmClient.setClientForTesting(null);
    llmRouter.health.reset();
  });

  afterAll(async () => {
    for (const id of projectIds) await previewManager.stopAllForProject(id).catch(() => undefined);
  });

  it('builds the shop, passes every gate, and leaves a working app running', async () => {
    useScriptedLlm();
    const { project, job } = await newJob();

    const result = await new Orchestrator(job.id, project.id, 'nvidia/nemotron-3-super-120b-a12b').run();

    const finished = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });
    expect(result.error, finished.errorMessage ?? '').toBeUndefined();
    expect(result.success).toBe(true);
    expect(finished.status).toBe('completed');

    const gates = await prisma.gateResult.findMany({ where: { jobId: job.id } });
    const lastRound = Math.max(...gates.map((g) => JSON.parse(g.report).round as number));
    const finalGates = gates.filter((g) => JSON.parse(g.report).round === lastRound);
    expect(finalGates.map((g) => g.gate).sort()).toEqual(['ai_review', 'build_check', 'launch_checklist', 'lint_typecheck', 'security_scan', 'smoke_test', 'unit_test']);
    expect(finalGates.every((g) => g.passed)).toBe(true);

    const tests = JSON.parse(finalGates.find((g) => g.gate === 'unit_test')!.report).metrics;
    expect(tests.total).toBeGreaterThanOrEqual(60);
    expect(tests.coverage).toBeGreaterThanOrEqual(70);

    // The app is really running, with its API, its database and the generated pages.
    const done = (await events(job.id)).find((e) => e.eventType === 'completed')!;
    const { previewUrl, credentials } = JSON.parse(done.payload!);
    expect((await fetch(`${previewUrl}/api/health`)).status).toBe(200);
    expect(await (await fetch(`${previewUrl}/js/pages/home.js`)).text()).toContain('Ringkasan');

    const login = await fetch(`${previewUrl}/api/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials) });
    expect(login.status).toBe(200);
    const cookie = (login.headers.getSetCookie?.() ?? []).map((c) => c.split(';')[0]).join('; ');

    const products = await (await fetch(`${previewUrl}/api/products?limit=100`, { headers: { Cookie: cookie } })).json();
    expect(products.data.length).toBeGreaterThanOrEqual(10);
    const tea = products.data.find((p: any) => p.sku === 'MNM-001');

    const sale = await fetch(`${previewUrl}/api/sales`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: cookie },
      body: JSON.stringify({ items: [{ productId: tea.id, quantity: 2 }], method: 'tunai' }),
    });
    expect(sale.status).toBe(201);
    expect((await sale.json()).data.total).toBe(tea.price * 2);

    const summary = await (await fetch(`${previewUrl}/api/reports/summary`, { headers: { Cookie: cookie } })).json();
    expect(summary.data.transactionCount).toBe(1);

    const deployment = await prisma.deployment.findFirstOrThrow({ where: { projectId: project.id, status: 'running' } });
    expect(deployment.url).toBe(previewUrl);
    expect((await prisma.project.findUniqueOrThrow({ where: { id: project.id } })).status).toBe('ready');

    // The platform restarts and the preview dies. Starting it again brings the same app back with the data the client entered.
    await previewManager.stopAllForProject(project.id);
    await expect(fetch(`${previewUrl}/api/health`)).rejects.toBeDefined();

    const restartedUrl = await previewManager.restart(project.id);
    expect((await fetch(`${restartedUrl}/api/health`)).status).toBe(200);
    const again = await fetch(`${restartedUrl}/api/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials) });
    const cookieAgain = (again.headers.getSetCookie?.() ?? []).map((c) => c.split(';')[0]).join('; ');
    const kept = await (await fetch(`${restartedUrl}/api/reports/summary`, { headers: { Cookie: cookieAgain } })).json();
    expect(kept.data.transactionCount).toBe(1);

    // A second request while one is running shares it instead of starting another app.
    expect(await previewManager.restart(project.id)).toBe(restartedUrl);
    expect(await prisma.deployment.count({ where: { projectId: project.id, status: 'running' } })).toBe(1);
  });

  it('fast mode delivers a running app first, then reports tests, audit and review from the background', async () => {
    useScriptedLlm();
    const { project, job } = await newJob();
    const orchestrator = new Orchestrator(job.id, project.id, 'nvidia/nemotron-3-super-120b-a12b', 'fast');

    const result = await orchestrator.run();
    expect(result.success).toBe(true);

    const log = await events(job.id);
    const completedAt = log.findIndex((e) => e.eventType === 'completed');
    const gateEvents = log.map((e, index) => ({ index, gate: e.payload ? (JSON.parse(e.payload).gate as string | undefined) : undefined })).filter((e) => e.gate);
    const indexOf = (gate: string) => gateEvents.find((e) => e.gate === gate)?.index ?? Infinity;

    // The client is told the app is live before any slow check has even started.
    expect(completedAt).toBeGreaterThan(-1);
    expect(indexOf('build_check')).toBeLessThan(completedAt);
    expect(indexOf('smoke_test')).toBeLessThan(completedAt);
    expect(indexOf('unit_test')).toBeGreaterThan(completedAt);
    expect(JSON.parse(log[completedAt].payload!).hardening).toBe(true);

    const { previewUrl } = JSON.parse(log[completedAt].payload!);
    expect((await fetch(`${previewUrl}/api/health`)).status).toBe(200);

    expect(orchestrator.hardening).not.toBeNull();
    await orchestrator.hardening;

    const gates = await prisma.gateResult.findMany({ where: { jobId: job.id } });
    expect(gates.map((g) => g.gate).sort()).toEqual(['ai_review', 'build_check', 'launch_checklist', 'lint_typecheck', 'security_scan', 'smoke_test', 'unit_test']);
    expect(gates.every((g) => g.passed)).toBe(true);
    expect((await prisma.job.findUniqueOrThrow({ where: { id: job.id } })).status).toBe('completed');
  });

  it('repairs a broken route from the real failure output, then completes', async () => {
    const broken = brokenSales();
    let repaired = false;
    useScriptedLlm({
      'backend-route segment=sales': () => broken,
      remediation: ({ user }) => {
        repaired = true;
        expect(user).toContain('src/routes/custom/sales.js');
        return shopFixtures.sales;
      },
    });
    const { project, job } = await newJob();

    const result = await new Orchestrator(job.id, project.id).run();

    const finished = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });
    expect(result.success, finished.errorMessage ?? '').toBe(true);
    expect(repaired).toBe(true);
    expect(finished.remediationRounds).toBeGreaterThanOrEqual(1);
    const failedFirst = await prisma.gateResult.findMany({ where: { jobId: job.id, passed: false } });
    expect(failedFirst.length).toBeGreaterThan(0);
  });

  it('repairs a broken page with a light round that does not rerun the backend gates', async () => {
    const brokenHome = shopFixtures.home.replace('export default {', 'export default ({');
    useScriptedLlm({
      // The key also matches route=/pos by prefix, so answer only for the dashboard and leave the rest to the defaults.
      'frontend-page route=/': ({ task }) => (task === 'frontend-page route=/' ? brokenHome : undefined),
      remediation: ({ task }) => (task.endsWith('home.js') ? shopFixtures.home : undefined),
    });
    const { project, job } = await newJob();

    const result = await new Orchestrator(job.id, project.id).run();

    const finished = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });
    expect(result.success, finished.errorMessage ?? '').toBe(true);
    expect(finished.remediationRounds).toBe(1);

    const gates = await prisma.gateResult.findMany({ where: { jobId: job.id } });
    const countOf = (gate: string) => gates.filter((g) => g.gate === gate).length;
    expect(countOf('lint_typecheck')).toBe(2); // first round failed, second passed
    expect(countOf('build_check')).toBe(1); // not repeated: only a page changed
    expect(countOf('unit_test')).toBe(1);
    expect(countOf('launch_checklist')).toBe(1);
    expect((await events(job.id)).some((e) => e.message.includes('Hanya halaman yang berubah'))).toBe(true);
  });

  it('never reports success when it cannot fix the code: the job goes to human review', async () => {
    const broken = brokenSales();
    useScriptedLlm({
      'backend-route segment=sales': () => broken,
      remediation: () => broken,
    });
    const { project, job } = await newJob();

    const result = await new Orchestrator(job.id, project.id).run();

    expect(result.success).toBe(false);
    const finished = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });
    expect(finished.status).toBe('needs_review');
    expect(finished.errorMessage).toContain('belum lolos');
    expect((await prisma.project.findUniqueOrThrow({ where: { id: project.id } })).status).toBe('needs_review');
    expect(await prisma.deployment.count({ where: { projectId: project.id } })).toBe(0);
    expect(await prisma.version.count({ where: { projectId: project.id } })).toBe(0);
    expect((await events(job.id)).some((e) => e.eventType === 'completed')).toBe(false);
  });

  it('continues from the code already written instead of rebuilding it', async () => {
    const broken = brokenSales();
    useScriptedLlm({ 'backend-route segment=sales': () => broken, remediation: () => broken });
    const { project, job } = await newJob();
    await new Orchestrator(job.id, project.id).run();

    const stopped = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });
    expect(stopped.status).toBe('needs_review');
    const roundsBefore = Math.max(...(await prisma.gateResult.findMany({ where: { jobId: job.id } })).map((g) => JSON.parse(g.report).round as number));

    // The model gets it right this time. Only repairs and reviews may be asked of it: no agent writes anything again.
    const second = useScriptedLlm({ remediation: () => shopFixtures.sales });
    const resumed = await resumeJob(job.id);
    expect(resumed.ok).toBe(true);

    const until = Date.now() + 6 * 60 * 1000;
    let status = 'pending';
    while (Date.now() < until && !['completed', 'failed', 'needs_review'].includes(status)) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      status = (await prisma.job.findUniqueOrThrow({ where: { id: job.id } })).status;
    }
    const finished = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });
    expect(finished.status, finished.errorMessage ?? '').toBe('completed');

    const tasks = second.calls.map((c) => c.task);
    expect(tasks.some((task) => task.startsWith('remediation'))).toBe(true);
    for (const rebuilt of ['spec', 'seed-data', 'backend-route', 'frontend-page', 'custom-tests']) {
      expect(tasks.some((task) => task.startsWith(rebuilt)), rebuilt).toBe(false);
    }

    const roundsAfter = Math.max(...(await prisma.gateResult.findMany({ where: { jobId: job.id } })).map((g) => JSON.parse(g.report).round as number));
    expect(roundsAfter).toBeGreaterThan(roundsBefore);
    expect((await events(job.id)).some((e) => e.message.includes('Melanjutkan dari kode yang sudah dibuat'))).toBe(true);
    expect(await prisma.deployment.count({ where: { projectId: project.id, status: 'running' } })).toBe(1);
    expect((await prisma.project.findUniqueOrThrow({ where: { id: project.id } })).status).toBe('ready');
  });

  it('stops with a clear message when the AI engine is down, instead of producing a fake app', async () => {
    llmClient.setClientForTesting(null);
    const { project, job } = await newJob();

    const result = await new Orchestrator(job.id, project.id).run();

    expect(result.success).toBe(false);
    const finished = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });
    expect(finished.status).toBe('failed');
    expect(finished.errorMessage).toContain('belum dikonfigurasi');
  });
});
