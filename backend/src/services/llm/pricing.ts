import config from '../../config';

export type ModelTier = 'basic' | 'pro';

export interface ModelInfo {
  id: string;
  name: string;
  tier: ModelTier;
  badge: 'Basic' | 'Pro';
  parameters: string;
  contextWindow: string;
  pricingDesc: string;
  pricePerApp: number; // in IDR (Build fee)
  zipExportPrice: number; // in IDR (Source code zip fee)
  recommendedFor: string;
  isFreeBuild: boolean;
  canCode: boolean;
}

export const AVAILABLE_MODELS: Record<string, ModelInfo> = {
  'groq:openai/gpt-oss-120b': {
    id: 'groq:openai/gpt-oss-120b',
    name: 'GPT-OSS 120B Turbo',
    tier: 'pro',
    badge: 'Pro',
    parameters: '120B (Reasoning, ~500 token/detik di Groq)',
    contextWindow: '128k',
    pricingDesc: 'Paket Pro: Rp 100.000 (Build + Live Public Domain + Source Code ZIP Lengkap)',
    pricePerApp: 100000,
    zipExportPrice: 0, // Included in Pro
    recommendedFor: 'Build tercepat untuk aplikasi bisnis sehari-hari; otomatis beralih ke model lain bila batas Groq tercapai',
    isFreeBuild: false,
    canCode: true,
  },
  'groq:openai/gpt-oss-20b': {
    id: 'groq:openai/gpt-oss-20b',
    name: 'GPT-OSS 20B Turbo',
    tier: 'basic',
    badge: 'Basic',
    parameters: '20B (Reasoning ringan, ~1000 token/detik di Groq)',
    contextWindow: '128k',
    pricingDesc: 'Paket Basic: Gratis Build & Live Preview • Download ZIP Rp 35.000',
    pricePerApp: 0,
    zipExportPrice: 35000,
    recommendedFor: 'Prototipe cepat, aplikasi kecil, dan eksplorasi ide',
    isFreeBuild: true,
    canCode: true,
  },
  'nvidia/nemotron-3-ultra-550b-a55b': {
    id: 'nvidia/nemotron-3-ultra-550b-a55b',
    name: 'Nemotron 3 Ultra',
    tier: 'pro',
    badge: 'Pro',
    parameters: '550B (Superior Reasoning)',
    contextWindow: '128k',
    pricingDesc: 'Paket Pro: Rp 100.000 (Build + Live Public Domain + Source Code ZIP Lengkap)',
    pricePerApp: 100000,
    zipExportPrice: 0, // Included in Pro
    recommendedFor: 'Aplikasi kompleks siap produksi, multi-role logika enterprise, audit keamanan penuh',
    isFreeBuild: false,
    canCode: true,
  },
  'nvidia/nemotron-3-super-120b-a12b': {
    id: 'nvidia/nemotron-3-super-120b-a12b',
    name: 'Nemotron 3 Super',
    tier: 'pro',
    badge: 'Pro',
    parameters: '120B (Deep Reasoning, Stable Output)',
    contextWindow: '128k',
    pricingDesc: 'Paket Pro: Rp 100.000 (Build + Live Public Domain + Source Code ZIP Lengkap)',
    pricePerApp: 100000,
    zipExportPrice: 0, // Included in Pro
    recommendedFor: 'Perancangan spesifikasi mendalam, aplikasi dengan data schema luas dan relasi kompleks',
    isFreeBuild: false,
    canCode: true,
  },
  'poolside/laguna-xs-2.1': {
    id: 'poolside/laguna-xs-2.1',
    name: 'Laguna XS 2.1',
    tier: 'basic',
    badge: 'Basic',
    parameters: 'Efisien (Code Specialized)',
    contextWindow: '32k',
    pricingDesc: 'Paket Basic: Gratis Build & Live Preview • Download ZIP Rp 35.000',
    pricePerApp: 0,
    zipExportPrice: 35000,
    recommendedFor: 'Eksplorasi coding cepat, komponen interaktif dan utilitas web standar',
    isFreeBuild: true,
    canCode: true,
  },
  'google/gemma-4-31b-it': {
    id: 'google/gemma-4-31b-it',
    name: 'Gemma 4 31B IT',
    tier: 'basic',
    badge: 'Basic',
    parameters: '31B (Open Weights)',
    contextWindow: '32k',
    pricingDesc: 'Paket Basic: Gratis Build & Live Preview • Download ZIP Rp 35.000',
    pricePerApp: 0,
    zipExportPrice: 35000,
    recommendedFor: 'Pengujian logika dan prototipe aplikasi mandiri',
    isFreeBuild: true,
    canCode: true,
  },
  'openai/gpt-oss-20b': {
    id: 'openai/gpt-oss-20b',
    name: 'GPT-OSS 20B',
    tier: 'basic',
    badge: 'Basic',
    parameters: '20B (Lightweight Reasoning)',
    contextWindow: '128k',
    pricingDesc: 'Paket Basic: Gratis Build & Live Preview • Download ZIP Rp 35.000',
    pricePerApp: 0,
    zipExportPrice: 35000,
    recommendedFor: 'Tanya jawab instan, form landing page, web app mini tanpa biaya',
    isFreeBuild: true,
    canCode: true,
  },
};

export const PLATFORM_PRICING = {
  PRO_PRICE: 100000,          // Rp 100.000 per aplikasi paket Pro (Build + Live + Full Source Code ZIP)
  BASIC_BUILD_PRICE: 0,       // Gratis build & testing untuk paket Basic
  BASIC_ZIP_EXPORT_PRICE: 35000, // Rp 35.000 untuk download ZIP source code paket Basic (lebih murah)
  CURRENCY: 'IDR',
  MODEL: 'pay-per-use',
  LIVE_DOMAIN_SUFFIX: 'ethermind.site',
  PRO_DESCRIPTION: 'Rp 100.000 per aplikasi (Termasuk Build, Live Domain Gratis, & Source Code ZIP)',
  BASIC_DESCRIPTION: 'Gratis build & live preview. Download source code (.zip) Rp 35.000',
};

export function calculateCost(model: string, inputTokens: number, outputTokens: number): number {
  const pricingMap = config.llm.pricingPer1k as Record<string, { input: number; output: number }>;
  const pricing = pricingMap[model] || pricingMap.default;

  const inputCost = (inputTokens / 1000) * pricing.input;
  const outputCost = (outputTokens / 1000) * pricing.output;

  return parseFloat((inputCost + outputCost).toFixed(6));
}

export function isProTier(modelId?: string): boolean {
  if (!modelId) return true;
  const m = AVAILABLE_MODELS[modelId];
  return m ? m.tier === 'pro' : true;
}
