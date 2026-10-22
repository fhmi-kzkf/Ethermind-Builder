import { afterEach, describe, expect, it, vi } from 'vitest';
import config from '../src/config';
import llmClient from '../src/services/llm/client';
import { httpError, streamReply } from './helpers/fakeStream';
import { z } from 'zod';
import { extractAndParseJSON } from '../src/services/llm/jsonParser';
import { calculateCost } from '../src/services/llm/pricing';
import llmRouter, { LLMNotConfiguredError, LLMOutputError } from '../src/services/llm/router';

describe('LLM Service & 5-Model Tiered Routing', () => {
  it('should resolve the correct model for each agent role according to specifications', () => {
    // Roles map to the models chosen from measured latency on the NIM endpoint.
    expect(llmRouter.resolveModel('planner')).toBe('nvidia/nemotron-3-super-120b-a12b');
    expect(llmRouter.resolveModel('orchestrator')).toBe('nvidia/nemotron-3-super-120b-a12b');
    for (const role of ['database', 'backend', 'frontend', 'tester'] as const) {
      expect(llmRouter.resolveModel(role)).toBe('nvidia/nemotron-3-super-120b-a12b');
    }
    expect(llmRouter.resolveModel('reviewer')).toBe('nvidia/nemotron-3-ultra-550b-a55b');
    expect(llmRouter.resolveModel('fast')).toBe('poolside/laguna-xs-2.1');
  });

  it('should calculate token pricing accurately across models', () => {
    expect(calculateCost('nvidia/nemotron-3-ultra-550b-a55b', 1000, 1000)).toBe(0.012); // 0.003 + 0.009
    expect(calculateCost('nvidia/nemotron-3-super-120b-a12b', 1000, 1000)).toBe(0.0052); // 0.0012 + 0.004
    expect(calculateCost('google/gemma-4-31b-it', 1000, 1000)).toBe(0.0028); // 0.0008 + 0.002
    expect(calculateCost('poolside/laguna-xs-2.1', 1000, 1000)).toBe(0.008); // 0.002 + 0.006
    expect(calculateCost('openai/gpt-oss-20b', 1000, 1000)).toBe(0.0008); // 0.0002 + 0.0006
  });

  it('should extract and parse JSON cleanly from markdown code blocks', () => {
    const rawMarkdown = `
Berikut adalah spesifikasi teknis:
\`\`\`json
{
  "title": "Aplikasi Toko",
  "version": 1,
  "ready": true
}
\`\`\`
Semoga membantu!`;

    const parsed = extractAndParseJSON(rawMarkdown);
    expect(parsed.title).toBe('Aplikasi Toko');
    expect(parsed.version).toBe(1);
    expect(parsed.ready).toBe(true);
  });

  it('should validate JSON against Zod schema and reject malformed structures', () => {
    const schema = z.object({
      name: z.string(),
      score: z.number(),
    });

    const validJson = `{"name": "Audit", "score": 95}`;
    const validated = extractAndParseJSON(validJson, schema);
    expect(validated.name).toBe('Audit');
    expect(validated.score).toBe(95);

    const invalidJson = `{"name": 123, "score": "fail"}`;
    expect(() => extractAndParseJSON(invalidJson, schema)).toThrow();
  });
});

describe('LLM calls', () => {
  afterEach(() => llmClient.setClientForTesting(null));

  const scripted = (replies: Array<{ content: string; finish?: string }>) => {
    const requests: Array<{ model: string; max_tokens: number; messages: Array<{ content: string }> }> = [];
    llmClient.setClientForTesting({
      chat: {
        completions: {
          create: async (body: any, options?: { signal?: AbortSignal }) => {
            requests.push(body);
            const reply = replies[Math.min(requests.length - 1, replies.length - 1)];
            return streamReply(reply.content, { finish: reply.finish, signal: options?.signal });
          },
        },
      },
    });
    return requests;
  };

  it('refuses to answer when no engine is configured, instead of making something up', async () => {
    llmClient.setClientForTesting(null);

    await expect(llmRouter.complete({ role: 'planner', systemPrompt: 's', userPrompt: 'u' })).rejects.toBeInstanceOf(LLMNotConfiguredError);
  });

  it('asks again with the exact parse error when the reply is not usable JSON', async () => {
    const requests = scripted([{ content: 'Berikut hasilnya: {"a": ' }, { content: '{"a": 1}' }]);

    const result = await llmRouter.completeStructured<{ a: number }>({ role: 'backend', systemPrompt: 's', userPrompt: 'buat json' });

    expect(result.data).toEqual({ a: 1 });
    expect(requests).toHaveLength(2);
    expect(requests[1].messages[1].content).toContain('could not be used');
    expect(requests[1].messages[1].content).toContain('buat json');
  });

  it('treats a reply cut off by the output limit as a failure to retry, not as valid JSON', async () => {
    const requests = scripted([{ content: '{"files": []}', finish: 'length' }, { content: '{"files": [1]}' }]);

    const result = await llmRouter.completeStructured<{ files: number[] }>({ role: 'frontend', systemPrompt: 's', userPrompt: 'u' });

    expect(result.data.files).toEqual([1]);
    expect(requests[1].messages[1].content).toContain('cut off');
  });

  it('fails with a clear error after the retries are used up', async () => {
    scripted([{ content: 'bukan json sama sekali' }]);

    await expect(llmRouter.completeStructured({ role: 'planner', systemPrompt: 's', userPrompt: 'u' })).rejects.toBeInstanceOf(LLMOutputError);
  });

  it('allows large code replies by default instead of the old 4096-token cut-off', async () => {
    const requests = scripted([{ content: '{}' }]);

    await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u' });

    expect(requests[0].max_tokens).toBe(config.llm.maxOutputTokens);
    expect(config.llm.maxOutputTokens).toBeGreaterThanOrEqual(16000);
  });

  it('adds the role\'s skills to the system prompt it sends', async () => {
    const requests = scripted([{ content: '{}' }]);

    await llmRouter.complete({ role: 'frontend', systemPrompt: 'Anda frontend engineer.', userPrompt: 'u' });

    expect(requests[0].messages[0].content.startsWith('Anda frontend engineer.')).toBe(true);
    expect(requests[0].messages[0].content).toContain('Skill: anti-slop');
    expect(requests[0].messages[0].content).toContain('Skill: frontend');
  });
});

