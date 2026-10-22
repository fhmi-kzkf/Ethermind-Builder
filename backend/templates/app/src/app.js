import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cookieParser from 'cookie-parser';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { config } from './config.js';
import { prisma } from './db.js';
import { AppError } from './lib/errors.js';
import { attachUser, sameOrigin } from './middleware/auth.js';
import { apiNotFound, errorHandler } from './middleware/error.js';
import apiRoutes from './routes/index.js';

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

export function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', config.trustProxy);

  // No inline script or style anywhere in the shipped UI, so the policy can be strict.
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: false,
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'"],
          imgSrc: ["'self'", 'data:'],
          connectSrc: ["'self'"],
          objectSrc: ["'none'"],
          baseUri: ["'self'"],
          formAction: ["'self'"],
          frameAncestors: config.frameAncestors.length > 0 ? config.frameAncestors : ["'none'"],
        },
      },
      // frame-ancestors above decides who may embed the app; the older X-Frame-Options header would contradict it.
      frameguard: config.frameAncestors.length > 0 ? false : { action: 'deny' },
      hsts: config.isProduction && config.auth.cookieSecure,
      crossOriginEmbedderPolicy: false,
    })
  );

  app.use(express.json({ limit: '100kb' }));
  app.use(cookieParser());

  app.use(
    '/api',
    rateLimit({
      windowMs: 60 * 1000,
      limit: 300,
      standardHeaders: true,
      legacyHeaders: false,
      skip: () => config.isTest,
      handler: (_req, _res, next) => next(new AppError(429, 'RATE_LIMITED', 'Terlalu banyak permintaan. Coba lagi sebentar lagi.')),
    })
  );

  app.get('/api/health', async (_req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`;
      res.json({ status: 'ok', database: 'ok', time: new Date().toISOString() });
    } catch (error) {
      console.error('[health] database check failed', error);
      res.status(503).json({ status: 'error', database: 'unavailable', time: new Date().toISOString() });
    }
  });

  app.use('/api', attachUser, sameOrigin, apiRoutes, apiNotFound);

  app.use(express.static(publicDir, { maxAge: config.isProduction ? '1h' : 0 }));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
  });

  app.use(errorHandler);
  return app;
}
