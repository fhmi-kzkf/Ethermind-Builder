import type { Message, ProjectStatus } from '../../types';

export type BuilderTab = 'chat' | 'build' | 'preview' | 'spec';

export const TAB_LABEL: Record<BuilderTab, string> = {
  chat: 'Percakapan',
  build: 'Build',
  preview: 'Pratinjau',
  spec: 'Rancangan',
};

/** The seven checks the platform records for a build, in the order they run. The hints say what each one really does. */
export const GATES: Array<{ id: string; label: string; hint: string }> = [
  { id: 'build_check', label: 'Build', hint: 'Dependensi terpasang, database dan data contoh jalan, aplikasi termuat.' },
  { id: 'lint_typecheck', label: 'Lint', hint: 'ESLint tanpa error pada seluruh kode.' },
  { id: 'smoke_test', label: 'Smoke test', hint: 'Aplikasi dijalankan, lalu halaman dan API utama dicoba lewat HTTP.' },
  { id: 'unit_test', label: 'Tes otomatis', hint: 'Tes backend dijalankan dengan batas cakupan kode.' },
  { id: 'security_scan', label: 'Keamanan', hint: 'Rahasia tertanam, pola injeksi dan XSS, serta kerentanan paket.' },
  { id: 'launch_checklist', label: 'Checklist peluncuran', hint: 'Syarat dasar sebelum dipakai: konfigurasi, seed, dan keamanan akun.' },
  { id: 'ai_review', label: 'Review AI', hint: 'Peninjau AI membandingkan kode dengan rancangan.' },
];

/** Checks that run in the background after the app is delivered. */
export const BACKGROUND_GATES = ['unit_test', 'security_scan', 'launch_checklist', 'ai_review'];

export const AGENT_LABEL: Record<string, string> = {
  planner: 'Perencana',
  orchestrator: 'Orkestrator',
  backend: 'Backend',
  frontend: 'Frontend',
  database: 'Database',
  tester: 'Penguji',
  reviewer: 'Peninjau',
  devops: 'DevOps',
};

export const PROJECT_STATUS: Record<ProjectStatus, { label: string; tone: '' | 'ok' | 'warn' | 'bad' | 'accent' }> = {
  draft: { label: 'Draf', tone: '' },
  planning: { label: 'Merancang', tone: 'accent' },
  building: { label: 'Membangun', tone: 'accent' },
  ready: { label: 'Siap dipakai', tone: 'ok' },
  live: { label: 'Siap dipakai', tone: 'ok' },
  needs_review: { label: 'Perlu ditinjau', tone: 'warn' },
  failed: { label: 'Gagal', tone: 'bad' },
};

export function messageMeta(message: Message): Record<string, any> | null {
  try {
    return message.metadata ? JSON.parse(message.metadata) : null;
  } catch {
    return null;
  }
}

export const messageKind = (message: Message): string | undefined => messageMeta(message)?.type;
export const isPendingMessage = (message: Message) => messageKind(message) === 'pending';

export const formatClock = (iso: string, seconds = false) =>
  new Date(iso).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', ...(seconds ? { second: '2-digit' } : {}) });

/** Latest recorded result for every check. A build keeps results from earlier rounds; only the newest counts. */
export function latestByGate(gates: Array<{ gate: string; passed: boolean; report?: any; createdAt?: string }>) {
  const latest = new Map<string, (typeof gates)[number]>();
  for (const gate of gates) {
    const current = latest.get(gate.gate);
    if (!current || (gate.createdAt ?? '') >= (current.createdAt ?? '')) latest.set(gate.gate, gate);
  }
  return latest;
}
