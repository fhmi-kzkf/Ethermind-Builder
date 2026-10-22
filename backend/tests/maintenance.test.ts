import fs from 'fs';
import os from 'os';
import path from 'path';
import supertest from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import app from '../src/app';
import config from '../src/config';
import prisma, { initDatabase } from '../src/db/prisma';
import { JobQueue } from '../src/services/queue/jobQueue';
import { runBackup } from '../src/services/maintenance/backup';
import { runCleanup } from '../src/services/maintenance/cleanup';
import { bearer, makeUser, TestUser } from './helpers/platform';

const request = supertest(app);
const DAY = 24 * 3600_000;
const uuid = () => crypto.randomUUID();

describe('cleanup', () => {
  let owner: TestUser;
  let root: string;
  const saved = { workspaces: config.storage.workspacesDir, exports: config.storage.exportsDir, maintenance: { ...config.maintenance } };
  const projects: string[] = [];

  const aged = (target: string, days: number) => {
    const when = new Date(Date.now() - days * DAY);
    fs.utimesSync(target, when, when);
  };
  /** A workspace folder with a node_modules and a data file, optionally backed by a job of the given status and age. */
  const workspace = async (projectId: string, jobId: string, options: { status?: string; days?: number; withJob?: boolean } = {}) => {
    const dir = path.join(config.storage.workspacesDir, `${projectId}_${jobId}`);
    fs.mkdirSync(path.join(dir, 'node_modules', 'pkg'), { recursive: true });
    fs.mkdirSync(path.join(dir, 'data'), { recursive: true });
    fs.writeFileSync(path.join(dir, 'package.json'), '{}');
    fs.writeFileSync(path.join(dir, 'data', 'app.db'), 'client data');
    if (options.withJob !== false) {
      const when = new Date(Date.now() - (options.days ?? 0) * DAY);
      await prisma.job.create({ data: { id: jobId, projectId, status: options.status ?? 'completed', createdAt: when, finishedAt: when } });
    }
    aged(dir, options.days ?? 0);
    return dir;
  };
  const newProject = async () => {
    const project = await prisma.project.create({ data: { userId: owner.id, name: 'Bersih', conversation: { create: {} } } });
    projects.push(project.id);
    return project;
  };

  beforeAll(async () => {
    await initDatabase();
    owner = await makeUser('client');
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'ethermind-clean-'));
    config.storage.workspacesDir = path.join(root, 'workspaces');
    config.storage.exportsDir = path.join(root, 'exports');
    fs.mkdirSync(config.storage.workspacesDir, { recursive: true });
    fs.mkdirSync(config.storage.exportsDir, { recursive: true });
    Object.assign(config.maintenance, { nodeModulesDays: 3, failedDays: 14, exportDays: 7 });
  });

  afterAll(async () => {
    config.storage.workspacesDir = saved.workspaces;
    config.storage.exportsDir = saved.exports;
    Object.assign(config.maintenance, saved.maintenance);
    fs.rmSync(root, { recursive: true, force: true });
    await prisma.project.deleteMany({ where: { id: { in: projects } } });
  });

  it('removes node_modules of an old inactive version, and nothing else about it', async () => {
    const project = await newProject();
    const dir = await workspace(project.id, uuid(), { days: 10 });
    const report = await runCleanup();
    expect(report.nodeModulesRemoved).toBeGreaterThanOrEqual(1);
    expect(fs.existsSync(path.join(dir, 'node_modules'))).toBe(false);
    expect(fs.readFileSync(path.join(dir, 'data', 'app.db'), 'utf8')).toBe('client data');
    expect(fs.existsSync(path.join(dir, 'package.json'))).toBe(true);
  });

  it('keeps a recent version, the active version, and the version published live', async () => {
    const project = await newProject();
    const recent = await workspace(project.id, uuid(), { days: 1 });
    const activeJob = uuid();
    const active = await workspace(project.id, activeJob, { days: 30 });
    const liveJob = uuid();
    const live = await workspace(project.id, liveJob, { days: 30 });
    await prisma.project.update({ where: { id: project.id }, data: { repoPath: active, slug: `bersih-${Date.now()}`, liveJobId: liveJob } });

    await runCleanup();
    for (const dir of [recent, active, live]) expect(fs.existsSync(path.join(dir, 'node_modules'))).toBe(true);
  });

  it('never touches work that is still in progress or waiting for a decision', async () => {
    const project = await newProject();
    const dirs = [];
    for (const status of ['pending', 'running', 'paused', 'needs_review']) dirs.push(await workspace(project.id, uuid(), { status, days: 40 }));
    await runCleanup();
    for (const dir of dirs) expect(fs.existsSync(path.join(dir, 'node_modules'))).toBe(true);
  });

  it('removes whole workspaces of builds that failed long ago, but not recent failures', async () => {
    const project = await newProject();
    const old = await workspace(project.id, uuid(), { status: 'failed', days: 20 });
    const oldCancelled = await workspace(project.id, uuid(), { status: 'cancelled', days: 20 });
    const recent = await workspace(project.id, uuid(), { status: 'failed', days: 2 });
    const report = await runCleanup();
    expect(report.failedRemoved).toBeGreaterThanOrEqual(2);
    expect(fs.existsSync(old)).toBe(false);
    expect(fs.existsSync(oldCancelled)).toBe(false);
    expect(fs.existsSync(path.join(recent, 'node_modules'))).toBe(true);
  });

  it('removes workspaces that belong to nothing, once they are older than a day', async () => {
    const project = await newProject();
    const noJob = await workspace(project.id, uuid(), { withJob: false, days: 3 });
    const noProject = await workspace(uuid(), uuid(), { withJob: false, days: 3 });
    const justMade = await workspace(project.id, uuid(), { withJob: false, days: 0 });
    await runCleanup();
    expect(fs.existsSync(noJob)).toBe(false);
    expect(fs.existsSync(noProject)).toBe(false);
    // A build that has just started may not have its row yet.
    expect(fs.existsSync(justMade)).toBe(true);
  });

  it('leaves folders it does not recognise alone, and removes old export files', async () => {
    const stranger = path.join(config.storage.workspacesDir, 'catatan-operator');
    fs.mkdirSync(stranger);
    aged(stranger, 100);
    const oldZip = path.join(config.storage.exportsDir, 'lama.zip');
    const newZip = path.join(config.storage.exportsDir, 'baru.zip');
    fs.writeFileSync(oldZip, 'x');
    fs.writeFileSync(newZip, 'x');
    aged(oldZip, 10);
    const report = await runCleanup();
    expect(fs.existsSync(stranger)).toBe(true);
    expect(report.exportsRemoved).toBe(1);
    expect(fs.existsSync(oldZip)).toBe(false);
    expect(fs.existsSync(newZip)).toBe(true);
  });

  it('a dry run reports what would go and deletes nothing', async () => {
    const project = await newProject();
    const dir = await workspace(project.id, uuid(), { days: 12 });
    const report = await runCleanup({ dryRun: true });
    expect(report.dryRun).toBe(true);
    expect(report.nodeModulesRemoved).toBeGreaterThanOrEqual(1);
    expect(fs.existsSync(path.join(dir, 'node_modules'))).toBe(true);
  });
});

