import fs from 'fs';
import path from 'path';
import llmClient from '../../src/services/llm/client';
import { shopSpecRaw } from '../fixtures/specs';
import { streamReply } from './fakeStream';

export interface LlmCall {
  task: string;
  system: string;
  user: string;
  model: string;
  /** How many pictures came with the prompt, and the data URLs of them. */
  images: string[];
}

export type Handler = (call: LlmCall) => string | undefined | Promise<string | undefined>;

const fixture = (name: string) => fs.readFileSync(path.join(__dirname, '../fixtures/shop', name), 'utf8');
const files = (...entries: Array<[string, string]>) =>
  entries.map(([p, content]) => `=== FILE: ${p} ===\n${content}\n=== END FILE ===`).join('\n\n');

export const shopFixtures = {
  clarifications: JSON.stringify({
    message: 'Toko kelontong dengan kasir dan stok, ya. Dua hal lagi supaya tepat:',
    questions: [
      {
        id: 'auth',
        question: 'Siapa saja yang memakai aplikasi ini?',
        category: 'auth',
        allowMultiple: false,
        options: [
          { id: 'a1', label: 'Pemilik dan kasir', description: 'Hak akses dibedakan', value: 'multi_role' },
          { id: 'a2', label: 'Pemilik saja', value: 'single_role' },
        ],
      },
    ],
  }),
  spec: JSON.stringify(shopSpecRaw),
  seed: files(['prisma/seed.data.js', fixture('seed.data.js')]),
  sales: files(['src/routes/custom/sales.js', fixture('sales.js')]),
  reports: files(['src/routes/custom/reports.js', fixture('reports.js')]),
  home: files(['public/js/pages/home.js', fixture('home.js')]),
  pos: files(['public/js/pages/pos.js', fixture('pos.js')]),
  salesTests: files(['tests/custom/sales.test.js', fixture('sales.test.js')]),
  reportsTests: files(['tests/custom/reports.test.js', fixture('reports.test.js')]),
  review: JSON.stringify({ summary: 'Tidak ada cacat serius.', issues: [] }),
};

const DEFAULTS: Record<string, string> = {
  clarifications: shopFixtures.clarifications,
  spec: shopFixtures.spec,
  'seed-data': shopFixtures.seed,
  'backend-route segment=sales': shopFixtures.sales,
  'backend-route segment=reports': shopFixtures.reports,
  'frontend-page route=/': shopFixtures.home,
  'frontend-page route=/pos': shopFixtures.pos,
  'custom-tests segment=sales': shopFixtures.salesTests,
  'custom-tests segment=reports': shopFixtures.reportsTests,
  review: shopFixtures.review,
};

/**
 * Replaces the OpenAI client with a script. Each call is answered by an override for its task if one
 * exists, otherwise by the shop fixture. An unscripted task fails loudly instead of returning filler.
 */
export function useScriptedLlm(overrides: Record<string, Handler> = {}) {
  const calls: LlmCall[] = [];

  llmClient.setClientForTesting({
    chat: {
      completions: {
        create: async ({ model, messages }: { model: string; messages: Array<{ role: string; content: string | Array<{ type: string; text?: string; image_url?: { url: string } }> }> }, options?: { signal?: AbortSignal }) => {
          const system = messages[0].content as string;
          const raw = messages[1].content;
          const user = typeof raw === 'string' ? raw : raw.filter((p) => p.type === 'text').map((p) => p.text).join(String.fromCharCode(10));
          const images = typeof raw === 'string' ? [] : raw.filter((p) => p.type === 'image_url').map((p) => p.image_url!.url);
          const task = /^TASK: (.+)$/m.exec(user)?.[1]?.trim() ?? 'unknown';
          const call: LlmCall = { task, system, user, model, images };
          calls.push(call);

          const handler = Object.entries(overrides).find(([key]) => task === key || task.startsWith(key))?.[1];
          const content = (handler ? await handler(call) : undefined) ?? DEFAULTS[task];
          if (content === undefined) throw new Error(`No scripted reply for task "${task}"`);

          return streamReply(content, { signal: options?.signal });
        },
      },
    },
  });

  return { calls, restore: () => llmClient.setClientForTesting(null) };
}
