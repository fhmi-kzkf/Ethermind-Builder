import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../src/config';
import prisma from '../../src/db/prisma';

let counter = 0;

export interface TestUser {
  id: string;
  email: string;
  role: string;
  token: string;
}

/** Creates an account directly in the database (cost 4 keeps tests fast) and signs a token for it. */
export async function makeUser(role: 'client' | 'operator' | 'admin' = 'client'): Promise<TestUser> {
  counter += 1;
  const user = await prisma.user.create({
    data: { email: `${role}-${Date.now()}-${counter}@uji.test`, role, passwordHash: await bcrypt.hash('kata-sandi-uji-123', 4) },
  });
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, config.auth.jwtSecret, { expiresIn: '1h' });
  return { id: user.id, email: user.email, role: user.role, token };
}

export const bearer = (user: TestUser) => ({ Authorization: `Bearer ${user.token}` });

/** A project with an approved spec and a finished job, owned by `owner`. */
export async function makeProjectWithJob(owner: TestUser, jobStatus = 'failed') {
  const project = await prisma.project.create({ data: { userId: owner.id, name: 'Proyek Uji', conversation: { create: {} } } });
  const spec = await prisma.spec.create({ data: { projectId: project.id, content: '{}' } });
  const job = await prisma.job.create({ data: { projectId: project.id, specId: spec.id, status: jobStatus, model: 'nvidia/nemotron-3-ultra-550b-a55b' } });
  return { project, spec, job };
}
