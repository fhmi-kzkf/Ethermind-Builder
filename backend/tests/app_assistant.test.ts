import fs from 'fs/promises';
import supertest from 'supertest';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import app from '../src/app';
import prisma, { initDatabase } from '../src/db/prisma';
import llmClient from '../src/services/llm/client';
import llmRouter from '../src/services/llm/router';
import { WorkspaceFileManager } from '../src/services/sandbox/fileManager';
import { shopSpecRaw, simpleSpec } from './fixtures/specs';
import { bearer, makeUser, TestUser } from './helpers/platform';
import { useScriptedLlm } from './helpers/scriptedLlm';

const request = supertest(app);

describe('chat about the finished app', () => {
  let owner: TestUser;
  let stranger: TestUser;
  let projectId: string;
  let jobId: string;
  const fm = () => new WorkspaceFileManager(projectId, jobId);

  beforeAll(async () => {
    await initDatabase();
    [owner, stranger] = await Promise.all([makeUser('client'), makeUser('client')]);

    const project = await prisma.project.create({ data: { userId: owner.id, name: 'Toko Berkah Jaya', status: 'ready', conversation: { create: {} } } });
    projectId = project.id;
    const spec = await prisma.spec.create({ data: { projectId, content: JSON.stringify(shopSpecRaw), approvedAt: new Date() } });
    const job = await prisma.job.create({ data: { projectId, specId: spec.id, status: 'completed', finishedAt: new Date(), model: 'nvidia/nemotron-3-super-120b-a12b' } });
    jobId = job.id;

    await prisma.gateResult.createMany({
      data: [
        { jobId, gate: 'build_check', passed: true, report: JSON.stringify({ summary: 'Build lolos' }) },
        { jobId, gate: 'unit_test', passed: false, report: JSON.stringify({ summary: '15 dari 87 tes gagal' }) },
      ],
    });
    await prisma.deployment.create({ data: { projectId, environment: 'preview', url: 'http://localhost:5100', port: 5100, status: 'running', runtime: 'process' } });

    await fs.mkdir(fm().runtimeDir, { recursive: true });
    await fs.writeFile(`${fm().runtimeDir}/runtime.json`, JSON.stringify({ jwtSecret: 'rahasia-jwt', adminEmail: 'admin@example.com', adminPassword: 'Sandi-Awal-Rahasia9' }));
  });

  afterEach(() => {
    llmClient.setClientForTesting(null);
    llmRouter.health.reset();
  });

  afterAll(async () => {
    await fm().cleanWorkspace().catch(() => undefined);
  });

  const ask = (text: string) => request.post(`/api/projects/${projectId}/messages?wait=1`).set(bearer(owner)).send({ content: text });

  it('answers from what the platform knows about the app, and never lets the model see the password', async () => {
    const script = useScriptedLlm({
      'app-question': () => JSON.stringify({ answer: 'Masuk dengan email {{LOGIN_EMAIL}} dan kata sandi awal {{LOGIN_PASSWORD}}, lalu segera ganti.', intent: 'question' }),
    });

    const res = await ask('Email dan password aplikasi saya apa?');

    expect(res.status).toBe(200);
    expect(res.body.data.assistantMessage.content).toContain('admin@example.com');
    expect(res.body.data.assistantMessage.content).toContain('Sandi-Awal-Rahasia9');
    expect(JSON.parse(res.body.data.assistantMessage.metadata).type).toBe('app_answer');

    // The model was given the app's pages, data, status and quality results, but only tokens for the login.
    const prompt = script.calls[0].system + script.calls[0].user;
    expect(prompt).toContain('{{LOGIN_PASSWORD}}');
    expect(prompt).not.toContain('Sandi-Awal-Rahasia9');
    expect(prompt).toContain('Kasir');
    expect(prompt).toContain('http://localhost:5100');
    expect(prompt).toContain('15 dari 87 tes gagal');

    // The database keeps the tokens, not the password.
    const stored = await prisma.message.findUnique({ where: { id: res.body.data.assistantMessage.id } });
    expect(stored?.content).toContain('{{LOGIN_PASSWORD}}');
    expect(stored?.content).not.toContain('Sandi-Awal-Rahasia9');

    // The owner reading the chat later still sees the real values.
    const list = await request.get(`/api/projects/${projectId}/messages`).set(bearer(owner));
    expect(list.body.data.some((m: any) => m.content.includes('Sandi-Awal-Rahasia9'))).toBe(true);

    // The project endpoint the builder screen polls reveals them too.
    const project = await request.get('/api/projects/' + projectId).set(bearer(owner));
    expect(project.body.data.conversation.messages.some((m: any) => m.content.includes('Sandi-Awal-Rahasia9'))).toBe(true);
    expect(JSON.stringify(project.body.data.conversation.messages)).not.toContain('{{LOGIN_');
  });

  it('turns a request to change the app into an offer to apply it as a revision', async () => {
    useScriptedLlm({
      'app-question': () => JSON.stringify({ answer: 'Saya bisa menambahkan laporan bulanan.', intent: 'change_request', changeRequest: 'Tambahkan laporan penjualan bulanan' }),
    });

    const res = await ask('Tambahkan laporan bulanan dong');

    const metadata = JSON.parse(res.body.data.assistantMessage.metadata);
    expect(metadata.intent).toBe('change_request');
    expect(metadata.changeRequest).toBe('Tambahkan laporan penjualan bulanan');
  });

  it('keeps asking the planner while the idea is still being shaped', async () => {
    const draft = await prisma.project.create({ data: { userId: owner.id, name: 'Draf', status: 'draft', conversation: { create: {} } } });
    const script = useScriptedLlm();

    const res = await request.post(`/api/projects/${draft.id}/messages?wait=1`).set(bearer(owner)).send({ content: 'Saya mau aplikasi toko' });

    expect(JSON.parse(res.body.data.assistantMessage.metadata).type).toBe('clarifications');
    expect(script.calls[0].task).toBe('clarifications');
  });

  it('shows the first login only to the owner', async () => {
    const mine = await request.get(`/api/projects/${projectId}/credentials`).set(bearer(owner));
    expect(mine.status).toBe(200);
    expect(mine.body.data).toMatchObject({ email: 'admin@example.com', password: 'Sandi-Awal-Rahasia9', url: 'http://localhost:5100', running: true });

    expect((await request.get(`/api/projects/${projectId}/credentials`).set(bearer(stranger))).status).toBe(404);
    expect((await request.get(`/api/projects/${projectId}/credentials`)).status).toBe(401);
  });

  it('has no login to show for an app that does not ask for one', async () => {
    const open = await prisma.project.create({ data: { userId: owner.id, name: 'Tanpa Login', status: 'ready', conversation: { create: {} } } });
    const spec = await prisma.spec.create({ data: { projectId: open.id, content: JSON.stringify(simpleSpec()), approvedAt: new Date() } });
    const job = await prisma.job.create({ data: { projectId: open.id, specId: spec.id, status: 'completed', model: 'x' } });
    const other = new WorkspaceFileManager(open.id, job.id);
    await fs.mkdir(other.runtimeDir, { recursive: true });
    await fs.writeFile(`${other.runtimeDir}/runtime.json`, JSON.stringify({ jwtSecret: 'a', adminEmail: 'admin@example.com', adminPassword: 'x' }));

    const res = await request.get(`/api/projects/${open.id}/credentials`).set(bearer(owner));

    expect(res.status).toBe(200);
    expect(res.body.data).toBeNull();
    await other.cleanWorkspace().catch(() => undefined);
  });
});
