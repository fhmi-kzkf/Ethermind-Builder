import config from '../../config';
import { runBackup } from './backup';
import { runCleanup } from './cleanup';

const DAY = 24 * 3600_000;
const timers: NodeJS.Timeout[] = [];

function every(task: () => Promise<unknown>, label: string, firstAfterMs: number) {
  const run = () => task().catch((error: Error) => console.warn(`[Perawatan] ${label} gagal: ${error.message}`));
  const first = setTimeout(() => {
    void run();
    const repeat = setInterval(() => void run(), DAY);
    repeat.unref();
    timers.push(repeat);
  }, firstAfterMs);
  first.unref();
  timers.push(first);
}

/** Daily cleanup and backup, started a few minutes after boot so they never compete with start-up. */
export function startMaintenance(): void {
  if (config.maintenance.backupEnabled) every(() => runBackup().then((r) => console.log(`✔ Cadangan harian: ${r.directory} (${r.liveDatabases} database live${r.errors.length ? `, ${r.errors.length} galat` : ''})`)), 'Cadangan', 3 * 60_000);
  if (config.maintenance.cleanupEnabled) {
    every(
      () => runCleanup().then((r) => console.log(`✔ Pembersihan: ${r.nodeModulesRemoved} node_modules lama, ${r.failedRemoved} build gagal, ${r.orphansRemoved} yatim, ${r.exportsRemoved} ekspor`)),
      'Pembersihan',
      6 * 60_000,
    );
  }
}

export function stopMaintenance(): void {
  while (timers.length) clearTimeout(timers.pop());
}
