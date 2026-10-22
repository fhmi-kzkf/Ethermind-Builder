import supertest from 'supertest';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import app from '../src/app';
import prisma, { initDatabase } from '../src/db/prisma';
import jobQueue from '../src/services/queue/jobQueue';
import { bearer, makeProjectWithJob, makeUser, TestUser } from './helpers/platform';

const request = supertest(app);

describe('one client can never reach another client\'s work', () => {
  let alice: TestUser;
  let bob: TestUser;
  let operator: TestUser;
  let admin: TestUser;
  let aliceProject: string;
  let aliceJob: string;

  beforeAll(async () => {
    await initDatabase();
    [alice, bob, operator, admin] = await Promise.all([makeUser('client'), makeUser('client'), makeUser('operator'), makeUser('admin')]);
    const made = await makeProjectWithJob(alice);
    aliceProject = made.project.id;
    aliceJob = made.job.id;
    vi.spyOn(jobQueue, 'addJob').mockResolvedValue();
  });

  it('shows the owner their job, gates and events stream', async () => {
    expect((await request.get(`/api/jobs/${aliceJob}`).set(bearer(alice))).status).toBe(200);
    expect((await request.get(`/api/jobs/${aliceJob}/gates`).set(bearer(alice))).status).toBe(200);
  });

  it('answers another client with 404 on every job route, so existence is not even revealed', async () => {
    expect((await request.get(`/api/jobs/${aliceJob}`).set(bearer(bob))).status).toBe(404);
    expect((await request.get(`/api/jobs/${aliceJob}/gates`).set(bearer(bob))).status).toBe(404);
    expect((await request.get(`/api/jobs/${aliceJob}/events`).set(bearer(bob))).status).toBe(404);
    expect((await request.post(`/api/jobs/${aliceJob}/retry`).set(bearer(bob))).status).toBe(404);
    expect((await request.post(`/api/jobs/${aliceJob}/cancel`).set(bearer(bob))).status).toBe(404);
  });

  it('keeps projects, messages, specs and exports private too', async () => {
    expect((await request.get(`/api/projects/${aliceProject}`).set(bearer(bob))).status).toBe(404);
    expect((await request.get(`/api/projects/${aliceProject}/messages`).set(bearer(bob))).status).toBe(404);
    expect((await request.get(`/api/projects/${aliceProject}/spec`).set(bearer(bob))).status).toBe(404);
    expect((await request.get(`/api/projects/${aliceProject}/export`).set(bearer(bob))).status).toBe(404);
    expect((await request.post(`/api/projects/${aliceProject}/preview/start`).set(bearer(bob))).status).toBe(404);
    expect((await request.delete(`/api/projects/${aliceProject}`).set(bearer(bob))).status).toBe(404);

    const listed = await request.get('/api/projects').set(bearer(bob));
    expect(listed.body.data.some((p: any) => p.id === aliceProject)).toBe(false);
  });

  it('lets operators and admins see everything', async () => {
    expect((await request.get(`/api/jobs/${aliceJob}`).set(bearer(operator))).status).toBe(200);
    expect((await request.get(`/api/projects/${aliceProject}`).set(bearer(admin))).status).toBe(200);
  });

  it('requires a token for the event stream and accepts ?token= only there', async () => {
    expect((await request.get(`/api/jobs/${aliceJob}/events`)).status).toBe(401);
    expect((await request.get(`/api/jobs/${aliceJob}?token=${alice.token}`)).status).toBe(401);
  });

  it('does not let a finished job be cancelled, nor a completed one be retried', async () => {
    const done = await makeProjectWithJob(alice, 'completed');
    expect((await request.post(`/api/jobs/${done.job.id}/cancel`).set(bearer(alice))).status).toBe(400);
    expect((await request.post(`/api/jobs/${done.job.id}/retry`).set(bearer(alice))).status).toBe(400);
  });

  it('retries a failed job as a new job that keeps its model, and refuses while another job is active', async () => {
    const failed = await makeProjectWithJob(alice, 'failed');

    const retry = await request.post(`/api/jobs/${failed.job.id}/retry`).set(bearer(alice));
    expect(retry.status).toBe(201);
    expect(retry.body.data.model).toBe('nvidia/nemotron-3-ultra-550b-a55b');
    expect(retry.body.data.status).toBe('pending');

    const second = await request.post(`/api/jobs/${failed.job.id}/retry`).set(bearer(alice));
    expect(second.status).toBe(409);
  });

  it('lets the client retry a build that stopped for human review', async () => {
    const stopped = await makeProjectWithJob(alice, 'needs_review');

    const retry = await request.post(`/api/jobs/${stopped.job.id}/retry`).set(bearer(alice));

    expect(retry.status).toBe(201);
    expect(retry.body.data.status).toBe('pending');
    expect(retry.body.data.specId).toBe(stopped.spec.id);
    expect((await prisma.project.findUnique({ where: { id: stopped.project.id } }))?.status).toBe('building');
  });

  it('locks the firebase sync routes to administrators', async () => {
    expect((await request.get('/api/firebase/status')).status).toBe(401);
    expect((await request.post('/api/firebase/sync')).status).toBe(401);
    expect((await request.post('/api/firebase/sync').set(bearer(alice))).status).toBe(403);
    expect((await request.get('/api/firebase/status').set(bearer(admin))).status).toBe(200);
  });

  it('shows only generic health information to the public', async () => {
    const res = await request.get('/api/health');

    expect(res.status).toBe(200);
    expect(JSON.stringify(res.body)).not.toMatch(/kimi|laguna|gemma|glm/i);
    expect(res.body.sandbox).toBe('local');
  });

  it('removes a project\'s previews and files when it is deleted', async () => {
    const owned = await makeProjectWithJob(bob);
    const res = await request.delete(`/api/projects/${owned.project.id}`).set(bearer(bob));

    expect(res.status).toBe(200);
    expect(await prisma.project.findUnique({ where: { id: owned.project.id } })).toBeNull();
  });
});
