import supertest from 'supertest';
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import app from '../src/app';
import prisma, { initDatabase } from '../src/db/prisma';
import { WorkspaceFileManager } from '../src/services/sandbox/fileManager';
import jobQueue from '../src/services/queue/jobQueue';
import { bearer, makeProjectWithJob, makeUser, TestUser } from './helpers/platform';

const request = supertest(app);

/** A job whose agents finished (checkpoint 5) and whose code is on disk, the state after "needs_review". */
async function withWrittenCode(owner: TestUser, status: string) {
  const made = await makeProjectWithJob(owner, status);
  await prisma.agentSession.create({ data: { jobId: made.job.id, agent: 'orchestrator', state: '{}', checkpoint: 5 } });
  const fm = new WorkspaceFileManager(made.project.id, made.job.id);
  await fm.initWorkspace();
  await fm.writeFile('package.json', '{}');
  return { ...made, fm };
}

describe('continuing a build that stopped for review', () => {
  let alice: TestUser;
  let bob: TestUser;
  const addJob = vi.spyOn(jobQueue, 'addJob').mockResolvedValue();

  beforeAll(async () => {
    await initDatabase();
    [alice, bob] = await Promise.all([makeUser('client'), makeUser('client')]);
  });

  beforeEach(() => addJob.mockClear());
  afterAll(() => addJob.mockRestore());

  it('puts the same job back in the queue, keeps its workspace, and grants extra steps and tokens', async () => {
    const { job, project, fm } = await withWrittenCode(alice, 'needs_review');
    await prisma.job.update({ where: { id: job.id }, data: { errorMessage: 'lint gagal', finishedAt: new Date() } });
    const before = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });

    const res = await request.post(`/api/jobs/${job.id}/resume`).set(bearer(alice));

    expect(res.status).toBe(200);
    const after = await prisma.job.findUniqueOrThrow({ where: { id: job.id } });
    expect(res.body.data.id).toBe(job.id);
    expect(after.status).toBe('pending');
    expect(after.errorMessage).toBeNull();
    expect(after.finishedAt).toBeNull();
    expect(after.maxSteps).toBeGreaterThan(before.maxSteps);
    expect(after.tokenBudget).toBeGreaterThan(before.tokenBudget);
    expect((await prisma.project.findUniqueOrThrow({ where: { id: project.id } })).status).toBe('building');
    expect(addJob).toHaveBeenCalledWith(job.id, project.id, before.model);
    expect(fm.fileExists('package.json')).toBe(true);
    await prisma.job.update({ where: { id: job.id }, data: { status: 'needs_review' } });
  });

  it('refuses when no code was written yet, and tells the client to rebuild instead', async () => {
    const { job } = await makeProjectWithJob(alice, 'needs_review');

    const res = await request.post(`/api/jobs/${job.id}/resume`).set(bearer(alice));

    expect(res.status).toBe(409);
    expect(res.body.error).toContain('bangun ulang');
    expect(addJob).not.toHaveBeenCalled();
  });

  it('only continues jobs that stopped, never finished or running ones', async () => {
    for (const status of ['completed', 'running', 'pending', 'cancelled']) {
      const { job } = await withWrittenCode(alice, status);
      expect((await request.post(`/api/jobs/${job.id}/resume`).set(bearer(alice))).status, status).toBe(409);
    }
    expect(addJob).not.toHaveBeenCalled();
  });

  it('refuses while another job of the same project is running', async () => {
    const { job, project } = await withWrittenCode(alice, 'needs_review');
    const other = await prisma.job.create({ data: { projectId: project.id, specId: job.specId, status: 'running' } });

    expect((await request.post(`/api/jobs/${job.id}/resume`).set(bearer(alice))).status).toBe(409);

    await prisma.job.update({ where: { id: other.id }, data: { status: 'failed' } });
  });

  it('keeps other clients out', async () => {
    const { job } = await withWrittenCode(alice, 'needs_review');

    expect((await request.post(`/api/jobs/${job.id}/resume`).set(bearer(bob))).status).toBe(404);
    expect((await request.post(`/api/jobs/${job.id}/resume`)).status).toBe(401);
  });

  it('after a server restart, continues a running job whose code exists and fails one that has none', async () => {
    const withCode = await withWrittenCode(alice, 'running');
    const without = await makeProjectWithJob(alice, 'running');

    const result = await jobQueue.recover();

    expect(result.interrupted).toBeGreaterThanOrEqual(1);
    expect((await prisma.job.findUniqueOrThrow({ where: { id: withCode.job.id } })).status).toBe('pending');
    expect(addJob).toHaveBeenCalledWith(withCode.job.id, withCode.project.id, expect.anything());
    const failed = await prisma.job.findUniqueOrThrow({ where: { id: without.job.id } });
    expect(failed.status).toBe('failed');
    expect(failed.errorMessage).toContain('Server dimulai ulang');
  });
});
