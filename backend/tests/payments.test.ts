import fs from 'fs';
import path from 'path';
import supertest from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import app from '../src/app';
import config from '../src/config';
import prisma, { initDatabase } from '../src/db/prisma';
import { parseQris, parseTlv } from '../src/services/payments/qris';
import { makeStaticQris } from './helpers/qris';
import { bearer, makeUser, TestUser } from './helpers/platform';

const request = supertest(app);
const originalQris = config.payments.qrisStatic;

/** A finished project with a real workspace folder, built by `model`. */
async function finishedProject(owner: TestUser, model: string) {
  const project = await prisma.project.create({ data: { userId: owner.id, name: 'Toko Bayar', status: 'ready', conversation: { create: {} } } });
  const job = await prisma.job.create({ data: { projectId: project.id, status: 'completed', model, finishedAt: new Date() } });
  const dir = path.resolve(config.storage.workspacesDir, `${project.id}_${job.id}`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'package.json'), '{"name":"x"}');
  await prisma.project.update({ where: { id: project.id }, data: { repoPath: dir } });
  return project.id;
}

describe('paying for the source download with QRIS', () => {
  let owner: TestUser;
  let stranger: TestUser;
  let operator: TestUser;

  beforeAll(async () => {
    await initDatabase();
    [owner, stranger, operator] = await Promise.all([makeUser('client'), makeUser('client'), makeUser('operator')]);
  });

  afterAll(() => {
    config.payments.qrisStatic = originalQris;
  });

  describe('when no QRIS is configured', () => {
    it('keeps the download free and says no payment is required', async () => {
      config.payments.qrisStatic = '';
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const state = (await request.get(`/api/projects/${id}/payment`).set(bearer(owner)).expect(200)).body.data;
      expect(state).toMatchObject({ enabled: false, required: false });
      await request.get(`/api/projects/${id}/export`).set(bearer(owner)).expect(200);
      await request.post(`/api/projects/${id}/payment`).set(bearer(owner)).expect(409);
    });
  });

  describe('when QRIS is configured', () => {
    const create = (id: string, who: TestUser) => request.post(`/api/projects/${id}/payment`).set(bearer(who));

    beforeAll(() => {
      config.payments.qrisStatic = makeStaticQris('Toko Uji');
    });

    it('locks the download until the order is confirmed', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const res = await request.get(`/api/projects/${id}/export`).set(bearer(owner));
      expect(res.status).toBe(402);
      expect(res.body.code).toBe('payment_required');
    });

    it('prices a Basic build at the download fee and a Pro build at the package price', async () => {
      const basic = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const pro = await finishedProject(owner, 'groq:openai/gpt-oss-120b');
      expect((await request.get(`/api/projects/${basic}/payment`).set(bearer(owner))).body.data.amount).toBe(35000);
      expect((await request.get(`/api/projects/${pro}/payment`).set(bearer(owner))).body.data.amount).toBe(100000);
    });

    it('issues a dynamic QRIS carrying price plus unique code, and reuses it on repeat', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const first = (await create(id, owner).expect(201)).body.data;
      expect(first.merchant).toBe('Toko Uji');
      const order = first.order;
      expect(order.uniqueCode).toBeGreaterThanOrEqual(1);
      expect(order.uniqueCode).toBeLessThanOrEqual(999);
      expect(order.total).toBe(35000 + order.uniqueCode);

      expect(() => parseQris(order.qris)).not.toThrow();
      const fields = parseTlv(order.qris);
      expect(fields.find((f) => f.tag === '01')?.value).toBe('12');
      expect(fields.find((f) => f.tag === '54')?.value).toBe(String(order.total));

      const second = (await create(id, owner).expect(201)).body.data;
      expect(second.order.id).toBe(order.id);
    });

    it('never gives two waiting orders of the same price the same total', async () => {
      const ids = await Promise.all(Array.from({ length: 6 }, () => finishedProject(owner, 'groq:openai/gpt-oss-20b')));
      const totals: number[] = [];
      for (const id of ids) totals.push((await create(id, owner).expect(201)).body.data.order.total);
      expect(new Set(totals).size).toBe(totals.length);
    });

    it('shows other people a 404 instead of the order', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      await create(id, stranger).expect(404);
      await request.get(`/api/projects/${id}/payment`).set(bearer(stranger)).expect(404);
      await request.post(`/api/projects/${id}/payment/report`).set(bearer(stranger)).send({ orderId: 'x' }).expect(404);
    });

    it('does not unlock on "I paid", only after an operator confirms', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const orderId = (await create(id, owner).expect(201)).body.data.order.id;

      const reported = (await request.post(`/api/projects/${id}/payment/report`).set(bearer(owner)).send({ orderId }).expect(200)).body.data;
      expect(reported.order.status).toBe('reported');
      expect(reported.required).toBe(true);
      await request.get(`/api/projects/${id}/export`).set(bearer(owner)).expect(402);

      await request.post(`/api/admin/payments/${orderId}/confirm`).set(bearer(owner)).expect(403);
      await request.post(`/api/admin/payments/${orderId}/confirm`).set(bearer(operator)).expect(200);

      const state = (await request.get(`/api/projects/${id}/payment`).set(bearer(owner))).body.data;
      expect(state).toMatchObject({ paid: true, required: false, order: null });
      const zip = await request.get(`/api/projects/${id}/export`).set(bearer(owner));
      expect(zip.status).toBe(200);
      expect(zip.headers['content-type']).toContain('application/zip');
      await create(id, owner).expect(409);
    });

    it('lists waiting orders for operators with the project and owner, and lets them reject', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const orderId = (await create(id, owner).expect(201)).body.data.order.id;
      await request.get('/api/admin/payments').set(bearer(owner)).expect(403);
      const list = (await request.get('/api/admin/payments').set(bearer(operator)).expect(200)).body.data as Array<{ id: string; project: { name: string; ownerEmail: string } }>;
      const row = list.find((r) => r.id === orderId);
      expect(row?.project).toMatchObject({ name: 'Toko Bayar', ownerEmail: owner.email });

      await request.post(`/api/admin/payments/${orderId}/reject`).set(bearer(operator)).expect(200);
      await request.post(`/api/projects/${id}/payment/report`).set(bearer(owner)).send({ orderId }).expect(409);
      await request.get(`/api/projects/${id}/export`).set(bearer(owner)).expect(402);
      // After a rejection the buyer can start over with a fresh order.
      const fresh = (await create(id, owner).expect(201)).body.data.order;
      expect(fresh.id).not.toBe(orderId);
    });

    it('cannot reject an order that is already confirmed', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const orderId = (await create(id, owner).expect(201)).body.data.order.id;
      await request.post(`/api/admin/payments/${orderId}/confirm`).set(bearer(operator)).expect(200);
      await request.post(`/api/admin/payments/${orderId}/reject`).set(bearer(operator)).expect(409);
    });

    it('lets a lapsed order be reported and replaced, and frees its unique code', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const orderId = (await create(id, owner).expect(201)).body.data.order.id;
      await prisma.payment.update({ where: { id: orderId }, data: { expiresAt: new Date(Date.now() - 1000) } });

      const state = (await request.get(`/api/projects/${id}/payment`).set(bearer(owner))).body.data;
      expect(state.order.status).toBe('expired');
      const fresh = (await create(id, owner).expect(201)).body.data.order;
      expect(fresh.id).not.toBe(orderId);
      expect(fresh.status).toBe('pending');

      // A buyer who paid just after the code lapsed is still visible to operators, and can be confirmed.
      const list = (await request.get('/api/admin/payments').set(bearer(operator))).body.data as Array<{ id: string; status: string }>;
      expect(list.find((r) => r.id === orderId)?.status).toBe('expired');
      await request.post(`/api/admin/payments/${orderId}/confirm`).set(bearer(operator)).expect(200);
      expect((await request.get(`/api/projects/${id}/export`).set(bearer(owner))).status).toBe(200);
    });

    it('lets operators download without paying', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      await request.get(`/api/projects/${id}/export`).set(bearer(operator)).expect(200);
    });

    it('asks for payment only after a build has finished', async () => {
      const project = await prisma.project.create({ data: { userId: owner.id, name: 'Belum jadi', conversation: { create: {} } } });
      await create(project.id, owner).expect(409);
      const state = (await request.get(`/api/projects/${project.id}/payment`).set(bearer(owner))).body.data;
      expect(state).toMatchObject({ required: false, amount: null });
    });

    it('explains itself when the configured QRIS is damaged, without leaking it', async () => {
      const id = await finishedProject(owner, 'groq:openai/gpt-oss-20b');
      const good = config.payments.qrisStatic;
      config.payments.qrisStatic = good.slice(0, -1) + (good.endsWith('0') ? '1' : '0');
      try {
        const state = await request.get(`/api/projects/${id}/payment`).set(bearer(owner));
        expect(state.status).toBe(503);
        expect(state.body.error).toContain('Hubungi operator');
        expect(JSON.stringify(state.body)).not.toContain(good.slice(0, 30));
        // Failing closed also means the download does not quietly become free.
        expect((await request.get(`/api/projects/${id}/export`).set(bearer(owner))).status).toBe(503);
      } finally {
        config.payments.qrisStatic = good;
      }
    });
  });
});
