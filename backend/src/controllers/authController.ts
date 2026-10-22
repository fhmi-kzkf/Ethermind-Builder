import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import config from '../config';
import prisma from '../db/prisma';
import { getFirebaseAuth, getFirestoreDb } from '../services/firebase/firebaseAdmin';

/** Public registration always creates a client. Operators and admins are created by an admin, never by the caller. */
export const registerSchema = z.object({
  email: z.string().trim().toLowerCase().email('Format email tidak valid'),
  password: z.string().min(10, 'Password minimal 10 karakter').max(128),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
});

export const demoSchema = z.object({ role: z.enum(['client', 'operator', 'admin']).default('client') });

export const createStaffSchema = z.object({
  email: z.string().trim().toLowerCase().email('Format email tidak valid'),
  password: z.string().min(10, 'Password minimal 10 karakter').max(128),
  role: z.enum(['operator', 'admin']),
});

// Compared against when the email is unknown, so response time does not reveal which emails exist.
const DUMMY_HASH = bcrypt.hashSync('tidak-ada-pengguna', config.auth.saltRounds);

function issueToken(user: { id: string; email: string; role: string }): string {
  return jwt.sign({ id: user.id, email: user.email, role: user.role }, config.auth.jwtSecret, {
    expiresIn: config.auth.jwtExpiresIn as any,
  });
}

export class AuthController {
  public static async register(req: Request, res: Response): Promise<void> {
    if (!config.server.publicRegistration) {
      res.status(403).json({ success: false, error: 'Pendaftaran akun baru sedang ditutup.' });
      return;
    }

    const { email, password } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(409).json({ success: false, error: 'Email sudah terdaftar' });
      return;
    }

    const user = await prisma.user.create({
      data: { email, passwordHash: await bcrypt.hash(password, config.auth.saltRounds), role: 'client' },
      select: { id: true, email: true, role: true, createdAt: true },
    });

    res.status(201).json({ success: true, message: 'Registrasi berhasil', data: { user, token: issueToken(user) } });
  }

  public static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    const matches = await bcrypt.compare(password, user ? user.passwordHash : DUMMY_HASH);
    if (!user || !matches) {
      res.status(401).json({ success: false, error: 'Email atau password salah' });
      return;
    }

    res.json({
      success: true,
      message: 'Login berhasil',
      data: { user: { id: user.id, email: user.email, role: user.role }, token: issueToken(user) },
    });
  }

  /**
   * Firebase SSO Handler (Google SSO, GitHub SSO)
   * Memverifikasi Firebase ID token secara aman & sinkron ke database
   */
  public static async firebaseSso(req: Request, res: Response): Promise<void> {
    const { idToken, name, photoUrl, provider = 'google' } = req.body;

    // Identity comes only from a token Firebase has verified. An email sent by the client proves nothing,
    // so there is no fallback to it, in any environment.
    const auth = getFirebaseAuth();
    if (!auth) {
      res.status(503).json({ success: false, error: 'Login SSO belum dikonfigurasi di server ini.' });
      return;
    }
    if (typeof idToken !== 'string' || idToken.length < 20) {
      res.status(400).json({ success: false, error: 'Token SSO wajib dikirim.' });
      return;
    }

    let verifiedEmail = '';
    let verifiedUid = '';
    try {
      const decoded = await auth.verifyIdToken(idToken);
      if (!decoded.email || decoded.email_verified === false) {
        res.status(401).json({ success: false, error: 'Email akun SSO belum terverifikasi.' });
        return;
      }
      verifiedEmail = decoded.email.toLowerCase();
      verifiedUid = decoded.uid;
    } catch (err: any) {
      console.warn('[Firebase Auth SSO] Gagal verifikasi idToken:', err.message);
      res.status(401).json({ success: false, error: 'Token autentikasi Firebase SSO tidak valid.' });
      return;
    }

    // Cari atau buat user baru
    let user = await prisma.user.findUnique({ where: { email: verifiedEmail } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: verifiedEmail,
          passwordHash: await bcrypt.hash(`sso_${verifiedUid || Date.now()}_${Math.random()}`, config.auth.saltRounds),
          role: 'client',
        },
      });
    }

    // Sync juga ke Firestore jika aktif
    try {
      const db = getFirestoreDb();
      if (db && user) {
        await db.collection('users').doc(user.id).set(
          {
            id: user.id,
            email: user.email,
            role: user.role,
            provider,
            name: name || user.email.split('@')[0],
            photoUrl: photoUrl || null,
            lastLoginAt: new Date().toISOString(),
          },
          { merge: true }
        );
      }
    } catch (e: any) {
      console.warn('[Firestore] Sync SSO user notice:', e.message);
    }

    res.json({
      success: true,
      message: 'Login SSO berhasil',
      data: {
        user: { id: user.id, email: user.email, role: user.role },
        token: issueToken(user),
      },
    });
  }

  public static async me(req: Request, res: Response): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: { id: true, email: true, role: true, createdAt: true },
    });
    if (!user) {
      res.status(401).json({ success: false, error: 'Akun tidak ditemukan' });
      return;
    }
    res.json({ success: true, data: user });
  }

  /**
   * Local-testing shortcut: signs in as a fixed demo account for the role. Disabled unless
   * config.server.demoLogin is true (development only); production refuses to start with it on.
   */
  public static async demo(req: Request, res: Response): Promise<void> {
    if (!config.server.demoLogin) {
      res.status(404).json({ success: false, error: 'Alamat tidak ditemukan.' });
      return;
    }

    const email = `${req.body.role}@ethermind.ai`;
    const user =
      (await prisma.user.findUnique({ where: { email } })) ??
      (await prisma.user.create({
        data: { email, role: req.body.role, passwordHash: await bcrypt.hash(`demo_${Math.random()}_${Date.now()}`, config.auth.saltRounds) },
      }));

    res.json({
      success: true,
      message: 'Login demo berhasil',
      data: { user: { id: user.id, email: user.email, role: user.role }, token: issueToken(user) },
    });
  }

  /** Admin-only: creates an operator or admin account. */
  public static async createStaff(req: Request, res: Response): Promise<void> {
    const { email, password, role } = req.body;

    if (await prisma.user.findUnique({ where: { email } })) {
      res.status(409).json({ success: false, error: 'Email sudah terdaftar' });
      return;
    }

    const user = await prisma.user.create({
      data: { email, role, passwordHash: await bcrypt.hash(password, config.auth.saltRounds) },
      select: { id: true, email: true, role: true, createdAt: true },
    });
    res.status(201).json({ success: true, message: 'Akun staf dibuat', data: user });
  }

  /** Creates the first administrator from BOOTSTRAP_ADMIN_EMAIL / BOOTSTRAP_ADMIN_PASSWORD, once. */
  public static async ensureBootstrapAdmin(): Promise<void> {
    const bootstrap = config.auth.bootstrapAdmin;
    if (!bootstrap) return;

    const existing = await prisma.user.findUnique({ where: { email: bootstrap.email.toLowerCase() } });
    if (existing) return;

    await prisma.user.create({
      data: { email: bootstrap.email.toLowerCase(), role: 'admin', passwordHash: await bcrypt.hash(bootstrap.password, config.auth.saltRounds) },
    });
    console.log(`Akun admin awal dibuat: ${bootstrap.email}`);
  }
}
