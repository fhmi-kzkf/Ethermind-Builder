import bcrypt from 'bcryptjs';
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { config } from '../config.js';
import { prisma } from '../db.js';
import { wrap } from '../lib/async.js';
import { AppError, unauthorized } from '../lib/errors.js';
import { parse } from '../lib/validate.js';
import { clearSessionCookie, requireAuth, setSessionCookie, signSession } from '../middleware/auth.js';

const router = Router();

// Compared against when the email is unknown, so response time does not reveal which emails exist.
const DUMMY_HASH = bcrypt.hashSync('tidak-ada-pengguna', 10);

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  skip: () => config.isTest,
  keyGenerator: (req) => `${req.ip}:${String(req.body?.email || '').toLowerCase()}`,
  handler: (_req, _res, next) =>
    next(new AppError(429, 'RATE_LIMITED', 'Terlalu banyak percobaan masuk. Coba lagi dalam beberapa menit.')),
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email('Format email belum benar'),
  password: z.string().min(1, 'Kata sandi wajib diisi'),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(1, 'Kata sandi saat ini wajib diisi'),
  newPassword: z.string().min(10, 'Kata sandi baru minimal 10 karakter').max(128),
});

router.post(
  '/login',
  loginLimiter,
  wrap(async (req, res) => {
    const { email, password } = parse(loginSchema, req.body);

    const user = await prisma.user.findUnique({ where: { email } });
    const matches = await bcrypt.compare(password, user ? user.passwordHash : DUMMY_HASH);
    if (!user || !user.active || !matches) {
      throw new AppError(401, 'INVALID_CREDENTIALS', 'Email atau kata sandi salah');
    }

    setSessionCookie(res, signSession(user));
    res.json({ data: { id: user.id, email: user.email, name: user.name, role: user.role } });
  })
);

router.post('/logout', (_req, res) => {
  clearSessionCookie(res);
  res.status(204).end();
});

router.get('/me', requireAuth, (req, res) => {
  res.json({ data: req.user });
});

router.post(
  '/change-password',
  requireAuth,
  wrap(async (req, res) => {
    const { currentPassword, newPassword } = parse(passwordSchema, req.body);

    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) throw unauthorized();
    if (!(await bcrypt.compare(currentPassword, user.passwordHash))) {
      throw new AppError(400, 'VALIDATION_FAILED', 'Kata sandi saat ini salah', [
        { field: 'currentPassword', message: 'Kata sandi saat ini salah' },
      ]);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash: await bcrypt.hash(newPassword, 12) },
    });
    res.status(204).end();
  })
);

export default router;
