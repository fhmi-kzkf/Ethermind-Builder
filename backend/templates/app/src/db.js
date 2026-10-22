import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PrismaClient } from '@prisma/client';
import { config } from './config.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Prisma resolves relative sqlite paths against the schema folder, so do the same here. A single
 * connection keeps SQLite to one writer, which is what WAL mode expects.
 */
export function resolveDatabaseUrl(url) {
  if (!url.startsWith('file:')) return url;
  const [filePart, query] = url.slice('file:'.length).split('?');
  const absolute = path.isAbsolute(filePart) ? filePart : path.resolve(rootDir, 'prisma', filePart);
  const params = new URLSearchParams(query || '');
  if (!params.has('connection_limit')) params.set('connection_limit', '1');
  return `file:${absolute.replace(/\\/g, '/')}?${params.toString()}`;
}

export function databaseFilePath(url = config.databaseUrl) {
  return resolveDatabaseUrl(url).slice('file:'.length).split('?')[0];
}

export const prisma = new PrismaClient({
  datasources: { db: { url: resolveDatabaseUrl(config.databaseUrl) } },
  log: [],
});

export async function initDatabase() {
  await prisma.$queryRawUnsafe('PRAGMA journal_mode = WAL');
  await prisma.$queryRawUnsafe('PRAGMA busy_timeout = 5000');
  await prisma.$queryRawUnsafe('PRAGMA synchronous = NORMAL');
  await prisma.$queryRawUnsafe('PRAGMA foreign_keys = ON');
}
