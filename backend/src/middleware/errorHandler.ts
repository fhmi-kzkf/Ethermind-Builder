import { NextFunction, Request, Response } from 'express';
import config from '../config';
import { BudgetExceededError, LLMNotConfiguredError, LLMOutputError, LLMUnavailableError } from '../services/llm/router';
import { SandboxSecurityError } from '../services/sandbox/fileManager';
import { SandboxUnavailableError } from '../services/sandbox/sandbox';

export function errorHandler(err: any, req: Request, res: Response, _next: NextFunction): void {
  if (err instanceof SandboxSecurityError) {
    res.status(403).json({ success: false, error: 'Pelanggaran keamanan sandbox terdeteksi' });
    return;
  }

  if (err instanceof BudgetExceededError) {
    res.status(429).json({ success: false, error: 'Batas kuota token untuk build ini telah terlampaui' });
    return;
  }

  if (err instanceof LLMNotConfiguredError || err instanceof SandboxUnavailableError || err instanceof LLMOutputError || err instanceof LLMUnavailableError) {
    console.error(`[Error Handler] ${req.method} ${req.url}:`, err.message);
    res.status(503).json({ success: false, error: 'Layanan AI sedang tidak tersedia. Silakan coba lagi beberapa saat lagi.' });
    return;
  }

  if (err?.type === 'entity.parse.failed') {
    res.status(400).json({ success: false, error: 'Isi permintaan bukan JSON yang valid' });
    return;
  }
  if (err?.type === 'entity.too.large') {
    res.status(413).json({ success: false, error: 'Data yang dikirim terlalu besar' });
    return;
  }

  const status = err?.status || err?.statusCode || 500;
  if (status >= 500) console.error(`[Error Handler] ${req.method} ${req.url}:`, err);

  // Server errors never expose internals in production; client errors carry their own message.
  const message = status >= 500 && config.server.isProduction ? 'Terjadi kesalahan internal pada server' : err?.message || 'Terjadi kesalahan internal pada server';
  res.status(status).json({ success: false, error: message });
}
