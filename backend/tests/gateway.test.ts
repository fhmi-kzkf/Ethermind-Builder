import http from 'http';
import { AddressInfo } from 'net';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import config from '../src/config';
import prisma, { initDatabase } from '../src/db/prisma';
import { forget, gatewayStats, touch } from '../src/services/gateway/activity';
import { createGateway, Environment } from '../src/services/gateway/gateway';
import { appUrl, parseHost, previewLabel } from '../src/services/gateway/hosts';
import { evictLeastRecentlyUsed, sweepIdle } from '../src/services/gateway/idle';
import { makeUser, TestUser } from './helpers/platform';

const saved = { ...config.apps };

/** Sends a request straight to the gateway with the Host header an app address would carry. */
function visit(gatewayPort: number, host: string, options: { method?: string; path?: string; headers?: Record<string, string>; body?: string } = {}) {
  return new Promise<{ status: number; body: string; headers: http.IncomingHttpHeaders }>((resolve, reject) => {
    const req = http.request({ host: '127.0.0.1', port: gatewayPort, method: options.method ?? 'GET', path: options.path ?? '/', headers: { host, ...options.headers } }, (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => resolve({ status: res.statusCode ?? 0, body, headers: res.headers }));
    });
    req.on('error', reject);
    req.end(options.body);
  });
}

describe('app addresses', () => {
  beforeAll(() => {
    config.apps.domain = 'apps.test';
    config.apps.scheme = 'https';
    config.apps.publicPort = '';
  });
  afterAll(() => Object.assign(config.apps, saved));

  it('builds and reads preview and live addresses', () => {
    const id = '82aca814-d78f-4f2a-877b-9cff4e508109';
    expect(previewLabel(id)).toBe('pv-82aca814-d78f');
    expect(appUrl('warung-sari')).toBe('https://warung-sari.apps.test');
    expect(parseHost('warung-sari.apps.test')).toEqual({ kind: 'live', slug: 'warung-sari' });
    expect(parseHost('WARUNG-sari.apps.test:4100')).toEqual({ kind: 'live', slug: 'warung-sari' });
    expect(parseHost('pv-82aca814-d78f.apps.test')).toEqual({ kind: 'preview', idPrefix: '82aca814-d78f' });
  });

  it('refuses anything that is not exactly one label under the apps domain', () => {
    for (const host of [undefined, '', 'apps.test', 'evil.com', 'a.b.apps.test', 'x.apps.test.evil.com', '-bad.apps.test', 'pv-zz.apps.test', 'pv-.apps.test']) expect(parseHost(host)).toBeNull();
  });

  it('shows the port when the gateway is reached directly, as in development', () => {
    config.apps.scheme = 'http';
    config.apps.publicPort = '4100';
    expect(appUrl('pv-x')).toBe('http://pv-x.apps.test:4100');
    config.apps.scheme = 'https';
    config.apps.publicPort = '';
  });

  it('has no address at all without a domain', () => {
    config.apps.domain = '';
    expect(parseHost('warung.apps.test')).toBeNull();
    config.apps.domain = 'apps.test';
  });
});

