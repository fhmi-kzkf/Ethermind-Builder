import { randomInt } from 'crypto';
import config from '../../config';
import prisma from '../../db/prisma';
import { AVAILABLE_MODELS, PLATFORM_PRICING } from '../llm/pricing';
import { merchantName, QrisError, toDynamicQris } from './qris';

/** An error that carries the HTTP status and a message fit to show the buyer. */
export class PaymentError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}

const OPEN = ['pending', 'reported'];

export interface OrderView {
  id: string;
  amount: number;
  uniqueCode: number;
  total: number;
  status: string;
  qris: string;
  expiresAt: string;
  createdAt: string;
}

export interface PaymentState {
  enabled: boolean;
  /** True when the download is locked for this person right now. */
  required: boolean;
  paid: boolean;
  amount: number | null;
  merchant: string;
  order: OrderView | null;
}

export interface Actor {
  id: string;
  role: string;
}

export const paymentsEnabled = () => config.payments.qrisStatic !== '';
const isElevated = (actor: Actor) => actor.role === 'admin' || actor.role === 'operator';

const view = (p: { id: string; amount: number; uniqueCode: number; total: number; status: string; qrisPayload: string; expiresAt: Date; createdAt: Date }): OrderView => ({
  id: p.id,
  amount: p.amount,
  uniqueCode: p.uniqueCode,
  total: p.total,
  status: p.status,
  qris: p.qrisPayload,
  expiresAt: p.expiresAt.toISOString(),
  createdAt: p.createdAt.toISOString(),
});

/** An order nobody reported in time gives its unique code back. */
async function expireStale(projectId?: string) {
  await prisma.payment.updateMany({ where: { status: 'pending', expiresAt: { lt: new Date() }, ...(projectId ? { projectId } : {}) }, data: { status: 'expired' } });
}

/**
 * What the source download costs for a project: the Basic download fee, or the Pro package price when a Pro engine
 * built any version of it. Null until a build has finished.
 */
export async function priceFor(projectId: string): Promise<number | null> {
  const jobs = await prisma.job.findMany({ where: { projectId, status: 'completed' }, select: { model: true } });
  if (jobs.length === 0) return null;
  const amounts = jobs.map((job) => {
    const info = job.model ? AVAILABLE_MODELS[job.model] : undefined;
    if (!info) return PLATFORM_PRICING.PRO_PRICE;
    return info.isFreeBuild ? info.zipExportPrice : info.pricePerApp;
  });
  return Math.max(...amounts);
}

export async function stateFor(projectId: string, actor: Actor): Promise<PaymentState> {
  const enabled = paymentsEnabled();
  if (!enabled) return { enabled, required: false, paid: false, amount: null, merchant: '', order: null };

  // A damaged QRIS_STATIC fails closed: the download stays locked and the buyer is told to contact the operator.
  let merchant: string;
  try {
    merchant = merchantName(config.payments.qrisStatic);
  } catch (error) {
    if (!(error instanceof QrisError)) throw error;
    console.error('[Payments] QRIS_STATIC tidak bisa dipakai:', error.message);
    throw new PaymentError('Pembayaran sedang tidak tersedia. Hubungi operator.', 503);
  }

  await expireStale(projectId);
  const [amount, paidOrder, openOrder] = await Promise.all([
    priceFor(projectId),
    prisma.payment.findFirst({ where: { projectId, status: 'paid' } }),
    prisma.payment.findFirst({ where: { projectId, status: { in: [...OPEN, 'expired'] } }, orderBy: { createdAt: 'desc' } }),
  ]);
  const paid = Boolean(paidOrder);
  const free = amount === null || amount <= 0;
  return {
    enabled,
    required: !paid && !free && !isElevated(actor),
    paid,
    amount,
    merchant,
    order: !paid && openOrder ? view(openOrder) : null,
  };
}

/** May this person download the source right now? */
export async function canDownload(projectId: string, actor: Actor): Promise<boolean> {
  if (!paymentsEnabled()) return true;
  return !(await stateFor(projectId, actor)).required;
}

