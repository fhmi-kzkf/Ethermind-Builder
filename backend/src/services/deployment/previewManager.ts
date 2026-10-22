import crypto from 'crypto';
import fs from 'fs/promises';
import net from 'net';
import path from 'path';
import config from '../../config';
import prisma from '../../db/prisma';
import { SpecDefinition } from '../../types';
import { renderApp } from '../generation/appRenderer';
import { jobIdFromRepoPath } from '../versions/current';
import { parseSpec } from '../spec/specSchema';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { isPidAlive, RunningApp, Sandbox, sandbox as defaultSandbox } from '../sandbox/sandbox';
import { appsEnabled, appUrl, previewLabel } from '../gateway/hosts';
import { evictLeastRecentlyUsed } from '../gateway/idle';

export interface AppSecrets {
  jwtSecret: string;
  adminEmail: string;
  adminPassword: string;
}

export interface LiveApp {
  app: RunningApp;
  /** The address people use: a gateway address when apps have a domain, host:port otherwise. */
  url: string;
  /** Always the loopback address of the process, for the platform's own checks (smoke test, health). */
  localUrl?: string;
  secrets: AppSecrets;
}

export interface RuntimeOptions {
  /** 'production' is a live app: it is not meant to be shown inside the platform's page. */
  environment?: 'preview' | 'production';
  /** Overrides the database location (a live app keeps its data outside the version's folder). */
  databaseUrl?: string;
}

const DB_URL = 'file:../data/app.db';

export class PreviewManager {
  private running = new Map<string, RunningApp>();
  private starting = new Map<string, Promise<string>>();

  constructor(private sb: Sandbox = defaultSandbox) {}

