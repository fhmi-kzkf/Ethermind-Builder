import type { ModelTier } from '../types';

/**
 * The engines a client can pick. Ids match backend/src/services/llm/pricing.ts. Gemma 4 31B and the NVIDIA copy of
 * GPT-OSS 20B are left out on purpose: the first answered unreliably when measured, the second is the same model as
 * the Groq one below it.
 */
export interface ModelChoice {
  id: string;
  name: string;
  tier: ModelTier;
  /** One plain sentence on what to expect from it. */
  note: string;
}

export const DEFAULT_MODEL_ID = 'groq:openai/gpt-oss-120b';

export const MODEL_CHOICES: ModelChoice[] = [
  { id: 'groq:openai/gpt-oss-120b', name: 'GPT-OSS 120B Turbo', tier: 'pro', note: 'Paling cepat untuk aplikasi bisnis sehari-hari.' },
  { id: 'nvidia/nemotron-3-super-120b-a12b', name: 'Nemotron 3 Super', tier: 'pro', note: 'Lebih lambat, stabil untuk data dengan banyak relasi.' },
  { id: 'nvidia/nemotron-3-ultra-550b-a55b', name: 'Nemotron 3 Ultra', tier: 'pro', note: 'Terbesar, untuk aturan bisnis yang rumit.' },
  { id: 'groq:openai/gpt-oss-20b', name: 'GPT-OSS 20B Turbo', tier: 'basic', note: 'Cepat dan ringan, cocok untuk aplikasi kecil.' },
  { id: 'poolside/laguna-xs-2.1', name: 'Laguna XS 2.1', tier: 'basic', note: 'Ringan, untuk mencoba ide dengan cepat.' },
];

export const TIER_LABEL: Record<ModelTier, string> = { pro: 'Pro', basic: 'Basic' };

export const modelById = (id: string): ModelChoice => MODEL_CHOICES.find((m) => m.id === id) ?? MODEL_CHOICES[0];

/** Starting points. Each one only asks for what the generated apps can really do (see backend platformLimits). */
export interface ExamplePrompt {
  id: string;
  title: string;
  /** What the business gets, in one line. */
  summary: string;
  prompt: string;
}

export const EXAMPLES: ExamplePrompt[] = [
  {
    id: 'warung',
    title: 'Pencatatan warung',
    summary: 'Catat penjualan dan pengeluaran, lihat arus kas dan laba bersih.',
    prompt: 'Saya punya warung. Saya ingin mencatat penjualan dan pengeluaran harian, punya akun untuk pemilik dan kasir, dan melihat arus kas serta laba bersih tiap bulan.',
  },
  {
    id: 'kasir',
    title: 'Kasir toko',
    summary: 'Katalog barang, transaksi kasir, dan stok yang berkurang otomatis.',
    prompt: 'Buatkan aplikasi kasir untuk toko kelontong: daftar barang dengan harga, transaksi penjualan oleh kasir, stok berkurang otomatis, dan laporan penjualan harian untuk pemilik.',
  },
  {
    id: 'stok',
    title: 'Stok gudang',
    summary: 'Barang masuk dan keluar, batas stok minimum, riwayat perubahan.',
    prompt: 'Buatkan aplikasi stok gudang: daftar barang dengan kode, catatan barang masuk dan keluar, penanda barang yang hampir habis, dan riwayat perubahan stok per barang.',
  },
  {
    id: 'booking',
    title: 'Jadwal janji temu',
    summary: 'Pelanggan dan jadwal per staf untuk salon atau klinik kecil.',
    prompt: 'Buatkan aplikasi jadwal janji temu untuk salon: daftar pelanggan, daftar layanan dan harga, jadwal per staf per hari, dan status janji (dijadwalkan, selesai, batal).',
  },
  {
    id: 'crm',
    title: 'Prospek penjualan',
    summary: 'Daftar prospek, tahap penawaran, dan catatan tindak lanjut.',
    prompt: 'Buatkan aplikasi untuk tim penjualan: daftar prospek, tahap (baru, dihubungi, penawaran, deal, batal), nilai penawaran, dan catatan tindak lanjut dengan tanggal.',
  },
  {
    id: 'servis',
    title: 'Servis dan perbaikan',
    summary: 'Terima barang servis, catat kerusakan, biaya, dan status pengerjaan.',
    prompt: 'Buatkan aplikasi untuk bengkel servis elektronik: catat barang yang diterima dari pelanggan, keluhan, estimasi biaya, status pengerjaan, dan tanggal selesai.',
  },
];
