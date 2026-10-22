import fs from 'fs';
import http from 'http';
import path from 'path';
import supertest from 'supertest';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import app from '../src/app';
import config from '../src/config';
import prisma, { initDatabase } from '../src/db/prisma';
import liveManager, { LiveError, LiveManager } from '../src/services/deployment/liveManager';
import { PreviewManager } from '../src/services/deployment/previewManager';
import { suggestSlug, validateSlug } from '../src/services/gateway/hosts';
import { Sandbox } from '../src/services/sandbox/sandbox';
import { shopSpecRaw } from './fixtures/specs';
import { makeStaticQris } from './helpers/qris';
import { bearer, makeUser, TestUser } from './helpers/platform';

const request = supertest(app);
const saved = { apps: { ...config.apps }, quotas: { ...config.quotas }, qris: config.payments.qrisStatic, liveDataDir: config.storage.liveDataDir };

describe('live names', () => {
  it('accepts plain lowercase names', () => {
    expect(validateSlug('warung-sari')).toBe('warung-sari');
    expect(validateSlug('  Toko99  ')).toBe('toko99');
  });

  it.each([
    ['ab', 'terlalu pendek'],
    ['a'.repeat(31), 'terlalu panjang'],
    ['-warung', 'diawali tanda hubung'],
    ['warung-', 'diakhiri tanda hubung'],
    ['war--ung', 'dua tanda hubung'],
    ['warung_sari', 'garis bawah'],
    ['warung sari', 'spasi'],
    ['wärung', 'bukan ASCII'],
    ['www', 'dipakai sistem'],
    ['admin', 'dipakai sistem'],
    ['pv-82aca814-d78f', 'meniru alamat pratinjau'],
  ])('refuses %s (%s)', (name) => {
    expect(() => validateSlug(name)).toThrow();
  });

  it('suggests a readable name from a project name', () => {
    expect(suggestSlug('Warung Bu Sari!')).toBe('warung-bu-sari');
    expect(suggestSlug('Kasir Toko Kelontong Maju Jaya Sentosa Abadi')).toHaveLength(suggestSlug('Kasir Toko Kelontong Maju Jaya Sentosa Abadi').length);
    expect(suggestSlug('Kasir Toko Kelontong Maju Jaya Sentosa Abadi').length).toBeLessThanOrEqual(30);
    expect(suggestSlug('Café Ñandú')).toBe('cafe-nandu');
    expect(() => validateSlug(suggestSlug('!!'))).not.toThrow();
    expect(() => validateSlug(suggestSlug('Ab'))).not.toThrow();
  });
});

