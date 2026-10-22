import { createApp } from './src/app.js';
import { config } from './src/config.js';
import { initDatabase, prisma } from './src/db.js';
import { startBackupScheduler } from './src/lib/backup.js';

await initDatabase();

const app = createApp();
const server = app.listen(config.port, () => {
  console.log(`Server berjalan di port ${config.port} (${config.env})`);
});

const stopBackups = startBackupScheduler();

async function shutdown(signal) {
  console.log(`${signal} diterima, menutup server...`);
  stopBackups();
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
