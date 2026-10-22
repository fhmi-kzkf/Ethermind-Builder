import { beforeEach, describe, expect, it } from 'vitest';
import { client } from '../helpers/app.js';
import { prisma, resetDb } from '../helpers/db.js';
import { signIn } from '../helpers/auth.js';
import { factories } from '../factories.js';

describe('POST /api/sales (checkout)', () => {
  let cashier;

  beforeEach(async () => {
    await resetDb();
    ({ agent: cashier } = await signIn('kasir'));
  });

  it('records the sale, its lines and the total, and reduces stock', async () => {
    const tea = await factories.product({ price: 5000, stock: 10 });
    const rice = await factories.product({ price: 70000, stock: 4 });

    const res = await cashier.post('/api/sales').send({
      items: [
        { productId: tea.id, quantity: 3 },
        { productId: rice.id, quantity: 1 },
      ],
      method: 'qris',
    });

    expect(res.status).toBe(201);
    expect(res.body.data.total).toBe(85000);
    expect(res.body.data.receiptNumber).toMatch(/^STR-\d{8}-0001$/);

    const sale = await prisma.sale.findUnique({ where: { id: res.body.data.id }, include: { saleItems: true } });
    expect(sale.method).toBe('qris');
    expect(sale.saleItems).toHaveLength(2);
    expect((await prisma.product.findUnique({ where: { id: tea.id } })).stock).toBe(7);
    expect((await prisma.product.findUnique({ where: { id: rice.id } })).stock).toBe(3);
  });

  it('adds up the same product sent on two lines', async () => {
    const tea = await factories.product({ price: 5000, stock: 10 });

    const res = await cashier.post('/api/sales').send({
      items: [
        { productId: tea.id, quantity: 2 },
        { productId: tea.id, quantity: 3 },
      ],
    });

    expect(res.status).toBe(201);
    expect(res.body.data.total).toBe(25000);
    expect((await prisma.product.findUnique({ where: { id: tea.id } })).stock).toBe(5);
    expect(await prisma.saleItem.count()).toBe(1);
  });

  it('refuses a sale that exceeds stock and changes nothing, even for the lines that were fine', async () => {
    const plenty = await factories.product({ stock: 10 });
    const scarce = await factories.product({ stock: 1 });

    const res = await cashier.post('/api/sales').send({
      items: [
        { productId: plenty.id, quantity: 2 },
        { productId: scarce.id, quantity: 2 },
      ],
    });

    expect(res.status).toBe(409);
    expect(res.body.error.message).toContain('tidak cukup');
    expect((await prisma.product.findUnique({ where: { id: plenty.id } })).stock).toBe(10);
    expect(await prisma.sale.count()).toBe(0);
  });

  it('does not sell a product that is no longer active', async () => {
    const retired = await factories.product({ status: 'nonaktif', stock: 5 });

    const res = await cashier.post('/api/sales').send({ items: [{ productId: retired.id, quantity: 1 }] });

    expect(res.status).toBe(409);
    expect(await prisma.sale.count()).toBe(0);
  });

  it('rejects an empty cart, a zero quantity and an unknown product', async () => {
    const product = await factories.product({ stock: 5 });

    const empty = await cashier.post('/api/sales').send({ items: [] });
    expect(empty.status).toBe(400);
    expect(empty.body.error.code).toBe('VALIDATION_FAILED');

    const zero = await cashier.post('/api/sales').send({ items: [{ productId: product.id, quantity: 0 }] });
    expect(zero.status).toBe(400);

    const unknown = await cashier.post('/api/sales').send({ items: [{ productId: 'tidak-ada', quantity: 1 }] });
    expect(unknown.status).toBe(400);
    expect(await prisma.sale.count()).toBe(0);
  });

  it('numbers receipts in sequence', async () => {
    const product = await factories.product({ stock: 10 });

    const first = await cashier.post('/api/sales').send({ items: [{ productId: product.id, quantity: 1 }] });
    const second = await cashier.post('/api/sales').send({ items: [{ productId: product.id, quantity: 1 }] });

    expect(first.body.data.receiptNumber).toMatch(/0001$/);
    expect(second.body.data.receiptNumber).toMatch(/0002$/);
  });

  it('requires sign-in', async () => {
    const res = await (await client()).post('/api/sales').send({ items: [] });

    expect(res.status).toBe(401);
  });
});