describe('backup', () => {
  let root: string;
  const saved = { backup: config.storage.backupDir, live: config.storage.liveDataDir, keep: config.maintenance.backupKeepDays };

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const sqlite = () => require('node:sqlite') as { DatabaseSync: new (file: string) => { exec(sql: string): void; prepare(sql: string): { all(): Array<Record<string, unknown>> }; close(): void } };

  beforeAll(async () => {
    await initDatabase();
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'ethermind-backup-'));
    config.storage.backupDir = path.join(root, 'backups');
    config.storage.liveDataDir = path.join(root, 'live');
    config.maintenance.backupKeepDays = 14;
  });
  afterAll(() => {
    config.storage.backupDir = saved.backup;
    config.storage.liveDataDir = saved.live;
    config.maintenance.backupKeepDays = saved.keep;
    fs.rmSync(root, { recursive: true, force: true });
  });

  const liveApp = (id: string, rows: string[]) => {
    const dir = path.join(config.storage.liveDataDir, id);
    fs.mkdirSync(dir, { recursive: true });
    const db = new (sqlite().DatabaseSync)(path.join(dir, 'app.db'));
    db.exec('CREATE TABLE catatan (isi TEXT)');
    for (const row of rows) db.exec(`INSERT INTO catatan VALUES ('${row}')`);
    db.close();
    fs.writeFileSync(path.join(dir, 'runtime.json'), '{"adminPassword":"rahasia"}');
  };

  it('snapshots the platform database and every live app database, readable afterwards', async () => {
    liveApp('app-satu', ['kopi', 'teh']);
    liveApp('app-dua', ['gula']);
    const report = await runBackup({ now: new Date('2026-10-21T10:30:00Z') });
    expect(report.errors).toEqual([]);
    expect(report.platformDatabase).toBe(true);
    expect(report.liveDatabases).toBe(2);
    expect(path.basename(report.directory)).toBe('2026-10-21_1030');

    const copy = new (sqlite().DatabaseSync)(path.join(report.directory, 'live', 'app-satu.db'));
    expect(copy.prepare('SELECT isi FROM catatan ORDER BY isi').all().map((r) => r.isi)).toEqual(['kopi', 'teh']);
    copy.close();

    const platform = new (sqlite().DatabaseSync)(path.join(report.directory, 'platform.db'));
    expect(platform.prepare("SELECT name FROM sqlite_master WHERE name = 'projects'").all()).toHaveLength(1);
    platform.close();
  });

  it('does not copy the apps secret files into the backup', async () => {
    const report = await runBackup({ now: new Date('2026-10-21T11:00:00Z') });
    const files = fs.readdirSync(report.directory, { recursive: true }).map(String);
    expect(files.some((f) => f.includes('runtime.json'))).toBe(false);
  });

  it('removes backups older than the retention period and keeps the newer ones', async () => {
    const old = path.join(config.storage.backupDir, '2026-09-01_0300');
    const recent = path.join(config.storage.backupDir, '2026-10-15_0300');
    fs.mkdirSync(old, { recursive: true });
    fs.mkdirSync(recent, { recursive: true });
    const long = new Date('2026-09-01T03:00:00Z');
    fs.utimesSync(old, long, long);
    const week = new Date('2026-10-15T03:00:00Z');
    fs.utimesSync(recent, week, week);
    const report = await runBackup({ now: new Date('2026-10-21T12:00:00Z') });
    expect(report.pruned).toBeGreaterThanOrEqual(1);
    expect(fs.existsSync(old)).toBe(false);
    expect(fs.existsSync(recent)).toBe(true);
  });
});