describe('gateway', () => {
  let owner: TestUser;
  let fakeApp: http.Server;
  let fakePort: number;
  let gatewayServer: http.Server;
  let gatewayPort: number;
  let wake: ReturnType<typeof vi.fn>;
  const created: string[] = [];

  const newProject = async (extra: { slug?: string; liveJobId?: string } = {}) => {
    const project = await prisma.project.create({ data: { userId: owner.id, name: 'Gerbang', status: 'ready', conversation: { create: {} }, ...extra } });
    created.push(project.id);
    return project;
  };
  const run = (projectId: string, environment: 'preview' | 'production', port = fakePort) =>
    prisma.deployment.create({ data: { projectId, environment, url: 'x', port, status: 'running' } });

  beforeAll(async () => {
    await initDatabase();
    owner = await makeUser('client');
    config.apps.domain = 'apps.test';
    config.apps.scheme = 'https';
    config.apps.publicPort = '';

    fakeApp = http.createServer((req, res) => {
      let body = '';
      req.on('data', (c) => (body += c));
      req.on('end', () => {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ method: req.method, path: req.url, host: req.headers.host, xff: req.headers['x-forwarded-for'], proto: req.headers['x-forwarded-proto'], body }));
      });
    });
    await new Promise<void>((resolve) => fakeApp.listen(0, '127.0.0.1', resolve));
    fakePort = (fakeApp.address() as AddressInfo).port;
  });

  beforeEach(async () => {
    config.apps.rateLimitPerMinute = 1000;
    config.apps.wakeTimeoutMs = 2000;
    wake = vi.fn(async (_projectId: string, _environment: Environment) => undefined);
    gatewayServer = http.createServer(createGateway({ wake: (p, e) => wake(p, e) }));
    await new Promise<void>((resolve) => gatewayServer.listen(0, '127.0.0.1', resolve));
    gatewayPort = (gatewayServer.address() as AddressInfo).port;
  });

  afterEach(async () => {
    await new Promise((resolve) => gatewayServer.close(resolve));
  });

  afterAll(async () => {
    Object.assign(config.apps, saved);
    fakeApp.close();
    await prisma.project.deleteMany({ where: { id: { in: created } } });
  });

  it('does not know addresses outside the apps domain', async () => {
    expect((await visit(gatewayPort, 'localhost:4100')).status).toBe(404);
    expect((await visit(gatewayPort, 'evil.example.com')).status).toBe(404);
  });

  it('passes a preview request to the running app, with the visitor and the public host forwarded', async () => {
    const project = await newProject();
    await run(project.id, 'preview');
    const res = await visit(gatewayPort, `${previewLabel(project.id)}.apps.test`, { path: '/api/hello?x=1', headers: { 'x-forwarded-for': '203.0.113.7' } });
    expect(res.status).toBe(200);
    expect(JSON.parse(res.body)).toMatchObject({ method: 'GET', path: '/api/hello?x=1', host: `${previewLabel(project.id)}.apps.test`, xff: '203.0.113.7', proto: 'https' });
    expect(wake).not.toHaveBeenCalled();
  });

  it('passes a request body through unchanged', async () => {
    const project = await newProject();
    await run(project.id, 'preview');
    const res = await visit(gatewayPort, `${previewLabel(project.id)}.apps.test`, { method: 'POST', path: '/api/items', headers: { 'content-type': 'application/json' }, body: '{"nama":"kopi"}' });
    expect(JSON.parse(res.body)).toMatchObject({ method: 'POST', body: '{"nama":"kopi"}' });
  });

  it('serves a published live app by its name', async () => {
    const project = await newProject({ slug: 'warung-sari', liveJobId: 'job-1' });
    await run(project.id, 'production');
    const res = await visit(gatewayPort, 'warung-sari.apps.test');
    expect(res.status).toBe(200);
    expect(JSON.parse(res.body).host).toBe('warung-sari.apps.test');
  });

  it('answers 404 for a name nobody has, and for a name that is reserved but not published', async () => {
    await newProject({ slug: 'belum-terbit' });
    const missing = await visit(gatewayPort, 'tidak-ada.apps.test');
    expect(missing.status).toBe(404);
    expect(missing.body).toContain('tidak ditemukan');
    const unpublished = await visit(gatewayPort, 'belum-terbit.apps.test');
    expect(unpublished.status).toBe(404);
    expect(unpublished.body).toContain('belum diterbitkan');
    expect(wake).not.toHaveBeenCalled();
  });

  it('wakes a sleeping app once, however many visitors arrive together, and then serves them', async () => {
    const project = await newProject();
    wake.mockImplementation(async (projectId: string) => {
      await new Promise((r) => setTimeout(r, 80));
      await run(projectId, 'preview');
    });
    const host = `${previewLabel(project.id)}.apps.test`;
    const results = await Promise.all([visit(gatewayPort, host), visit(gatewayPort, host), visit(gatewayPort, host)]);
    expect(results.map((r) => r.status)).toEqual([200, 200, 200]);
    expect(wake).toHaveBeenCalledTimes(1);
    expect(wake).toHaveBeenCalledWith(project.id, 'preview');
  });

  it('wakes a live app as a production wake', async () => {
    const project = await newProject({ slug: 'tidur-sari', liveJobId: 'job-2' });
    wake.mockImplementation(async (projectId: string) => void (await run(projectId, 'production')));
    expect((await visit(gatewayPort, 'tidur-sari.apps.test')).status).toBe(200);
    expect(wake).toHaveBeenCalledWith(project.id, 'production');
  });

  it('shows a self-refreshing waiting page when the app is slow to wake', async () => {
    const project = await newProject();
    config.apps.wakeTimeoutMs = 40;
    wake.mockImplementation(() => new Promise((r) => setTimeout(r, 400)));
    const res = await visit(gatewayPort, `${previewLabel(project.id)}.apps.test`);
    expect(res.status).toBe(503);
    expect(res.headers['retry-after']).toBe('3');
    expect(res.body).toContain('http-equiv="refresh"');
  });

  it('says so plainly when the app cannot start', async () => {
    const project = await newProject();
    wake.mockRejectedValue(new Error('boom'));
    const before = gatewayStats.wakeFailures;
    const res = await visit(gatewayPort, `${previewLabel(project.id)}.apps.test`);
    expect(res.status).toBe(503);
    expect(res.body).toContain('gagal menyala');
    expect(res.body).not.toContain('boom');
    expect(gatewayStats.wakeFailures).toBe(before + 1);
  });

  it('treats a recorded port that no longer answers as asleep: records it, then wakes the app', async () => {
    const project = await newProject();
    const dead = await run(project.id, 'preview', 1); // nothing listens on port 1
    wake.mockImplementation(async (projectId: string) => void (await run(projectId, 'preview')));
    const res = await visit(gatewayPort, `${previewLabel(project.id)}.apps.test`);
    expect(res.status).toBe(200);
    expect((await prisma.deployment.findUnique({ where: { id: dead.id } }))?.status).toBe('stopped');
  });

  it('does not replay a POST against a dead app: it asks the visitor to retry', async () => {
    const project = await newProject();
    const dead = await run(project.id, 'preview', 1);
    const res = await visit(gatewayPort, `${previewLabel(project.id)}.apps.test`, { method: 'POST', body: '{}' });
    expect(res.status).toBe(503);
    expect((await prisma.deployment.findUnique({ where: { id: dead.id } }))?.status).toBe('stopped');
  });

  it('limits one visitor per app and leaves others alone', async () => {
    const project = await newProject();
    await run(project.id, 'preview');
    config.apps.rateLimitPerMinute = 10;
    const host = `${previewLabel(project.id)}.apps.test`;
    const statuses: number[] = [];
    for (let i = 0; i < 12; i++) statuses.push((await visit(gatewayPort, host, { headers: { 'x-forwarded-for': '198.51.100.9' } })).status);
    expect(statuses.slice(0, 10).every((s) => s === 200)).toBe(true);
    expect(statuses.slice(10)).toEqual([429, 429]);
    expect((await visit(gatewayPort, host, { headers: { 'x-forwarded-for': '198.51.100.10' } })).status).toBe(200);
  });
});

