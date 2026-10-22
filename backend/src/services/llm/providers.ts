import config from '../../config';
import { Limits } from './rateLimiter';

export type ProviderId = 'nim' | 'groq';

export interface ModelRef {
  provider: ProviderId;
  /** The model id the provider's API expects. */
  apiModel: string;
}

/**
 * A model is written "groq:openai/gpt-oss-120b" to run on Groq. Without a prefix it runs on the default endpoint
 * (NVIDIA NIM), which is why the same id (openai/gpt-oss-20b) can mean two different services.
 */
export function parseModelRef(model: string): ModelRef {
  return model.startsWith('groq:') ? { provider: 'groq', apiModel: model.slice('groq:'.length) } : { provider: 'nim', apiModel: model };
}

/** Published Groq limits per plan. The exact numbers for an account are on its limits page; override them in .env. */
const GROQ_PLANS: Record<'free' | 'developer', Limits> = {
  free: { rpm: 30, rpd: 1000, tpm: 8000, tpd: 200_000 },
  developer: { rpm: 1000, rpd: Infinity, tpm: 250_000, tpd: Infinity },
};

/** The most a single reply may contain on Groq, per model. */
const GROQ_MAX_COMPLETION: Record<string, number> = {
  'openai/gpt-oss-120b': 65_536,
  'openai/gpt-oss-20b': 65_536,
  'qwen/qwen3.8-27b': 16_384,
  'llama-3.3-70b-versatile': 32_768,
  'llama-3.1-8b-instant': 131_072,
};

export interface ModelLimits extends Limits {
  maxOutput: number;
}

/** Limits the platform must respect for this model, or null when the provider is not rate limited by us. */
export function limitsFor(model: string): ModelLimits | null {
  const ref = parseModelRef(model);
  if (ref.provider !== 'groq') return null;

  const { plan, overrides, maxOutputTokens } = config.llm.groq;
  const base = GROQ_PLANS[plan];
  const cap = GROQ_MAX_COMPLETION[ref.apiModel] ?? 16_384;
  return {
    rpm: overrides.rpm ?? base.rpm,
    tpm: overrides.tpm ?? base.tpm,
    rpd: overrides.rpd ?? base.rpd,
    tpd: overrides.tpd ?? base.tpd,
    maxOutput: Math.min(cap, maxOutputTokens),
  };
}

/** Extra request fields some models accept. Reasoning models on Groq answer much faster at low effort. */
export function extraBodyFor(model: string, role: string): Record<string, unknown> {
  const ref = parseModelRef(model);
  if (ref.provider === 'groq' && ref.apiModel.startsWith('openai/gpt-oss')) {
    const light = ['fast', 'database', 'tester', 'devops'].includes(role);
    return { reasoning_effort: light ? 'low' : config.llm.groq.reasoningEffort };
  }
  return {};
}
