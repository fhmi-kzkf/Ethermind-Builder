import 'dotenv/config';
import crypto from 'node:crypto';
import { appConfig } from './app.config.js';

const env = process.env;

function toNumber(value, fallback) {
  if (value === undefined || value === '') return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

const nodeEnv = env.NODE_ENV || 'development';
const authEnabled = appConfig.auth.mode !== 'none';

export const config = {
  env: nodeEnv,
  isProduction: nodeEnv === 'production',
  isTest: nodeEnv === 'test',
  port: toNumber(env.PORT, 3000),
  databaseUrl: env.DATABASE_URL || 'file:../data/app.db',
  trustProxy: env.TRUST_PROXY === 'true',
  // Origins allowed to show this app inside an iframe. Empty (the default) forbids framing entirely.
  frameAncestors: (env.FRAME_ANCESTORS || '').split(/\s+/).filter(Boolean),
  auth: {
    enabled: authEnabled,
    adminRole: appConfig.auth.roles[0] || 'admin',
    cookieName: 'session',
    cookieSecure: env.COOKIE_SECURE === 'true',
    ttlHours: toNumber(env.SESSION_TTL_HOURS, 8),
    secret: env.JWT_SECRET || '',
  },
  backup: {
    dir: env.BACKUP_DIR || './backups',
    intervalHours: toNumber(env.BACKUP_INTERVAL_HOURS, 24),
    keep: toNumber(env.BACKUP_KEEP, 14),
  },
};

if (authEnabled && !config.auth.secret) {
  if (config.isProduction) {
    throw new Error('JWT_SECRET must be set (at least 32 characters) because login is enabled');
  }
  config.auth.secret = crypto.randomBytes(32).toString('hex');
}

if (authEnabled && config.isProduction && config.auth.secret.length < 32) {
  throw new Error('JWT_SECRET must be at least 32 characters');
}
