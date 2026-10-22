import { ZodError } from 'zod';
import config from '../../config';
import { ClarificationQuestion, SpecDefinition } from '../../types';
import llmRouter, { LLMOutputError } from '../llm/router';
import { parseSpec, validateSpec } from '../spec/specSchema';
import { PLATFORM_LIMITS } from './platformLimits';

const SPEC_ATTEMPTS = 3;

const SPEC_FORMAT = `{
  "title": "Nama aplikasi (2-80 karakter)",
  "summary": "Satu atau dua kalimat: untuk siapa dan menyelesaikan apa",
  "targetUsers": ["Pemilik toko", "Kasir"],
  "features": [{ "name": "...", "description": "...", "priority": "must_have|should_have|nice_to_have", "userRole": "admin" }],
  "auth": { "mode": "none | single_role | multi_role", "roles": ["admin", "kasir"] },
  "designGuidelines": {
    "theme": "light | dark",
    "personality": "3-8 kata yang menggambarkan karakter bisnis ini, mis. 'hangat, ramah, seperti toko pasar'",
    "palette": { "background": "#hex", "surface": "#hex", "text": "#hex", "mutedText": "#hex", "border": "#hex", "accent": "#hex" },
    "typography": "neutral-sans | humanist-sans | geometric-sans | editorial-serif | mono",
    "radius": "sharp | soft | round",
    "density": "compact | comfortable",
    "navStyle": "sidebar | topbar"
  },
  "pages": [
    { "route": "/", "name": "Ringkasan", "purpose": "...", "kind": "dashboard | crud | custom", "entity": "NamaEntitas (wajib bila kind=crud)", "icon": "home|box|users|chart|cart|file|settings|calendar|wallet|tag|truck|list", "roles": ["admin"] }
  ],
  "databaseSchema": [
    {
      "name": "Product",
      "label": "Produk",
      "internal": false,
      "access": { "read": ["*"], "write": ["admin"] },
      "fields": [
        { "name": "name", "type": "String", "required": true, "label": "Nama produk" },
        { "name": "price", "type": "Int", "required": true, "format": "rupiah", "label": "Harga jual" },
        { "name": "status", "type": "String", "required": true, "values": ["aktif", "nonaktif"], "default": "aktif", "label": "Status" },
        { "name": "categoryId", "type": "String", "required": false, "relation": "Category", "label": "Kategori" }
      ]
    }
  ],
  "apiEndpoints": [
    { "method": "POST", "path": "/api/sales", "description": "...", "overridesCrud": true, "roles": ["admin", "kasir"], "request": "{ items: [{ productId: string, quantity: number }] }", "response": "{ id: string, total: number }" }
  ]
}`;

const SPEC_RULES = `Rules:
- The app is a web app with this fixed stack: Node/Express API, SQLite via Prisma, plain browser UI. Do not mention other technologies.
- Entities: PascalCase singular names. Do not list id, createdAt or updatedAt (added automatically). Field types: String, Int, Float, Boolean, DateTime only. Money is Int with "format": "rupiah". A foreign key is a String field named like "productId" with "relation": "Product". Fixed choices use "values" on a String field. Optional fields have "required": false.
- Every entity and every field needs a "label": the Bahasa Indonesia name people see in the UI.
- A standard REST API and a list/create/edit/delete screen are generated for every entity automatically. Therefore:
  * "apiEndpoints" lists ONLY endpoints with real business logic that standard CRUD cannot do (checkout that touches several tables, reports, status transitions). Never list the standard CRUD routes.
  * Set "overridesCrud": true only when a custom endpoint replaces a standard route of the same method and path (for example POST /api/sales that creates a sale with its items and decrements stock).
  * Mark an entity "internal": true when it must only change through those custom endpoints (for example SaleItem). Internal entities get no standard API and no CRUD page.
  * Every custom endpoint needs "response" and, for POST/PUT/PATCH, "request": compact JSON shapes with field names and types. The frontend and backend are written separately against these shapes.
- Pages: "crud" pages (with "entity") are generated screens for one entity; use them for plain data management. "dashboard" and "custom" pages are written by hand: use "dashboard" for the overview page that shows numbers and what needs attention, "custom" for task screens (a cashier screen, a booking calendar). Page "/" is required. Keep it to the pages the business really needs, usually 3 to 7.
- Login: use "none" only when the client clearly does not need it. Otherwise "single_role" (one account type) or "multi_role" (several). When login is on, auth.roles must start with "admin", and you must NOT define a "User" entity (it is created automatically with email, name, role). Restrict sensitive entities with "access".
- Design: choose a palette, typography, radius, density and navStyle that fit THIS business and its customers. Do not default to the same look for every app. Text must be readable: dark text on light backgrounds (or the reverse), accent colors with enough contrast.
- Everything the client sees is in Bahasa Indonesia, specific to their business. No generic placeholder wording.
- When the prompt contains "ACUAN DESAIN DARI KLIEN" (a brief read from a picture the client attached), use it as the starting point for pages, navigation style, density and designGuidelines (palette: keep its hues, the platform corrects contrast), but only for what this platform can build; whatever it cannot build goes in the "Belum termasuk" sentence. Never use brand names, logos or slogans that the picture showed.
- Never promise what the platform cannot build.
${PLATFORM_LIMITS}
  When the client asks for any of these: do NOT list it as a feature and do NOT create an entity that pretends to do it. Offer the nearest thing that works (for example a text field for a link) and describe it honestly as a link. End "summary" with one plain Indonesian sentence starting "Belum termasuk:" that names what was asked for but is not included.`;

