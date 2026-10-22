import fs from 'fs';
import { Request, Response } from 'express';
import path from 'path';
import config from '../config';
import prisma from '../db/prisma';
import { ExportManager } from '../services/deployment/exportManager';
import { canDownload } from '../services/payments/paymentService';

export class ExportController {
  public static async exportProject(req: Request, res: Response): Promise<void> {
    const { id: projectId } = req.params;
    const userId = req.user!.id;
    const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';

    const project = await prisma.project.findFirst({
      where: isElevated ? { id: projectId } : { id: projectId, userId },
      include: {
        jobs: {
          where: { status: 'completed' },
          orderBy: { finishedAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }

    if (!(await canDownload(projectId, req.user!))) {
      res.status(402).json({ success: false, code: 'payment_required', error: 'Kode sumber dibuka setelah pembayaran QRIS dikonfirmasi.' });
      return;
    }

    let workspaceDir = project.repoPath;
    if (!workspaceDir && project.jobs.length > 0) {
      workspaceDir = path.resolve(config.storage.workspacesDir, `${projectId}_${project.jobs[0].id}`);
    }

    if (!workspaceDir || !fs.existsSync(workspaceDir)) {
      res.status(400).json({
        success: false,
        error: 'Proyek belum memiliki build selesai untuk diekspor.',
      });
      return;
    }

    try {
      const zipPath = await ExportManager.createExportZip(workspaceDir, projectId);
      const downloadFilename = `${project.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-source.zip`;

      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', `attachment; filename="${downloadFilename}"`);

      const fileStream = fs.createReadStream(zipPath);
      fileStream.pipe(res);
    } catch (err: any) {
      console.error('[ExportController] Failed to generate zip export:', err);
      res.status(500).json({ success: false, error: 'Gagal membuat file arsip ekspor' });
    }
  }
}
