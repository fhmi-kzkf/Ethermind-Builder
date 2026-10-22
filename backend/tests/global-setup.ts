import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

/** Gives the tests their own database and storage so they never touch dev data. */
export default function setup() {
  const prismaDir = path.resolve('prisma');
  for (const suffix of ['', '-journal', '-wal', '-shm']) fs.rmSync(path.join(prismaDir, `test.db${suffix}`), { force: true });
  fs.rmSync(path.resolve('storage-test'), { recursive: true, force: true });

  execFileSync(process.execPath, [path.resolve('node_modules/prisma/build/index.js'), 'db', 'push', '--force-reset', '--skip-generate', '--accept-data-loss'], {
    env: { ...process.env, DATABASE_URL: 'file:./test.db' },
    stdio: 'pipe',
  });
}

export function teardown() {
  fs.rmSync(path.resolve('storage-test'), { recursive: true, force: true });
}
