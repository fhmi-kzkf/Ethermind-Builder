import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config();

const DEV_JWT_SECRET = 'ethermind_secure_jwt_secret_key_prod_grade_2026_xyz';

/** A positive number that may be left empty in .env. */
const optionalNumber = z.preprocess((v) => (v === '' ? undefined : v), z.coerce.number().positive().optional());

const boolean = (defaultValue: boolean) =>
  z
    .enum(['true', 'false'])
    .default(defaultValue ? 'true' : 'false')
    .transform((v) => v === 'true');

const envSchema = z
  .object({
    PORT: z.coerce.number().default(4000),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    JWT_SECRET: z.string().default(DEV_JWT_SECRET),
    JWT_EXPIRES_IN: z.string().default('7d'),
    DATABASE_URL: z.string().default('file:./dev.db'),
    CORS_ORIGINS: z.string().default(''),
    TRUST_PROXY: boolean(false),
    PUBLIC_REGISTRATION: boolean(true),
    // One-click demo accounts for local testing. On by default only in development; refused in production.
    DEMO_LOGIN: z.enum(['true', 'false']).optional().transform((v) => (v === undefined ? undefined : v === 'true')),
    BOOTSTRAP_ADMIN_EMAIL: z.string().email().optional(),
    BOOTSTRAP_ADMIN_PASSWORD: z.string().min(12).optional(),

    // NVIDIA NIM & OpenAI-compatible LLM Configuration
    NVIDIA_BASE_URL: z.string().optional(),
    NVIDIA_API_KEY: z.string().optional(),
    OPENAI_BASE_URL: z.string().default('https://integrate.api.nvidia.com/v1'),
    OPENAI_API_KEY: z.string().default(''),

    // Groq (fast inference). A model written "groq:<id>" runs here. When GROQ_API_KEY is set, the planner, coder and chat
    // models default to Groq and the NIM models become their fallbacks.
    GROQ_API_KEY: z.string().optional(),
    GROQ_BASE_URL: z.string().default('https://api.groq.com/openai/v1'),
    // free = 8K tokens per minute (builds do not fit and fall back to NIM); developer = 250K per minute.
    GROQ_PLAN: z.enum(['free', 'developer']).default('free'),
    // Overrides for the exact numbers on the account's limits page. Leave empty to use the plan's.
    GROQ_RPM: optionalNumber,
    GROQ_TPM: optionalNumber,
    GROQ_RPD: optionalNumber,
    GROQ_TPD: optionalNumber,
    GROQ_MAX_OUTPUT_TOKENS: z.coerce.number().default(16000),
    GROQ_REASONING_EFFORT: z.enum(['low', 'medium', 'high']).default('medium'),
    // A call that would have to wait longer than this for Groq's limits moves on to the next model instead of waiting.
    GROQ_MAX_QUEUE_MS: z.coerce.number().default(20000),

    // Reading pictures the client attaches (a screenshot or sketch of the look they want). The model must accept images.
    MODEL_VISION: z.string().optional(),
    // Models tried if the first one cannot read pictures, comma separated. Text-only models must not be listed.
    MODEL_VISION_FALLBACKS: z.string().default(''),
    VISION_MAX_IMAGES: z.coerce.number().min(1).default(3),
    // Size of one picture after the browser has shrunk it. The upload route accepts a little more for the base64 overhead.
    VISION_MAX_BYTES: z.coerce.number().default(4_000_000),
    // How many tokens one picture is counted as against the provider's per-minute limit. Measured: a 1280x800 screenshot cost about 1,800 prompt tokens on Qwen 3.8 (Groq).
    VISION_IMAGE_TOKENS: z.coerce.number().default(1800),
    // The landing page shows how many apps were finished only once the count reaches this number. A small count reads as a weakness.
    PUBLIC_STATS_MIN: z.coerce.number().min(1).default(25),
    // The merchant's static QRIS text (what the printed QR decodes to). Empty keeps the source download free.
    QRIS_STATIC: z.string().default(''),
    // How long an order's unique code stays reserved for the buyer. A reported payment does not expire.
    PAYMENT_TTL_MINUTES: z.coerce.number().min(5).default(120),

    // Chosen from measured latency and valid-JSON rate on the NIM endpoint (see README, "Memilih model").
    MODEL_PLANNER: z.string().optional(),
    MODEL_ORCHESTRATOR: z.string().optional(),
    MODEL_CODER: z.string().optional(),
    MODEL_REVIEWER: z.string().default('nvidia/nemotron-3-ultra-550b-a55b'),
    MODEL_FAST: z.string().optional(),
    MODEL_FALLBACK: z.string().default('nvidia/nemotron-3-super-120b-a12b'),
    // Tried in order when a model times out or fails. Must be models that exist on the endpoint.
    MODEL_FALLBACKS: z.string().default('nvidia/nemotron-3-super-120b-a12b,openai/gpt-oss-20b,poolside/laguna-xs-2.1'),
    // A model that sends nothing for this long is treated as down and the next one is tried.
    LLM_FIRST_TOKEN_TIMEOUT_MS: z.coerce.number().default(30000),
    LLM_FAST_FIRST_TOKEN_TIMEOUT_MS: z.coerce.number().default(15000),
    LLM_IDLE_TIMEOUT_MS: z.coerce.number().default(45000),
    LLM_MAX_TOTAL_MS: z.coerce.number().default(300000),
    // Interactive chat: if the first model has not answered after this long, a second one starts too.
    LLM_HEDGE_AFTER_MS: z.coerce.number().default(8000),
    // Model calls made for builds that may run at once, across all jobs. Chat is never queued behind them.
    LLM_MAX_CONCURRENT: z.coerce.number().min(1).default(6),
    LLM_COOLDOWN_MS: z.coerce.number().default(180000),
    // Reasoning models spend part of this on their thinking, so it must leave room for a whole file after it.
    LLM_MAX_OUTPUT_TOKENS: z.coerce.number().default(32000),
    LLM_MAX_PARSE_RETRIES: z.coerce.number().default(2),

    // Agent skills (quality rules appended to agent system prompts)
    SKILLS_ENABLED: boolean(true),
    SKILLS_DIR: z.string().default(path.resolve(__dirname, '../../skills')),

    // Sandbox: where LLM-written code is installed, tested, and run
    SANDBOX_MODE: z.enum(['docker', 'local']).optional(),
    ALLOW_UNSAFE_LOCAL_SANDBOX: boolean(false),
    SANDBOX_IMAGE: z.string().default('ethermind-sandbox:node22'),
    SANDBOX_MEMORY: z.string().default('1g'),
    SANDBOX_CPUS: z.string().default('1.5'),
    SANDBOX_INSTALL_TIMEOUT_MS: z.coerce.number().default(300000),
    SANDBOX_COMMAND_TIMEOUT_MS: z.coerce.number().default(180000),

    // Quality gates
    GATE_MIN_COVERAGE: z.coerce.number().min(0).max(100).default(70),
    GATE_MIN_TESTS: z.coerce.number().default(8),
    GATE_AUDIT_LEVEL: z.enum(['moderate', 'high', 'critical']).default('high'),
    MAX_REMEDIATION_ROUNDS: z.coerce.number().default(3),
    // fast: the app goes live after build + lint + smoke test; tests, audit, checklist and AI review run afterwards in the background.
    // strict: every gate must pass before the app is delivered.
    BUILD_MODE: z.enum(['fast', 'strict']).default('fast'),

    // Limits & Safety
    MAX_CONCURRENT_JOBS: z.coerce.number().default(3),
    DEFAULT_TOKEN_BUDGET: z.coerce.number().default(250000),
    DEFAULT_MAX_STEPS: z.coerce.number().default(30),
    STEP_TIMEOUT_MS: z.coerce.number().default(120000),

    // Storage
    STORAGE_DIR: z.string().default('./storage'),
    WORKSPACES_DIR: z.string().default('./storage/workspaces'),
    EXPORTS_DIR: z.string().default('./storage/exports'),
    PREVIEW_HOST: z.string().default('localhost'),
    PREVIEW_PORT_START: z.coerce.number().default(5100),
    PREVIEW_PORT_END: z.coerce.number().default(5200),
    // Sites allowed to show a preview app inside an iframe (space separated). Empty means the platform's own CORS origins, or localhost in development.
    PREVIEW_FRAME_ANCESTORS: z.string().default(''),

    // ---- Public addresses for apps (preview and live) ----
    // The domain the apps live under: preview-xxxx.<domain> and <slug>.<domain>. Empty keeps the old http://host:port previews and turns live links off.
    APPS_DOMAIN: z.string().default(''),
    // http or https. Defaults to https in production (TLS ends at the reverse proxy) and http otherwise.
    APPS_SCHEME: z.enum(['http', 'https']).optional(),
    // Port to show in app addresses when the gateway is reached directly (development: 4100). Empty behind a proxy on 80/443.
    APPS_PUBLIC_PORT: z.string().default(''),
    // Where the gateway listens. 0 turns it off. The reverse proxy sends *.<APPS_DOMAIN> here.
    GATEWAY_PORT: z.coerce.number().default(4100),
    // The gateway only needs to be reached by the reverse proxy on the same machine. Open it to other hosts only if the proxy runs elsewhere.
    GATEWAY_HOST: z.string().default('127.0.0.1'),
    // Minutes without a visit before an app is stopped. It starts again by itself on the next visit.
    PREVIEW_IDLE_MINUTES: z.coerce.number().min(1).default(20),
    LIVE_IDLE_MINUTES: z.coerce.number().min(1).default(120),
    // How long a visitor waits for a sleeping app to wake before seeing the "starting" page.
    WAKE_TIMEOUT_MS: z.coerce.number().default(25000),
    // Requests allowed per visitor per app per minute at the gateway.
    GATEWAY_RATE_LIMIT: z.coerce.number().min(10).default(300),

    // ---- Quotas (operators and admins are exempt) ----
    MAX_PROJECTS_PER_USER: z.coerce.number().min(1).default(30),
    MAX_LIVE_APPS_PER_USER: z.coerce.number().min(1).default(3),

    // ---- Housekeeping ----
    LIVE_DATA_DIR: z.string().default('./storage/live-data'),
    BACKUP_DIR: z.string().default('./storage/backups'),
    BACKUP_ENABLED: boolean(true),
    BACKUP_KEEP_DAYS: z.coerce.number().min(1).default(14),
    CLEANUP_ENABLED: boolean(true),
    // Old versions that are neither active nor live lose their node_modules after this many days. They reinstall when opened again.
    CLEANUP_NODE_MODULES_DAYS: z.coerce.number().min(1).default(3),
    CLEANUP_FAILED_DAYS: z.coerce.number().min(1).default(14),
    CLEANUP_EXPORT_DAYS: z.coerce.number().min(1).default(7),

    // Firebase Configuration
    FIREBASE_PROJECT_ID: z.string().optional(),
    FIREBASE_CLIENT_EMAIL: z.string().optional(),
    FIREBASE_PRIVATE_KEY: z.string().optional(),
    FIREBASE_SERVICE_ACCOUNT_KEY: z.string().optional(),
    FIREBASE_DATABASE_URL: z.string().optional(),
    FIREBASE_STORAGE_BUCKET: z.string().optional(),
  })
  .superRefine((env, ctx) => {
    if (env.NODE_ENV !== 'production') return;

    const problems: string[] = [];
    if (env.JWT_SECRET === DEV_JWT_SECRET || env.JWT_SECRET.length < 32) {
      problems.push('JWT_SECRET must be a unique random string of at least 32 characters');
    }
    if (!(env.NVIDIA_API_KEY || env.OPENAI_API_KEY || env.GROQ_API_KEY || '').trim()) {
      problems.push('NVIDIA_API_KEY, OPENAI_API_KEY or GROQ_API_KEY is required: builds cannot run without a model');
    }
    if (!env.CORS_ORIGINS.trim() || env.CORS_ORIGINS.includes('*')) {
      problems.push('CORS_ORIGINS must list the exact frontend origin(s), without "*"');
    }
    if (env.SANDBOX_MODE === 'local' && !env.ALLOW_UNSAFE_LOCAL_SANDBOX) {
      problems.push(
        'SANDBOX_MODE=local runs model-written code on the host. Use docker, or set ALLOW_UNSAFE_LOCAL_SANDBOX=true to accept the risk'
      );
    }
    if (env.DEMO_LOGIN === true) {
      problems.push('DEMO_LOGIN=true lets anyone sign in as an admin without a password. It must not be enabled in production');
    }
    for (const message of problems) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message });
    }
  });

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Invalid environment variables:', parsedEnv.error.format());
  throw new Error('Environment configuration error');
}