describe('live manager', () => {
  let owner: TestUser;
  let projectId: string;
  let jobId: string;
  const runs: Array<{ command: string; env: Record<string, string>; dataDir?: string }> = [];
  const servers: http.Server[] = [];
  const stopped: string[] = [];

  /** A sandbox that records commands and starts a tiny server that answers /api/health on the port it is given. */
  const fakeSandbox = {
    runtime: 'local' as const,
    ensureReady: async () => undefined,
    run: vi.fn(async (command: string, options: { env?: Record<string, string>; dataDir?: string }) => {
      runs.push({ command, env: options.env ?? {}, dataDir: options.dataDir });
      return { command, exitCode: 0, stdout: '', stderr: '', durationMs: 1, success: true };
    }),
    startApp: vi.fn(async (options: { port: number; name: string }) => {
      const server = http.createServer((_req, res) => res.end('{"status":"ok"}'));
      // Listens on every interface, like a real app, so the platform's port check sees it as taken.
      await new Promise<void>((resolve) => server.listen(options.port, resolve));
      servers.push(server);
      return { runtime: 'process' as const, port: options.port, pid: undefined, stop: async () => void stopped.push(options.name) };
    }),
  } as unknown as Sandbox;

  const live = new LiveManager(fakeSandbox, new PreviewManager(fakeSandbox));

  beforeAll(async () => {
    await initDatabase();
    owner = await makeUser('client');
    config.apps.domain = 'apps.test';
    config.apps.scheme = 'https';
    config.apps.publicPort = '';

    const project = await prisma.project.create({ data: { userId: owner.id, name: 'Toko Live', status: 'ready', conversation: { create: {} } } });
    projectId = project.id;
    const spec = await prisma.spec.create({ data: { projectId, version: 1, content: JSON.stringify(shopSpecRaw), approvedAt: new Date() } });
    const job = await prisma.job.create({ data: { projectId, specId: spec.id, status: 'completed', model: 'groq:openai/gpt-oss-120b', finishedAt: new Date() } });
    jobId = job.id;
    const dir = path.resolve(config.storage.workspacesDir, `${projectId}_${jobId}`);
    fs.mkdirSync(path.join(dir, 'node_modules'), { recursive: true });
    fs.writeFileSync(path.join(dir, 'package.json'), '{"name":"x"}');
    await prisma.project.update({ where: { id: projectId }, data: { repoPath: dir } });
  });

  afterAll(async () => {
    Object.assign(config.apps, saved.apps);
    await Promise.all(servers.map((s) => new Promise((r) => s.close(r))));
    await live.purge(projectId);
    await prisma.project.deleteMany({ where: { id: projectId } });
  });

  it('first publish creates the database with only the administrator, outside the version folder', async () => {
    const result = await live.publish(projectId, { slug: 'Toko-Live' });
    expect(result.url).toBe('https://toko-live.apps.test');

    const setup = runs.find((r) => r.command === 'npm run db:setup');
    expect(setup).toBeTruthy();
    expect(setup?.env.SEED_DEMO_DATA).toBe('false');
    expect(setup?.env.NODE_ENV).toBe('production');
    expect(setup?.env.DATABASE_URL).toBe(`file:${path.join(live.dataDir(projectId), 'app.db').replace(/\\/g, '/')}`);
    expect(setup?.env.DATABASE_URL).not.toContain(projectId + '_');
    expect(setup?.env.FRAME_ANCESTORS).toBeUndefined();
    expect(setup?.env.TRUST_PROXY).toBe('true');
    expect(setup?.env.COOKIE_SECURE).toBe('true');
    expect(setup?.env.SEED_ADMIN_PASSWORD?.length).toBeGreaterThanOrEqual(10);
    expect(setup?.dataDir).toBe(live.dataDir(projectId));

    const project = await prisma.project.findUnique({ where: { id: projectId } });
    expect(project).toMatchObject({ slug: 'toko-live', liveJobId: jobId });
    const deployment = await prisma.deployment.findFirst({ where: { projectId, environment: 'production', status: 'running' } });
    expect(deployment?.url).toBe('https://toko-live.apps.test');
  });

  it('keeps the live data and the admin account when another version is published', async () => {
    const first = await live.readSecrets(projectId);
    expect(first).toBeTruthy();
    fs.writeFileSync(path.join(live.dataDir(projectId), 'app.db'), 'pretend database');
    runs.length = 0;

    await live.publish(projectId, { slug: 'toko-live' });
    expect(runs.some((r) => r.command === 'npm run db:setup')).toBe(false);
    expect(runs.find((r) => r.command === 'npm run db:push')?.env.SEED_DEMO_DATA).toBe('false');
    expect(fs.readFileSync(path.join(live.dataDir(projectId), 'app.db'), 'utf8')).toBe('pretend database');
    expect(await live.readSecrets(projectId)).toEqual(first);
    // The earlier live process was stopped and only one production deployment runs.
    expect(await prisma.deployment.count({ where: { projectId, environment: 'production', status: 'running' } })).toBe(1);
  });

  it('refuses a version that cannot be installed over existing data, and touches nothing', async () => {
    fakeSandbox.run = vi.fn(async (command: string) => ({ command, exitCode: 1, stdout: '', stderr: 'The schema change would drop columns', durationMs: 1, success: false })) as never;
    const before = fs.readFileSync(path.join(live.dataDir(projectId), 'app.db'), 'utf8');
    await expect(live.publish(projectId, { slug: 'toko-live' })).rejects.toThrow(/data yang sudah ada/);
    expect(fs.readFileSync(path.join(live.dataDir(projectId), 'app.db'), 'utf8')).toBe(before);
    fakeSandbox.run = vi.fn(async (command: string) => ({ command, exitCode: 0, stdout: '', stderr: '', durationMs: 1, success: true })) as never;
  });

  it('starts the published version again for a visitor after it slept', async () => {
    await live.unpublish(projectId).catch(() => undefined);
    await prisma.project.update({ where: { id: projectId }, data: { slug: 'toko-live', liveJobId: jobId } });
    await prisma.deployment.updateMany({ where: { projectId }, data: { status: 'stopped' } });
    await Promise.all([live.start(projectId), live.start(projectId)]);
    expect(await prisma.deployment.count({ where: { projectId, environment: 'production', status: 'running' } })).toBe(1);
  });

  it('rejects names that are bad or taken by someone else', async () => {
    const other = await prisma.project.create({ data: { userId: owner.id, name: 'Lain', slug: 'sudah-ada', conversation: { create: {} } } });
    await expect(live.publish(projectId, { slug: 'sudah-ada' })).rejects.toMatchObject({ status: 409 });
    await expect(live.publish(projectId, { slug: 'www' })).rejects.toMatchObject({ status: 400 });
    await expect(live.publish(projectId, { slug: 'x' })).rejects.toBeInstanceOf(LiveError);
    await prisma.project.delete({ where: { id: other.id } });
  });

  it('takes the app offline but keeps the name and the data; purge removes the data', async () => {
    await live.unpublish(projectId);
    expect(await prisma.deployment.count({ where: { projectId, environment: 'production', status: 'running' } })).toBe(0);
    expect(await prisma.project.findUnique({ where: { id: projectId } })).toMatchObject({ slug: 'toko-live', liveJobId: null });
    expect(fs.existsSync(path.join(live.dataDir(projectId), 'app.db'))).toBe(true);
    await live.purge(projectId);
    expect(fs.existsSync(live.dataDir(projectId))).toBe(false);
  });

  it('does not stop the live app when the preview is stopped or rebuilt', async () => {
    await live.publish(projectId, { slug: 'toko-live' });
    const { default: previewManager } = await import('../src/services/deployment/previewManager');
    await previewManager.stopAllForProject(projectId);
    expect(await prisma.deployment.count({ where: { projectId, environment: 'production', status: 'running' } })).toBe(1);
  });
});

