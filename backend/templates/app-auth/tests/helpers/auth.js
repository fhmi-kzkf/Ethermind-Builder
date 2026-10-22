import bcrypt from 'bcryptjs';
import request from 'supertest';
import { appConfig } from '../../src/app.config.js';
import { testApp } from './app.js';
import { prisma } from './db.js';

export const TEST_PASSWORD = 'kata-sandi-uji-123';

let counter = 0;

/** Creates a user directly in the database. Cost 4 keeps tests fast; production uses 12. */
export async function createUser({ role = appConfig.auth.roles[0], active = true, name } = {}) {
  counter += 1;
  return prisma.user.create({
    data: {
      email: `${role}-${counter}@uji.test`,
      name: name || `Pengguna ${role} ${counter}`,
      role,
      active,
      passwordHash: await bcrypt.hash(TEST_PASSWORD, 4),
    },
  });
}

/** Returns a supertest agent that is already signed in as a fresh user with the given role. */
export async function signIn(role = appConfig.auth.roles[0]) {
  const user = await createUser({ role });
  const agent = request.agent(await testApp());
  const res = await agent.post('/api/auth/login').send({ email: user.email, password: TEST_PASSWORD });
  if (res.status !== 200) throw new Error(`Test sign-in failed: ${res.status} ${JSON.stringify(res.body)}`);
  return { agent, user };
}
