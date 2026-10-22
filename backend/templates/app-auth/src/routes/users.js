import bcrypt from 'bcryptjs';
import { Router } from 'express';
import { z } from 'zod';
import { appConfig } from '../app.config.js';
import { config } from '../config.js';
import { prisma } from '../db.js';
import { wrap } from '../lib/async.js';
import { AppError, notFound } from '../lib/errors.js';
import { parse, parsePagination } from '../lib/validate.js';
import { requireRole } from '../middleware/auth.js';

const router = Router();
router.use(requireRole(config.auth.adminRole));

const roleSchema = z.enum(appConfig.auth.roles);
const passwordSchema = z.string().min(10, 'Kata sandi minimal 10 karakter').max(128);

const createSchema = z.object({
  email: z.string().trim().toLowerCase().email('Format email belum benar'),
  name: z.string().trim().min(1, 'Nama wajib diisi').max(120),
  role: roleSchema,
  password: passwordSchema,
});

const updateSchema = z.object({
  name: z.string().trim().min(1).max(120).optional(),
  role: roleSchema.optional(),
  active: z.boolean().optional(),
  password: passwordSchema.optional(),
});

const publicFields = { id: true, email: true, name: true, role: true, active: true, createdAt: true };

router.get(
  '/',
  wrap(async (req, res) => {
    const { page, limit, skip } = parsePagination(req.query);
    const q = typeof req.query.q === 'string' ? req.query.q.trim() : '';
    const where = q ? { OR: [{ name: { contains: q } }, { email: { contains: q } }] } : {};

    const [total, rows] = await Promise.all([
      prisma.user.count({ where }),
      prisma.user.findMany({ where, orderBy: { createdAt: 'asc' }, skip, take: limit, select: publicFields }),
    ]);
    res.json({ data: rows, meta: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) } });
  })
);

router.post(
  '/',
  wrap(async (req, res) => {
    const { password, ...data } = parse(createSchema, req.body);
    const user = await prisma.user.create({
      data: { ...data, passwordHash: await bcrypt.hash(password, 12) },
      select: publicFields,
    });
    res.status(201).json({ data: user });
  })
);

router.patch(
  '/:id',
  wrap(async (req, res) => {
    const { password, ...changes } = parse(updateSchema, req.body);
    if (Object.keys(changes).length === 0 && !password) {
      throw new AppError(400, 'VALIDATION_FAILED', 'Tidak ada data yang diubah');
    }

    const target = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!target) throw notFound('Pengguna tidak ditemukan');

    const losesAdmin =
      target.role === config.auth.adminRole &&
      ((changes.role !== undefined && changes.role !== config.auth.adminRole) || changes.active === false);
    if (losesAdmin) {
      const otherAdmins = await prisma.user.count({
        where: { role: config.auth.adminRole, active: true, id: { not: target.id } },
      });
      if (otherAdmins === 0) {
        throw new AppError(409, 'CONFLICT', 'Harus tersisa minimal satu administrator aktif');
      }
    }

    const data = { ...changes };
    if (password) data.passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.update({ where: { id: target.id }, data, select: publicFields });
    res.json({ data: user });
  })
);

export default router;
