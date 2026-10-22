import { NextFunction, Request, Response } from 'express';
import config from '../config';

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

export interface RateLimitOptions {
  limit?: number;
  windowMs?: number;
  /** Separates counters of different limiters that share a client. */
  keyPrefix?: string;
}

const buckets = new Map<string, RateLimitRecord>();

// Without this the map grows by one entry per client forever.
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of buckets) if (now > record.resetAt) buckets.delete(key);
}, 60_000).unref();

/** Fixed-window limiter, per signed-in user or per IP. Counters live in this process only. */
export function rateLimiter(options: RateLimitOptions | number = {}, legacyWindowMs?: number) {
  const { limit = 60, windowMs = 60_000, keyPrefix = 'api' } =
    typeof options === 'number' ? { limit: options, windowMs: legacyWindowMs } : options;

  return (req: Request, res: Response, next: NextFunction): void => {
    if (config.server.isTest) return next();

    const key = `${keyPrefix}:${req.user ? req.user.id : req.ip}`;
    const now = Date.now();
    const record = buckets.get(key);

    if (!record || now > record.resetAt) {
      buckets.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (record.count >= limit) {
      res.setHeader('Retry-After', String(Math.ceil((record.resetAt - now) / 1000)));
      res.status(429).json({
        success: false,
        error: 'Terlalu banyak permintaan. Silakan coba lagi beberapa saat lagi.',
        retryAfterMs: record.resetAt - now,
      });
      return;
    }

    record.count++;
    next();
  };
}