export const env = parsedEnv.data;
const groqOn = Boolean((env.GROQ_API_KEY ?? '').trim());

const splitList = (value: string): string[] =>
  value
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);

export const config = {
  server: {
    port: env.PORT,
    env: env.NODE_ENV,
    isProduction: env.NODE_ENV === 'production',
    isTest: env.NODE_ENV === 'test',
    corsOrigins: splitList(env.CORS_ORIGINS),
    trustProxy: env.TRUST_PROXY,
    publicRegistration: env.PUBLIC_REGISTRATION,
    publicStatsMin: env.PUBLIC_STATS_MIN,
    demoLogin: env.NODE_ENV === 'development' && env.DEMO_LOGIN !== false ? true : env.NODE_ENV !== 'production' && env.DEMO_LOGIN === true,
  },
  auth: {
    jwtSecret: env.JWT_SECRET,
    jwtExpiresIn: env.JWT_EXPIRES_IN,
    saltRounds: 12,
    bootstrapAdmin:
      env.BOOTSTRAP_ADMIN_EMAIL && env.BOOTSTRAP_ADMIN_PASSWORD
        ? { email: env.BOOTSTRAP_ADMIN_EMAIL, password: env.BOOTSTRAP_ADMIN_PASSWORD }
        : null,
  },
  db: {
    url: env.DATABASE_URL,
  },
  llm: {
    baseUrl: env.NVIDIA_BASE_URL || env.OPENAI_BASE_URL || 'https://integrate.api.nvidia.com/v1',
    apiKey: env.NVIDIA_API_KEY || env.OPENAI_API_KEY || '',
    isNvidiaNim: (env.NVIDIA_BASE_URL || env.OPENAI_BASE_URL || '').includes('nvidia.com'),
    maxOutputTokens: env.LLM_MAX_OUTPUT_TOKENS,
    maxParseRetries: env.LLM_MAX_PARSE_RETRIES,
    firstTokenTimeoutMs: env.LLM_FIRST_TOKEN_TIMEOUT_MS,
    fastFirstTokenTimeoutMs: env.LLM_FAST_FIRST_TOKEN_TIMEOUT_MS,
    idleTimeoutMs: env.LLM_IDLE_TIMEOUT_MS,
    maxTotalMs: env.LLM_MAX_TOTAL_MS,
    hedgeAfterMs: env.LLM_HEDGE_AFTER_MS,
    maxConcurrent: env.LLM_MAX_CONCURRENT,
    cooldownMs: env.LLM_COOLDOWN_MS,
    fallbackModels: splitList(env.MODEL_FALLBACKS),
    groq: {
      apiKey: (env.GROQ_API_KEY ?? '').trim(),
      baseUrl: env.GROQ_BASE_URL,
      plan: env.GROQ_PLAN,
      overrides: { rpm: env.GROQ_RPM, tpm: env.GROQ_TPM, rpd: env.GROQ_RPD, tpd: env.GROQ_TPD },
      maxOutputTokens: env.GROQ_MAX_OUTPUT_TOKENS,
      reasoningEffort: env.GROQ_REASONING_EFFORT,
      maxQueueMs: env.GROQ_MAX_QUEUE_MS,
    },
    models: {
      planner: env.MODEL_PLANNER ?? (groqOn ? 'groq:openai/gpt-oss-120b' : 'nvidia/nemotron-3-super-120b-a12b'),
      orchestrator: env.MODEL_ORCHESTRATOR ?? (groqOn ? 'groq:openai/gpt-oss-120b' : 'nvidia/nemotron-3-super-120b-a12b'),
      coder: env.MODEL_CODER ?? (groqOn ? 'groq:openai/gpt-oss-120b' : 'nvidia/nemotron-3-super-120b-a12b'),
      reviewer: env.MODEL_REVIEWER,
      fast: env.MODEL_FAST ?? (groqOn ? 'groq:openai/gpt-oss-20b' : 'poolside/laguna-xs-2.1'),
      fallback: env.MODEL_FALLBACK,
      vision: env.MODEL_VISION ?? 'groq:qwen/qwen3.8-27b',
    },
    visionFallbacks: splitList(env.MODEL_VISION_FALLBACKS),
    // Approximate cost estimation per 1k tokens (in USD)
    pricingPer1k: {
      'nvidia/nemotron-3-ultra-550b-a55b': { input: 0.003, output: 0.009 },
      'nvidia/nemotron-3-super-120b-a12b': { input: 0.0012, output: 0.004 },
      'poolside/laguna-xs-2.1': { input: 0.002, output: 0.006 },
      'google/gemma-4-31b-it': { input: 0.0008, output: 0.002 },
      'openai/gpt-oss-20b': { input: 0.0002, output: 0.0006 },
      'groq:openai/gpt-oss-120b': { input: 0.00015, output: 0.0006 },
      'groq:openai/gpt-oss-20b': { input: 0.000075, output: 0.0003 },
      'groq:qwen/qwen3.8-27b': { input: 0.0008, output: 0.004 },
      default: { input: 0.001, output: 0.003 },
    },
  },
  vision: {
    maxImages: env.VISION_MAX_IMAGES,
    maxBytes: env.VISION_MAX_BYTES,
    imageTokens: env.VISION_IMAGE_TOKENS,
  },
  skills: {
    enabled: env.SKILLS_ENABLED,
    dir: path.resolve(env.SKILLS_DIR),
  },
  sandbox: {
    mode: env.SANDBOX_MODE ?? (env.NODE_ENV === 'production' ? 'docker' : 'local'),
    image: env.SANDBOX_IMAGE,
    memory: env.SANDBOX_MEMORY,
    cpus: env.SANDBOX_CPUS,
    installTimeoutMs: env.SANDBOX_INSTALL_TIMEOUT_MS,
    commandTimeoutMs: env.SANDBOX_COMMAND_TIMEOUT_MS,
    dockerfileDir: path.resolve(__dirname, '../../sandbox'),
  },
  gates: {
    minCoverage: env.GATE_MIN_COVERAGE,
    minTests: env.GATE_MIN_TESTS,
    auditLevel: env.GATE_AUDIT_LEVEL,
    maxRemediationRounds: env.MAX_REMEDIATION_ROUNDS,
    mode: env.BUILD_MODE,
  },
  limits: {
    maxConcurrentJobs: env.MAX_CONCURRENT_JOBS,
    defaultTokenBudget: env.DEFAULT_TOKEN_BUDGET,
    defaultMaxSteps: env.DEFAULT_MAX_STEPS,
    stepTimeoutMs: env.STEP_TIMEOUT_MS,
  },
  payments: {
    qrisStatic: env.QRIS_STATIC.trim(),
    ttlMinutes: env.PAYMENT_TTL_MINUTES,
  },
  storage: {
    rootDir: path.resolve(env.STORAGE_DIR),
    workspacesDir: path.resolve(env.WORKSPACES_DIR),
    exportsDir: path.resolve(env.EXPORTS_DIR),
    liveDataDir: path.resolve(env.LIVE_DATA_DIR),
    backupDir: path.resolve(env.BACKUP_DIR),
  },
  apps: {
    domain: env.APPS_DOMAIN.trim().toLowerCase().replace(/^\.+|\.+$/g, ''),
    scheme: env.APPS_SCHEME ?? (env.NODE_ENV === 'production' ? 'https' : 'http'),
    publicPort: env.APPS_PUBLIC_PORT.trim(),
    gatewayPort: env.GATEWAY_PORT,
    gatewayHost: env.GATEWAY_HOST,
    previewIdleMs: env.PREVIEW_IDLE_MINUTES * 60_000,
    liveIdleMs: env.LIVE_IDLE_MINUTES * 60_000,
    wakeTimeoutMs: env.WAKE_TIMEOUT_MS,
    rateLimitPerMinute: env.GATEWAY_RATE_LIMIT,
  },
  quotas: {
    maxProjectsPerUser: env.MAX_PROJECTS_PER_USER,
    maxLiveAppsPerUser: env.MAX_LIVE_APPS_PER_USER,
  },
  maintenance: {
    backupEnabled: env.BACKUP_ENABLED,
    backupKeepDays: env.BACKUP_KEEP_DAYS,
    cleanupEnabled: env.CLEANUP_ENABLED,
    nodeModulesDays: env.CLEANUP_NODE_MODULES_DAYS,
    failedDays: env.CLEANUP_FAILED_DAYS,
    exportDays: env.CLEANUP_EXPORT_DAYS,
  },
  templates: {
    appDir: path.resolve(__dirname, '../../templates/app'),
    authDir: path.resolve(__dirname, '../../templates/app-auth'),
  },
  preview: {
    host: env.PREVIEW_HOST,
    portStart: env.PREVIEW_PORT_START,
    portEnd: env.PREVIEW_PORT_END,
    frameAncestors:
      env.PREVIEW_FRAME_ANCESTORS.trim() ||
      (splitList(env.CORS_ORIGINS).join(' ') || (env.NODE_ENV === 'production' ? '' : 'http://localhost:3000 http://127.0.0.1:3000 http://localhost:5173')),
  },
  firebase: {
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY ? env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
    serviceAccountKeyPath: env.FIREBASE_SERVICE_ACCOUNT_KEY,
    databaseUrl: env.FIREBASE_DATABASE_URL,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    isConfigured: Boolean(
      (env.FIREBASE_PROJECT_ID && env.FIREBASE_CLIENT_EMAIL && env.FIREBASE_PRIVATE_KEY) ||
        env.FIREBASE_SERVICE_ACCOUNT_KEY
    ),
  },
};

export default config;
