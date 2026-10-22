import http from 'http';
import config from '../../config';
import prisma from '../../db/prisma';
import { gatewayStats, touch } from './activity';
import { AppHost, parseHost } from './hosts';

export type Environment = 'preview' | 'production';

export interface GatewayDeps {
  /** Starts the app of a project again. Rejects when it cannot start. */
  wake: (projectId: string, environment: Environment) => Promise<void>;
  now?: () => number;
}

type Target = { state: 'ok'; projectId: string; environment: Environment } | { state: 'missing' } | { state: 'unpublished' };

const page = (title: string, body: string, extraHead = '') =>
  `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${extraHead}<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fcfbf8;color:#1c1c1c;font-family:system-ui,sans-serif}main{max-width:30rem;padding:2rem}h1{font-size:1.5rem;margin:0 0 .5rem}p{color:#5f5f5d;line-height:1.55;margin:0}</style></head><body><main><h1>${title}</h1><p>${body}</p></main></body></html>`;

function send(res: http.ServerResponse, status: number, html: string, headers: Record<string, string> = {}) {
  if (res.headersSent) return res.end();
  res.writeHead(status, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', ...headers });
  res.end(html);
}

const waitingPage = (res: http.ServerResponse) =>
  send(res, 503, page('Aplikasi sedang menyala', 'Aplikasi ini beristirahat karena lama tidak dibuka. Halaman akan dimuat ulang otomatis dalam beberapa detik.', '<meta http-equiv="refresh" content="3">'), { 'retry-after': '3' });

/* ---------- who is asking ---------- */

const isLoopback = (address: string | undefined) => !address || address === '::1' || address.startsWith('127.') || address === '::ffff:127.0.0.1';

/** Behind the reverse proxy every request comes from loopback, so the visitor's address is the first entry the proxy wrote. */
export function clientIp(req: http.IncomingMessage): string {
  const remote = req.socket.remoteAddress;
  const forwarded = req.headers['x-forwarded-for'];
  if (isLoopback(remote) && typeof forwarded === 'string' && forwarded.trim()) return forwarded.split(',')[0].trim();
  return remote ?? 'unknown';
}

/** A fixed one-minute window per visitor and app. Enough to stop a loop or a crawler, not meant as a security boundary. */
class RateLimiter {
  private windows = new Map<string, { count: number; resetAt: number }>();

  public allow(key: string, now: number): boolean {
    if (this.windows.size > 20_000) for (const [k, w] of this.windows) if (w.resetAt <= now) this.windows.delete(k);
    const current = this.windows.get(key);
    if (!current || current.resetAt <= now) {
      this.windows.set(key, { count: 1, resetAt: now + 60_000 });
      return true;
    }
    current.count += 1;
    return current.count <= config.apps.rateLimitPerMinute;
  }
}

/* ---------- finding the app ---------- */

async function resolveTarget(host: AppHost): Promise<Target> {
  if (host.kind === 'preview') {
    const found = await prisma.project.findMany({ where: { id: { startsWith: host.idPrefix } }, select: { id: true }, take: 2 });
    return found.length === 1 ? { state: 'ok', projectId: found[0].id, environment: 'preview' } : { state: 'missing' };
  }
  const project = await prisma.project.findUnique({ where: { slug: host.slug }, select: { id: true, liveJobId: true } });
  if (!project) return { state: 'missing' };
  return project.liveJobId ? { state: 'ok', projectId: project.id, environment: 'production' } : { state: 'unpublished' };
}

const runningApp = (projectId: string, environment: Environment) =>
  prisma.deployment.findFirst({ where: { projectId, environment, status: 'running', port: { not: null } }, orderBy: { createdAt: 'desc' }, select: { id: true, port: true } });

/* ---------- forwarding ---------- */

/** Resolves 'refused' when nothing listens on the port, so the caller can wake the app instead of showing an error. */
function forward(req: http.IncomingMessage, res: http.ServerResponse, port: number, publicHost: string): Promise<'done' | 'refused'> {
  return new Promise((resolve) => {
    const ip = clientIp(req);
    const forwarded = req.headers['x-forwarded-for'];
    const upstream = http.request(
      {
        host: '127.0.0.1',
        port,
        method: req.method,
        path: req.url,
        headers: { ...req.headers, host: publicHost, 'x-forwarded-for': typeof forwarded === 'string' && isLoopback(req.socket.remoteAddress) ? forwarded : ip, 'x-forwarded-proto': config.apps.scheme, 'x-forwarded-host': publicHost },
      },
      (response) => {
        res.writeHead(response.statusCode ?? 502, response.headers);
        response.pipe(res);
        response.on('end', () => resolve('done'));
        response.on('error', () => resolve('done'));
      },
    );
    upstream.setTimeout(60_000, () => upstream.destroy(new Error('timeout')));
    upstream.on('error', (error: NodeJS.ErrnoException) => {
      if (res.headersSent) {
        res.destroy();
        return resolve('done');
      }
      if (error.code === 'ECONNREFUSED' || error.code === 'ECONNRESET') return resolve('refused');
      send(res, 502, page('Aplikasi tidak menjawab', 'Aplikasi ini sedang bermasalah. Coba muat ulang beberapa saat lagi.'));
      resolve('done');
    });
    req.on('aborted', () => upstream.destroy());
    req.pipe(upstream);
  });
}

/**
 * The one entrance for every app address. It finds the app by the name in the address, starts it if it is asleep
 * (holding the visitor for a few seconds, then showing a waiting page that refreshes itself), and passes the request on.
 */
export function createGateway(deps: GatewayDeps): http.RequestListener {
  const limiter = new RateLimiter();
  const waking = new Map<string, Promise<void>>();
  const now = deps.now ?? Date.now;

  const wake = (projectId: string, environment: Environment): Promise<void> => {
    const key = `${environment}:${projectId}`;
    let work = waking.get(key);
    if (!work) {
      gatewayStats.wakes += 1;
      work = deps.wake(projectId, environment).finally(() => waking.delete(key));
      work.catch(() => undefined);
      waking.set(key, work);
    }
    return work;
  };

  return async (req, res) => {
    try {
      const hostHeader = req.headers.host;
      const host = parseHost(hostHeader);
      if (!host || !hostHeader) {
        gatewayStats.notFound += 1;
        return send(res, 404, page('Alamat tidak dikenal', 'Tidak ada aplikasi di alamat ini.'));
      }
      gatewayStats.requests += 1;

      if (!limiter.allow(`${clientIp(req)}|${hostHeader.toLowerCase()}`, now())) {
        gatewayStats.rateLimited += 1;
        return send(res, 429, page('Terlalu banyak permintaan', 'Tunggu sebentar lalu coba lagi.'), { 'retry-after': '30' });
      }

      const target = await resolveTarget(host);
      if (target.state === 'missing') {
        gatewayStats.notFound += 1;
        return send(res, 404, page('Aplikasi tidak ditemukan', 'Tidak ada aplikasi di alamat ini. Periksa kembali alamatnya.'));
      }
      if (target.state === 'unpublished') {
        gatewayStats.notFound += 1;
        return send(res, 404, page('Aplikasi belum diterbitkan', 'Pemilik aplikasi ini belum menerbitkan atau sudah menarik aplikasinya.'));
      }

      const canRetry = req.method === 'GET' || req.method === 'HEAD';
      let app = await runningApp(target.projectId, target.environment);

      if (app?.port) {
        touch(app.id, now());
        if ((await forward(req, res, app.port, hostHeader)) === 'done') return;
        // Nothing answered on the recorded port: the app died. Record that, then start it again like a sleeping one.
        await prisma.deployment.update({ where: { id: app.id }, data: { status: 'stopped' } });
        app = null;
        if (!canRetry) return waitingPage(res);
      }

      // Asleep. Start it and hold this visitor for a few seconds.
      const waited = wake(target.projectId, target.environment).then(
        () => 'ready' as const,
        () => 'failed' as const,
      );
      const outcome = await Promise.race([waited, new Promise<'slow'>((resolve) => setTimeout(() => resolve('slow'), config.apps.wakeTimeoutMs).unref())]);
      if (outcome === 'failed') {
        gatewayStats.wakeFailures += 1;
        return send(res, 503, page('Aplikasi belum bisa dinyalakan', 'Aplikasi ini gagal menyala. Pemilik bisa melihat sebabnya di Ethermind. Coba lagi beberapa saat lagi.'), { 'retry-after': '30' });
      }
      if (outcome === 'slow' || !canRetry) return waitingPage(res);

      app = await runningApp(target.projectId, target.environment);
      if (!app?.port) return waitingPage(res);
      touch(app.id, now());
      if ((await forward(req, res, app.port, hostHeader)) === 'refused') return waitingPage(res);
    } catch (error) {
      console.error('[Gateway]', error);
      send(res, 500, page('Terjadi kesalahan', 'Gerbang aplikasi mengalami masalah. Coba lagi sebentar lagi.'));
    }
  };
}

/** Starts the gateway's own listener. Returns null when it is turned off or no apps domain is set. */
export function startGateway(deps: GatewayDeps): http.Server | null {
  if (!config.apps.domain || config.apps.gatewayPort === 0) return null;
  const server = http.createServer(createGateway(deps));
  server.requestTimeout = 0;
  server.listen(config.apps.gatewayPort, config.apps.gatewayHost, () => console.log(`✔ Gerbang aplikasi: *.${config.apps.domain} di ${config.apps.gatewayHost}:${config.apps.gatewayPort}`));
  return server;
}
