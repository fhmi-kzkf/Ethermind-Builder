import prisma from '../../db/prisma';
import previewManager from '../deployment/previewManager';
import llmRouter from '../llm/router';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { jobIdFromRepoPath } from '../versions/current';
import { parseSpec, SpecDefinition } from '../spec/specSchema';
import { PLATFORM_LIMITS } from './platformLimits';

/** Stands in for the app's first login in anything a model writes. The real values are filled in by the server, never by a model. */
export const EMAIL_TOKEN = '{{LOGIN_EMAIL}}';
export const PASSWORD_TOKEN = '{{LOGIN_PASSWORD}}';

export interface AppCredentials {
  email: string;
  password: string;
  url: string | null;
  running: boolean;
}

export interface AppAnswer {
  answer: string;
  intent: 'question' | 'change_request';
  changeRequest?: string;
}

interface AppState {
  projectName: string;
  projectStatus: string;
  spec: SpecDefinition | null;
  job: { id: string; status: string; type: string; finishedAt: Date | null } | null;
  gates: Array<{ gate: string; passed: boolean; summary: string }>;
  deployment: { url: string; status: string } | null;
  credentials: AppCredentials | null;
}

const GATE_LABELS: Record<string, string> = {
  build_check: 'Build',
  lint_typecheck: 'Lint',
  unit_test: 'Tes otomatis',
  security_scan: 'Keamanan',
  launch_checklist: 'Checklist peluncuran',
  ai_review: 'Review AI',
  smoke_test: 'Smoke test',
};

/** Everything the platform knows about a project's app, read from the database and the app's own workspace. */
async function loadState(projectId: string): Promise<AppState | null> {
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project) return null;

  const activeJobId = jobIdFromRepoPath(project.repoPath, projectId);
  const job =
    (activeJobId ? await prisma.job.findFirst({ where: { id: activeJobId, projectId }, include: { spec: true } }) : null) ??
    (await prisma.job.findFirst({ where: { projectId, status: 'completed' }, orderBy: { createdAt: 'desc' }, include: { spec: true } })) ??
    (await prisma.job.findFirst({ where: { projectId }, orderBy: { createdAt: 'desc' }, include: { spec: true } }));
  const latestSpec = job?.spec ?? (await prisma.spec.findFirst({ where: { projectId }, orderBy: { version: 'desc' } }));

  let spec: SpecDefinition | null = null;
  try {
    if (latestSpec) spec = parseSpec(JSON.parse(latestSpec.content));
  } catch {
    spec = null;
  }

  const gateRows = job ? await prisma.gateResult.findMany({ where: { jobId: job.id }, orderBy: { createdAt: 'asc' } }) : [];
  const latestByGate = new Map<string, { gate: string; passed: boolean; summary: string }>();
  for (const row of gateRows) {
    let summary = '';
    try {
      summary = (JSON.parse(row.report) as { summary?: string }).summary ?? '';
    } catch {
      summary = '';
    }
    latestByGate.set(row.gate, { gate: row.gate, passed: row.passed, summary });
  }

  const deployment = await prisma.deployment.findFirst({ where: { projectId, environment: 'preview' }, orderBy: { createdAt: 'desc' } });

  let credentials: AppCredentials | null = null;
  if (job && spec && spec.auth.mode !== 'none') {
    const secrets = await previewManager.readSecrets(new WorkspaceFileManager(projectId, job.id));
    if (secrets) {
      credentials = { email: secrets.adminEmail, password: secrets.adminPassword, url: deployment?.url ?? null, running: deployment?.status === 'running' };
    }
  }

  return {
    projectName: project.name,
    projectStatus: project.status,
    spec,
    job: job ? { id: job.id, status: job.status, type: job.type, finishedAt: job.finishedAt } : null,
    gates: Array.from(latestByGate.values()),
    deployment: deployment ? { url: deployment.url, status: deployment.status } : null,
    credentials,
  };
}

export async function loadCredentials(projectId: string): Promise<AppCredentials | null> {
  return (await loadState(projectId))?.credentials ?? null;
}

/** Replaces the login tokens in text a model wrote. Without credentials the tokens are removed rather than shown. */
export function revealCredentials(text: string, credentials: AppCredentials | null): string {
  if (!text.includes('{{LOGIN_')) return text;
  return text.split(EMAIL_TOKEN).join(credentials?.email ?? '(tidak tersedia)').split(PASSWORD_TOKEN).join(credentials?.password ?? '(tidak tersedia)');
}

const clip = (text: string, max: number) => (text.length > max ? `${text.slice(0, max - 1)}…` : text);

