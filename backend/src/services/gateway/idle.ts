import config from '../../config';
import prisma from '../../db/prisma';
import { Sandbox } from '../sandbox/sandbox';
import { forget, gatewayStats, seenAt } from './activity';

/** An app that has only just started is never put to sleep, however quiet it is. */
const MIN_AGE_MS = 2 * 60_000;

type Running = { id: string; projectId: string; environment: string; pid: number | null; containerName: string | null; createdAt: Date };

const lastVisit = (d: Running) => seenAt(d.id) ?? d.createdAt.getTime();

async function stopOne(d: Running, onStopped?: (projectId: string) => void) {
  Sandbox.stopRecorded(d);
  await prisma.deployment.update({ where: { id: d.id }, data: { status: 'stopped' } });
  forget(d.id);
  onStopped?.(d.projectId);
}

/**
 * Stops apps nobody has visited for a while: previews after PREVIEW_IDLE_MINUTES, live apps after LIVE_IDLE_MINUTES.
 * Their data stays on disk, and the gateway starts them again on the next visit.
 */
export async function sweepIdle(options: { now?: number; onStopped?: (projectId: string) => void } = {}): Promise<number> {
  const now = options.now ?? Date.now();
  const running = (await prisma.deployment.findMany({
    where: { status: 'running', environment: { in: ['preview', 'production'] } },
    select: { id: true, projectId: true, environment: true, pid: true, containerName: true, createdAt: true },
  })) as Running[];

  let stopped = 0;
  for (const d of running) {
    const limit = d.environment === 'production' ? config.apps.liveIdleMs : config.apps.previewIdleMs;
    if (now - d.createdAt.getTime() < MIN_AGE_MS || now - lastVisit(d) < limit) continue;
    await stopOne(d, options.onStopped);
    stopped += 1;
  }
  gatewayStats.idleStopped += stopped;
  return stopped;
}

/**
 * Frees one app when every port is taken: the least recently visited preview goes first, a live app only if no preview is left.
 * Returns whether something was stopped.
 */
export async function evictLeastRecentlyUsed(onStopped?: (projectId: string) => void): Promise<boolean> {
  const running = (await prisma.deployment.findMany({
    where: { status: 'running', environment: { in: ['preview', 'production'] } },
    select: { id: true, projectId: true, environment: true, pid: true, containerName: true, createdAt: true },
  })) as Running[];
  if (running.length === 0) return false;

  const rank = (d: Running) => (d.environment === 'preview' ? 0 : 1);
  running.sort((a, b) => rank(a) - rank(b) || lastVisit(a) - lastVisit(b));
  await stopOne(running[0], onStopped);
  gatewayStats.evicted += 1;
  return true;
}

let timer: NodeJS.Timeout | undefined;

export function startIdleSweeper(onStopped?: (projectId: string) => void, everyMs = 60_000): void {
  if (timer) return;
  timer = setInterval(() => {
    sweepIdle({ onStopped }).catch((error) => console.warn('[Gateway] Penyapuan aplikasi menganggur gagal:', error.message));
  }, everyMs);
  timer.unref();
}

export function stopIdleSweeper(): void {
  if (timer) clearInterval(timer);
  timer = undefined;
}
