import { ZodType, ZodTypeDef } from 'zod';
import config from '../../config';
import prisma from '../../db/prisma';
import { AgentRole, LLMUsage } from '../../types';
import skillLibrary from '../skills/skillLibrary';
import llmClient from './client';
import { extractAndParseJSON, JSONParseError } from './jsonParser';
import { calculateCost } from './pricing';
import { extraBodyFor, limitsFor, parseModelRef } from './providers';
import { RateLimitedError, rateLimiter, RequestTooLargeError } from './rateLimiter';
import { Semaphore } from './semaphore';

/** A reply shorter than this is no use for a file, so a model whose limits leave less room is skipped. */
const MIN_USEFUL_OUTPUT_TOKENS = 1500;
/** When Groq is the last model left there is nothing to fall back to, so a call may wait this long for its limits. */
const LAST_RESORT_WAIT_MS = 90_000;

export class BudgetExceededError extends Error {
  constructor(public readonly jobId: string, public readonly currentUsed: number, public readonly budget: number) {
    super(`Job ${jobId} token budget exceeded. Used: ${currentUsed}, Budget: ${budget}`);
    this.name = 'BudgetExceededError';
  }
}

export class LLMNotConfiguredError extends Error {
  constructor() {
    super('Mesin AI belum dikonfigurasi: isi NVIDIA_API_KEY, OPENAI_API_KEY atau GROQ_API_KEY di environment server.');
    this.name = 'LLMNotConfiguredError';
  }
}

export class LLMOutputError extends Error {
  constructor(message: string, public readonly attempts: number) {
    super(message);
    this.name = 'LLMOutputError';
  }
}

/** Every model that was tried failed or timed out. */
export class LLMUnavailableError extends Error {
  constructor(public readonly attempts: Array<{ model: string; reason: string }>) {
    super(`Semua model AI gagal: ${attempts.map((a) => `${a.model} (${a.reason})`).join('; ')}`);
    this.name = 'LLMUnavailableError';
  }
}

class ModelTimeoutError extends Error {
  constructor(public readonly model: string, public readonly phase: 'first-token' | 'idle' | 'total', ms: number) {
    super(`tidak ada token ${phase === 'first-token' ? 'pertama ' : ''}dalam ${Math.round(ms / 1000)} detik`);
    this.name = 'ModelTimeoutError';
  }
}

/** A picture sent along with the prompt, as base64. Only models that read images may be given one. */
export interface ImageInput {
  mime: string;
  base64: string;
}

export interface CompletionOptions {
  role: AgentRole;
  systemPrompt: string;
  userPrompt: string;
  projectId?: string;
  jobId?: string;
  temperature?: number;
  maxTokens?: number;
  overrideModel?: string;
  /** Extra skills by name, on top of the ones the role gets automatically. */
  skills?: string[];
  /** Interactive calls: start the next model in the chain if this long passes without an answer. */
  hedgeAfterMs?: number;
  /** Overrides how long a model may stay silent before it is given up on. */
  firstTokenTimeoutMs?: number;
  /** Pictures for the prompt. The chain is then limited to models that read images. */
  images?: ImageInput[];
}

export interface StructuredCompletionOptions<T> extends CompletionOptions {
  schema?: ZodType<T, ZodTypeDef, unknown>;
  /** Replaces JSON parsing for replies in another format. Must throw JSONParseError when the reply is unusable. */
  parser?: (raw: string) => T;
}

export interface CompletionResult {
  content: string;
  usage: LLMUsage;
  finishReason: string | null;
}

/** Remembers which models recently failed so the next call does not wait on them again. */
export class ModelHealth {
  private unhealthyUntil = new Map<string, number>();

  public isHealthy(model: string): boolean {
    return (this.unhealthyUntil.get(model) ?? 0) <= Date.now();
  }

  public markFailed(model: string, error: unknown): void {
    const status = (error as { status?: number }).status;
    const gone = status === 404 || status === 410;
    this.unhealthyUntil.set(model, Date.now() + (gone ? 60 * 60 * 1000 : config.llm.cooldownMs));
  }

  public markHealthy(model: string): void {
    this.unhealthyUntil.delete(model);
  }

  public reset(): void {
    this.unhealthyUntil.clear();
  }
}

function describeFailure(error: any): string {
  if (error instanceof ModelTimeoutError) return error.message;
  if (error instanceof RateLimitedError || error instanceof RequestTooLargeError) return 'batas rate limit';
  if (error?.status) return `HTTP ${error.status}`;
  return String(error?.message || error).slice(0, 80);
}