function describe(state: AppState): string {
  const lines: string[] = [];
  const { spec } = state;

  lines.push(`Nama proyek: ${state.projectName}`);
  lines.push(`Status proyek: ${state.projectStatus}`);
  if (state.job) {
    lines.push(`Build terakhir: ${state.job.type} (${state.job.status})${state.job.finishedAt ? `, selesai ${state.job.finishedAt.toISOString()}` : ''}`);
  } else {
    lines.push('Belum ada build.');
  }

  if (state.deployment) {
    lines.push(
      state.deployment.status === 'running'
        ? `Aplikasi berjalan di ${state.deployment.url}`
        : `Aplikasi sedang berhenti (alamat terakhir ${state.deployment.url}). Tombol "Jalankan pratinjau" di panel pratinjau menyalakannya lagi dengan data yang ada.`
    );
  } else {
    lines.push('Aplikasi belum pernah dijalankan.');
  }

  if (spec) {
    lines.push('', `Aplikasi: ${spec.title}. ${clip(spec.summary, 300)}`);
    if (spec.targetUsers.length) lines.push(`Pengguna: ${spec.targetUsers.join(', ')}`);
    lines.push(
      spec.auth.mode === 'none'
        ? 'Login: tidak ada, aplikasi langsung terbuka.'
        : `Login: wajib. Peran: ${spec.auth.roles.join(', ') || '-'}. Akun pertama adalah administrator dengan email ${EMAIL_TOKEN} dan kata sandi awal ${PASSWORD_TOKEN}. Administrator membuat akun staf lain dari menu pengguna di dalam aplikasi, dan sebaiknya segera mengganti kata sandi awal.`
    );

    if (spec.features.length) {
      lines.push('', 'Fitur yang dirancang:');
      for (const f of spec.features.slice(0, 15)) lines.push(`- ${f.name}: ${clip(f.description, 120)}`);
    }
    lines.push('', 'Halaman:');
    for (const p of spec.pages.slice(0, 20)) lines.push(`- ${p.route} ${p.name} (${p.kind}): ${clip(p.purpose, 120)}`);
    lines.push('', 'Data yang disimpan:');
    for (const e of spec.databaseSchema.slice(0, 20)) {
      lines.push(`- ${e.label || e.name}${e.internal ? ' (internal)' : ''}: ${e.fields.map((f) => f.label || f.name).slice(0, 14).join(', ')}`);
    }
    if (spec.apiEndpoints.length) {
      lines.push('', 'Logika khusus (API):');
      for (const a of spec.apiEndpoints.slice(0, 20)) lines.push(`- ${a.method} ${a.path}: ${clip(a.description ?? '', 110)}`);
    }
  } else {
    lines.push('', 'Belum ada spesifikasi aplikasi.');
  }

  if (state.gates.length) {
    lines.push('', 'Hasil pemeriksaan mutu:');
    for (const g of state.gates) lines.push(`- ${GATE_LABELS[g.gate] ?? g.gate}: ${g.passed ? 'lolos' : 'ada catatan'}${g.summary ? ` (${clip(g.summary, 140)})` : ''}`);
  }
  return lines.join('\n');
}

const SYSTEM_PROMPT = `Anda adalah asisten untuk pemilik sebuah aplikasi yang dibuat oleh platform ini. Anda tahu seluruh aplikasinya dari bagian KONTEKS: halaman, data, peran, login, status, alamat, dan hasil pemeriksaan mutu.

Aturan:
- Jawab dalam Bahasa Indonesia yang sederhana dan singkat, tanpa istilah teknis yang tidak perlu.
- Jawab HANYA dari KONTEKS. Jika informasinya tidak ada, katakan Anda tidak yakin dan sarankan cara mengeceknya. Jangan mengarang fitur, angka, atau alamat.
- Jika ditanya cara masuk atau akun, jawab dengan kalimat biasa dan tulis persis {{LOGIN_EMAIL}} dan {{LOGIN_PASSWORD}} di tempat email dan kata sandinya, misalnya: Email: {{LOGIN_EMAIL}} dan Kata sandi awal: {{LOGIN_PASSWORD}}. Jangan menyebut kata "token" kepada pengguna. Jangan menebak atau menulis email atau kata sandi sendiri; server menggantinya dengan nilai aslinya.
- Jika fitur yang ditanyakan tidak ada di KONTEKS, katakan belum ada, lalu tawarkan menambahkannya sebagai revisi.
- Jangan pernah mengklaim kemampuan yang ada di daftar BATASAN, walaupun tampak di nama fitur, tabel, atau ringkasan. Entitas bernama "Attachment" atau kolom "url" hanya menyimpan tautan teks; itu bukan unggahan file atau rekaman. Jelaskan itu dengan jujur.

BATASAN platform (berlaku untuk semua aplikasi):
${PLATFORM_LIMITS}
- Jika pengguna meminta mengubah atau menambah sesuatu pada aplikasi, set "intent" ke "change_request", jelaskan dalam satu atau dua kalimat apa yang akan diubah, dan isi "changeRequest" dengan permintaan itu ditulis ulang sejelas mungkin. Bila ada gambar acuan, masukkan hal penting darinya (tata letak, warna, komponen) ke dalam "changeRequest". Untuk pertanyaan biasa, "intent" adalah "question" dan "changeRequest" kosong.

Balas HANYA JSON: { "answer": "...", "intent": "question" | "change_request", "changeRequest": "..." }`;

export class AppAssistant {
  /** Answers a question about the client's app, or recognizes a request to change it. */
  public static async answer(projectId: string, question: string, history: Array<{ role: string; content: string }>, referenceBriefs: string[] = []): Promise<AppAnswer> {
    const state = await loadState(projectId);
    if (!state) throw new Error('Proyek tidak ditemukan');

    const recent = history.slice(-6).map((m) => ({ role: m.role, content: clip(m.content, 600) }));
    const response = await llmRouter.completeStructured<Partial<AppAnswer>>({
      role: 'fast',
      systemPrompt: SYSTEM_PROMPT,
      userPrompt: `TASK: app-question\nKONTEKS:\n${describe(state)}\n\nPercakapan sebelumnya: ${JSON.stringify(recent)}${referenceBriefs.length ? `\n\nGambar acuan yang dilampirkan pengguna (ringkasan):\n${referenceBriefs.join('\n---\n')}` : ''}\n\nPertanyaan atau permintaan pengguna: "${question}"`,
      projectId,
      hedgeAfterMs: 8000,
    });

    const answer = typeof response.data.answer === 'string' ? response.data.answer.trim() : '';
    if (!answer) throw new Error('Asisten tidak memberi jawaban');

    const wantsChange = response.data.intent === 'change_request' && typeof response.data.changeRequest === 'string' && response.data.changeRequest.trim().length > 0;
    return wantsChange ? { answer, intent: 'change_request', changeRequest: response.data.changeRequest!.trim() } : { answer, intent: 'question' };
  }
}
