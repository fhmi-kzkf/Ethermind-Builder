import { Router } from 'express';
import { prisma } from '../../db.js';
import { wrap } from '../../lib/async.js';
import { requireRole } from '../../middleware/auth.js';

const router = Router();

const LOW_STOCK_LIMIT = 5;

router.get(
  '/summary',
  requireRole('admin', 'kasir'),
  wrap(async (_req, res) => {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const [today, lowStock] = await Promise.all([
      prisma.sale.aggregate({ where: { paidAt: { gte: startOfDay } }, _sum: { total: true }, _count: { _all: true } }),
      prisma.product.findMany({
        where: { status: 'aktif', stock: { lte: LOW_STOCK_LIMIT } },
        orderBy: { stock: 'asc' },
        take: 10,
        select: { id: true, name: true, stock: true },
      }),
    ]);

    res.json({ data: { todayTotal: today._sum.total ?? 0, transactionCount: today._count._all, lowStock } });
  })
);

export default router;
