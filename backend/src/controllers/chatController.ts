import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../db/prisma';
import { AppAssistant, loadCredentials, revealCredentials } from '../services/agents/appAssistant';
import config from '../config';
import { PlannerAgent } from '../services/agents/plannerAgent';
import { VisionAgent, VisionError, visionAvailable } from '../services/agents/visionAgent';
import { readAttachment } from '../services/storage/attachments';
import { LLMNotConfiguredError, LLMOutputError, LLMUnavailableError } from '../services/llm/router';

export const sendMessageSchema = z.object({
  content: z.string().trim().min(1, 'Pesan tidak boleh kosong').max(4000, 'Pesan maksimal 4000 karakter'),
  metadata: z.record(z.any()).optional(), // can include selectedTapOption, answers, etc.
});

const PENDING_MARK = '"type":"pending"';
/** A reply that has not finished by now is given up on, so the chat never stays stuck. */
const TASK_TIMEOUT_MS = 8 * 60 * 1000;

const ELEVATED = new Set(['admin', 'operator']);
/** Project states in which the chat talks about the existing app. */
const APP_CHAT_STATUSES = new Set(['ready', 'live', 'needs_review']);

function friendlyError(error: unknown): string {
  if (error instanceof VisionError) return error.message;
  if (error instanceof LLMNotConfiguredError) return 'Mesin AI belum dikonfigurasi di server ini. Hubungi pengelola platform.';
  if (error instanceof LLMUnavailableError) return 'Semua mesin AI sedang sibuk atau tidak merespons. Coba kirim ulang beberapa saat lagi.';
  if (error instanceof LLMOutputError) return 'AI belum berhasil menyusun jawaban yang valid. Coba jelaskan ide Anda sedikit lebih rinci, lalu kirim ulang.';
  return 'Terjadi kendala saat memproses pesan Anda. Silakan coba kirim ulang.';
}

export class ChatController {
  public static async getMessages(req: Request, res: Response): Promise<void> {
    const { id: projectId } = req.params;
    const userId = req.user!.id;
    const isElevated = ELEVATED.has(req.user!.role);

    const project = await prisma.project.findFirst({
      where: isElevated ? { id: projectId } : { id: projectId, userId },
      include: { conversation: { include: { messages: { orderBy: { createdAt: 'asc' } } } } },
    });

    if (!project || !project.conversation) {
      res.status(404).json({ success: false, error: 'Percakapan tidak ditemukan' });
      return;
    }

    res.json({ success: true, data: await ChatController.withCredentials(projectId, project.conversation.messages) });
  }

  /** Answers about the app may contain the login tokens; the owner sees the real values, the database never stores them. */
  public static async withCredentials<T extends { content: string }>(projectId: string, messages: T[]): Promise<T[]> {
    if (!messages.some((m) => m.content.includes('{{LOGIN_'))) return messages;
    const credentials = await loadCredentials(projectId);
    return messages.map((m) => ({ ...m, content: revealCredentials(m.content, credentials) }));
  }