describe('queue position', () => {
  it('counts from 1 in arrival order and is null for jobs that are not waiting', async () => {
    const queue = new JobQueue(0); // nothing may start, so everything waits
    await queue.addJob('a', 'p1');
    await queue.addJob('b', 'p2');
    await queue.addJob('c', 'p3');
    expect([queue.positionOf('a'), queue.positionOf('b'), queue.positionOf('c')]).toEqual([1, 2, 3]);
    expect(queue.positionOf('zzz')).toBeNull();
    expect(queue.getStats()).toMatchObject({ queued: 3, active: 0 });
  });
});

describe('admin capacity view and quotas', () => {
  let client: TestUser;
  let operator: TestUser;
  beforeAll(async () => {
    await initDatabase();
    [client, operator] = await Promise.all([makeUser('client'), makeUser('operator')]);
  });

  it('shows capacity to operators only', async () => {
    await request.get('/api/admin/system').set(bearer(client)).expect(403);
    const snapshot = (await request.get('/api/admin/system').set(bearer(operator)).expect(200)).body.data;
    expect(snapshot.memory.totalMb).toBeGreaterThan(0);
    expect(snapshot.apps.portsTotal).toBe(config.preview.portEnd - config.preview.portStart + 1);
    expect(snapshot.queue).toHaveProperty('maxConcurrency');
    expect(Array.isArray(snapshot.warnings)).toBe(true);
    expect(JSON.stringify(snapshot)).not.toContain(config.auth.jwtSecret);
  });

  it('lets an operator run cleanup as a dry run on demand, and refuses clients', async () => {
    await request.post('/api/admin/maintenance/cleanup?dryRun=true').set(bearer(client)).expect(403);
    const report = (await request.post('/api/admin/maintenance/cleanup?dryRun=true').set(bearer(operator)).expect(200)).body.data;
    expect(report.dryRun).toBe(true);
    await request.post('/api/admin/maintenance/formatc').set(bearer(operator)).expect(404);
  });

  it('stops one account from creating projects without limit, but not operators', async () => {
    const saved = config.quotas.maxProjectsPerUser;
    config.quotas.maxProjectsPerUser = 2;
    try {
      await request.post('/api/projects').set(bearer(client)).send({ name: 'Satu' }).expect(201);
      await request.post('/api/projects').set(bearer(client)).send({ name: 'Dua' }).expect(201);
      const third = await request.post('/api/projects').set(bearer(client)).send({ name: 'Tiga' });
      expect(third.status).toBe(429);
      expect(third.body.error).toContain('2 proyek');
      for (const name of ['A', 'B', 'C']) await request.post('/api/projects').set(bearer(operator)).send({ name }).expect(201);
    } finally {
      config.quotas.maxProjectsPerUser = saved;
    }
  });
});
