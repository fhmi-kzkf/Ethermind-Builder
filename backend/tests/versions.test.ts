import supertest from 'supertest';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import app from '../src/app';
import prisma, { initDatabase } from '../src/db/prisma';
import { Orchestrator } from '../src/services/agents/orchestrator';
import previewManager from '../src/services/deployment/previewManager';
import llmClient from '../src/services/llm/client';
import llmRouter from '../src/services/llm/router';
import { WorkspaceFileManager } from '../src/services/sandbox/fileManager';
import jobQueue from '../src/services/queue/jobQueue';
import { shopSpecRaw } from './fixtures/specs';
import { bearer, makeUser, TestUser } from './helpers/platform';
import { useScriptedLlm } from './helpers/scriptedLlm';

const request = supertest(app);

describe('version history and restoring', () => {
  let owner: TestUser;
  let stranger: TestUser;
  let projectId: string;
  const jobs: Record<'v1' | 'v2', string> = { v1: '', v2: '' };
  const versions: Record<'v1' | 'v2', string> = { v1: '', v2: '' };
  const specs: Record<'v1' | 'v2' | 'failed', string> = { v1: '', v2: '', failed: '' };
  const workspaces: WorkspaceFileManager[] = [];

  beforeAll(async () => {
    await initDatabase();
    [owner, stranger] = await Promise.all([makeUser('client'), makeUser('client')]);

    const project = await prisma.project.create({ data: { userId: owner.id, name: 'Toko Versi', status: 'ready', conversation: { create: {} } } });
    projectId = project.id;

    const spec1 = await prisma.spec.create({ data: { projectId, version: 1, content: JSON.stringify({ ...shopSpecRaw, title: 'Toko Versi Satu' }), approvedAt: new Date() } });
    const spec2 = await prisma.spec.create({ data: { projectId, version: 2, content: JSON.stringify({ ...shopSpecRaw, title: 'Toko Versi Dua' }), approvedAt: new Date() } });
    // The spec of a revision that failed: it exists, but no version was ever built from it.
    const specFailed = await prisma.spec.create({ data: { projectId, version: 3, content: JSON.stringify({ ...shopSpecRaw, title: 'Rancangan Revisi Gagal' }), approvedAt: new Date() } });
    specs.v1 = spec1.id;
    specs.v2 = spec2.id;
    specs.failed = specFailed.id;

    const job1 = await prisma.job.create({ data: { projectId, specId: spec1.id, type: 'build', status: 'completed', model: 'x' } });
    const job2 = await prisma.job.create({ data: { projectId, specId: spec2.id, type: 'revision', status: 'completed', model: 'x', prompt: 'Tambahkan laporan bulanan' } });
    jobs.v1 = job1.id;
    jobs.v2 = job2.id;

    for (const jobId of [job1.id, job2.id]) {
      const fm = new WorkspaceFileManager(projectId, jobId);
      await fm.writeFile('package.json', '{}');
      workspaces.push(fm);
    }

    const version1 = await prisma.version.create({ data: { projectId, jobId: job1.id, commitRef: 'v1-a', summary: 'Build v1-a: Toko Versi Satu', createdAt: new Date(Date.now() - 60_000) } });
    const version2 = await prisma.version.create({ data: { projectId, jobId: job2.id, commitRef: 'v2-b', summary: 'Revisi v2-b: Toko Versi Dua', createdAt: new Date() } });
    versions.v1 = version1.id;
    versions.v2 = version2.id;

    // The newest version is the active one.
    await prisma.project.update({ where: { id: projectId }, data: { repoPath: workspaces[1].workspaceDir } });

    vi.spyOn(jobQueue, 'addJob').mockResolvedValue();
    vi.spyOn(previewManager, 'stopAllForProject').mockResolvedValue();
    vi.spyOn(previewManager, 'restart').mockResolvedValue('http://localhost:5199');
  });

  afterEach(() => {
    llmClient.setClientForTesting(null);
    llmRouter.health.reset();
  });

  afterAll(async () => {
    for (const fm of workspaces) await fm.cleanWorkspace().catch(() => undefined);
    vi.restoreAllMocks();
  });

  const restore = (versionId: string, user = owner) => request.post(`/api/projects/${projectId}/versions/${versionId}/restore`).set(bearer(user));

  it('lists every version newest first and marks the active one', async () => {
    const res = await request.get(`/api/projects/${projectId}/versions`).set(bearer(owner));

    expect(res.status).toBe(200);
    expect(res.body.data.map((v: any) => v.summary)).toEqual(['Revisi v2-b: Toko Versi Dua', 'Build v1-a: Toko Versi Satu']);
    expect(res.body.data[0]).toMatchObject({ kind: 'revision', request: 'Tambahkan laporan bulanan', active: true, available: true, specVersion: 2 });
    expect(res.body.data[1]).toMatchObject({ kind: 'build', request: null, active: false, available: true });
  });

  it('keeps versions private: another client gets 404 for both list and restore', async () => {
    expect((await request.get(`/api/projects/${projectId}/versions`).set(bearer(stranger))).status).toBe(404);
    expect((await restore(versions.v1, stranger)).status).toBe(404);
    expect((await request.get(`/api/projects/${projectId}/versions`)).status).toBe(401);
  });

  it('restoring the active version changes nothing', async () => {
    const res = await restore(versions.v2);

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual({ alreadyActive: true });
  });

  it('restores an earlier version, starts its preview, and tells the chat', async () => {
    const res = await restore(versions.v1);

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ alreadyActive: false, previewUrl: 'http://localhost:5199' });
    expect((await prisma.project.findUniqueOrThrow({ where: { id: projectId } })).repoPath).toBe(workspaces[0].workspaceDir);
    expect(previewManager.stopAllForProject).toHaveBeenCalledWith(projectId);
    expect(previewManager.restart).toHaveBeenCalledWith(projectId);

    const list = await request.get(`/api/projects/${projectId}/versions`).set(bearer(owner));
    expect(list.body.data.find((v: any) => v.id === versions.v1).active).toBe(true);
    expect(list.body.data.find((v: any) => v.id === versions.v2).active).toBe(false);

    const messages = await prisma.message.findMany({ where: { conversation: { projectId } } });
    expect(messages.some((m) => m.content.includes('dikembalikan ke versi'))).toBe(true);
  });

  it('shows the spec of the active version, not the newest spec', async () => {
    const res = await request.get(`/api/projects/${projectId}/spec`).set(bearer(owner));

    expect(res.status).toBe(200);
    expect(res.body.data.content.title).toBe('Toko Versi Satu');
  });

  it('builds the next revision on the active version\'s spec, so a failed revision cannot leak into it', async () => {
    const res = await request.post(`/api/projects/${projectId}/revisions`).set(bearer(owner)).send({ prompt: 'Tambahkan diskon pelanggan' });

    expect(res.status).toBe(201);
    const job = await prisma.job.findUniqueOrThrow({ where: { id: res.body.data.jobId } });
    expect(job.specId).toBe(specs.v1);
    expect(job.specId).not.toBe(specs.failed);
    await prisma.project.update({ where: { id: projectId }, data: { status: 'ready' } });
  });

  it('numbers a revision spec after the newest one that exists, never reusing a number', async () => {
    useScriptedLlm({ 'revise-spec': () => JSON.stringify({ spec: { ...shopSpecRaw, title: 'Toko Versi Tiga' }, changes: { pages: [], endpoints: [], seed: false }, summary: 'Diskon ditambahkan.' }) });
    const job = await prisma.job.create({ data: { projectId, specId: specs.v1, type: 'revision', status: 'running', model: 'x', prompt: 'Tambahkan diskon' } });
    const target = new WorkspaceFileManager(projectId, job.id);
    workspaces.push(target);

    const orchestrator = new Orchestrator(job.id, projectId) as unknown as {
      prepareRevision(previousDir: string, prompt: string, current: any, fm: WorkspaceFileManager, projectId: string, specVersion: number): Promise<{ spec: { title: string } }>;
    };
    const { parseSpec } = await import('../src/services/spec/specSchema');
    await orchestrator.prepareRevision(workspaces[0].workspaceDir, 'Tambahkan diskon', parseSpec(shopSpecRaw), target, projectId, 1);

    const numbers = (await prisma.spec.findMany({ where: { projectId }, orderBy: { version: 'asc' } })).map((s) => s.version);
    expect(numbers).toEqual([1, 2, 3, 4]);
  });

  it('refuses while a build runs, and when the version\'s files are gone', async () => {
    await prisma.project.update({ where: { id: projectId }, data: { status: 'building' } });
    expect((await restore(versions.v2)).status).toBe(409);

    await prisma.project.update({ where: { id: projectId }, data: { status: 'ready' } });
    await workspaces[1].cleanWorkspace();
    const gone = await restore(versions.v2);
    expect(gone.status).toBe(409);
    expect(gone.body.error).toContain('tidak ada di server');

    const list = await request.get(`/api/projects/${projectId}/versions`).set(bearer(owner));
    expect(list.body.data.find((v: any) => v.id === versions.v2).available).toBe(false);

    expect((await restore('bukan-versi-nyata')).status).toBe(404);
  });
});
