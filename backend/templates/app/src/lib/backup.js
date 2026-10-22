import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';
import { prisma } from '../db.js';

const BACKUP_PATTERN = /^backup-.*\.db$/;

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

/**
 * Writes a consistent snapshot of the live database (safe while the server is running and WAL is on).
 * Returns the absolute path of the new backup file.
 */
export async function createBackup(dir = config.backup.dir) {
  const target = path.resolve(dir, `backup-${timestamp()}.db`);
  await fs.mkdir(path.dirname(target), { recursive: true });

  const escaped = target.replace(/\\/g, '/').replace(/'/g, "''");
  await prisma.$executeRawUnsafe(`VACUUM INTO '${escaped}'`);
  return target;
}

export async function listBackups(dir = config.backup.dir) {
  let names;
  try {
    names = await fs.readdir(path.resolve(dir));
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  return names.filter((name) => BACKUP_PATTERN.test(name)).sort();
}

/** Deletes the oldest backups so that only `keep` remain. */
export async function pruneBackups(dir = config.backup.dir, keep = config.backup.keep) {
  const names = await listBackups(dir);
  const stale = names.slice(0, Math.max(0, names.length - keep));
  await Promise.all(stale.map((name) => fs.unlink(path.resolve(dir, name))));
  return stale;
}

/** Runs a backup every BACKUP_INTERVAL_HOURS (0 disables it). Returns a function that stops the schedule. */
export function startBackupScheduler() {
  if (config.isTest || config.backup.intervalHours <= 0) return () => {};

  const run = async () => {
    try {
      const file = await createBackup();
      await pruneBackups();
      console.log(`Backup database dibuat: ${file}`);
    } catch (error) {
      console.error('Backup database gagal', error);
    }
  };

  const timer = setInterval(run, config.backup.intervalHours * 60 * 60 * 1000);
  timer.unref();
  return () => clearInterval(timer);
}
