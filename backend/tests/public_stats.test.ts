import supertest from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import app from '../src/app';
import config from '../src/config';
import prisma, { initDatabase } from '../src/db/prisma';
import { makeUser, TestUser } from './helpers/platform';

const request = supertest(app);

describe('public stats for the landing page', () => {
  let owner: TestUser;
  const originalMin = config.server.publicStatsMin;
  const created: string[] = [];

  const stats = async () => (await request.get('/api/public/stats').expect(200)).body as { show: boolean; appsBuilt: number };
  const addProject = async (status: string) => {
    const project = await prisma.project.create({ data: { userId: owner.id, name: `Stats ${status}`, status, conversation: { create: {} } } });
    created.push(project.id);
  };

  beforeAll(async () => {
    await initDatabase();
    owner = await makeUser('client');
  });

  afterAll(async () => {
    config.server.publicStatsMin = originalMin;
    await prisma.project.deleteMany({ where: { id: { in: created } } });
  });

  it('needs no login and exposes only the flag and the count', async () => {
    const body = await stats();
    expect(Object.keys(body).sort()).toEqual(['appsBuilt', 'show']);
  });

  it('counts only finished apps, not drafts, failures, or builds in progress', async () => {
    const before = (await stats()).appsBuilt;
    for (const status of ['draft', 'planning', 'building', 'failed', 'needs_review']) await addProject(status);
    expect((await stats()).appsBuilt).toBe(before);

    await addProject('ready');
    await addProject('live');
    expect((await stats()).appsBuilt).toBe(before + 2);
  });

  it('hides the number below the threshold and shows it once reached', async () => {
    const { appsBuilt } = await stats();
    config.server.publicStatsMin = appsBuilt + 1;
    expect((await stats()).show).toBe(false);
    config.server.publicStatsMin = appsBuilt;
    expect((await stats()).show).toBe(true);
  });
});
