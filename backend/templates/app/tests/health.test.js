import { beforeEach, describe, expect, it } from 'vitest';
import { client } from './helpers/app.js';
import { resetDb } from './helpers/db.js';

describe('platform basics', () => {
  beforeEach(resetDb);

  it('reports health with a live database check', async () => {
    const res = await (await client()).get('/api/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.database).toBe('ok');
  });

  it('answers unknown API paths with the standard error shape', async () => {
    const res = await (await client()).get('/api/does-not-exist');

    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('NOT_FOUND');
    expect(typeof res.body.error.message).toBe('string');
  });

  it('rejects a malformed JSON body with 400 instead of crashing', async () => {
    const res = await (await client()).post('/api/health').set('Content-Type', 'application/json').send('{"broken"');

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('BAD_REQUEST');
  });

  it('rejects bodies over the size limit', async () => {
    const res = await (await client()).post('/api/health').send({ blob: 'x'.repeat(150 * 1024) });

    expect(res.status).toBe(413);
    expect(res.body.error.code).toBe('PAYLOAD_TOO_LARGE');
  });

  it('sends a strict content security policy and hides the framework', async () => {
    const res = await (await client()).get('/');

    expect(res.status).toBe(200);
    expect(res.headers['x-powered-by']).toBeUndefined();
    expect(res.headers['content-security-policy']).toContain("script-src 'self'");
    expect(res.headers['content-security-policy']).toContain("frame-ancestors 'none'");
    expect(res.headers['x-content-type-options']).toBe('nosniff');
  });

  it('serves the app shell for client-side routes', async () => {
    const res = await (await client()).get('/some/deep/link');

    expect(res.status).toBe(200);
    expect(res.text).toContain('<div id="app"');
  });

  it('refuses cross-site writes', async () => {
    const res = await (await client()).post('/api/health').set('Origin', 'https://evil.example').send({});

    expect(res.status).toBe(403);
    expect(res.body.error.code).toBe('FORBIDDEN');
  });
});
