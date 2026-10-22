import { beforeEach, describe, expect, it } from 'vitest';
import { appConfig } from '../src/app.config.js';
import { client } from './helpers/app.js';
import { createUser, signIn, TEST_PASSWORD } from './helpers/auth.js';
import { prisma, resetDb } from './helpers/db.js';

const adminRole = appConfig.auth.roles[0];

describe('login and session', () => {
  beforeEach(resetDb);

  it('signs in with correct credentials and sets an httpOnly session cookie', async () => {
    const user = await createUser();
    const res = await (await client()).post('/api/auth/login').send({ email: user.email, password: TEST_PASSWORD });

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual({ id: user.id, email: user.email, name: user.name, role: user.role });
    expect(res.body.data.passwordHash).toBeUndefined();
    const cookie = res.headers['set-cookie'].join(';');
    expect(cookie).toContain('session=');
    expect(cookie).toContain('HttpOnly');
    expect(cookie).toContain('SameSite=Lax');
  });

  it('gives the same generic error for a wrong password and an unknown email', async () => {
    const user = await createUser();
    const api = await client();

    const wrongPassword = await api.post('/api/auth/login').send({ email: user.email, password: 'salah-sekali' });
    const unknownEmail = await api.post('/api/auth/login').send({ email: 'tidak-ada@uji.test', password: 'apa-saja' });

    expect(wrongPassword.status).toBe(401);
    expect(unknownEmail.status).toBe(401);
    expect(wrongPassword.body.error.message).toBe(unknownEmail.body.error.message);
  });

  it('rejects login for a deactivated account', async () => {
    const user = await createUser({ active: false });
    const res = await (await client()).post('/api/auth/login').send({ email: user.email, password: TEST_PASSWORD });

    expect(res.status).toBe(401);
  });

  it('validates the login body', async () => {
    const res = await (await client()).post('/api/auth/login').send({ email: 'bukan-email' });

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_FAILED');
    expect(res.body.error.details.map((d) => d.field).sort()).toEqual(['email', 'password']);
  });

  it('returns the signed-in user from /me and 401 without a session', async () => {
    const { agent, user } = await signIn();

    expect((await agent.get('/api/auth/me')).body.data.id).toBe(user.id);
    expect((await (await client()).get('/api/auth/me')).status).toBe(401);
  });

  it('ends the session on logout', async () => {
    const { agent } = await signIn();

    expect((await agent.post('/api/auth/logout')).status).toBe(204);
    expect((await agent.get('/api/auth/me')).status).toBe(401);
  });

  it('cuts access immediately when the account is deactivated', async () => {
    const { agent, user } = await signIn();
    await prisma.user.update({ where: { id: user.id }, data: { active: false } });

    expect((await agent.get('/api/auth/me')).status).toBe(401);
  });

  it('changes the password only when the current one is right', async () => {
    const { agent, user } = await signIn();

    const wrong = await agent.post('/api/auth/change-password').send({ currentPassword: 'salah', newPassword: 'kata-sandi-baru-123' });
    expect(wrong.status).toBe(400);
    expect(wrong.body.error.details[0].field).toBe('currentPassword');

    const short = await agent.post('/api/auth/change-password').send({ currentPassword: TEST_PASSWORD, newPassword: 'pendek' });
    expect(short.status).toBe(400);

    const ok = await agent.post('/api/auth/change-password').send({ currentPassword: TEST_PASSWORD, newPassword: 'kata-sandi-baru-123' });
    expect(ok.status).toBe(204);

    const relogin = await (await client()).post('/api/auth/login').send({ email: user.email, password: 'kata-sandi-baru-123' });
    expect(relogin.status).toBe(200);
  });
});

describe('user management', () => {
  beforeEach(resetDb);

  it('is closed to anonymous visitors', async () => {
    expect((await (await client()).get('/api/users')).status).toBe(401);
  });

  it('lets the administrator create a user without exposing the password hash', async () => {
    const { agent } = await signIn(adminRole);
    const otherRole = appConfig.auth.roles[1] || adminRole;

    const res = await agent.post('/api/users').send({ email: 'Baru@Uji.Test', name: 'Orang Baru', role: otherRole, password: 'kata-sandi-awal-1' });

    expect(res.status).toBe(201);
    expect(res.body.data.email).toBe('baru@uji.test');
    expect(res.body.data.passwordHash).toBeUndefined();

    const list = await agent.get('/api/users');
    expect(list.body.data.every((u) => u.passwordHash === undefined)).toBe(true);
    expect(list.body.meta.total).toBe(2);
  });

  it('rejects a duplicate email with 409', async () => {
    const { agent, user } = await signIn(adminRole);
    const res = await agent.post('/api/users').send({ email: user.email, name: 'Kembar', role: adminRole, password: 'kata-sandi-awal-1' });

    expect(res.status).toBe(409);
  });

  it('refuses to remove the last active administrator', async () => {
    const { agent, user } = await signIn(adminRole);
    const res = await agent.patch(`/api/users/${user.id}`).send({ active: false });

    expect(res.status).toBe(409);
    expect(res.body.error.message).toContain('administrator');
  });

  it('allows deactivating an administrator when another one remains', async () => {
    const { agent } = await signIn(adminRole);
    const spare = await createUser({ role: adminRole });
    const res = await agent.patch(`/api/users/${spare.id}`).send({ active: false });

    expect(res.status).toBe(200);
    expect(res.body.data.active).toBe(false);
  });

  it('returns 404 for an unknown user and 400 for an empty update', async () => {
    const { agent, user } = await signIn(adminRole);

    expect((await agent.patch('/api/users/tidak-ada').send({ name: 'X' })).status).toBe(404);
    expect((await agent.patch(`/api/users/${user.id}`).send({})).status).toBe(400);
  });

  if (appConfig.auth.roles.length > 1) {
    it('forbids non-administrators from managing users', async () => {
      const { agent } = await signIn(appConfig.auth.roles[1]);

      expect((await agent.get('/api/users')).status).toBe(403);
    });
  }
});
