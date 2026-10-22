import supertest from 'supertest';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import app from '../src/app';
import prisma, { initDatabase } from '../src/db/prisma';
import { ChatController } from '../src/controllers/chatController';
import llmClient from '../src/services/llm/client';
import llmRouter from '../src/services/llm/router';
import jobQueue from '../src/services/queue/jobQueue';
import { shopSpecRaw } from './fixtures/specs';
import { bearer, makeUser, TestUser } from './helpers/platform';
import { shopFixtures, useScriptedLlm } from './helpers/scriptedLlm';

const request = supertest(app);

describe('chat to spec to build request to revision', () => {
  let user: TestUser;
  let projectId: string;
  let script: ReturnType<typeof useScriptedLlm>;
  const addJob = vi.spyOn(jobQueue, 'addJob').mockResolvedValue();

  beforeAll(async () => {
    await initDatabase();
    user = await makeUser('client');
    script = useScriptedLlm();
  });

  afterAll(() => script.restore());

  const send = (content: string, metadata?: object) => request.post(`/api/projects/${projectId}/messages?wait=1`).set(bearer(user)).send({ content, metadata });

  it('creates a project with an empty conversation', async () => {
    const res = await request.post('/api/projects').set(bearer(user)).send({ name: 'Toko Berkah Jaya' });

    expect(res.status).toBe(201);
    expect(res.body.data.status).toBe('draft');
    projectId = res.body.data.id;
  });

  it('answers the first idea with tap-to-answer clarification questions', async () => {
    const res = await send('Saya punya toko kelontong keluarga, mau kasir dan stok.');

    expect(res.status).toBe(200);
    const meta = JSON.parse(res.body.data.assistantMessage.metadata);
    expect(meta.type).toBe('clarifications');
    expect(meta.questions[0].options.length).toBeGreaterThan(1);
  });

  it('writes the spec from the whole conversation, not just the last message', async () => {
    const res = await send('Tolong bangun sekarang.', { isReadyForSpec: true, answers: { auth: 'multi_role' } });

    expect(res.status).toBe(200);
    expect(res.body.data.spec.content).toContain('Toko Berkah Jaya');

    const planCall = script.calls.filter((c) => c.task === 'spec').pop();
    expect(planCall?.user).toContain('toko kelontong keluarga');
    expect(planCall?.user).toContain('Tolong bangun sekarang');
    expect(planCall?.user).toContain('multi_role');

    expect((await prisma.project.findUnique({ where: { id: projectId } }))?.status).toBe('planning');
  });

  it('does not write a spec just because the message sounds like "build it" or the chat is long', async () => {
    const before = await prisma.spec.count({ where: { projectId } });

    const res = await send('Tolong bangun aplikasinya, saya mau membangun toko online. Buatkan spesifikasi lengkap.');

    expect(res.status).toBe(200);
    expect(JSON.parse(res.body.data.assistantMessage.metadata).type).toBe('clarifications');
    expect(await prisma.spec.count({ where: { projectId } })).toBe(before);
  });

  it('shows the saved spec with the real stack, not what the planner claimed', async () => {
    const res = await request.get(`/api/projects/${projectId}/spec`).set(bearer(user));

    expect(res.status).toBe(200);
    expect(res.body.data.content.auth.mode).toBe('multi_role');
    expect(JSON.stringify(res.body.data.content.techStack)).toContain('Prisma');
  });

  it('refuses revisions before there is a finished app', async () => {
    const res = await request.post(`/api/projects/${projectId}/revisions`).set(bearer(user)).send({ prompt: 'Tambahkan laporan bulanan' });

    expect(res.status).toBe(409);
  });

  it('approves the spec, records model and price on the job, and queues it with that model', async () => {
    const res = await request.post(`/api/projects/${projectId}/spec/approve`).set(bearer(user)).send({ model: 'nvidia/nemotron-3-super-120b-a12b' });

    expect(res.status).toBe(201);
    const job = await prisma.job.findUnique({ where: { id: res.body.data.jobId } });
    expect(job?.status).toBe('pending');
    expect(job?.model).toBe('nvidia/nemotron-3-super-120b-a12b');
    expect(job?.priceIdr).toBe(100000);
    expect(job?.costEstimate).toBe(0);
    expect(addJob).toHaveBeenCalledWith(job?.id, projectId, 'nvidia/nemotron-3-super-120b-a12b');
    expect((await prisma.project.findUnique({ where: { id: projectId } }))?.status).toBe('building');
  });

  it('refuses a second build and new chat while one is running', async () => {
    expect((await request.post(`/api/projects/${projectId}/spec/approve`).set(bearer(user)).send({})).status).toBe(409);
    expect((await send('Satu hal lagi...')).status).toBe(409);
  });

  it('queues a revision with the client\'s own words once the app is ready', async () => {
    const spec = await prisma.spec.findFirst({ where: { projectId }, orderBy: { version: 'desc' } });
    await prisma.project.update({ where: { id: projectId }, data: { status: 'ready', repoPath: process.cwd() } });
    addJob.mockClear();

    const res = await request.post(`/api/projects/${projectId}/revisions`).set(bearer(user)).send({ prompt: 'Tambahkan laporan penjualan bulanan' });

    expect(res.status).toBe(201);
    const job = await prisma.job.findUnique({ where: { id: res.body.data.jobId } });
    expect(job?.type).toBe('revision');
    expect(job?.prompt).toBe('Tambahkan laporan penjualan bulanan');
    expect(job?.specId).toBe(spec?.id);
    expect(addJob).toHaveBeenCalledTimes(1);
  });

  it('rejects a revision request that is empty or absurdly long', async () => {
    await prisma.project.update({ where: { id: projectId }, data: { status: 'ready' } });

    expect((await request.post(`/api/projects/${projectId}/revisions`).set(bearer(user)).send({ prompt: ' ' })).status).toBe(400);
    expect((await request.post(`/api/projects/${projectId}/revisions`).set(bearer(user)).send({ prompt: 'x'.repeat(2001) })).status).toBe(400);
  });

  it('refuses to build a spec that cannot be built, and says why', async () => {
    const other = await request.post('/api/projects').set(bearer(user)).send({ name: 'Rusak' });
    await prisma.spec.create({ data: { projectId: other.body.data.id, content: JSON.stringify({ ...shopSpecRaw, pages: [{ route: '/x', name: 'X', kind: 'crud', entity: 'Tidak Ada' }] }) } });

    const res = await request.post(`/api/projects/${other.body.data.id}/spec/approve`).set(bearer(user)).send({});

    expect(res.status).toBe(422);
    expect(res.body.details.join(' ')).toContain('entity');
    expect(await prisma.job.count({ where: { projectId: other.body.data.id } })).toBe(0);
  });
});

