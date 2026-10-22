import { beforeEach, describe, expect, it } from 'vitest';
import { client } from '../helpers/app.js';
import { resetDb } from '../helpers/db.js';
import { signIn } from '../helpers/auth.js';
import { factories } from '../factories.js';

describe('GET /api/reports/summary', () => {
  let admin;

  beforeEach(async () => {
    await resetDb();
    ({ agent: admin } = await signIn('admin'));
  });

  it('returns zeros and an empty list when nothing has happened', async () => {
    const res = await admin.get('/api/reports/summary');

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual({ todayTotal: 0, transactionCount: 0, lowStock: [] });
  });

  it('adds up only today\'s sales', async () => {
    await factories.sale({ total: 40000 });
    await factories.sale({ total: 25000 });
    await factories.sale({ total: 99000, paidAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) });

    const res = await admin.get('/api/reports/summary');

    expect(res.body.data.todayTotal).toBe(65000);
    expect(res.body.data.transactionCount).toBe(2);
  });

  it('lists active products at or below the stock limit, lowest first, and ignores retired ones', async () => {
    await factories.product({ name: 'Hampir habis', stock: 1 });
    await factories.product({ name: 'Tepat di batas', stock: 5 });
    await factories.product({ name: 'Masih banyak', stock: 6 });
    await factories.product({ name: 'Sudah dihentikan', stock: 0, status: 'nonaktif' });

    const res = await admin.get('/api/reports/summary');

    expect(res.body.data.lowStock.map((p) => p.name)).toEqual(['Hampir habis', 'Tepat di batas']);
  });

  it('requires sign-in', async () => {
    expect((await (await client()).get('/api/reports/summary')).status).toBe(401);
  });
});
