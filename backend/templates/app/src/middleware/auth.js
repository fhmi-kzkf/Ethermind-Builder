import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import { prisma } from '../db.js';
import { forbidden, unauthorized } from '../lib/errors.js';

export function signSession(user) {
  return jwt.sign({ sub: user.id }, config.auth.secret, { expiresIn: `${config.auth.ttlHours}h` });
}

export function setSessionCookie(res, token) {
  res.cookie(config.auth.cookieName, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: config.auth.cookieSecure,
    maxAge: config.auth.ttlHours * 60 * 60 * 1000,
    path: '/',
  });
}

export function clearSessionCookie(res) {
  res.clearCookie(config.auth.cookieName, { path: '/' });
}

/** Loads the signed-in user on every request so a deactivated account loses access immediately. */
export async function attachUser(req, _res, next) {
  if (!config.auth.enabled) return next();

  const token = req.cookies?.[config.auth.cookieName];
  if (!token) return next();

  try {
    const payload = jwt.verify(token, config.auth.secret);
    const user = await prisma.user.findUnique({ where: { id: payload.sub } });
    if (user && user.active) {
      req.user = { id: user.id, email: user.email, name: user.name, role: user.role };
    }
  } catch {
    // An expired or tampered cookie is treated as signed out.
  }
  return next();
}

/** Allows the request when login is off, or when the user holds one of `roles` ("*" means any signed-in user). */
export function requireRole(...roles) {
  return (req, _res, next) => {
    if (!config.auth.enabled) return next();
    if (!req.user) return next(unauthorized());
    if (roles.includes('*') || roles.includes(req.user.role)) return next();
    return next(forbidden());
  };
}

export const requireAuth = requireRole('*');

/** Rejects state-changing requests whose Origin header points at another site. */
export function sameOrigin(req, _res, next) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();

  const origin = req.get('origin');
  if (!origin) return next();

  try {
    if (new URL(origin).host === req.get('host')) return next();
  } catch {
    // Falls through to the rejection below.
  }
  return next(forbidden('Permintaan lintas situs ditolak'));
}
