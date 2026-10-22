import fs from 'node:fs/promises';
import path from 'node:path';
import { PrismaClient } from '@prisma/client';
import { databaseFilePath, resolveDatabaseUrl } from '../src/db.js';

const [backupArg] = process.argv.slice(2);

if (!backupArg) {
  console.error('Pemakaian: npm run restore -- <file-backup.db>\nHentikan server sebelum memulihkan.');
  process.exit(1);
}

const backupFile = path.resolve(backupArg);
const target = databaseFilePath();

async function checkIntegrity(file) {
  const client = new PrismaClient({ datasources: { db: { url: resolveDatabaseUrl(`file:${file}`) } } });
  try {
    const rows = await client.$queryRawUnsafe('PRAGMA integrity_check');
    return rows.length === 1 && rows[0].integrity_check === 'ok';
  } finally {
    await client.$disconnect();
  }
}

try {
  await fs.access(backupFile);
  if (!(await checkIntegrity(backupFile))) {
    throw new Error('File backup rusak, pemulihan dibatalkan.');
  }

  const safetyCopy = `${target}.before-restore`;
  await fs.copyFile(target, safetyCopy).catch((error) => {
    if (error.code !== 'ENOENT') throw error;
  });
  await fs.rm(`${target}-wal`, { force: true });
  await fs.rm(`${target}-shm`, { force: true });
  await fs.copyFile(backupFile, target);

  console.log(`Database dipulihkan dari ${backupFile}`);
  console.log(`Salinan database sebelumnya: ${safetyCopy}`);
} catch (error) {
  console.error('Pemulihan gagal:', error.message);
  process.exitCode = 1;
}
