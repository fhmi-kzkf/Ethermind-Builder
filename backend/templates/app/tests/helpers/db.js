import { prisma } from '../../src/db.js';

export { prisma };

/** Empties every table. Call it in beforeEach so each test starts from a known state. */
export async function resetDb() {
  const tables = await prisma.$queryRawUnsafe(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE '_prisma%' AND name NOT LIKE 'sqlite_%'"
  );
  await prisma.$executeRawUnsafe('PRAGMA foreign_keys = OFF');
  for (const { name } of tables) {
    await prisma.$executeRawUnsafe(`DELETE FROM "${name}"`);
  }
  await prisma.$executeRawUnsafe('PRAGMA foreign_keys = ON');
}