  /**
   * Saves the message and answers right away with a pending reply. The planner works in the background;
   * the client polls GET /messages until the reply is no longer pending. Add ?wait=1 to block until it is
   * done (scripts and tests).
   */
  public static async sendMessage(req: Request, res: Response): Promise<void> {
    const { id: projectId } = req.params;
    const { content, metadata } = req.body;
    const userId = req.user!.id;
    const isElevated = ELEVATED.has(req.user!.role);

    const project = await prisma.project.findFirst({
      where: isElevated ? { id: projectId } : { id: projectId, userId },
      include: {
        conversation: { include: { messages: { orderBy: { createdAt: 'asc' } } } },
        specs: { orderBy: { createdAt: 'desc' }, take: 1 },
      },
    });

    if (!project) {
      res.status(404).json({ success: false, error: 'Proyek tidak ditemukan' });
      return;
    }

    if (project.status === 'building') {
      res.status(409).json({ success: false, error: 'Aplikasi sedang dibangun. Tunggu sampai selesai, lalu ajukan revisi.' });
      return;
    }

    const conversation =
      project.conversation ?? (await prisma.conversation.create({ data: { projectId }, include: { messages: true } }));
    const history = conversation.messages;

    if (history.some((m) => m.metadata?.includes(PENDING_MARK))) {
      res.status(409).json({ success: false, error: 'Pesan sebelumnya masih diproses. Tunggu sebentar.' });
      return;
    }

    // Pictures the client attached. Ids come from earlier uploads to this same project; anything else is refused.
    const requestedIds: string[] = [
      ...(Array.isArray(metadata?.attachmentIds) ? metadata.attachmentIds : []),
      ...(Array.isArray(metadata?.attachments) ? metadata.attachments.map((a: { id?: unknown }) => a?.id) : []),
    ].filter((id, index, all): id is string => typeof id === 'string' && all.indexOf(id) === index);
    const attachments: Array<{ id: string; mime: string }> = [];
    if (requestedIds.length > 0) {
      if (requestedIds.length > config.vision.maxImages) {
        res.status(400).json({ success: false, error: `Maksimal ${config.vision.maxImages} gambar per pesan.` });
        return;
      }
      if (!visionAvailable()) {
        res.status(409).json({ success: false, error: 'Membaca gambar belum aktif di server ini. Jelaskan tampilannya dengan kata-kata.' });
        return;
      }
      for (const id of requestedIds) {
        const file = await readAttachment(projectId, id);
        if (!file) {
          res.status(400).json({ success: false, error: 'Salah satu gambar tidak ditemukan. Lampirkan lagi.' });
          return;
        }
        attachments.push({ id, mime: file.mime });
      }
    }
    // What is stored is what the server checked: the list of pictures, never a reading the client supplied.
    const { attachmentIds: _ids, attachments: _atts, visionBrief: _brief, ...rest } = (metadata ?? {}) as Record<string, unknown>;
    const storedMetadata = attachments.length > 0 || Object.keys(rest).length > 0 ? { ...rest, ...(attachments.length > 0 ? { attachments } : {}) } : null;

    const userMessage = await prisma.message.create({
      data: { conversationId: conversation.id, role: 'user', content, metadata: storedMetadata ? JSON.stringify(storedMetadata) : null },
    });

    // Briefs read from pictures in earlier messages stay part of the conversation.
    const referenceBriefs = history.flatMap((m) => {
      try {
        const brief = m.metadata ? (JSON.parse(m.metadata) as { visionBrief?: unknown }).visionBrief : undefined;
        return typeof brief === 'string' ? [brief] : [];
      } catch {
        return [];
      }
    });

    const conversationForPlanner = [...history.map((m) => ({ role: m.role, content: m.content })), { role: 'user', content }];
    // The spec is written only when the client asks for it (the "Lanjutkan" button). Word counts and keywords
    // such as "bangun" must not decide, or an idea like "saya mau membangun aplikasi..." skips every question.
    const isReadyForSpec = metadata?.isReadyForSpec === true;
    // Once an app exists the chat is about that app, not about planning a new one.
    const aboutApp = !isReadyForSpec && APP_CHAT_STATUSES.has(project.status);

    const pending = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        role: 'assistant',
        content: isReadyForSpec ? 'Sedang menyusun spesifikasi aplikasi Anda. Biasanya 1 sampai 2 menit...' : aboutApp ? 'Sedang memeriksa aplikasi Anda...' : 'Sedang memahami ide Anda dan menyiapkan pertanyaan...',
        metadata: JSON.stringify({ type: 'pending', task: isReadyForSpec ? 'spec' : aboutApp ? 'app' : 'clarifications', startedAt: new Date().toISOString() }),
      },
    });

    const work = ChatController.process({
      projectId,
      pendingId: pending.id,
      conversation: conversationForPlanner,
      content,
      answers: metadata?.answers || {},
      isReadyForSpec,
      aboutApp,
      userMessageId: userMessage.id,
      attachments,
      referenceBriefs,
      nextSpecVersion: project.specs.length + 1,
    });

    if (req.query.wait === '1') {
      const outcome = await work;
      if (outcome.error) throw outcome.error;
      res.json({
        success: true,
        data: {
          userMessage,
          assistantMessage: (await ChatController.withCredentials(projectId, [(await prisma.message.findUnique({ where: { id: pending.id } }))!]))[0],
          spec: outcome.spec,
        },
      });
      return;
    }

    void work;
    res.status(202).json({ success: true, data: { userMessage, assistantMessage: pending, pending: true } });
  }

  /** Runs the planner and settles the pending reply. Never throws: failures become a retryable error message. */
  private static async process(task: {
    projectId: string;
    pendingId: string;
    conversation: Array<{ role: string; content: string }>;
    content: string;
    answers: Record<string, string>;
    isReadyForSpec: boolean;
    aboutApp: boolean;
    userMessageId: string;
    attachments: Array<{ id: string; mime: string }>;
    referenceBriefs: string[];
    nextSpecVersion: number;
  }): Promise<{ spec?: any; error?: unknown }> {
    // Only the first finisher may settle the message: either the planner or the time limit.
    const settle = async (data: { content: string; metadata: object }): Promise<boolean> => {
      const result = await prisma.message.updateMany({
        where: { id: task.pendingId, metadata: { contains: PENDING_MARK } },
        data: { content: data.content, metadata: JSON.stringify(data.metadata) },
      });
      return result.count > 0;
    };

    const run = async (): Promise<{ spec?: any }> => {
      // Pictures first: they are read into a short brief that every later step uses as plain text.
      const briefs = [...task.referenceBriefs];
      if (task.attachments.length > 0) {
        const images = await Promise.all(
          task.attachments.map(async (a) => {
            const file = await readAttachment(task.projectId, a.id);
            if (!file) throw new VisionError('Salah satu gambar sudah tidak ada. Lampirkan lagi.');
            return { mime: file.mime, base64: file.bytes.toString('base64') };
          })
        );
        const brief = VisionAgent.format(await VisionAgent.describe(images, task.content, task.projectId));
        briefs.push(brief);
        const row = await prisma.message.findUnique({ where: { id: task.userMessageId } });
        await prisma.message.update({ where: { id: task.userMessageId }, data: { metadata: JSON.stringify({ ...(row?.metadata ? JSON.parse(row.metadata) : {}), visionBrief: brief }) } });
      }

      if (task.isReadyForSpec) {
        const clientMessages = task.conversation.filter((m) => m.role === 'user').map((m) => m.content);
        const spec = await PlannerAgent.generateSpec(clientMessages, task.answers, task.projectId, briefs);

        const stillWaiting = await prisma.message.count({ where: { id: task.pendingId, metadata: { contains: PENDING_MARK } } });
        if (stillWaiting === 0) return {};

        const saved = await prisma.spec.create({
          data: { projectId: task.projectId, version: task.nextSpecVersion, content: JSON.stringify(spec) },
        });
        await prisma.project.update({ where: { id: task.projectId }, data: { status: 'planning' } });
        await settle({
          content: `Saya sudah menyusun rancangan untuk ${spec.title}. Tinjau ringkasannya di bawah, lalu klik "Setujui & mulai build" untuk memulai pembangunan.`,
          metadata: { type: 'spec_preview', specId: saved.id, spec },
        });
        return { spec: saved };
      }

      if (task.aboutApp) {
        const reply = await AppAssistant.answer(task.projectId, task.content, task.conversation.slice(0, -1), briefs);
        await settle({ content: reply.answer, metadata: { type: 'app_answer', intent: reply.intent, ...(reply.changeRequest ? { changeRequest: reply.changeRequest } : {}) } });
        return {};
      }

      const clarification = await PlannerAgent.generateClarifications(task.content, task.conversation, briefs);
      await settle({
        content: clarification.message || 'Berikut beberapa pertanyaan klarifikasi untuk mematangkan spesifikasi:',
        metadata: { type: 'clarifications', questions: clarification.questions },
      });
      return {};
    };

    const timeout = new Promise<'timeout'>((resolve) => setTimeout(() => resolve('timeout'), TASK_TIMEOUT_MS).unref());

    try {
      const outcome = await Promise.race([run(), timeout]);
      if (outcome === 'timeout') {
        await settle({ content: 'Proses terlalu lama. Silakan kirim ulang pesan Anda.', metadata: { type: 'error', retryable: true } });
        return { error: new LLMUnavailableError([{ model: 'planner', reason: 'melewati batas waktu' }]) };
      }
      return outcome;
    } catch (error) {
      console.error('[Chat] Planner failed:', (error as Error).message);
      await settle({ content: friendlyError(error), metadata: { type: 'error', retryable: true } });
      return { error };
    }
  }

  /** After a restart, replies that were still being written will never finish: mark them so the chat is not stuck. */
  public static async expireStalePending(): Promise<number> {
    const stale = await prisma.message.findMany({ where: { metadata: { contains: PENDING_MARK } }, select: { id: true } });
    for (const message of stale) {
      await prisma.message.update({
        where: { id: message.id },
        data: {
          content: 'Server dimulai ulang saat pesan ini diproses. Silakan kirim ulang pesan Anda.',
          metadata: JSON.stringify({ type: 'error', retryable: true }),
        },
      });
    }
    return stale.length;
  }
}
