import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import config from '../config';
import prisma from '../db/prisma';
import liveManager, { LiveError } from '../services/deployment/liveManager';
import { appsEnabled, appUrl, suggestSlug, validateSlug } from '../services/gateway/hosts';
import { liveAccess, PaymentError } from '../services/payments/paymentService';

const isElevated = (req: Request) => req.user!.role === 'admin' || req.user!.role === 'operator';

export const publishSchema = z.object({
  slug: z.string().max(60).optional(),
  jobId: z.string().max(80).optional(),
});

const handle =
  (fn: (req: Request, res: Response) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res);
    } catch (error) {
      if (error instanceof LiveError || error instanceof PaymentError) {
        res.status(error.status).json({ success: false, error: error.message });
        return;
      }
      next(error);
    }
  };

async function ownedProject(req: Request) {
  const { id } = req.params;
  return prisma.project.findFirst({ where: isElevated(req) ? { id } : { id, userId: req.user!.id } });
}

/** A readable name that nobody has taken yet: "warung-bu-sari", then "warung-bu-sari-2" and so on. */
async function freeSuggestion(name: string, projectId: string): Promise<string> {
  const base = suggestSlug(name);
  for (let n = 1; n <= 50; n++) {
    const candidate = n === 1 ? base : `${base.slice(0, 27)}-${n}`;
    try {
      validateSlug(candidate);
    } catch {
      continue;
    }
    if (!(await prisma.project.findFirst({ where: { slug: candidate, id: { not: projectId } }, select: { id: true } }))) return candidate;
  }
  return `${base.slice(0, 22)}-${Math.random().toString(36).slice(2, 8)}`;
}

async function stateOf(req: Request, project: NonNullable<Awaited<ReturnType<typeof ownedProject>>>) {
  const enabled = appsEnabled();
  const appReady = project.status === 'ready' || project.status === 'live';
  const access = !enabled
    ? { allowed: false, reason: 'Link live belum diaktifkan di server ini.' }
    : !appReady
      ? { allowed: false, reason: 'Link live bisa dibuat setelah aplikasinya selesai dibangun.' }
      : await liveAccess(project.id, req.user!);

  const published = Boolean(project.liveJobId && project.slug);
  const [running, version, secrets, used] = await Promise.all([
    published ? prisma.deployment.findFirst({ where: { projectId: project.id, environment: 'production', status: 'running' }, select: { id: true } }) : null,
    project.liveJobId ? prisma.version.findFirst({ where: { projectId: project.id, jobId: project.liveJobId }, orderBy: { createdAt: 'desc' } }) : null,
    liveManager.readSecrets(project.id),
    prisma.project.count({ where: { userId: project.userId, liveJobId: { not: null } } }),
  ]);

  return {
    enabled,
    allowed: access.allowed,
    reason: access.reason,
    published,
    slug: project.slug,
    suggestedSlug: project.slug ?? (await freeSuggestion(project.name, project.id)),
    url: published && project.slug ? appUrl(project.slug) : null,
    // The shape of an address, so the screen can show "https://{slug}.domain" while someone types a name.
    urlTemplate: enabled ? appUrl('{slug}') : null,
    running: Boolean(running),
    publishedAt: project.livePublishedAt?.toISOString() ?? null,
    versionSummary: version?.summary ?? null,
    // The first administrator of the live app. Shown only to the project's owner and to operators.
    credentials: secrets ? { email: secrets.adminEmail, password: secrets.adminPassword } : null,
    quota: { used, max: config.quotas.maxLiveAppsPerUser },
  };
}

export class LiveController {
  public static getState = handle(async (req, res) => {
    const project = await ownedProject(req);
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    res.json({ success: true, data: await stateOf(req, project) });
  });

  public static publish = handle(async (req, res) => {
    const project = await ownedProject(req);
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    if (!appsEnabled()) throw new LiveError('Link live belum diaktifkan di server ini.');
    if (project.status !== 'ready' && project.status !== 'live') throw new LiveError('Link live bisa dibuat setelah aplikasinya selesai dibangun.');

    const access = await liveAccess(project.id, req.user!);
    if (!access.allowed) throw new LiveError(access.reason ?? 'Link live belum tersedia untuk proyek ini.', 402);

    if (!isElevated(req) && !project.liveJobId) {
      const used = await prisma.project.count({ where: { userId: project.userId, liveJobId: { not: null }, id: { not: project.id } } });
      if (used >= config.quotas.maxLiveAppsPerUser) throw new LiveError(`Batas ${config.quotas.maxLiveAppsPerUser} link live per akun sudah tercapai. Tarik salah satu dulu.`, 403);
    }

    const { slug, jobId } = req.body as z.infer<typeof publishSchema>;
    const chosen = slug?.trim() || project.slug || (await freeSuggestion(project.name, project.id));
    await liveManager.publish(project.id, { slug: chosen, jobId: jobId || undefined });
    const fresh = await prisma.project.findUniqueOrThrow({ where: { id: project.id } });
    res.json({ success: true, data: await stateOf(req, fresh) });
  });

  public static unpublish = handle(async (req, res) => {
    const project = await ownedProject(req);
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    await liveManager.unpublish(project.id);
    const fresh = await prisma.project.findUniqueOrThrow({ where: { id: project.id } });
    res.json({ success: true, data: await stateOf(req, fresh) });
  });
}
