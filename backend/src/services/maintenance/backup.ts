import fs from 'fs/promises';
import path from 'path';
import config from '../../config';
import prisma from '../../db/prisma';

export interface BackupReport {
  at: string;
  directory: string;
  platformDatabase: boolean;
  liveDatabases: number;
  pruned: number;
  errors: string[];
}

let last: BackupReport | null = null;
export const lastBackup = (): BackupReport | null => last;

const stamp = (d: Date) => d.toISOString().slice(0, 16).replace('T', '_').replace(':', '');
const quote = (p: string) => `'${p.replace(/'/g, "''")}'`;

/** Copies a live app's database safely while the app may be writing to it (VACUUM INTO takes a consistent snapshot). */
function snapshotSqlite(source: string, destination: string): void {
  // node:sqlite ships with Node 22. It is loaded lazily so a platform on an older Node still starts, and only the live-data backup reports the gap.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { DatabaseSync } = require('node:sqlite') as { DatabaseSync: new (file: string) => { exec(sql: string): void; close(): void } };
  const db = new DatabaseSync(source);
  try {
    db.exec(`VACUUM INTO ${quote(destination)}`);
  } finally {
    db.close();
  }
}

/**
 * A dated folder with a snapshot of the platform database and of every live app's database, and the removal of folders older than
 * BACKUP_KEEP_DAYS. The apps' secret files are left out on purpose: a backup should not hold passwords in the clear.
 * It is a copy on the same server: copy `storage/backups` to somewhere else (another machine or object storage) to survive losing the disk.
 */
export async function runBackup(options: { now?: Date } = {}): Promise<BackupReport> {
  const now = options.now ?? new Date();
  const directory = path.join(config.storage.backupDir, stamp(now));
  const report: BackupReport = { at: now.toISOString(), directory, platformDatabase: false, liveDatabases: 0, pruned: 0, errors: [] };
  await fs.mkdir(path.join(directory, 'live'), { recursive: true });

  try {
    await prisma.$executeRawUnsafe(`VACUUM INTO ${quote(path.join(directory, 'platform.db'))}`);
    report.platformDatabase = true;
  } catch (error) {
    report.errors.push(`platform: ${(error as Error).message}`);
  }

  for (const entry of await fs.readdir(config.storage.liveDataDir).catch(() => [] as string[])) {
    const source = path.join(config.storage.liveDataDir, entry, 'app.db');
    if (!(await fs.access(source).then(() => true, () => false))) continue;
    try {
      snapshotSqlite(source, path.join(directory, 'live', `${entry}.db`));
      report.liveDatabases += 1;
    } catch (error) {
      report.errors.push(`live ${entry}: ${(error as Error).message}`);
    }
  }

  const cutoff = now.getTime() - config.maintenance.backupKeepDays * 24 * 3600_000;
  for (const entry of await fs.readdir(config.storage.backupDir).catch(() => [] as string[])) {
    if (!/^\d{4}-\d{2}-\d{2}_\d{4}$/.test(entry) || entry === path.basename(directory)) continue;
    const full = path.join(config.storage.backupDir, entry);
    const stat = await fs.stat(full).catch(() => null);
    if (stat && stat.mtimeMs < cutoff) {
      await fs.rm(full, { recursive: true, force: true });
      report.pruned += 1;
    }
  }

  last = report;
  return report;
}
