import fs from 'fs/promises';
import path from 'path';
import { Request, Response } from 'express';
import { z } from 'zod';
import config from '../config';
import prisma from '../db/prisma';
import { loadCredentials } from '../services/agents/appAssistant';
import { ChatController } from './chatController';
import liveManager from '../services/deployment/liveManager';
import previewManager from '../services/deployment/previewManager';
import { deleteProjectAttachments } from '../services/storage/attachments';
import { listVersions, restoreVersion, VersionError } from '../services/versions/versionService';
import { FirestoreService } from '../services/firebase/firestoreService';
import jobQueue from '../services/queue/jobQueue';

export const createProjectSchema = z.object({
  name: z.string().min(1, 'Nama proyek wajib diisi'),
  stack: z.string().optional().default('nextjs-sqlite-tailwind'),
});

export class ProjectController {
  public static async listProjects(req: Request, res: Response): Promise<void> {
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const projects = await prisma.project.findMany({
      where: isElevated ? {} : { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        deployments: {
          where: { environment: 'preview' },
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
        jobs: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    res.json({ success: true, data: projects });
  }

  public static async createProject(req: Request, res: Response): Promise<void> {
    const { name, stack } = req.body;
    const userId = req.user!.id;

    // One person cannot fill the server's disk with projects. Operators and admins are exempt.
    if (req.user!.role === 'client') {
      const owned = await prisma.project.count({ where: { userId } });
      if (owned >= config.quotas.maxProjectsPerUser) {
        res.status(429).json({ success: false, error: `Batas ${config.quotas.maxProjectsPerUser} proyek per akun sudah tercapai. Hapus proyek yang tidak dipakai, lalu coba lagi.` });
        return;
      }
    }

    const project = await prisma.project.create({
      data: {
        userId,
        name,
        stack,
        status: 'draft',
        conversation: {
          create: {},
        },
      },
      include: { conversation: true },
    });

    // Sinkronisasi otomatis ke Firestore
    FirestoreService.syncProject({
      id: project.id,
      userId: project.userId,
      name: project.name,
      stack: project.stack,
      status: project.status,
      createdAt: project.createdAt.toISOString(),
      updatedAt: project.updatedAt.toISOString(),
    }).catch((err) => console.warn('[Firestore] Project sync notice:', err.message));

    res.status(201).json({
      success: true,
      message: 'Proyek berhasil dibuat',
      data: project,
    });
  }

  public static async getProject(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const project = await prisma.project.findFirst({
      where: isElevated ? { id } : { id, userId },
      include: {
        conversation: {
          include: {
            messages: {
              orderBy: { createdAt: 'asc' },
            },
          },
        },
        specs: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
        jobs: {
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
        deployments: {
          where: { environment: 'preview' },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }

    // Answers about the app carry login tokens; the owner sees the real values here too, not just in GET /messages.
    if (project.conversation) {
      project.conversation.messages = await ChatController.withCredentials(id, project.conversation.messages);
    }

    res.json({ success: true, data: project });
  }

  /** Every finished build and revision of the project, newest first, with the one that is active. */
  public static async listVersions(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';
    const project = await prisma.project.findFirst({ where: isElevated ? { id } : { id, userId: req.user!.id } });
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    res.json({ success: true, data: await listVersions(id) });
  }

  /** Makes an earlier version the project's current one and starts its preview. */
  public static async restoreVersion(req: Request, res: Response): Promise<void> {
    const { id, versionId } = req.params;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';
    const project = await prisma.project.findFirst({ where: isElevated ? { id } : { id, userId: req.user!.id } });
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    try {
      res.json({ success: true, data: await restoreVersion(id, versionId) });
    } catch (error) {
      if (error instanceof VersionError) {
        res.status(error.status).json({ success: false, error: error.message });
        return;
      }
      throw error;
    }
  }

  /** The first login of the generated app. Only the project's owner (or staff) may read it. */
  public static async getCredentials(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const project = await prisma.project.findFirst({ where: isElevated ? { id } : { id, userId } });
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }

    const credentials = await loadCredentials(id);
    res.json({ success: true, data: credentials });
  }

  /** Starts the project's app again when its preview is not running (after a platform restart, for example). */
  public static async startPreview(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const project = await prisma.project.findFirst({ where: isElevated ? { id } : { id, userId } });
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }

    try {
      const url = await previewManager.restart(id);
      res.json({ success: true, data: { url } });
    } catch (error: any) {
      res.status(409).json({ success: false, error: error.message });
    }
  }

  public static async deleteProject(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const project = await prisma.project.findFirst({
      where: isElevated ? { id } : { id, userId },
    });

    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }

    // Stop running work and remove everything on disk that belongs to this project.
    const active = await prisma.job.findMany({ where: { projectId: id, status: { in: ['pending', 'running'] } }, select: { id: true } });
    for (const job of active) await jobQueue.cancelJob(job.id);
    await previewManager.stopAllForProject(id);
    await liveManager.purge(id);
    await deleteProjectAttachments(id);

    for (const entry of await fs.readdir(config.storage.workspacesDir).catch(() => [] as string[])) {
      if (entry.startsWith(`${id}_`)) await fs.rm(path.join(config.storage.workspacesDir, entry), { recursive: true, force: true });
    }

    await prisma.project.delete({ where: { id } });

    // Hapus juga di Firestore jika ada
    FirestoreService.deleteProject(id).catch(() => {});

    res.json({ success: true, message: 'Proyek berhasil dihapus' });
  }
}