/** How long the provider asked us to wait, from a 429 response. */
function retryAfterMs(error: any): number {
  const headers = error?.headers;
  const raw = typeof headers?.get === 'function' ? headers.get('retry-after') : headers?.['retry-after'];
  const seconds = Number(raw);
  return Number.isFinite(seconds) && seconds > 0 ? Math.ceil(seconds * 1000) : 10_000;
}

export class LLMRouter {
  public readonly health = new ModelHealth();
  private readonly slots = new Semaphore(config.llm.maxConcurrent);

  /**
   * Resolves appropriate model identifier based on agent role
   */
  public resolveModel(role: AgentRole, overrideModel?: string): string {
    if (overrideModel) return overrideModel;

    switch (role) {
      case 'planner':
        return config.llm.models.planner;
      case 'orchestrator':
        return config.llm.models.orchestrator;
      case 'backend':
      case 'frontend':
      case 'database':
      case 'tester':
        return config.llm.models.coder;
      case 'reviewer':
        return config.llm.models.reviewer;
      case 'vision':
        return config.llm.models.vision;
      case 'fast':
      case 'devops':
        return config.llm.models.fast;
      default:
        return config.llm.models.orchestrator;
    }
  }

  /** The model for the role, then the configured fallbacks, with recently failed ones moved to the back. */
  public chainFor(role: AgentRole, overrideModel?: string): string[] {
    const primary = this.resolveModel(role, overrideModel);
    // Reading pictures has its own short chain: the text models used as fallbacks elsewhere cannot take an image.
    const fallbacks = role === 'vision' ? config.llm.visionFallbacks : [...config.llm.fallbackModels, config.llm.models.fallback];
    const chain = [primary, ...fallbacks].filter((m, i, all) => m && all.indexOf(m) === i);
    return [...chain.filter((m) => this.health.isHealthy(m)), ...chain.filter((m) => !this.health.isHealthy(m))];
  }

  /**
   * Complete a text prompt with budget tracking and failover.
   * Throws LLMNotConfiguredError when no API key is set: there is no offline stand-in.
   */
  public async complete(options: CompletionOptions): Promise<CompletionResult> {
    // Build calls share a limited number of slots; interactive chat (no job) goes straight through.
    if (!options.jobId) return this.completeNow(options);
    const release = await this.slots.acquire();
    try {
      return await this.completeNow(options);
    } finally {
      release();
    }
  }

  private async completeNow(options: CompletionOptions): Promise<CompletionResult> {
    const { role, userPrompt, projectId, jobId, temperature = 0.2, maxTokens = config.llm.maxOutputTokens, images } = options;
    const systemPrompt = skillLibrary.applyTo(role, options.systemPrompt, options.skills);

    if (jobId) await this.assertBudget(jobId);


    const firstTokenMs =
      options.firstTokenTimeoutMs ?? (role === 'fast' ? config.llm.fastFirstTokenTimeoutMs : config.llm.firstTokenTimeoutMs);
    // Models of a provider without an API key are left out; with no key at all there is nothing to call.
    const chain = this.chainFor(role, options.overrideModel).filter((m) => llmClient.getClient(parseModelRef(m).provider)).slice(0, 4);
    if (chain.length === 0) throw new LLMNotConfiguredError();
    const failures: Array<{ model: string; reason: string }> = [];

    const attempt = async (model: string, signal?: AbortSignal): Promise<CompletionResult> => {
      try {
        const lastResort = model === chain[chain.length - 1];
        const result = await this.callModel(model, role, systemPrompt, userPrompt, temperature, maxTokens, firstTokenMs, signal, lastResort, images);
        this.health.markHealthy(model);
        await this.recordUsage(projectId, jobId, role, model, result.usage.promptTokens, result.usage.completionTokens, result.usage.costEstimate);
        return result;
      } catch (error: any) {
        if (!signal?.aborted) {
          // Running into a rate limit says nothing about the model's health: hold it back for as long as the limit lasts, not for minutes.
          if (error instanceof RateLimitedError || error instanceof RequestTooLargeError) {
            // Already accounted for by the limiter.
          } else if (error?.status === 429 && limitsFor(model)) {
            rateLimiter.block(model, retryAfterMs(error));
          } else {
            this.health.markFailed(model, error);
          }
          failures.push({ model, reason: describeFailure(error) });
          console.warn(`[LLMRouter] ${role} on ${model} failed: ${describeFailure(error)}`);
        }
        throw error;
      }
    };

    if (options.hedgeAfterMs && chain.length > 1) {
      return this.hedged(chain, options.hedgeAfterMs, attempt, failures);
    }

    for (const model of chain) {
      try {
        return await attempt(model);
      } catch {
        // Try the next model in the chain.
      }
    }
    throw new LLMUnavailableError(failures);
  }