describe('planner behaviour', () => {
  afterEach(() => llmClient.setClientForTesting(null));

  it('sends rejected specs back with the exact problems and accepts the corrected one', async () => {
    const user = await makeUser('client');
    let attempts = 0;
    const script = useScriptedLlm({
      spec: ({ user: prompt }) => {
        attempts += 1;
        if (attempts === 1) return JSON.stringify({ ...shopSpecRaw, pages: [{ route: '/products', name: 'Produk', kind: 'crud', entity: 'Product' }] });
        expect(prompt).toContain('ditolak');
        expect(prompt).toContain('route "/"');
        return shopFixtures.spec;
      },
    });
    const project = await request.post('/api/projects').set(bearer(user)).send({ name: 'Uji planner' });
    await request.post(`/api/projects/${project.body.data.id}/messages?wait=1`).set(bearer(user)).send({ content: 'Ide awal' });

    const res = await request.post(`/api/projects/${project.body.data.id}/messages?wait=1`).set(bearer(user)).send({ content: 'Bangun', metadata: { isReadyForSpec: true } });

    expect(res.status).toBe(200);
    expect(attempts).toBe(2);
    expect(script.calls.filter((c) => c.task === 'spec')).toHaveLength(2);
  });

  it('gives up with a clear 503 after three bad specs instead of inventing one', async () => {
    const user = await makeUser('client');
    useScriptedLlm({ spec: () => JSON.stringify({ title: 'X', pages: [], databaseSchema: [] }) });
    const project = await request.post('/api/projects').set(bearer(user)).send({ name: 'Uji gagal' });
    await request.post(`/api/projects/${project.body.data.id}/messages?wait=1`).set(bearer(user)).send({ content: 'Ide awal' });

    const res = await request.post(`/api/projects/${project.body.data.id}/messages?wait=1`).set(bearer(user)).send({ content: 'Bangun', metadata: { isReadyForSpec: true } });

    expect(res.status).toBe(503);
    expect(res.body.error).not.toMatch(/zod|spesifikasi yang valid setelah/i);
    expect(await prisma.spec.count({ where: { projectId: project.body.data.id } })).toBe(0);
  });

  it('answers 503 and keeps running when no AI engine is configured', async () => {
    const user = await makeUser('client');
    const project = await request.post('/api/projects').set(bearer(user)).send({ name: 'Tanpa AI' });

    const res = await request.post(`/api/projects/${project.body.data.id}/messages?wait=1`).set(bearer(user)).send({ content: 'Halo' });

    expect(res.status).toBe(503);
    expect((await request.get('/api/health')).status).toBe(200);
  });
});

