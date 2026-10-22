import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import bcrypt from 'bcryptjs';
import { appConfig } from '../src/app.config.js';
import { config } from '../src/config.js';
import { initDatabase, prisma } from '../src/db.js';

/** Creates the first administrator from SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD. Safe to run repeatedly. */
async function seedAdministrator() {
  if (!config.auth.enabled) return;

  const email = (process.env.SEED_ADMIN_EMAIL || 'admin@example.com').toLowerCase();
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (!password || password.length < 10) {
    console.warn('SEED_ADMIN_PASSWORD belum diisi (minimal 10 karakter): akun administrator tidak dibuat.');
    return;
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return;

  await prisma.user.create({
    data: {
      email,
      name: 'Administrator',
      role: appConfig.auth.roles[0],
      passwordHash: await bcrypt.hash(password, 12),
    },
  });
  console.log(`Akun administrator dibuat: ${email}`);
}

/** Demo records live in prisma/seed.data.js. Set SEED_DEMO_DATA=false to skip them in a real deployment. */
async function seedDemoData() {
  if (process.env.SEED_DEMO_DATA === 'false') return;

  const file = path.resolve(import.meta.dirname, 'seed.data.js');
  if (!existsSync(file)) return;

  const { default: seed } = await import(pathToFileURL(file).href);
  await seed(prisma);
  console.log('Data contoh dimuat.');
}

try {
  await initDatabase();
  await seedAdministrator();
  await seedDemoData();
} catch (error) {
  console.error('Seed gagal:', error);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
