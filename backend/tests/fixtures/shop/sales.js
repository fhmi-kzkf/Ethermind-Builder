import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../../db.js';
import { wrap } from '../../lib/async.js';
import { badRequest, conflict } from '../../lib/errors.js';
import { parse } from '../../lib/validate.js';
import { requireRole } from '../../middleware/auth.js';

const router = Router();

const checkoutSchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string().min(1, 'Produk wajib dipilih'),
        quantity: z.number({ invalid_type_error: 'Jumlah harus berupa angka' }).int('Jumlah harus bilangan bulat').min(1, 'Jumlah minimal 1'),
      })
    )
    .min(1, 'Keranjang tidak boleh kosong')
    .max(100, 'Maksimal 100 baris per transaksi'),
  method: z.enum(['tunai', 'transfer', 'qris'], { errorMap: () => ({ message: 'Metode bayar tidak dikenal' }) }).default('tunai'),
});

function receiptNumber(date, sequence) {
  const day = date.toISOString().slice(0, 10).replace(/-/g, '');
  return `STR-${day}-${String(sequence).padStart(4, '0')}`;
}

router.post(
  '/',
  requireRole('admin', 'kasir'),
  wrap(async (req, res) => {
    const { items, method } = parse(checkoutSchema, req.body);

    // The same product on two lines is one line with the summed quantity.
    const wanted = new Map();
    for (const item of items) wanted.set(item.productId, (wanted.get(item.productId) ?? 0) + item.quantity);

    const sale = await prisma.$transaction(async (tx) => {
      const products = await tx.product.findMany({ where: { id: { in: Array.from(wanted.keys()) } } });
      if (products.length !== wanted.size) throw badRequest('Ada produk yang tidak ditemukan');

      let total = 0;
      const lines = [];
      for (const product of products) {
        const quantity = wanted.get(product.id);
        if (product.status !== 'aktif') throw conflict(`${product.name} sudah tidak dijual`);

        // The stock check and the decrement are one statement, so two cashiers cannot both take the last item.
        const taken = await tx.product.updateMany({
          where: { id: product.id, stock: { gte: quantity } },
          data: { stock: { decrement: quantity } },
        });
        if (taken.count === 0) throw conflict(`Stok ${product.name} tidak cukup`);

        total += product.price * quantity;
        lines.push({ productId: product.id, quantity, unitPrice: product.price });
      }

      const now = new Date();
      const created = await tx.sale.create({
        data: { receiptNumber: receiptNumber(now, (await tx.sale.count()) + 1), total, method, paidAt: now },
      });
      await tx.saleItem.createMany({ data: lines.map((line) => ({ ...line, saleId: created.id })) });
      return created;
    });

    res.status(201).json({ data: { id: sale.id, receiptNumber: sale.receiptNumber, total: sale.total } });
  })
);

export default router;