describe('putting quiet apps to sleep', () => {
  let owner: TestUser;
  const created: string[] = [];
  const hours = (n: number) => new Date(Date.now() - n * 3600_000);

  beforeAll(async () => {
    await initDatabase();
    owner = await makeUser('client');
    config.apps.previewIdleMs = 20 * 60_000;
    config.apps.liveIdleMs = 120 * 60_000;
  });
  afterAll(async () => {
    Object.assign(config.apps, saved);
    await prisma.project.deleteMany({ where: { id: { in: created } } });
  });

  const deploy = async (environment: 'preview' | 'production', createdAt: Date) => {
    const project = await prisma.project.create({ data: { userId: owner.id, name: 'Tidur', conversation: { create: {} } } });
    created.push(project.id);
    const deployment = await prisma.deployment.create({ data: { projectId: project.id, environment, url: 'x', port: 5999, status: 'running', createdAt } });
    return { project, deployment };
  };
  const status = async (id: string) => (await prisma.deployment.findUnique({ where: { id } }))?.status;

  it('stops a preview after its idle time, and a live app only after its longer one', async () => {
    const preview = await deploy('preview', hours(1));
    const live = await deploy('production', hours(1));
    const stopped: string[] = [];
    await sweepIdle({ onStopped: (id) => stopped.push(id) });
    expect(await status(preview.deployment.id)).toBe('stopped');
    expect(await status(live.deployment.id)).toBe('running');
    expect(stopped).toContain(preview.project.id);

    await sweepIdle({ now: Date.now() + 3 * 3600_000 });
    expect(await status(live.deployment.id)).toBe('stopped');
  });

  it('keeps an app that was visited recently, and one that has only just started', async () => {
    const visited = await deploy('preview', hours(3));
    touch(visited.deployment.id);
    const fresh = await deploy('preview', new Date(Date.now() - 30_000));
    await sweepIdle({ now: Date.now() + 10 * 60_000 });
    expect(await status(visited.deployment.id)).toBe('running');
    expect(await status(fresh.deployment.id)).toBe('running');
    forget(visited.deployment.id);
  });

  it('frees the least recently visited preview first, and a live app only when no preview is left', async () => {
    await prisma.deployment.updateMany({ where: { status: 'running' }, data: { status: 'stopped' } });
    const live = await deploy('production', hours(5));
    const newer = await deploy('preview', hours(2));
    const older = await deploy('preview', hours(4));
    touch(newer.deployment.id);

    expect(await evictLeastRecentlyUsed()).toBe(true);
    expect(await status(older.deployment.id)).toBe('stopped');
    expect(await status(newer.deployment.id)).toBe('running');
    expect(await status(live.deployment.id)).toBe('running');

    await evictLeastRecentlyUsed();
    expect(await status(newer.deployment.id)).toBe('stopped');
    await evictLeastRecentlyUsed();
    expect(await status(live.deployment.id)).toBe('stopped');
    expect(await evictLeastRecentlyUsed()).toBe(false);
  });
});