describe('failover when a model is slow or down', () => {
  const ULTRA = 'nvidia/nemotron-3-ultra-550b-a55b';
  const SUPER = 'nvidia/nemotron-3-super-120b-a12b';
  const GPT = 'openai/gpt-oss-20b';
  const asked: string[] = [];

  /** Each model name maps to how it behaves; anything not listed answers instantly. */
  const behave = (models: Record<string, (signal?: AbortSignal) => AsyncIterable<unknown> | Promise<never>>) => {
    asked.length = 0;
    llmClient.setClientForTesting({
      chat: {
        completions: {
          create: async (body: any, options?: { signal?: AbortSignal }) => {
            asked.push(body.model);
            const handler = models[body.model];
            if (handler) return handler(options?.signal);
            return streamReply(`jawaban dari ${body.model}`, { signal: options?.signal });
          },
        },
      },
    });
  };

  afterEach(() => {
    llmClient.setClientForTesting(null);
    llmRouter.health.reset();
  });

  it('moves to the next model when one returns an error, and says which one answered', async () => {
    llmRouter.health.reset();
    behave({ [SUPER]: () => Promise.reject(httpError(503, 'ResourceExhausted')) });

    const result = await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u' });

    expect(asked).toEqual([SUPER, GPT]);
    expect(result.content).toBe(`jawaban dari ${GPT}`);
    expect(result.usage.model).toBe(GPT);
  });

  it('gives up on a model that sends no first token in time, instead of waiting for it', async () => {
    llmRouter.health.reset();
    behave({ [SUPER]: (signal) => streamReply('terlambat', { delayMs: 5000, signal }) });
    const started = Date.now();

    const result = await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u', firstTokenTimeoutMs: 150 });

    expect(result.content).toBe(`jawaban dari ${GPT}`);
    expect(Date.now() - started).toBeLessThan(2000);
  });

  it('skips a model that just failed on the next call, so users do not wait on it twice', async () => {
    llmRouter.health.reset();
    behave({ [SUPER]: () => Promise.reject(httpError(503)) });

    await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u' });
    await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u' });

    expect(asked).toEqual([SUPER, GPT, GPT]);
    expect(llmRouter.health.isHealthy(SUPER)).toBe(false);
  });

  it('treats a model that returns nothing as failed', async () => {
    llmRouter.health.reset();
    behave({ [SUPER]: () => streamReply('   ') });

    const result = await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u' });

    expect(result.usage.model).toBe(GPT);
  });

  it('lets a backup model race a slow one for interactive calls, and the faster answer wins', async () => {
    llmRouter.health.reset();
    behave({ 'poolside/laguna-xs-2.1': (signal) => streamReply('lambat', { delayMs: 3000, signal }) });
    const started = Date.now();

    const result = await llmRouter.complete({ role: 'fast', systemPrompt: 's', userPrompt: 'u', hedgeAfterMs: 100 });

    expect(result.content).toBe(`jawaban dari ${SUPER}`);
    expect(Date.now() - started).toBeLessThan(1500);
    expect(asked.slice(0, 2)).toEqual(['poolside/laguna-xs-2.1', SUPER]);
  });

  it('fails with the list of every model it tried when all of them are down', async () => {
    llmRouter.health.reset();
    const down = () => Promise.reject(httpError(404));
    behave({ [SUPER]: down, [GPT]: down, 'poolside/laguna-xs-2.1': down });

    await expect(llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u' })).rejects.toMatchObject({
      name: 'LLMUnavailableError',
      message: expect.stringContaining(SUPER),
    });
  });

  it('remembers a model that does not exist for much longer than one that merely timed out', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    try {
      llmRouter.health.reset();
      llmRouter.health.markFailed(ULTRA, httpError(404));
      llmRouter.health.markFailed(GPT, new Error('timeout'));
      expect(llmRouter.health.isHealthy(ULTRA)).toBe(false);
      expect(llmRouter.health.isHealthy(GPT)).toBe(false);

      vi.setSystemTime(Date.now() + config.llm.cooldownMs + 1000);

      expect(llmRouter.health.isHealthy(GPT)).toBe(true);
      expect(llmRouter.health.isHealthy(ULTRA)).toBe(false);

      vi.setSystemTime(Date.now() + 61 * 60 * 1000);
      expect(llmRouter.health.isHealthy(ULTRA)).toBe(true);
    } finally {
      vi.useRealTimers();
    }
  });

  it('tries healthy models first and falls back to unhealthy ones only as a last resort', () => {
    llmRouter.health.reset();
    llmRouter.health.markFailed(SUPER, new Error('timeout'));

    const chain = llmRouter.chainFor('backend');

    expect(chain[0]).toBe(GPT);
    expect(chain.at(-1)).toBe(SUPER);
    expect(new Set(chain).size).toBe(chain.length);
  });
});
