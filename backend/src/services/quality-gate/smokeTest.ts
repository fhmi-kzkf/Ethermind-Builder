import { GateCheckResult, GateIssue, SpecDefinition } from '../../types';
import { slugForRoute } from '../generation/crudFiles';
import { resourcePath } from '../spec/naming';
import { customEndpointGroups } from '../spec/specSchema';

const TIMEOUT_MS = 10000;

interface Credentials {
  email: string;
  password: string;
}

class Client {
  private cookie = '';

  constructor(private base: string) {}

  async request(method: string, path: string, body?: unknown): Promise<{ status: number; headers: Headers; text: string; json: any }> {
    const response = await fetch(`${this.base}${path}`, {
      method,
      headers: {
        Accept: 'application/json',
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
        ...(this.cookie ? { Cookie: this.cookie } : {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    const setCookie = response.headers.getSetCookie?.() ?? [];
    if (setCookie.length > 0) this.cookie = setCookie.map((c) => c.split(';')[0]).join('; ');
    const text = await response.text();
    let json: any = null;
    try {
      json = JSON.parse(text);
    } catch {
      // Non-JSON bodies are checked by the caller through `text` and `headers`.
    }
    return { status: response.status, headers: response.headers, text, json };
  }
}

/**
 * Boots-and-pokes check against the running app: health, the page shell, every script a page needs,
 * and every API route the spec promises. This is what catches a page file that was never written or a
 * route that crashes on the first real request.
 */
export async function runSmokeTest(baseUrl: string, spec: SpecDefinition, credentials?: Credentials): Promise<GateCheckResult> {
  const issues: GateIssue[] = [];
  const fail = (message: string, file?: string, severity: GateIssue['severity'] = 'critical') =>
    issues.push({ severity, category: 'smoke', message, file });
  const http = new Client(baseUrl);
  let checks = 0;

  const attempt = async <T>(label: string, run: () => Promise<T>): Promise<T | undefined> => {
    checks += 1;
    try {
      return await run();
    } catch (error) {
      fail(`${label}: server tidak merespons (${(error as Error).message})`);
      return undefined;
    }
  };

  const health = await attempt('GET /api/health', () => http.request('GET', '/api/health'));
  if (!health) return finish();
  if (health.status !== 200 || health.json?.status !== 'ok') fail(`GET /api/health mengembalikan ${health.status}: ${health.text.slice(0, 200)}`);

  const shell = await attempt('GET /', () => http.request('GET', '/'));
  if (shell && (shell.status !== 200 || !shell.text.includes('<div id="app"'))) fail(`GET / tidak menyajikan halaman aplikasi (status ${shell.status})`, 'public/index.html');
  if (shell && !shell.headers.get('content-security-policy')) fail('Header Content-Security-Policy tidak ada', 'src/app.js', 'high');

  const assets = ['/js/main.js', '/css/tokens.css', '/css/base.css', '/favicon.svg', ...spec.pages.map((p) => `/js/pages/${slugForRoute(p.route)}.js`)];
  if (spec.auth.mode !== 'none') assets.push('/js/login.js', '/js/pages/_account.js');
  if (spec.auth.mode === 'multi_role') assets.push('/js/pages/_users.js');
  for (const asset of assets) {
    const response = await attempt(`GET ${asset}`, () => http.request('GET', asset));
    if (!response) continue;
    const type = response.headers.get('content-type') || '';
    const expectsJs = asset.endsWith('.js');
    if (response.status !== 200 || (expectsJs && !type.includes('javascript'))) {
      fail(`${asset} tidak bisa dimuat browser (status ${response.status}, tipe ${type || 'kosong'})`, asset.startsWith('/js/pages/') ? `public${asset}` : undefined);
    }
  }

  let signedIn = spec.auth.mode === 'none';
  if (spec.auth.mode !== 'none') {
    const firstResource = spec.databaseSchema.find((e) => !e.internal);
    if (firstResource) {
      const anonymous = await attempt('akses tanpa login', () => http.request('GET', `/api/${resourcePath(firstResource.name)}`));
      if (anonymous && anonymous.status !== 401) fail(`GET /api/${resourcePath(firstResource.name)} tanpa login seharusnya 401, mendapat ${anonymous.status}`, `src/routes/${resourcePath(firstResource.name)}.js`);
    }
    if (credentials) {
      const login = await attempt('login administrator', () => http.request('POST', '/api/auth/login', credentials));
      signedIn = login?.status === 200;
      if (login && !signedIn) fail(`Login administrator awal gagal (status ${login.status}): akun seed tidak bisa masuk`, 'prisma/seed.js');
    }
  }

  if (signedIn) {
    for (const entity of spec.databaseSchema.filter((e) => !e.internal)) {
      const route = `/api/${resourcePath(entity.name)}`;
      const response = await attempt(`GET ${route}`, () => http.request('GET', route));
      if (!response) continue;
      const overridden = spec.apiEndpoints.some((e) => e.overridesCrud && e.method === 'GET' && e.path === route);
      if (overridden) continue;
      if (response.status !== 200 || !Array.isArray(response.json?.data) || !response.json?.meta) {
        fail(`GET ${route} tidak mengembalikan daftar { data, meta } (status ${response.status}): ${response.text.slice(0, 160)}`, `src/routes/${resourcePath(entity.name)}.js`);
      }
    }

    for (const [segment, endpoints] of customEndpointGroups(spec)) {
      for (const endpoint of endpoints.filter((e) => e.method === 'GET' && !e.path.includes(':'))) {
        const response = await attempt(`GET ${endpoint.path}`, () => http.request('GET', endpoint.path));
        if (!response) continue;
        const roleExcludesAdmin = endpoint.roles && !endpoint.roles.includes(spec.auth.roles[0]);
        if (response.status === 403 && roleExcludesAdmin) continue;
        if (response.status !== 200 || response.json?.data === undefined) {
          fail(`GET ${endpoint.path} gagal (status ${response.status}): ${response.text.slice(0, 200)}`, `src/routes/custom/${segment}.js`);
        }
      }
    }
  }

  return finish();

  function finish(): GateCheckResult {
    const passed = issues.length === 0;
    return {
      gate: 'smoke_test',
      passed,
      summary: passed ? `Smoke test lolos: ${checks} pemeriksaan terhadap server yang berjalan.` : `Smoke test gagal pada ${issues.length} dari ${checks} pemeriksaan.`,
      issues,
      metrics: { checks },
    };
  }
}
