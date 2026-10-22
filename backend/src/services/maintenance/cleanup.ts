import fs from 'fs/promises';
import path from 'path';
import config from '../../config';
import prisma from '../../db/prisma';

export interface CleanupReport {
  at: string;
  dryRun: boolean;
  /** Old inactive versions that lost their node_modules (they reinstall when opened again). */
  nodeModulesRemoved: number;
  /** Workspaces of builds that failed or were cancelled long ago. */
  failedRemoved: number;
  /** Workspaces no project or job refers to. */
  orphansRemoved: number;
  exportsRemoved: number;
  errors: string[];
}

let last: CleanupReport | null = null;
export const lastCleanup = (): CleanupReport | null => last;

const DAY = 24 * 3600_000;
const WORKSPACE = /^([0-9a-f-]{36})_([0-9a-f-]{36})$/;
/** Work that may still be resumed or inspected is never touched. */
const IN_PROGRESS = new Set(['pending', 'running', 'paused', 'needs_review']);
const ORPHAN_GRACE_MS = 24 * 3600_000;

const exists = (p: string) => fs.access(p).then(() => true, () => false);

/**
 * Keeps the disk from filling up over weeks. Three kinds of leftovers go, and only these:
 * node_modules of old versions nobody uses (the biggest part by far), whole workspaces of failed builds, and workspaces that
 * belong to nothing. A version that is the project's active one, is published live, or is still in progress is never touched, and neither is any
 * app data: live data sits outside the workspaces, and a version's own data stays with its folder.
 */
export async function runCleanup(options: { dryRun?: boolean; now?: number } = {}): Promise<CleanupReport> {
  const now = options.now ?? Date.now();
  const dryRun = Boolean(options.dryRun);
  const report: CleanupReport = { at: new Date(now).toISOString(), dryRun, nodeModulesRemoved: 0, failedRemoved: 0, orphansRemoved: 0, exportsRemoved: 0, errors: [] };
  const rm = async (target: string) => {
    if (!dryRun) await fs.rm(target, { recursive: true, force: true });
  };

  const [projects, jobs] = await Promise.all([
    prisma.project.findMany({ select: { id: true, repoPath: true, liveJobId: true } }),
    prisma.job.findMany({ select: { id: true, projectId: true, status: true, createdAt: true, finishedAt: true } }),
  ]);
  const projectIds = new Set(projects.map((p) => p.id));
  const jobById = new Map(jobs.map((j) => [j.id, j]));
  const pinned = new Set<string>();
  for (const p of projects) {
    if (p.repoPath) pinned.add(path.basename(p.repoPath));
    if (p.liveJobId) pinned.add(`${p.id}_${p.liveJobId}`);
  }

  const entries = await fs.readdir(config.storage.workspacesDir).catch(() => [] as string[]);
  for (const entry of entries) {
    const match = WORKSPACE.exec(entry);
    if (!match) continue; // not a workspace folder: not ours to judge
    const dir = path.join(config.storage.workspacesDir, entry);
    try {
      const [, projectId, jobId] = match;
      const job = jobById.get(jobId);
      const touched = (await fs.stat(dir)).mtimeMs;

      if (!projectIds.has(projectId) || !job) {
        if (now - touched > ORPHAN_GRACE_MS) {
          await rm(dir);
          report.orphansRemoved += 1;
        }
        continue;
      }
      if (pinned.has(entry) || IN_PROGRESS.has(job.status)) continue;

      const ended = (job.finishedAt ?? job.createdAt).getTime();
      if ((job.status === 'failed' || job.status === 'cancelled') && now - ended > config.maintenance.failedDays * DAY) {
        await rm(dir);
        report.failedRemoved += 1;
        continue;
      }
      const modules = path.join(dir, 'node_modules');
      if (now - ended > config.maintenance.nodeModulesDays * DAY && (await exists(modules))) {
        await rm(modules);
        report.nodeModulesRemoved += 1;
      }
    } catch (error) {
      report.errors.push(`${entry}: ${(error as Error).message}`);
    }
  }

  for (const file of await fs.readdir(config.storage.exportsDir).catch(() => [] as string[])) {
    try {
      const full = path.join(config.storage.exportsDir, file);
      const stat = await fs.stat(full);
      if (stat.isFile() && now - stat.mtimeMs > config.maintenance.exportDays * DAY) {
        await rm(full);
        report.exportsRemoved += 1;
      }
    } catch (error) {
      report.errors.push(`${file}: ${(error as Error).message}`);
    }
  }

  if (!dryRun) last = report;
  return report;
}