  /** Starts the next model when the current one is slow or has failed; the first success wins and the rest are cancelled. */
  private hedged(
    chain: string[],
    delayMs: number,
    attempt: (model: string, signal: AbortSignal) => Promise<CompletionResult>,
    failures: Array<{ model: string; reason: string }>
  ): Promise<CompletionResult> {
    return new Promise((resolve, reject) => {
      const controllers: AbortController[] = [];
      let next = 0;
      let running = 0;
      let settled = false;
      let timer: NodeJS.Timeout | undefined;

      const finish = (action: () => void) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        for (const controller of controllers) controller.abort();
        action();
      };

      const launch = () => {
        if (settled || next >= chain.length) return;
        const model = chain[next++];
        const controller = new AbortController();
        controllers.push(controller);
        running += 1;
        attempt(model, controller.signal).then(
          (result) => finish(() => resolve(result)),
          () => {
            running -= 1;
            if (settled) return;
            if (next < chain.length) launch();
            else if (running === 0) finish(() => reject(new LLMUnavailableError(failures)));
          }
        );
        clearTimeout(timer);
        if (next < chain.length) timer = setTimeout(launch, delayMs);
      };

      launch();
    });
  }

  /**
   * JSON completion. When the reply cannot be parsed or fails the schema, the model is told exactly
   * what was wrong and asked again, up to LLM_MAX_PARSE_RETRIES times.
   */
  public async completeStructured<T = any>(
    options: StructuredCompletionOptions<T>
  ): Promise<{ data: T; usage: LLMUsage; rawContent: string }> {
    const maxAttempts = 1 + config.llm.maxParseRetries;
    let userPrompt = options.userPrompt;
    let lastError = '';

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const completion = await this.complete({ ...options, userPrompt });

      try {
        if (completion.finishReason === 'length') {
          throw new JSONParseError('the reply hit the output limit and was cut off mid-way', completion.content);
        }
        const data = options.parser ? options.parser(completion.content) : extractAndParseJSON<T>(completion.content, options.schema);
        return { data, usage: completion.usage, rawContent: completion.content };
      } catch (error: any) {
        if (!(error instanceof JSONParseError)) throw error;
        lastError = error.message;
        console.warn(`[LLMRouter] ${options.role} reply unusable (attempt ${attempt}/${maxAttempts}): ${lastError}`);
        userPrompt =
          `${options.userPrompt}\n\n---\nYour previous reply could not be used: ${lastError}\n` +
          (options.parser
            ? `Reply again with the complete files in the required "=== FILE: path ===" format only. `
            : `Reply again with ONLY the corrected JSON object, nothing before or after it. `) +
          `If the reply was cut off, return fewer or smaller files.`;
      }
    }

    throw new LLMOutputError(`Model ${options.role} tidak menghasilkan balasan yang valid setelah ${maxAttempts} percobaan: ${lastError}`, maxAttempts);
  }

  /**
   * One attempt on one model. For a rate-limited provider it first fits the request under the model's limits:
   * the reply is capped to what the per-minute token limit leaves room for, and the call waits its turn.
   * A call that would have to wait too long, or cannot fit at all, throws so the next model in the chain is used.
   */
  private async callModel(
    model: string,
    role: AgentRole,
    systemPrompt: string,
    userPrompt: string,
    temperature: number,
    maxTokens: number,
    firstTokenMs: number,
    signal: AbortSignal | undefined,
    lastResort: boolean,
    images?: ImageInput[]
  ): Promise<CompletionResult> {
    const ref = parseModelRef(model);
    const client = llmClient.getClient(ref.provider);
    if (!client) throw new LLMNotConfiguredError();

    let outputTokens = maxTokens;
    const base = limitsFor(model);
    if (base) {
      const limits = rateLimiter.effective(model, base);
      const inputTokens = Math.ceil((systemPrompt.length + userPrompt.length) / 3.5) + 50 + (images?.length ?? 0) * config.vision.imageTokens;
      const room = limits.tpm - inputTokens;
      outputTokens = Math.min(maxTokens, base.maxOutput, room);
      // What counts is the room the limit leaves, not the size the caller asked for: a short reply may be all that is wanted.
      if (room < Math.min(maxTokens, MIN_USEFUL_OUTPUT_TOKENS)) throw new RequestTooLargeError(model, inputTokens + Math.min(maxTokens, MIN_USEFUL_OUTPUT_TOKENS), limits.tpm);
      await rateLimiter.acquire(model, base, inputTokens + outputTokens, lastResort ? LAST_RESORT_WAIT_MS : config.llm.groq.maxQueueMs);
    }

    return this.callLLM(client, ref.apiModel, model, systemPrompt, userPrompt, temperature, outputTokens, firstTokenMs, extraBodyFor(model, role), images, signal);
  }

  /**
   * Streams the reply so a model that never starts is dropped after `firstTokenMs`, and one that stalls
   * mid-way after the idle limit, while a long generation that keeps producing tokens is left alone.
   */
  private async callLLM(
    client: any,
    apiModel: string,
    model: string,
    systemPrompt: string,
    userPrompt: string,
    temperature: number,
    maxTokens: number,
    firstTokenMs: number,
    extraBody: Record<string, unknown>,
    images: ImageInput[] | undefined,
    outerSignal?: AbortSignal
  ): Promise<CompletionResult> {
    const controller = new AbortController();
    let timeoutError: ModelTimeoutError | null = null;
    let timer: NodeJS.Timeout | undefined;

    const arm = (ms: number, phase: 'first-token' | 'idle') => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timeoutError = new ModelTimeoutError(model, phase, ms);
        controller.abort();
      }, ms);
    };
    const total = setTimeout(() => {
      timeoutError = new ModelTimeoutError(model, 'total', config.llm.maxTotalMs);
      controller.abort();
    }, config.llm.maxTotalMs);
    const onOuterAbort = () => controller.abort();
    outerSignal?.addEventListener('abort', onOuterAbort);

    let content = '';
    let finishReason: string | null = null;
    let usageReport: { prompt_tokens?: number; completion_tokens?: number } | undefined;

    try {
      arm(firstTokenMs, 'first-token');
      const pending = client.chat.completions.create(
        {
          model: apiModel,
          messages: [
            { role: 'system', content: systemPrompt },
            {
              role: 'user',
              content: images?.length
                ? [{ type: 'text', text: userPrompt }, ...images.map((image) => ({ type: 'image_url', image_url: { url: `data:${image.mime};base64,${image.base64}` } }))]
                : userPrompt,
            },
          ],
          temperature,
          max_tokens: maxTokens,
          stream: true,
          stream_options: { include_usage: true },
          ...extraBody,
        },
        { signal: controller.signal }
      );
      // The real SDK can hand back the response headers too; the provider reports the account's real token limit there.
      let stream: any;
      if (typeof pending?.withResponse === 'function') {
        const { data, response } = await pending.withResponse();
        stream = data;
        this.learnLimits(model, response?.headers);
      } else {
        stream = await pending;
      }

      for await (const chunk of stream) {
        arm(config.llm.idleTimeoutMs, 'idle');
        const choice = chunk.choices?.[0];
        if (choice?.delta?.content) content += choice.delta.content;
        if (choice?.finish_reason) finishReason = choice.finish_reason;
        if (chunk.usage) usageReport = chunk.usage;
      }
    } catch (error) {
      throw timeoutError ?? error;
    } finally {
      clearTimeout(timer);
      clearTimeout(total);
      outerSignal?.removeEventListener('abort', onOuterAbort);
    }

    if (!content.trim()) throw new Error('model mengembalikan jawaban kosong');

    const promptTokens = usageReport?.prompt_tokens || Math.ceil((systemPrompt.length + userPrompt.length) / 4);
    const completionTokens = usageReport?.completion_tokens || Math.ceil(content.length / 4);
    return {
      content,
      finishReason,
      usage: { promptTokens, completionTokens, totalTokens: promptTokens + completionTokens, model, costEstimate: calculateCost(model, promptTokens, completionTokens) },
    };
  }

  private learnLimits(model: string, headers: any): void {
    if (!limitsFor(model) || !headers?.get) return;
    const tpm = Number(headers.get('x-ratelimit-limit-tokens'));
    if (Number.isFinite(tpm) && tpm > 0) rateLimiter.learnTpm(model, tpm);
  }

  private async assertBudget(jobId: string): Promise<void> {
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: { tokensUsed: true, tokenBudget: true },
    });

    if (job && job.tokensUsed >= job.tokenBudget) {
      throw new BudgetExceededError(jobId, job.tokensUsed, job.tokenBudget);
    }
  }

  private async recordUsage(
    projectId: string | undefined,
    jobId: string | undefined,
    agent: string,
    model: string,
    inputTokens: number,
    outputTokens: number,
    costEstimate: number
  ): Promise<void> {
    if (!jobId) return;

    try {
      await prisma.usageRecord.create({
        data: { projectId: projectId || null, jobId, agent, model, inputTokens, outputTokens, costEstimate },
      });
      await prisma.job.update({
        where: { id: jobId },
        data: { tokensUsed: { increment: inputTokens + outputTokens }, costEstimate: { increment: costEstimate } },
      });
    } catch (err) {
      console.error('[LLMRouter] Failed to record usage to DB:', err);
    }
  }
}

export const llmRouter = new LLMRouter();
export default llmRouter;
