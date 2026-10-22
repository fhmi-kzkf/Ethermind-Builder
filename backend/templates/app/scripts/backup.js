import { initDatabase, prisma } from '../src/db.js';
import { createBackup, pruneBackups } from '../src/lib/backup.js';

try {
  await initDatabase();
  const file = await createBackup();
  const removed = await pruneBackups();
  console.log(`Backup dibuat: ${file}`);
  if (removed.length > 0) console.log(`Backup lama dihapus: ${removed.length}`);
} catch (error) {
  console.error('Backup gagal:', error.message);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