function zodMessages(error: ZodError): string[] {
  return error.issues.map((issue) => `${issue.path.join('.') || '(root)'}: ${issue.message}`);
}

/** The briefs read from the client's pictures, as a block the planner is told to treat as a design reference. */
function referenceBlock(briefs: string[]): string {
  if (briefs.length === 0) return '';
  return `\n\nACUAN DESAIN DARI KLIEN (dibaca dari gambar yang dilampirkan; hanya tata letak dan warna):\n${briefs.map((b, i) => `[${i + 1}] ${b}`).join('\n')}`;
}

export class PlannerAgent {
  /**
   * Interactive clarification questions with tap options (PRD FR-03).
   * Throws when the model is unavailable: the caller tells the client, there is no canned question list.
   */
  public static async generateClarifications(
    userIdea: string,
    history: Array<{ role: string; content: string }>,
    referenceBriefs: string[] = []
  ): Promise<{ message: string; questions: ClarificationQuestion[] }> {
    const systemPrompt = `Anda adalah Lead Product Architect untuk platform pembuat aplikasi bisnis.
Pahami ide aplikasi klien, lalu ajukan 2 sampai 3 pertanyaan klarifikasi yang paling menentukan bentuk aplikasinya. Hindari pertanyaan yang jawabannya sudah ada di percakapan atau yang tidak mengubah apa yang dibangun.
Tanyakan hal yang berbeda-beda di antara bisnis: siapa saja yang memakai dan apakah perlu login, alur kerja yang paling sering dilakukan, data apa yang dicatat. Satu pertanyaan boleh tentang kesan visual (misalnya nuansa warna) bila belum jelas.
Bahasa: Indonesia yang sederhana, tanpa istilah teknis.

Balas HANYA JSON:
{
  "message": "Satu atau dua kalimat yang menunjukkan Anda paham ide klien",
  "questions": [
    {
      "id": "q1",
      "question": "Pertanyaan yang jelas",
      "category": "features | auth | database | ui",
      "allowMultiple": false,
      "options": [{ "id": "opt1", "label": "Label pendek", "description": "Penjelasan singkat", "value": "nilai_unik" }]
    }
  ]
}
Setiap pertanyaan punya 2 sampai 4 opsi.`;

    const userPrompt = `TASK: clarifications
Ide klien: "${userIdea}"
Percakapan sejauh ini: ${JSON.stringify(history.slice(-6))}${referenceBlock(referenceBriefs)}${referenceBriefs.length ? '\nKlien sudah melampirkan gambar acuan: jangan menanyakan warna atau tata letak yang sudah terlihat di acuan.' : ''}`;

    // Chat should feel instant, so this uses the fast model and starts a backup model if it is slow.
    const response = await llmRouter.completeStructured<{ message: string; questions: ClarificationQuestion[] }>({
      role: 'fast',
      systemPrompt,
      userPrompt,
      hedgeAfterMs: config.llm.hedgeAfterMs,
    });

    if (!Array.isArray(response.data.questions) || response.data.questions.length === 0) {
      throw new LLMOutputError('Model tidak mengajukan pertanyaan klarifikasi', 1);
    }
    return response.data;
  }

  /** Turns the whole conversation into a validated, buildable spec. */
  public static async generateSpec(
    clientMessages: string[],
    clarificationAnswers: Record<string, string>,
    projectId?: string,
    referenceBriefs: string[] = []
  ): Promise<SpecDefinition> {
    const systemPrompt = `Anda adalah Senior Solution Architect. Rumuskan Technical Specification yang siap dibangun untuk aplikasi web bisnis berdasarkan percakapan dengan klien.

Balas HANYA satu objek JSON dengan bentuk berikut (nilai contoh hanya ilustrasi):
${SPEC_FORMAT}

${SPEC_RULES}`;

    const base = `TASK: spec
Pesan klien (urut dari awal):
${clientMessages.map((m, i) => `${i + 1}. ${m}`).join('\n')}

Jawaban klarifikasi: ${JSON.stringify(clarificationAnswers)}
${referenceBlock(referenceBriefs)}

Rancang spesifikasi lengkap dan konsisten. Jangan menambah fitur yang tidak dibutuhkan bisnis ini.`;

    const { spec } = await this.produceValidSpec(systemPrompt, base, projectId);
    return spec;
  }

