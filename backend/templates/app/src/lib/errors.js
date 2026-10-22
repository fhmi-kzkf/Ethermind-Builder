export class AppError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.name = 'AppError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export const badRequest = (message, details) => new AppError(400, 'BAD_REQUEST', message, details);
export const unauthorized = (message = 'Silakan masuk terlebih dahulu') => new AppError(401, 'UNAUTHORIZED', message);
export const forbidden = (message = 'Anda tidak memiliki akses untuk tindakan ini') => new AppError(403, 'FORBIDDEN', message);
export const notFound = (message = 'Data tidak ditemukan') => new AppError(404, 'NOT_FOUND', message);
export const conflict = (message, details) => new AppError(409, 'CONFLICT', message, details);
