import { Request, Response } from 'express';
import { z } from 'zod';
import config from '../config';
import prisma from '../db/prisma';
import { visionAvailable } from '../services/agents/visionAgent';
import { countAttachments, MAX_ATTACHMENTS_PER_PROJECT, readAttachment, saveAttachment, sniffImage } from '../services/storage/attachments';

export const uploadSchema = z.object({
  // Base64 of the picture, with or without a "data:image/...;base64," prefix.
  data: z.string().min(16, 'Gambar kosong'),
});

async function ownedProject(req: Request) {
  const { id } = req.params;
  const isElevated = req.user!.role === 'admin' || req.user!.role === 'operator';
  return prisma.project.findFirst({ where: isElevated ? { id } : { id, userId: req.user!.id } });
}

export class AttachmentController {
  /** Stores one picture for the project. The type is read from the file itself, and the size is capped. */
  public static async upload(req: Request, res: Response): Promise<void> {
    const project = await ownedProject(req);
    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }
    if (!visionAvailable()) {
      res.status(409).json({ success: false, error: 'Membaca gambar belum aktif di server ini.' });
      return;
    }

    const parsed = uploadSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ success: false, error: parsed.error.issues[0].message });
      return;
    }

    const base64 = parsed.data.data.replace(/^data:[^;]+;base64,/, '');
    const bytes = Buffer.from(base64, 'base64');
    if (bytes.length === 0) {
      res.status(400).json({ success: false, error: 'Gambar kosong atau rusak' });
      return;
    }
    if (bytes.length > config.vision.maxBytes) {
      res.status(413).json({ success: false, error: `Gambar terlalu besar. Batasnya ${Math.round(config.vision.maxBytes / 1_000_000)} MB.` });
      return;
    }

    const mime = sniffImage(bytes);
    if (!mime) {
      res.status(415).json({ success: false, error: 'Hanya gambar PNG, JPEG, atau WebP yang bisa dilampirkan.' });
      return;
    }
    if ((await countAttachments(project.id)) >= MAX_ATTACHMENTS_PER_PROJECT) {
      res.status(409).json({ success: false, error: 'Proyek ini sudah menyimpan terlalu banyak gambar.' });
      return;
    }

    const stored = await saveAttachment(project.id, bytes, mime);
    res.status(201).json({ success: true, data: stored });
  }

  /** The picture itself, for the project's owner only. */
  public static async download(req: Request, res: Response): Promise<void> {
    const project = await ownedProject(req);
    const file = project ? await readAttachment(project.id, req.params.attId) : null;
    if (!project || !file) {
      res.status(404).json({ success: false, error: 'Gambar tidak ditemukan' });
      return;
    }
    res.setHeader('Content-Type', file.mime);
    res.setHeader('Cache-Control', 'private, max-age=3600');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.send(file.bytes);
  }
}