  /** Applies a client's change request to an existing spec and says which hand-written parts must change. */
  public static async reviseSpec(
    current: SpecDefinition,
    request: string,
    projectId: string,
    jobId: string
  ): Promise<{ spec: SpecDefinition; changes: RevisionChanges; summary: string }> {
    const systemPrompt = `Anda adalah Senior Solution Architect. Klien meminta perubahan pada aplikasi yang sudah berjalan. Terapkan perubahan itu pada spesifikasi yang ada dan balas HANYA JSON:
{
  "spec": <seluruh spesifikasi terbaru, bentuk dan aturan sama seperti spesifikasi awal>,
  "changes": {
    "pages": [{ "route": "/pos", "instruction": "perubahan yang harus dilakukan pada halaman buatan tangan ini" }],
    "endpoints": [{ "segment": "sales", "instruction": "perubahan pada endpoint khusus di /api/sales" }],
    "seed": false
  },
  "summary": "Satu kalimat Indonesia untuk klien tentang apa yang berubah"
}
"changes" hanya memuat bagian BUATAN TANGAN yang kodenya perlu diubah: halaman bertipe dashboard/custom, dan grup endpoint khusus (segment = bagian pertama setelah /api/). Halaman crud, API standar, skema database, tema, dan tes standar dibuat ulang otomatis dari spec, jadi jangan dimasukkan. Halaman atau endpoint BARU di spec tidak perlu ada di "changes" (otomatis ditulis). "seed": true bila data contoh perlu berubah.
Ubah seminimal yang diminta klien. Jangan menghapus data atau fitur yang tidak disebut.

${SPEC_RULES}`;

    const base = `TASK: revise-spec
Spesifikasi saat ini:
${JSON.stringify(current)}

Permintaan klien: "${request}"`;

    const result = await this.produceValidSpec(systemPrompt, base, projectId, jobId, (raw) => {
      const body = raw as { spec?: unknown; changes?: Partial<RevisionChanges>; summary?: string };
      return { specInput: body.spec, extra: { changes: body.changes, summary: body.summary } };
    });

    const extra = result.extra as { changes?: Partial<RevisionChanges>; summary?: string };
    return {
      spec: result.spec,
      changes: {
        pages: extra.changes?.pages ?? [],
        endpoints: extra.changes?.endpoints ?? [],
        seed: Boolean(extra.changes?.seed),
      },
      summary: extra.summary || 'Perubahan diterapkan.',
    };
  }

  private static async produceValidSpec(
    systemPrompt: string,
    basePrompt: string,
    projectId?: string,
    jobId?: string,
    unwrap: (raw: unknown) => { specInput: unknown; extra?: unknown } = (raw) => ({ specInput: raw })
  ): Promise<{ spec: SpecDefinition; extra?: unknown }> {
    let feedback = '';

    for (let attempt = 1; attempt <= SPEC_ATTEMPTS; attempt++) {
      const response = await llmRouter.completeStructured<unknown>({
        role: 'planner',
        systemPrompt,
        userPrompt: feedback ? `${basePrompt}\n\n---\nSpesifikasi sebelumnya ditolak karena masalah berikut. Perbaiki semuanya dan kirim ulang JSON lengkap:\n${feedback}` : basePrompt,
        projectId,
        jobId,
      });

      const { specInput, extra } = unwrap(response.data);
      let problems: string[];
      try {
        const spec = parseSpec(specInput);
        problems = validateSpec(spec);
        if (problems.length === 0) return { spec, extra };
      } catch (error) {
        if (!(error instanceof ZodError)) throw error;
        problems = zodMessages(error);
      }

      console.warn(`[PlannerAgent] Spec attempt ${attempt}/${SPEC_ATTEMPTS} rejected: ${problems.slice(0, 5).join(' | ')}`);
      feedback = problems.map((p) => `- ${p}`).join('\n');
    }

    throw new LLMOutputError(`Planner tidak menghasilkan spesifikasi yang valid setelah ${SPEC_ATTEMPTS} percobaan:\n${feedback}`, SPEC_ATTEMPTS);
  }
}

export interface RevisionChanges {
  pages: Array<{ route: string; instruction: string }>;
  endpoints: Array<{ segment: string; instruction: string }>;
  seed: boolean;
}