describe('live API', () => {
  let owner: TestUser;
  let stranger: TestUser;
  let operator: TestUser;
  const created: string[] = [];
  const publish = vi.spyOn(liveManager, 'publish');
  const unpublish = vi.spyOn(liveManager, 'unpublish');

  const finished = async (who: TestUser, model: string, status = 'ready') => {
    const project = await prisma.project.create({ data: { userId: who.id, name: 'Toko API', status, conversation: { create: {} } } });
    created.push(project.id);
    await prisma.job.create({ data: { projectId: project.id, status: 'completed', model, finishedAt: new Date() } });
    return project.id;
  };

  beforeAll(async () => {
    await initDatabase();
    [owner, stranger, operator] = await Promise.all([makeUser('client'), makeUser('client'), makeUser('operator')]);
    config.apps.domain = 'apps.test';
    config.apps.scheme = 'https';
    config.apps.publicPort = '';
    config.payments.qrisStatic = '';
    publish.mockImplementation(async (projectId, options) => {
      const slug = options.slug.trim().toLowerCase();
      await prisma.project.update({ where: { id: projectId }, data: { slug, liveJobId: 'job-x', livePublishedAt: new Date() } });
      return { url: `https://${slug}.apps.test`, jobId: 'job-x' };
    });
    unpublish.mockImplementation(async (projectId) => void (await prisma.project.update({ where: { id: projectId }, data: { liveJobId: null } })));
  });

  afterAll(async () => {
    publish.mockRestore();
    unpublish.mockRestore();
    Object.assign(config.apps, saved.apps);
    Object.assign(config.quotas, saved.quotas);
    config.payments.qrisStatic = saved.qris;
    await prisma.project.deleteMany({ where: { id: { in: created } } });
  });

  const post = (id: string, who: TestUser, body: object = {}) => request.post(`/api/projects/${id}/live`).set(bearer(who)).send(body);

  it('reports state with a free suggested name, without leaking to strangers', async () => {
    const id = await finished(owner, 'groq:openai/gpt-oss-20b');
    const state = (await request.get(`/api/projects/${id}/live`).set(bearer(owner)).expect(200)).body.data;
    expect(state).toMatchObject({ enabled: true, allowed: true, published: false, url: null, suggestedSlug: 'toko-api' });
    await request.get(`/api/projects/${id}/live`).set(bearer(stranger)).expect(404);
    await post(id, stranger, { slug: 'curi-curi' }).expect(404);
  });

  it('publishes under the chosen name and shows the address', async () => {
    const id = await finished(owner, 'groq:openai/gpt-oss-20b');
    const res = await post(id, owner, { slug: 'Toko-Saya-1' }).expect(200);
    expect(res.body.data).toMatchObject({ published: true, slug: 'toko-saya-1', url: 'https://toko-saya-1.apps.test' });
    expect(publish).toHaveBeenLastCalledWith(id, { slug: 'Toko-Saya-1', jobId: undefined });
    const off = (await request.delete(`/api/projects/${id}/live`).set(bearer(owner)).expect(200)).body.data;
    expect(off).toMatchObject({ published: false, slug: 'toko-saya-1', url: null });
  });

  it('is off when the server has no apps domain, and before the app is built', async () => {
    const id = await finished(owner, 'groq:openai/gpt-oss-20b');
    config.apps.domain = '';
    expect((await post(id, owner, { slug: 'tanpa-domain' })).status).toBe(409);
    expect((await request.get(`/api/projects/${id}/live`).set(bearer(owner))).body.data).toMatchObject({ enabled: false, allowed: false });
    config.apps.domain = 'apps.test';

    const draft = await finished(owner, 'groq:openai/gpt-oss-20b', 'building');
    expect((await post(draft, owner, { slug: 'belum-jadi' })).status).toBe(409);
  });

  it('limits how many live links one account holds, but not operators', async () => {
    config.quotas.maxLiveAppsPerUser = 2;
    const heavy = await makeUser('client');
    const ids = [await finished(heavy, 'groq:openai/gpt-oss-20b'), await finished(heavy, 'groq:openai/gpt-oss-20b'), await finished(heavy, 'groq:openai/gpt-oss-20b')];
    await post(ids[0], heavy, { slug: 'kuota-satu' }).expect(200);
    await post(ids[1], heavy, { slug: 'kuota-dua' }).expect(200);
    const third = await post(ids[2], heavy, { slug: 'kuota-tiga' });
    expect(third.status).toBe(403);
    expect(third.body.error).toContain('2 link live');
    // Updating one that is already published is not a new link.
    await post(ids[0], heavy, { slug: 'kuota-satu-baru' }).expect(200);
    // Unpublishing frees a place.
    await request.delete(`/api/projects/${ids[1]}/live`).set(bearer(heavy)).expect(200);
    await post(ids[2], heavy, { slug: 'kuota-tiga' }).expect(200);
    config.quotas.maxLiveAppsPerUser = saved.quotas.maxLiveAppsPerUser;
  });

  it('rejects an invalid name before touching anything', async () => {
    const id = await finished(owner, 'groq:openai/gpt-oss-20b');
    publish.mockClear();
    publish.mockImplementationOnce(async () => {
      throw new LiveError('Nama alamat harus 3 sampai 30 karakter.', 400);
    });
    const res = await post(id, owner, { slug: 'x' });
    expect(res.status).toBe(400);
    expect(res.body.error).toContain('3 sampai 30');
  });

  describe('with QRIS payments on', () => {
    beforeAll(() => {
      config.payments.qrisStatic = makeStaticQris('Toko Uji');
    });
    afterAll(() => {
      config.payments.qrisStatic = '';
    });

    it('keeps live links for the Pro package and says why', async () => {
      const basic = await finished(owner, 'groq:openai/gpt-oss-20b');
      const res = await post(basic, owner, { slug: 'basic-saja' });
      expect(res.status).toBe(402);
      expect(res.body.error).toContain('paket Pro');
      expect((await request.get(`/api/projects/${basic}/live`).set(bearer(owner))).body.data).toMatchObject({ allowed: false });
    });

    it('opens for Pro only after the payment is confirmed', async () => {
      const pro = await finished(owner, 'groq:openai/gpt-oss-120b');
      const before = await post(pro, owner, { slug: 'pro-belum-bayar' });
      expect(before.status).toBe(402);
      expect(before.body.error).toContain('pembayaran');

      const orderId = (await request.post(`/api/projects/${pro}/payment`).set(bearer(owner)).expect(201)).body.data.order.id;
      await request.post(`/api/admin/payments/${orderId}/confirm`).set(bearer(operator)).expect(200);
      await post(pro, owner, { slug: 'pro-sudah-bayar' }).expect(200);
    });

    it('lets operators publish without paying', async () => {
      const basic = await finished(owner, 'groq:openai/gpt-oss-20b');
      await post(basic, operator, { slug: 'dibantu-operator' }).expect(200);
    });
  });
});
