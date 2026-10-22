import { Prisma } from '@prisma/client';
import { AppError } from '../lib/errors.js';

export function apiNotFound(req, _res, next) {
  next(new AppError(404, 'NOT_FOUND', `Alamat ${req.method} ${req.path} tidak ditemukan`));
}

function fromPrisma(err) {
  switch (err.code) {
    case 'P2002':
      return new AppError(409, 'CONFLICT', 'Data dengan nilai yang sama sudah ada', { fields: err.meta?.target });
    case 'P2025':
      return new AppError(404, 'NOT_FOUND', 'Data tidak ditemukan');
    case 'P2003':
      return new AppError(409, 'CONFLICT', 'Data masih terhubung dengan data lain, atau data tujuan tidak ada');
    default:
      return null;
  }
}

// Express recognizes error middleware by its four parameters, so `_next` must stay.
export function errorHandler(err, req, res, _next) {
  let appError = err instanceof AppError ? err : null;

  if (!appError && err instanceof Prisma.PrismaClientKnownRequestError) appError = fromPrisma(err);
  if (!appError && err.type === 'entity.parse.failed') appError = new AppError(400, 'BAD_REQUEST', 'Isi permintaan bukan JSON yang valid');
  if (!appError && err.type === 'entity.too.large') appError = new AppError(413, 'PAYLOAD_TOO_LARGE', 'Data yang dikirim terlalu besar');

  if (appError) {
    const body = { code: appError.code, message: appError.message };
    if (appError.details !== undefined) body.details = appError.details;
    return res.status(appError.status).json({ error: body });
  }

  console.error(`[error] ${req.method} ${req.originalUrl}`, err);
  return res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Terjadi kesalahan di server. Silakan coba lagi.' } });
}
