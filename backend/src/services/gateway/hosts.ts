import config from '../../config';

/**
 * App addresses. A preview is <pv-xxxxxxxx-xxxx>.<domain>, taken from the start of the project id, and a live app is
 * <slug>.<domain>. One wildcard certificate and one wildcard DNS record cover every app, so adding an app changes nothing outside the database.
 */

export const PREVIEW_PREFIX = 'pv-';

/** Names a person must not take: they either look like platform addresses or are used by the gateway itself. */
const RESERVED = new Set(['www', 'app', 'api', 'admin', 'mail', 'smtp', 'ftp', 'ns1', 'ns2', 'static', 'assets', 'cdn', 'status', 'support', 'help', 'blog', 'docs', 'login', 'dashboard', 'ethermind', 'preview', 'live', 'gateway', 'localhost', 'root', 'test']);

export function appsEnabled(): boolean {
  return config.apps.domain !== '';
}

export function previewLabel(projectId: string): string {
  return `${PREVIEW_PREFIX}${projectId.slice(0, 13)}`;
}

export function appUrl(label: string): string {
  const port = config.apps.publicPort ? `:${config.apps.publicPort}` : '';
  return `${config.apps.scheme}://${label}.${config.apps.domain}${port}`;
}

export type AppHost = { kind: 'preview'; idPrefix: string } | { kind: 'live'; slug: string };

/** Reads the Host header. Anything that is not exactly one label under the apps domain is not an app address. */
export function parseHost(hostHeader: string | undefined): AppHost | null {
  if (!appsEnabled() || !hostHeader) return null;
  const host = hostHeader.toLowerCase().replace(/:\d+$/, '').replace(/\.$/, '');
  const suffix = `.${config.apps.domain}`;
  if (!host.endsWith(suffix)) return null;
  const label = host.slice(0, -suffix.length);
  if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(label) || label.length > 63) return null;
  if (label.startsWith(PREVIEW_PREFIX)) {
    const idPrefix = label.slice(PREVIEW_PREFIX.length);
    return /^[0-9a-f-]{8,13}$/.test(idPrefix) ? { kind: 'preview', idPrefix } : null;
  }
  return { kind: 'live', slug: label };
}

/* ---------- slugs ---------- */

export class SlugError extends Error {}

export function validateSlug(input: string): string {
  const slug = input.trim().toLowerCase();
  if (slug.length < 3 || slug.length > 30) throw new SlugError('Nama alamat harus 3 sampai 30 karakter.');
  if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(slug)) throw new SlugError('Nama alamat hanya boleh huruf kecil, angka, dan tanda hubung, dan tidak boleh diawali atau diakhiri tanda hubung.');
  if (slug.includes('--')) throw new SlugError('Nama alamat tidak boleh memuat dua tanda hubung berurutan.');
  if (slug.startsWith(PREVIEW_PREFIX) || RESERVED.has(slug)) throw new SlugError('Nama alamat ini dipakai sistem. Pilih nama lain.');
  return slug;
}

/** A readable address from a project name: "Warung Bu Sari!" becomes "warung-bu-sari". */
export function suggestSlug(name: string): string {
  const base = name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 30)
    .replace(/-+$/g, '');
  return base.length >= 3 ? base : `aplikasi-${base || 'saya'}`.slice(0, 30);
}