  /** Secrets live in the workspace's runtime folder, which is never exported or shown to agents. */
  public async secrets(fm: WorkspaceFileManager): Promise<AppSecrets> {
    const file = path.join(fm.runtimeDir, 'runtime.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf8')) as AppSecrets;
    } catch {
      const created: AppSecrets = {
        jwtSecret: crypto.randomBytes(32).toString('hex'),
        adminEmail: 'admin@example.com',
        adminPassword: crypto.randomBytes(9).toString('base64url'),
      };
      await fs.mkdir(fm.runtimeDir, { recursive: true });
      await fs.writeFile(file, JSON.stringify(created, null, 2), { mode: 0o600 });
      return created;
    }
  }

  /** The saved secrets of a workspace, or null when none exist. Unlike secrets(), this never creates any. */
  public async readSecrets(fm: WorkspaceFileManager): Promise<AppSecrets | null> {
    try {
      return JSON.parse(await fs.readFile(path.join(fm.runtimeDir, 'runtime.json'), 'utf8')) as AppSecrets;
    } catch {
      return null;
    }
  }

  public runtimeEnv(secrets: AppSecrets, spec: SpecDefinition, options: RuntimeOptions = {}): Record<string, string> {
    // Behind the gateway the app sees the gateway as its client: it must trust the forwarded address, and on https the cookie must be secure.
    const behindGateway = appsEnabled();
    return {
      NODE_ENV: 'production',
      DATABASE_URL: options.databaseUrl ?? DB_URL,
      TRUST_PROXY: behindGateway ? 'true' : 'false',
      COOKIE_SECURE: behindGateway && config.apps.scheme === 'https' ? 'true' : 'false',
      BACKUP_DIR: './backups',
      BACKUP_INTERVAL_HOURS: '24',
      BACKUP_KEEP: '14',
      // Only the preview may be shown inside the platform's own page; a live app and an exported app keep the default (no framing).
      ...(options.environment === 'production' ? {} : { FRAME_ANCESTORS: config.preview.frameAncestors }),
      ...(spec.auth.mode !== 'none' ? { JWT_SECRET: secrets.jwtSecret } : {}),
    };
  }

  /** A version that lost its node_modules to housekeeping gets them back before it starts. */
  public async ensureDependencies(fm: WorkspaceFileManager): Promise<void> {
    const present = await fs.access(path.join(fm.workspaceDir, 'node_modules')).then(() => true, () => false);
    if (present) return;
    const install = await this.sb.run('npm install --no-audit --no-fund', { cwd: fm.workspaceDir, network: true, timeoutMs: config.sandbox.installTimeoutMs });
    if (!install.success) throw new Error(`Paket aplikasi gagal dipasang ulang:
${(install.stderr || install.stdout).slice(-600)}`);
  }

  /** Builds a fresh database from the schema and seeds it. Any previous preview data is discarded. */
  public async prepareDatabase(fm: WorkspaceFileManager, spec: SpecDefinition, secrets: AppSecrets): Promise<{ ok: boolean; output: string }> {
    const dataDir = path.join(fm.workspaceDir, 'data');
    await fs.mkdir(dataDir, { recursive: true });
    for (const suffix of ['', '-wal', '-shm', '-journal']) await fs.rm(path.join(dataDir, `app.db${suffix}`), { force: true });

    const result = await this.sb.run('npm run db:setup', {
      cwd: fm.workspaceDir,
      network: false,
      env: { ...this.runtimeEnv(secrets, spec), SEED_DEMO_DATA: 'true', SEED_ADMIN_EMAIL: secrets.adminEmail, SEED_ADMIN_PASSWORD: secrets.adminPassword },
    });
    return { ok: result.success, output: `${result.stderr}\n${result.stdout}`.trim() };
  }

  private isPortFree(port: number): Promise<boolean> {
    return new Promise((resolve) => {
      const server = net.createServer();
      server.unref();
      server.on('error', () => resolve(false));
      server.listen(port, () => server.close(() => resolve(true)));
    });
  }

  public async findAvailablePort(): Promise<number> {
    const taken = new Set(
      (await prisma.deployment.findMany({ where: { status: 'running', port: { not: null } }, select: { port: true } })).map((d) => d.port as number)
    );
    for (let attempt = 0; attempt < 2; attempt++) {
      for (let port = config.preview.portStart; port <= config.preview.portEnd; port++) {
        if (!taken.has(port) && (await this.isPortFree(port))) return port;
      }
      // Every port is taken: put the app nobody has visited for longest to sleep. It wakes by itself on its next visit.
      if (attempt === 0 && (await evictLeastRecentlyUsed((projectId) => this.forget(projectId)))) {
        taken.clear();
        for (const d of await prisma.deployment.findMany({ where: { status: 'running', port: { not: null } }, select: { port: true } })) taken.add(d.port as number);
        continue;
      }
      break;
    }
    throw new Error('Tidak ada port pratinjau yang tersedia. Hentikan pratinjau lama atau perlebar PREVIEW_PORT_START/END.');
  }

  public async waitHealthy(port: number, timeoutMs = 30000): Promise<void> {
    const deadline = Date.now() + timeoutMs;
    let last = 'belum ada respons';
    while (Date.now() < deadline) {
      try {
        const response = await fetch(`http://127.0.0.1:${port}/api/health`, { signal: AbortSignal.timeout(2000) });
        if (response.ok) return;
        last = `status ${response.status}`;
      } catch (error) {
        last = (error as Error).message;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    throw new Error(`Aplikasi tidak sehat dalam ${Math.round(timeoutMs / 1000)} detik (${last}).`);
  }

  /** Prepares the database, starts the app, and waits until /api/health answers. */
  public async launch(projectId: string, jobId: string, fm: WorkspaceFileManager, spec: SpecDefinition, options: { keepData?: boolean } = {}): Promise<LiveApp> {
    const secrets = await this.secrets(fm);
    await this.ensureDependencies(fm);

    // Starting an app again after a restart must not throw away what the client entered, so an existing database is kept.
    const hasData = await fs.access(path.join(fm.workspaceDir, 'data', 'app.db')).then(() => true, () => false);
    if (!(options.keepData && hasData)) {
      const prepared = await this.prepareDatabase(fm, spec, secrets);
      if (!prepared.ok) throw new Error(`Database aplikasi gagal disiapkan:\n${prepared.output.slice(-900)}`);
    }

    const port = await this.findAvailablePort();
    const app = await this.sb.startApp({
      workspaceDir: fm.workspaceDir,
      port,
      name: `ethermind-app-${projectId.slice(0, 8)}-${jobId.slice(0, 8)}`,
      env: this.runtimeEnv(secrets, spec),
    });

    try {
      await this.waitHealthy(port);
    } catch (error) {
      await app.stop();
      throw error;
    }
    const localUrl = `http://127.0.0.1:${port}`;
    return { app, url: appsEnabled() ? appUrl(previewLabel(projectId)) : `http://${config.preview.host}:${port}`, localUrl, secrets };
  }

  /**
   * Starts a project's latest finished app again, for example after the platform restarted and took the previews with it.
   * The data in the app's database is kept. Two requests at once share one start.
   */
  public restart(projectId: string): Promise<string> {
    const pending = this.starting.get(projectId);
    if (pending) return pending;
    const work = this.restartNow(projectId).finally(() => this.starting.delete(projectId));
    this.starting.set(projectId, work);
    return work;
  }

  private async restartNow(projectId: string): Promise<string> {
    const current = await prisma.deployment.findFirst({ where: { projectId, environment: 'preview', status: 'running' }, orderBy: { createdAt: 'desc' } });
    if (current && (await this.portAnswers(current.port))) return current.url;

    // The active version (the folder the project points to) wins; the newest finished build is the fallback for older projects.
    const project = await prisma.project.findUnique({ where: { id: projectId }, select: { repoPath: true } });
    const activeJobId = jobIdFromRepoPath(project?.repoPath, projectId);
    const job =
      (activeJobId ? await prisma.job.findFirst({ where: { id: activeJobId, projectId, status: 'completed' }, include: { spec: true } }) : null) ??
      (await prisma.job.findFirst({ where: { projectId, status: 'completed' }, orderBy: { createdAt: 'desc' }, include: { spec: true } }));
    if (!job?.spec) throw new Error('Belum ada build yang selesai untuk dijalankan. Bangun aplikasinya dulu.');

    const fm = new WorkspaceFileManager(projectId, job.id);
    if (!fm.fileExists('package.json')) throw new Error('File aplikasi tidak ditemukan di server. Bangun ulang aplikasinya.');

    const spec = parseSpec(JSON.parse(job.spec.content));
    // The platform's own files are rendered again first, so an app built before a platform fix starts with that fix.
    for (const file of renderApp(spec).files) await fm.writeFile(file.path, file.content);
    const live = await this.launch(projectId, job.id, fm, spec, { keepData: true });
    const version = await prisma.version.findFirst({ where: { projectId, jobId: job.id }, orderBy: { createdAt: 'desc' } });
    return this.adopt(projectId, version?.id ?? null, live);
  }

  /** Stops an app that was launched but is not going to be used (for example a failed smoke test). */
  public async discard(live: LiveApp): Promise<void> {
    await live.app.stop();
  }

  /** Makes a launched app the project's preview and stops the previous one. */
  public async adopt(projectId: string, versionId: string | null, live: LiveApp): Promise<string> {
    const previous = await prisma.deployment.findMany({ where: { projectId, environment: 'preview', status: 'running' } });
    for (const old of previous) Sandbox.stopRecorded(old);
    await prisma.deployment.updateMany({ where: { projectId, environment: 'preview', status: 'running' }, data: { status: 'stopped' } });
    this.running.set(projectId, live.app);
    await prisma.deployment.create({
      data: {
        projectId,
        versionId,
        environment: 'preview',
        url: live.url,
        port: live.app.port,
        status: 'running',
        runtime: live.app.runtime,
        pid: live.app.pid ?? null,
        containerName: live.app.containerName ?? null,
      },
    });
    return live.url;
  }

  /** Drops the in-memory handle of an app that was stopped from outside (put to sleep, or evicted). */
  public forget(projectId: string): void {
    this.running.delete(projectId);
  }

  public stopProject(projectId: string): void {
    const app = this.running.get(projectId);
    if (app) {
      void app.stop();
      this.running.delete(projectId);
    }
  }

  /** Stops every preview of a project, including ones started before the last platform restart. */
  public async stopAllForProject(projectId: string): Promise<void> {
    this.stopProject(projectId);
    // Previews only: the live app of a project is not stopped by rebuilding or restoring a version.
    const deployments = await prisma.deployment.findMany({ where: { projectId, environment: 'preview', status: 'running' } });
    for (const deployment of deployments) Sandbox.stopRecorded(deployment);
    await prisma.deployment.updateMany({ where: { projectId, environment: 'preview', status: 'running' }, data: { status: 'stopped' } });
  }

  /** On startup, marks recorded previews that are no longer alive as stopped. */
  public async reconcile(): Promise<number> {
    const deployments = await prisma.deployment.findMany({ where: { status: 'running' } });
    let stopped = 0;
    for (const deployment of deployments) {
      const alive = deployment.runtime === 'process' ? Boolean(deployment.pid && isPidAlive(deployment.pid)) : await this.portAnswers(deployment.port);
      if (!alive) {
        await prisma.deployment.update({ where: { id: deployment.id }, data: { status: 'stopped' } });
        stopped += 1;
      }
    }
    return stopped;
  }

  private async portAnswers(port: number | null): Promise<boolean> {
    if (!port) return false;
    try {
      return (await fetch(`http://127.0.0.1:${port}/api/health`, { signal: AbortSignal.timeout(2000) })).ok;
    } catch {
      return false;
    }
  }

  /** Platform shutdown: apps started as local processes die with it; docker containers keep running. */
  public shutdownAll(): void {
    for (const [projectId, app] of this.running) {
      if (app.runtime === 'process') void app.stop();
      this.running.delete(projectId);
    }
  }
}

export const previewManager = new PreviewManager();
export default previewManager;