describe('asynchronous chat', () => {
  afterEach(() => {
    llmClient.setClientForTesting(null);
    llmRouter.health.reset();
  });

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const newProject = async (user: TestUser) => (await request.post('/api/projects').set(bearer(user)).send({ name: 'Uji async' })).body.data.id as string;
  const messages = async (user: TestUser, projectId: string) => (await request.get(`/api/projects/${projectId}/messages`).set(bearer(user))).body.data as Array<{ role: string; content: string; metadata: string | null }>;
  const lastReply = async (user: TestUser, projectId: string) => (await messages(user, projectId)).filter((m) => m.role === 'assistant').pop()!;
  const kind = (m: { metadata: string | null }) => JSON.parse(m.metadata || '{}').type as string;

  async function settled(user: TestUser, projectId: string, timeoutMs = 5000) {
    const until = Date.now() + timeoutMs;
    while (Date.now() < until) {
      const reply = await lastReply(user, projectId);
      if (kind(reply) !== 'pending') return reply;
      await sleep(25);
    }
    throw new Error('reply stayed pending');
  }

  it('answers immediately while the planner is still working, then the reply appears by itself', async () => {
    const user = await makeUser('client');
    useScriptedLlm({ clarifications: async () => { await sleep(400); return shopFixtures.clarifications; } });
    const projectId = await newProject(user);

    const started = Date.now();
    const res = await request.post(`/api/projects/${projectId}/messages`).set(bearer(user)).send({ content: 'Saya mau aplikasi kasir.' });

    expect(res.status).toBe(202);
    expect(Date.now() - started).toBeLessThan(300);
    expect(res.body.data.userMessage.content).toBe('Saya mau aplikasi kasir.');
    expect(kind(res.body.data.assistantMessage)).toBe('pending');
    expect(res.body.data.assistantMessage.content).toContain('Sedang');

    const reply = await settled(user, projectId);
    expect(kind(reply)).toBe('clarifications');
    expect(JSON.parse(reply.metadata!).questions.length).toBeGreaterThan(0);
  });

  it('refuses a second message while the first is still being answered, then accepts it', async () => {
    const user = await makeUser('client');
    useScriptedLlm({ clarifications: async () => { await sleep(300); return shopFixtures.clarifications; } });
    const projectId = await newProject(user);
    await request.post(`/api/projects/${projectId}/messages`).set(bearer(user)).send({ content: 'Pesan pertama' });

    const second = await request.post(`/api/projects/${projectId}/messages`).set(bearer(user)).send({ content: 'Pesan kedua' });
    expect(second.status).toBe(409);
    expect(second.body.error).toContain('masih diproses');

    await settled(user, projectId);
    const third = await request.post(`/api/projects/${projectId}/messages?wait=1`).set(bearer(user)).send({ content: 'Bangun', metadata: { isReadyForSpec: true } });
    expect(third.status).toBe(200);
  });

  it('turns an AI failure into a retryable message instead of leaving the chat stuck', async () => {
    const user = await makeUser('client');
    useScriptedLlm({ clarifications: () => { throw new Error('provider down'); } });
    const projectId = await newProject(user);

    await request.post(`/api/projects/${projectId}/messages`).set(bearer(user)).send({ content: 'Ide saya' });
    const failed = await settled(user, projectId);

    expect(kind(failed)).toBe('error');
    expect(JSON.parse(failed.metadata!).retryable).toBe(true);
    expect(failed.content).toContain('sibuk');
    expect(failed.content).not.toMatch(/provider down|Error:|stack/i);

    llmRouter.health.reset();
    useScriptedLlm();
    const retry = await request.post(`/api/projects/${projectId}/messages`).set(bearer(user)).send({ content: 'Ide saya (coba lagi)' });
    expect(retry.status).toBe(202);
  });

  it('writes the spec in the background too and saves it for approval', async () => {
    const user = await makeUser('client');
    useScriptedLlm({ spec: async () => { await sleep(200); return shopFixtures.spec; } });
    const projectId = await newProject(user);
    await request.post(`/api/projects/${projectId}/messages?wait=1`).set(bearer(user)).send({ content: 'Ide awal' });
    useScriptedLlm({ spec: async () => { await sleep(200); return shopFixtures.spec; } });

    const res = await request.post(`/api/projects/${projectId}/messages`).set(bearer(user)).send({ content: 'Bangun', metadata: { isReadyForSpec: true } });
    expect(res.status).toBe(202);
    expect(await prisma.spec.count({ where: { projectId } })).toBe(0);

    const reply = await settled(user, projectId);
    expect(kind(reply)).toBe('spec_preview');
    expect(await prisma.spec.count({ where: { projectId } })).toBe(1);
  });

  it('marks replies that were interrupted by a restart so they can be sent again', async () => {
    const user = await makeUser('client');
    useScriptedLlm({ clarifications: async () => { await sleep(60_000); return shopFixtures.clarifications; } });
    const projectId = await newProject(user);
    await request.post(`/api/projects/${projectId}/messages`).set(bearer(user)).send({ content: 'Ide saya' });
    expect(kind(await lastReply(user, projectId))).toBe('pending');

    expect(await ChatController.expireStalePending()).toBeGreaterThanOrEqual(1);

    const reply = await lastReply(user, projectId);
    expect(kind(reply)).toBe('error');
    expect(reply.content).toContain('dimulai ulang');
  });
});
