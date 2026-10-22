import { z } from 'zod';
import config from '../../config';
import llmClient from '../llm/client';
import { parseModelRef } from '../llm/providers';
import { JSONParseError } from '../llm/jsonParser';
import llmRouter, { ImageInput, LLMNotConfiguredError, LLMOutputError, LLMUnavailableError } from '../llm/router';
import { RateLimitedError, RequestTooLargeError } from '../llm/rateLimiter';
import { PLATFORM_LIMITS } from './platformLimits';

/** A reason the picture could not be used, worded for the client. */
export class VisionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'VisionError';
  }
}

const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/);

const BriefSchema = z.object({
  readable: z.boolean().catch(true),
  kind: z.string().catch('other'),
  summary: z.string().catch(''),
  pages: z
    .array(z.object({ name: z.string().catch(''), purpose: z.string().catch(''), sections: z.array(z.string()).catch([]) }))
    .catch([]),
  navigation: z.string().catch(''),
  components: z.array(z.string()).catch([]),
  palette: z.object({ background: hex.optional().catch(undefined), surface: hex.optional().catch(undefined), text: hex.optional().catch(undefined), accent: hex.optional().catch(undefined) }).catch({}),
  density: z.string().catch('comfortable'),
  dataEntities: z.array(z.string()).catch([]),
  notBuildable: z.array(z.string()).catch([]),
});

export type DesignBrief = z.infer<typeof BriefSchema>;

/** Whether the model that reads pictures can be reached at all (its provider has a key). */
export function visionAvailable(): boolean {
  return llmClient.isConfigured(parseModelRef(config.llm.models.vision).provider);
}

const SYSTEM_PROMPT = `You read a picture a client attached while describing the business app they want: a screenshot of an app they like, a photo of a hand sketch, or a mockup. You write a short design brief that another model will use to plan the app.

Describe only what is visible and useful for planning: the pages or screens, the sections on each, the navigation pattern, the kinds of components (tables, forms, cards, charts, filters), the colours (as 6-digit hex values, estimated from the picture), whether the layout is compact or comfortable, and which kinds of records the screens imply (for example products, sales, customers).

Rules:
- Layout and colour only. Never copy logos, brand names, product names, slogans or any copyrighted text. If the picture is of a known product, describe its structure in generic words.
- Write in Bahasa Indonesia, plain and short. Hex colours stay as hex.
- Anything shown that this platform cannot build goes in "notBuildable", in a few words each. ${PLATFORM_LIMITS.replace(/\n/g, ' ')}
- If the picture is not usable (blank, not related to an app or a screen, unreadable), set "readable" to false and explain in "summary".
- Do not invent screens that are not there. Fewer, accurate items beat many guesses.

Reply with ONLY this JSON:
{ "readable": true, "kind": "screenshot | sketch | mockup | other", "summary": "...", "pages": [{ "name": "...", "purpose": "...", "sections": ["..."] }], "navigation": "...", "components": ["..."], "palette": { "background": "#rrggbb", "surface": "#rrggbb", "text": "#rrggbb", "accent": "#rrggbb" }, "density": "compact | comfortable", "dataEntities": ["..."], "notBuildable": ["..."] }`;

export class VisionAgent {
  /** Reads the pictures and returns one brief. Throws VisionError with a message fit to show the client. */
  public static async describe(images: ImageInput[], clientText: string, projectId?: string): Promise<DesignBrief> {
    if (!visionAvailable()) {
      throw new VisionError('Membaca gambar belum aktif di server ini. Jelaskan tampilannya dengan kata-kata, atau hubungi pengelola platform.');
    }

    try {
      const response = await llmRouter.completeStructured<unknown>({
        role: 'vision',
        systemPrompt: SYSTEM_PROMPT,
        userPrompt: `TASK: vision-brief\nPesan klien: "${clientText.slice(0, 600)}"\nJumlah gambar: ${images.length}. Gabungkan semuanya menjadi satu ringkasan.`,
        images,
        projectId,
        parser: (raw) => {
          let value: unknown;
          try {
            value = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));
          } catch {
            throw new JSONParseError('balasan bukan JSON', raw);
          }
          const parsed = BriefSchema.safeParse(value);
          if (!parsed.success) throw new JSONParseError('ringkasan gambar tidak sesuai bentuk yang diminta', raw);
          return parsed.data;
        },
      });
      const brief = response.data as DesignBrief;
      if (!brief.readable) throw new VisionError(`Gambar belum bisa dipakai: ${brief.summary || 'tidak terlihat seperti tampilan aplikasi.'} Coba gambar lain, atau jelaskan dengan kata-kata.`);
      return brief;
    } catch (error) {
      if (error instanceof VisionError) throw error;
      if (error instanceof RateLimitedError || error instanceof RequestTooLargeError) {
        throw new VisionError('Gambar belum bisa dibaca karena batas pemakaian mesin gambar sedang penuh. Coba lagi sebentar lagi, atau jelaskan dengan kata-kata.');
      }
      if (error instanceof LLMNotConfiguredError || error instanceof LLMUnavailableError || error instanceof LLMOutputError) {
        console.warn('[Vision] Could not read the picture:', (error as Error).message.slice(0, 200));
        throw new VisionError('Gambar belum bisa dibaca. Coba kirim ulang, atau jelaskan tampilannya dengan kata-kata.');
      }
      throw error;
    }
  }

  /** The brief as plain text for the planner and the app assistant. Kept short: it goes into every later prompt. */
  public static format(brief: DesignBrief): string {
    const lines: string[] = [];
    if (brief.summary) lines.push(brief.summary);
    if (brief.pages.length) lines.push(`Halaman: ${brief.pages.map((p) => `${p.name}${p.sections.length ? ` (${p.sections.slice(0, 5).join(', ')})` : ''}`).join('; ')}`);
    if (brief.navigation) lines.push(`Navigasi: ${brief.navigation}`);
    if (brief.components.length) lines.push(`Komponen: ${brief.components.slice(0, 10).join(', ')}`);
    const colours = Object.entries(brief.palette).filter(([, v]) => v).map(([k, v]) => `${k} ${v}`);
    if (colours.length) lines.push(`Warna acuan: ${colours.join(', ')}`);
    lines.push(`Kepadatan: ${brief.density}`);
    if (brief.dataEntities.length) lines.push(`Data yang tersirat: ${brief.dataEntities.slice(0, 8).join(', ')}`);
    if (brief.notBuildable.length) lines.push(`Tidak bisa dibuat platform: ${brief.notBuildable.join('; ')}`);
    return lines.join('\n').slice(0, 1800);
  }
}
