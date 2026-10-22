import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import prisma from '../db/prisma';
import { UserRole } from '../types';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

function extractToken(req: Request): string | undefined {
  const header = req.headers.authorization;
  if (header?.startsWith('Bearer ')) return header.slice(7);
  // EventSource cannot send headers; only the event stream route may use the query token.
  if (typeof req.query.token === 'string' && /\/events$/.test(req.path)) return req.query.token;
  return undefined;
}

/**
 * Verifies the token and loads the account, so a deleted user or a changed role takes effect immediately
 * instead of when the token expires.
 */
export async function authenticate(req: Request, res: Response, next: NextFunction): Promise<void> {
  const token = extractToken(req);
  if (!token) {
    res.status(401).json({ success: false, error: 'Token autentikasi tidak ditemukan' });
    return;
  }

  let id: string;
  try {
    id = (jwt.verify(token, config.auth.jwtSecret) as { id: string }).id;
  } catch {
    res.status(401).json({ success: false, error: 'Token tidak valid atau kedaluwarsa' });
    return;
  }

  const user = await prisma.user.findUnique({ where: { id }, select: { id: true, email: true, role: true } });
  if (!user) {
    res.status(401).json({ success: false, error: 'Akun tidak ditemukan' });
    return;
  }

  req.user = { id: user.id, email: user.email, role: user.role as UserRole };
  next();
}

export function requireRole(...allowedRoles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ success: false, error: 'Autentikasi diperlukan' });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({ success: false, error: 'Akses ditolak: Izin tidak memadai' });
      return;
    }

    next();
  };
}
