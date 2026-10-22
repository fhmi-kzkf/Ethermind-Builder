const TIMEOUT_MS = 20000;

export class ApiError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details || [];
  }
}

async function request(method, path, { body, params, signal } = {}) {
  let url = path;
  if (params) {
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null && value !== '') query.set(key, String(value));
    }
    const text = query.toString();
    if (text) url += `${path.includes('?') ? '&' : '?'}${text}`;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  signal?.addEventListener('abort', () => controller.abort());

  let response;
  try {
    response = await fetch(url, {
      method,
      credentials: 'same-origin',
      headers: body === undefined ? { Accept: 'application/json' } : { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (error) {
    if (error.name === 'AbortError' && signal?.aborted) throw error;
    const message =
      error.name === 'AbortError'
        ? 'Server terlalu lama merespons. Coba lagi.'
        : 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
    throw new ApiError(0, 'NETWORK', message);
  } finally {
    clearTimeout(timer);
  }

  if (response.status === 204) return null;

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    // A non-JSON body is handled by the status check below.
  }

  if (!response.ok) {
    const failure = payload?.error;
    const error = new ApiError(
      response.status,
      failure?.code || 'REQUEST_FAILED',
      failure?.message || 'Permintaan gagal. Silakan coba lagi.',
      failure?.details
    );
    if (response.status === 401) window.dispatchEvent(new CustomEvent('auth:expired'));
    throw error;
  }

  return payload;
}

export const api = {
  get: (path, params, options) => request('GET', path, { ...options, params }),
  post: (path, body, options) => request('POST', path, { ...options, body: body ?? {} }),
  patch: (path, body, options) => request('PATCH', path, { ...options, body }),
  put: (path, body, options) => request('PUT', path, { ...options, body }),
  delete: (path, options) => request('DELETE', path, options),
};
