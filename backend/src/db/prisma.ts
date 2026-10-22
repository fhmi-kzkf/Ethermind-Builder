import { PrismaClient } from '@prisma/client';
import config from '../config';

declare global {
  // eslint-disable-next-line no-var
  var __prismaClient: PrismaClient | undefined;
}

export const prisma =
  global.__prismaClient ||
  new PrismaClient({
    log: config.server.env === 'development' ? ['warn', 'error'] : ['error'],
  });

if (config.server.env !== 'production') {
  global.__prismaClient = prisma;
}

/**
 * Initialize SQLite specific pragmas for high concurrency & performance
 * - WAL mode (Write-Ahead Logging) allows concurrent reads while writing
 * - busy_timeout prevents SQLITE_BUSY lock errors under parallel loads
 */
export async function initDatabase(): Promise<void> {
  try {
    if (config.db.url.startsWith('file:') || config.db.url.includes('.db')) {
      await prisma.$queryRawUnsafe(`PRAGMA journal_mode = WAL;`);
      await prisma.$queryRawUnsafe(`PRAGMA busy_timeout = 5000;`);
      await prisma.$queryRawUnsafe(`PRAGMA synchronous = NORMAL;`);
      console.log('✔ SQLite configured with WAL mode & 5000ms busy timeout');
    }
  } catch (error) {
    console.error('Failed to configure database pragmas:', error);
  }
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
}

export default prisma;
