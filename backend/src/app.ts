import 'express-async-errors';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import config from './config';
import { errorHandler } from './middleware/errorHandler';
import { rateLimiter } from './middleware/rateLimiter';
import apiRouter from './routes';

export function createApp(): Express {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', config.server.trustProxy);

  app.use(helmet());

  // Browsers may only call the API from the origins listed in CORS_ORIGINS. In development, an empty list
  // allows any origin so the Vite dev server works without setup.
  const allowed = config.server.corsOrigins;
  app.use(
    cors({
      origin: allowed.length > 0 ? allowed : !config.server.isProduction,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Idempotency-Key'],
    })
  );

  // The picture upload carries a base64 image, so its route parses its own body (after the sign-in check) with a larger limit.
  const smallJson = express.json({ limit: '1mb' });
  app.use((req, res, next) => (req.method === 'POST' && /^\/api\/projects\/[^/]+\/attachments\/?$/.test(req.path) ? next() : smallJson(req, res, next)));

  app.use(rateLimiter({ limit: 180, windowMs: 60_000 }));

  app.use('/api', apiRouter);

  app.use('*', (req, res) => {
    res.status(404).json({ success: false, error: 'Alamat tidak ditemukan.' });
  });

  app.use(errorHandler);

  return app;
}

export const app = createApp();
export default app;
