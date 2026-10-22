import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import config from '../../config';
import prisma from '../../db/prisma';
import { appUrl, SlugError, validateSlug } from '../gateway/hosts';
import { Sandbox, sandbox as defaultSandbox } from '../sandbox/sandbox';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { parseSpec } from '../spec/specSchema';
import { jobIdFromRepoPath } from '../versions/current';
import previewManager, { AppSecrets, PreviewManager } from './previewManager';

export class LiveError extends Error {
  constructor(
    message: string,
    public status = 409,
  ) {
    super(message);
  }
}

/**
 * Live apps: the version a person chose to publish, under a public name, with its own data.
 *
 * A preview is rebuilt and reset with every build. A live app is not: its database lives in `live-data/<project>/`, outside
 * every version's folder, so publishing a newer version keeps what the business has entered. The version runs from its own
 * workspace (the code), and only the data is shared across versions.
 */
export class LiveManager {
  private starting = new Map<string, Promise<void>>();

  constructor(
    private sb: Sandbox = defaultSandbox,
    private pm: PreviewManager = previewManager,
  ) {}

  public dataDir(projectId: string): string {
    return path.join(config.storage.liveDataDir, projectId);
  }

  /** The live app's own admin account, kept next to its data so it survives a change of version. */
  public async secrets(projectId: string): Promise<AppSecrets> {
    const file = path.join(this.dataDir(projectId), 'runtime.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf8')) as AppSecrets;
    } catch {
      const created: AppSecrets = {
        jwtSecret: crypto.randomBytes(32).toString('hex'),
        adminEmail: 'admin@example.com',
        adminPassword: crypto.randomBytes(9).toString('base64url'),
      };
      await fs.mkdir(path.dirname(file), { recursive: true });
      await fs.writeFile(file, JSON.stringify(created, null, 2), { mode: 0o600 });
      return created;
    }
  }

  public async readSecrets(projectId: string): Promise<AppSecrets | null> {
    try {
      return JSON.parse(await fs.readFile(path.join(this.dataDir(projectId), 'runtime.json'), 'utf8')) as AppSecrets;
    } catch {
      return null;
    }
  }

  private databaseUrl(projectId: string): string {
    // In Docker the data folder is mounted at /data; as a local process the absolute path is used (forward slashes work on Windows too).
    if (this.sb.runtime === 'docker') return 'file:/data/app.db';
    return `file:${path.join(this.dataDir(projectId), 'app.db').replace(/\\/g, '/')}`;
  }

  private async pickVersion(projectId: string, requestedJobId?: string) {
    const project = await prisma.project.findUnique({ where: { id: projectId }, select: { repoPath: true } });
    const wanted = requestedJobId ?? jobIdFromRepoPath(project?.repoPath, projectId);
    const job =
      (wanted ? await prisma.job.findFirst({ where: { id: wanted, projectId, status: 'completed' }, include: { spec: true } }) : null) ??
      (requestedJobId ? null : await prisma.job.findFirst({ where: { projectId, status: 'completed' }, orderBy: { createdAt: 'desc' }, include: { spec: true } }));
    if (!job?.spec) throw new LiveError('Belum ada versi yang selesai dibangun untuk diterbitkan.');
    const fm = new WorkspaceFileManager(projectId, job.id);
    if (!fm.fileExists('package.json')) throw new LiveError('File versi ini tidak ditemukan di server. Bangun ulang aplikasinya.');
    return { job, fm, spec: parseSpec(JSON.parse(job.spec.content)) };
  }

  /** Stops whatever runs for this project as the live app. */
  private async stopRunning(projectId: string): Promise<void> {
    const running = await prisma.deployment.findMany({ where: { projectId, environment: 'production', status: 'running' } });
    for (const d of running) Sandbox.stopRecorded(d);
    await prisma.deployment.updateMany({ where: { projectId, environment: 'production', status: 'running' }, data: { status: 'stopped' } });
  }

  /** Starts the pinned version with the project's own data, and records it as the running live app. */
  private async launch(projectId: string, slug: string, jobId?: string): Promise<{ jobId: string }> {
    const { job, fm, spec } = await this.pickVersion(projectId, jobId);
    const secrets = await this.secrets(projectId);
    await this.pm.ensureDependencies(fm);

    const dataDir = this.dataDir(projectId);
    await fs.mkdir(dataDir, { recursive: true });
    const hasData = await fs.access(path.join(dataDir, 'app.db')).then(() => true, () => false);
    const env = this.pm.runtimeEnv(secrets, spec, { environment: 'production', databaseUrl: this.databaseUrl(projectId) });

    // First time: create the database with only the administrator. Later: apply the version's structure to the data that is there.
    // A change that would delete data is refused by the schema tool, so a version cannot silently wipe a business's records.
    const prepared = await this.sb.run(hasData ? 'npm run db:push' : 'npm run db:setup', {
      cwd: fm.workspaceDir,
      network: false,
      dataDir,
      env: { ...env, SEED_DEMO_DATA: 'false', SEED_ADMIN_EMAIL: secrets.adminEmail, SEED_ADMIN_PASSWORD: secrets.adminPassword },
    });
    if (!prepared.success) {
      throw new LiveError(
        hasData
          ? `Versi ini tidak bisa dipasang di atas data yang sudah ada, karena struktur datanya berubah dengan cara yang akan menghapus isi. Data Anda tidak disentuh.\n${(prepared.stderr || prepared.stdout).slice(-500)}`
          : `Database aplikasi live gagal disiapkan:\n${(prepared.stderr || prepared.stdout).slice(-500)}`,
      );
    }

    const port = await this.pm.findAvailablePort();
    const app = await this.sb.startApp({ workspaceDir: fm.workspaceDir, port, name: `ethermind-live-${projectId.slice(0, 8)}`, env, dataDir });
    try {
      await this.pm.waitHealthy(port);
    } catch (error) {
      await app.stop();
      throw error;
    }

    const version = await prisma.version.findFirst({ where: { projectId, jobId: job.id }, orderBy: { createdAt: 'desc' } });
    await this.stopRunning(projectId);
    await prisma.deployment.create({
      data: {
        projectId,
        versionId: version?.id ?? null,
        environment: 'production',
        url: appUrl(slug),
        port: app.port,
        status: 'running',
        runtime: app.runtime,
        pid: app.pid ?? null,
        containerName: app.containerName ?? null,
      },
    });
    return { jobId: job.id };
  }

  /** Publishes a version under `slug`. A second call changes the version or the name; the data stays. */
  public async publish(projectId: string, options: { slug: string; jobId?: string }): Promise<{ url: string; jobId: string }> {
    let slug: string;
    try {
      slug = validateSlug(options.slug);
    } catch (error) {
      throw new LiveError((error as SlugError).message, 400);
    }
    const taken = await prisma.project.findFirst({ where: { slug, id: { not: projectId } }, select: { id: true } });
    if (taken) throw new LiveError('Nama alamat ini sudah dipakai. Pilih nama lain.');

    const { jobId } = await this.launch(projectId, slug, options.jobId);
    await prisma.project.update({ where: { id: projectId }, data: { slug, liveJobId: jobId, livePublishedAt: new Date() } });
    return { url: appUrl(slug), jobId };
  }

  /** Starts the published app again after it went to sleep or the server restarted. Concurrent calls share one start. */
  public start(projectId: string): Promise<void> {
    const pending = this.starting.get(projectId);
    if (pending) return pending;
    const work = (async () => {
      const project = await prisma.project.findUnique({ where: { id: projectId }, select: { slug: true, liveJobId: true } });
      if (!project?.slug || !project.liveJobId) throw new LiveError('Aplikasi ini belum diterbitkan.');
      await this.launch(projectId, project.slug, project.liveJobId);
    })().finally(() => this.starting.delete(projectId));
    this.starting.set(projectId, work);
    return work;
  }

  /** Takes the app offline. The name stays reserved and the data stays on disk. */
  public async unpublish(projectId: string): Promise<void> {
    await this.stopRunning(projectId);
    await prisma.project.update({ where: { id: projectId }, data: { liveJobId: null, livePublishedAt: null } });
  }

  /** Project deleted: stop the app and remove its data for good. */
  public async purge(projectId: string): Promise<void> {
    await this.stopRunning(projectId);
    await fs.rm(this.dataDir(projectId), { recursive: true, force: true });
  }
}

export const liveManager = new LiveManager();
export default liveManager;
