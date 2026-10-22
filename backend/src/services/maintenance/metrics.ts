import fs from 'fs/promises';
import os from 'os';
import config from '../../config';
import prisma from '../../db/prisma';
import { gatewayStats } from '../gateway/activity';
import { appsEnabled } from '../gateway/hosts';
import jobQueue from '../queue/jobQueue';
import { lastBackup } from './backup';
import { lastCleanup } from './cleanup';

export interface SystemSnapshot {
  at: string;
  memory: { totalMb: number; freeMb: number; freePercent: number };
  disk: { totalGb: number; freeGb: number; freePercent: number } | null;
  cpu: { cores: number; load1: number };
  apps: { previewRunning: number; liveRunning: number; livePublished: number; portsUsed: number; portsTotal: number; domain: string | null };
  queue: { waiting: number; active: number; maxConcurrency: number };
  storage: { workspaces: number; liveData: number };
  gateway: typeof gatewayStats;
  lastBackup: { at: string; liveDatabases: number; errors: number } | null;
  lastCleanup: { at: string; nodeModulesRemoved: number; failedRemoved: number; orphansRemoved: number } | null;
  /** Things an operator should act on, in plain words. Empty when nothing needs attention. */
  warnings: string[];
}

const mb = (bytes: number) => Math.round(bytes / 1_048_576);

/** A cheap reading (no directory walks), safe to call every few seconds from the admin screen. */
export async function systemSnapshot(): Promise<SystemSnapshot> {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();

  let disk: SystemSnapshot['disk'] = null;
  try {
    const s = await fs.statfs(config.storage.rootDir);
    const total = s.blocks * s.bsize;
    const free = s.bavail * s.bsize;
    disk = { totalGb: Math.round((total / 1_073_741_824) * 10) / 10, freeGb: Math.round((free / 1_073_741_824) * 10) / 10, freePercent: Math.round((free / total) * 100) };
  } catch {
    // the storage folder does not exist yet
  }

  const [running, livePublished, workspaces, liveData] = await Promise.all([
    prisma.deployment.groupBy({ by: ['environment'], where: { status: 'running' }, _count: { _all: true } }),
    prisma.project.count({ where: { liveJobId: { not: null } } }),
    fs.readdir(config.storage.workspacesDir).then((e) => e.length, () => 0),
    fs.readdir(config.storage.liveDataDir).then((e) => e.length, () => 0),
  ]);
  const count = (env: string) => running.find((r) => r.environment === env)?._count._all ?? 0;
  const queue = jobQueue.getStats();
  const backup = lastBackup();
  const cleanup = lastCleanup();

  const snapshot: SystemSnapshot = {
    at: new Date().toISOString(),
    memory: { totalMb: mb(totalMem), freeMb: mb(freeMem), freePercent: Math.round((freeMem / totalMem) * 100) },
    disk,
    cpu: { cores: os.cpus().length, load1: Math.round(os.loadavg()[0] * 100) / 100 },
    apps: {
      previewRunning: count('preview'),
      liveRunning: count('production'),
      livePublished,
      portsUsed: count('preview') + count('production'),
      portsTotal: config.preview.portEnd - config.preview.portStart + 1,
      domain: appsEnabled() ? config.apps.domain : null,
    },
    queue: { waiting: queue.queued, active: queue.active, maxConcurrency: queue.maxConcurrency },
    storage: { workspaces, liveData },
    gateway: { ...gatewayStats },
    lastBackup: backup ? { at: backup.at, liveDatabases: backup.liveDatabases, errors: backup.errors.length } : null,
    lastCleanup: cleanup ? { at: cleanup.at, nodeModulesRemoved: cleanup.nodeModulesRemoved, failedRemoved: cleanup.failedRemoved, orphansRemoved: cleanup.orphansRemoved } : null,
    warnings: [],
  };

  const w = snapshot.warnings;
  if (disk && disk.freePercent < 15) w.push(`Disk tinggal ${disk.freePercent}% (${disk.freeGb} GB). Jalankan pembersihan atau tambah disk.`);
  if (snapshot.memory.freePercent < 10) w.push(`Memori bebas tinggal ${snapshot.memory.freePercent}%. Kurangi MAX_CONCURRENT_JOBS atau turunkan waktu tidur aplikasi.`);
  if (snapshot.apps.portsUsed / snapshot.apps.portsTotal > 0.8) w.push(`Port aplikasi terpakai ${snapshot.apps.portsUsed} dari ${snapshot.apps.portsTotal}. Perlebar PREVIEW_PORT_END.`);
  if (snapshot.queue.waiting > snapshot.queue.maxConcurrency * 3) w.push(`${snapshot.queue.waiting} build menunggu giliran. Pengguna akan menunggu lama.`);
  if (config.maintenance.backupEnabled && !backup && process.uptime() > 15 * 60) w.push('Belum ada cadangan sejak server menyala.');
  if (backup && backup.errors.length) w.push(`Cadangan terakhir punya ${backup.errors.length} galat.`);
  if (!appsEnabled()) w.push('APPS_DOMAIN belum diisi: pratinjau memakai host:port dan link live nonaktif.');
  return snapshot;
}
