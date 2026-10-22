import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const TEST_DB_URL = 'file:../data/test.db';

/** Builds a fresh test database from prisma/schema.prisma before any test file runs. */
export default function setup() {
  const dataDir = path.resolve('data');
  fs.mkdirSync(dataDir, { recursive: true });
  for (const suffix of ['', '-wal', '-shm', '-journal']) {
    fs.rmSync(path.join(dataDir, `test.db${suffix}`), { force: true });
  }

  execFileSync(process.execPath, [path.resolve('node_modules/prisma/build/index.js'), 'db', 'push', '--force-reset', '--skip-generate', '--accept-data-loss'], {
    env: { ...process.env, DATABASE_URL: TEST_DB_URL },
    stdio: 'pipe',
  });
}
