import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { PrismaClient } from '@prisma/client';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { initDatabase, resolveDatabaseUrl } from '../src/db.js';
import { createBackup, listBackups, pruneBackups } from '../src/lib/backup.js';

let dir;

beforeEach(async () => {
  await initDatabase();
  dir = await fs.mkdtemp(path.join(os.tmpdir(), 'backup-test-'));
});

afterEach(async () => {
  await fs.rm(dir, { recursive: true, force: true });
});

async function integrityOf(file) {
  const client = new PrismaClient({ datasources: { db: { url: resolveDatabaseUrl(`file:${file}`) } } });
  try {
    const rows = await client.$queryRawUnsafe('PRAGMA integrity_check');
    return rows[0].integrity_check;
  } finally {
    await client.$disconnect();
  }
}

describe('database backups', () => {
  it('creates a snapshot that passes the SQLite integrity check', async () => {
    const file = await createBackup(dir);

    expect(path.dirname(file)).toBe(dir);
    expect((await fs.stat(file)).size).toBeGreaterThan(0);
    expect(await integrityOf(file)).toBe('ok');
  });

  it('lists backups oldest first and prunes down to the limit', async () => {
    for (const name of ['backup-2026-01-01.db', 'backup-2026-01-02.db', 'backup-2026-01-03.db']) {
      await fs.writeFile(path.join(dir, name), 'x');
    }
    await fs.writeFile(path.join(dir, 'notes.txt'), 'not a backup');

    expect(await listBackups(dir)).toEqual(['backup-2026-01-01.db', 'backup-2026-01-02.db', 'backup-2026-01-03.db']);

    const removed = await pruneBackups(dir, 2);

    expect(removed).toEqual(['backup-2026-01-01.db']);
    expect(await listBackups(dir)).toEqual(['backup-2026-01-02.db', 'backup-2026-01-03.db']);
    await expect(fs.access(path.join(dir, 'notes.txt'))).resolves.toBeUndefined();
  });

  it('returns an empty list when the backup folder does not exist yet', async () => {
    expect(await listBackups(path.join(dir, 'missing'))).toEqual([]);
  });
});
