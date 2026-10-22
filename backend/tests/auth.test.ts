import supertest from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';
import app from '../src/app';
import config from '../src/config';
import prisma, { initDatabase } from '../src/db/prisma';
import { bearer, makeUser } from './helpers/platform';

const request = supertest(app);

describe('Authentication API and roles', () => {
  beforeAll(async () => {
    await initDatabase();
  });

  const email = `tester-${Date.now()}@ethermind.ai`;
  const password = 'Password-123456';
  let token = '';

  it('registers a client and returns a token', async () => {
    const res = await request.post('/api/auth/register').send({ email, password });

    expect(res.status).toBe(201);
    expect(res.body.data.user.email).toBe(email);
    expect(res.body.data.user.role).toBe('client');
    expect(res.body.data.user.passwordHash).toBeUndefined();
    token = res.body.data.token;
  });

  it('never lets the caller choose a privileged role', async () => {
    const res = await request.post('/api/auth/register').send({ email: `sneaky-${Date.now()}@ethermind.ai`, password, role: 'admin' });

    expect(res.status).toBe(201);
    expect(res.body.data.user.role).toBe('client');

    const metrics = await request.get('/api/admin/metrics').set('Authorization', `Bearer ${res.body.data.token}`);
    expect(metrics.status).toBe(403);
  });

  it('rejects short passwords and malformed emails', async () => {
    expect((await request.post('/api/auth/register').send({ email: 'x@y.id', password: 'pendek' })).status).toBe(400);
    expect((await request.post('/api/auth/register').send({ email: 'bukan-email', password })).status).toBe(400);
  });

  it('rejects a duplicate email with 409, ignoring letter case', async () => {
    const res = await request.post('/api/auth/register').send({ email: email.toUpperCase(), password });

    expect(res.status).toBe(409);
  });

  it('logs in with valid credentials only, with one generic message for both failures', async () => {
    const ok = await request.post('/api/auth/login').send({ email, password });
    expect(ok.status).toBe(200);
    expect(ok.body.data.token).toBeDefined();

    const wrongPassword = await request.post('/api/auth/login').send({ email, password: 'salah-sekali' });
    const unknownEmail = await request.post('/api/auth/login').send({ email: 'tidak-ada@ethermind.ai', password });
    expect(wrongPassword.status).toBe(401);
    expect(unknownEmail.status).toBe(401);
    expect(wrongPassword.body.error).toBe(unknownEmail.body.error);
  });

  it('returns the profile for a valid token and 401 for a missing or forged one', async () => {
    const me = await request.get('/api/auth/me').set('Authorization', `Bearer ${token}`);
    expect(me.status).toBe(200);
    expect(me.body.data.email).toBe(email);

    expect((await request.get('/api/auth/me')).status).toBe(401);
    expect((await request.get('/api/auth/me').set('Authorization', 'Bearer palsu.palsu.palsu')).status).toBe(401);
  });

  it('stops honoring a token once its account is deleted', async () => {
    const user = await makeUser('client');
    expect((await request.get('/api/auth/me').set(bearer(user))).status).toBe(200);

    await prisma.user.delete({ where: { id: user.id } });

    expect((await request.get('/api/auth/me').set(bearer(user))).status).toBe(401);
  });

  it('lets only an admin create operator accounts', async () => {
    const client = await makeUser('client');
    const admin = await makeUser('admin');
    const body = { email: `ops-${Date.now()}@ethermind.ai`, password, role: 'operator' };

    expect((await request.post('/api/auth/staff').set(bearer(client)).send(body)).status).toBe(403);

    const created = await request.post('/api/auth/staff').set(bearer(admin)).send(body);
    expect(created.status).toBe(201);
    expect(created.body.data.role).toBe('operator');

    const login = await request.post('/api/auth/login').send({ email: body.email, password });
    const metrics = await request.get('/api/admin/metrics').set('Authorization', `Bearer ${login.body.data.token}`);
    expect(metrics.status).toBe(200);
  });

  it('never signs anyone in from an email the client merely claims (SSO bypass)', async () => {
    const victim = await makeUser('admin');

    for (const path of ['/api/auth/firebase-sso', '/api/auth/sso']) {
      const claimed = await request.post(path).send({ email: victim.email });
      expect(claimed.status).toBeGreaterThanOrEqual(400);
      expect(claimed.body.data?.token).toBeUndefined();

      const withFakeToken = await request.post(path).send({ email: victim.email, idToken: 'x'.repeat(40) });
      expect(withFakeToken.status).toBeGreaterThanOrEqual(400);
      expect(withFakeToken.body.data?.token).toBeUndefined();
    }

    const fresh = `sso-new-${Date.now()}@ethermind.ai`;
    await request.post('/api/auth/firebase-sso').send({ email: fresh });
    expect(await prisma.user.findUnique({ where: { email: fresh } })).toBeNull();
  });

  it('keeps the one-click demo accounts off unless demo login is enabled', async () => {
    expect(config.server.demoLogin).toBe(false);
    const closed = await request.post('/api/auth/demo').send({ role: 'admin' });
    expect(closed.status).toBe(404);
    expect(closed.body.data?.token).toBeUndefined();

    config.server.demoLogin = true;
    try {
      const open = await request.post('/api/auth/demo').send({ role: 'operator' });
      expect(open.status).toBe(200);
      expect(open.body.data.user.email).toBe('operator@ethermind.ai');
      expect(open.body.data.user.role).toBe('operator');

      const again = await request.post('/api/auth/demo').send({ role: 'operator' });
      expect(again.body.data.user.id).toBe(open.body.data.user.id);
      expect((await request.post('/api/auth/demo').send({ role: 'superuser' })).status).toBe(400);
    } finally {
      config.server.demoLogin = false;
    }
  });
});