export async function createOrder(projectId: string, actor: Actor): Promise<OrderView> {
  if (!paymentsEnabled()) throw new PaymentError('Pembayaran belum diaktifkan di server ini.', 409);
  const state = await stateFor(projectId, actor);
  if (state.paid) throw new PaymentError('Proyek ini sudah dibayar.', 409);
  if (state.amount === null) throw new PaymentError('Pembayaran dibuka setelah build selesai.', 409);
  if (state.amount <= 0) throw new PaymentError('Proyek ini tidak memerlukan pembayaran.', 409);

  // One live order per project: the buyer keeps scanning the same code until it lapses.
  if (state.order && OPEN.includes(state.order.status)) return state.order;

  await expireStale();
  const taken = new Set(
    (await prisma.payment.findMany({ where: { status: { in: OPEN }, amount: state.amount }, select: { uniqueCode: true } })).map((p) => p.uniqueCode),
  );
  let uniqueCode = 0;
  for (let attempt = 0; attempt < 60 && !uniqueCode; attempt++) {
    const candidate = randomInt(1, 1000);
    if (!taken.has(candidate)) uniqueCode = candidate;
  }
  if (!uniqueCode) throw new PaymentError('Terlalu banyak pesanan yang menunggu. Coba lagi beberapa menit lagi.', 503);

  const total = state.amount + uniqueCode;
  let qris: string;
  try {
    qris = toDynamicQris(config.payments.qrisStatic, total);
  } catch (error) {
    if (error instanceof QrisError) {
      console.error('[Payments] QRIS_STATIC tidak bisa dipakai:', error.message);
      throw new PaymentError('Pembayaran sedang tidak tersedia. Hubungi operator.', 503);
    }
    throw error;
  }

  const order = await prisma.payment.create({
    data: {
      projectId,
      userId: actor.id,
      amount: state.amount,
      uniqueCode,
      total,
      qrisPayload: qris,
      expiresAt: new Date(Date.now() + config.payments.ttlMinutes * 60_000),
    },
  });
  return view(order);
}

/** The buyer says they transferred. This does not unlock anything: an operator still has to see the money. */
export async function reportPaid(projectId: string, orderId: string): Promise<OrderView> {
  const order = await prisma.payment.findFirst({ where: { id: orderId, projectId } });
  if (!order) throw new PaymentError('Pesanan tidak ditemukan.', 404);
  if (order.status === 'rejected') throw new PaymentError('Pesanan ini ditolak operator. Buat pesanan baru.', 409);
  if (order.status === 'paid' || order.status === 'reported') return view(order);
  return view(await prisma.payment.update({ where: { id: order.id }, data: { status: 'reported', reportedAt: new Date() } }));
}

/* ---------- operator side ---------- */

export async function listForAdmin(status?: string) {
  await expireStale();
  const rows = await prisma.payment.findMany({
    // By default: what is waiting, plus lapsed orders from the last week, since a buyer may pay just after the code expired.
    where: status ? { status } : { OR: [{ status: { in: OPEN } }, { status: 'expired', createdAt: { gte: new Date(Date.now() - 7 * 24 * 3600_000) } }] },
    orderBy: { createdAt: 'desc' },
    take: 100,
    include: { project: { select: { id: true, name: true, user: { select: { email: true } } } } },
  });
  return rows.map((row) => ({
    ...view(row),
    reportedAt: row.reportedAt?.toISOString() ?? null,
    paidAt: row.paidAt?.toISOString() ?? null,
    project: row.project ? { id: row.project.id, name: row.project.name, ownerEmail: row.project.user.email } : null,
  }));
}

export async function confirm(orderId: string, adminId: string) {
  const order = await prisma.payment.findUnique({ where: { id: orderId } });
  if (!order) throw new PaymentError('Pesanan tidak ditemukan.', 404);
  if (order.status === 'paid') return order;
  const updated = await prisma.payment.update({ where: { id: order.id }, data: { status: 'paid', paidAt: new Date(), confirmedBy: adminId } });
  // The project is paid for now: any other order for it stops waiting.
  await prisma.payment.updateMany({ where: { projectId: order.projectId, id: { not: order.id }, status: { in: OPEN } }, data: { status: 'expired' } });
  return updated;
}

export async function reject(orderId: string) {
  const order = await prisma.payment.findUnique({ where: { id: orderId } });
  if (!order) throw new PaymentError('Pesanan tidak ditemukan.', 404);
  if (order.status === 'paid') throw new PaymentError('Pesanan ini sudah dikonfirmasi dan tidak bisa ditolak.', 409);
  return prisma.payment.update({ where: { id: order.id }, data: { status: 'rejected' } });
}

/**
 * May this person publish a live link? The Pro package includes it; Basic does not. Without a QRIS configured nothing is
 * charged, so nothing is locked. Operators and admins may always publish.
 */
export async function liveAccess(projectId: string, actor: Actor): Promise<{ allowed: boolean; reason: string | null }> {
  if (!paymentsEnabled() || isElevated(actor)) return { allowed: true, reason: null };
  const state = await stateFor(projectId, actor);
  const pro = (state.amount ?? 0) >= PLATFORM_PRICING.PRO_PRICE;
  if (!pro) return { allowed: false, reason: 'Link live termasuk di paket Pro. Bangun ulang dengan mesin AI paket Pro untuk memakainya.' };
  if (!state.paid) return { allowed: false, reason: 'Link live terbuka setelah pembayaran paket Pro dikonfirmasi.' };
  return { allowed: true, reason: null };
}
