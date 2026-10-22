import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import config from '../src/config';
import llmClient from '../src/services/llm/client';
import { limitsFor, parseModelRef } from '../src/services/llm/providers';
import { Limits, RateLimitedError, RateLimiter, rateLimiter, RequestTooLargeError } from '../src/services/llm/rateLimiter';
import llmRouter from '../src/services/llm/router';
import { httpError, streamReply } from './helpers/fakeStream';

const limits: Limits = { rpm: 3, tpm: 10_000, rpd: Infinity, tpd: Infinity };

describe('rate limiter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('lets requests through while under the limits', async () => {
    const limiter = new RateLimiter();
    await limiter.acquire('m', limits, 4000, 1000);
    await limiter.acquire('m', limits, 4000, 1000);
    expect(limiter.waitFor('m', limits, 1000)).toBe(0);
  });

  it('holds a request back until enough of the last minute has passed', async () => {
    const limiter = new RateLimiter();
    await limiter.acquire('m', limits, 6000, 1000);
    expect(limiter.waitFor('m', limits, 6000)).toBeGreaterThan(55_000);

    let released = false;
    const second = limiter.acquire('m', limits, 6000, 120_000).then(() => (released = true));
    await vi.advanceTimersByTimeAsync(30_000);
    expect(released).toBe(false);
    await vi.advanceTimersByTimeAsync(31_000);
    await second;
    expect(released).toBe(true);
  });

  it('counts requests per minute separately from tokens', async () => {
    const limiter = new RateLimiter();
    for (let i = 0; i < 3; i++) await limiter.acquire('m', limits, 10, 1000);
    expect(limiter.waitFor('m', limits, 10)).toBeGreaterThan(55_000);
  });

  it('gives up at once when the wait would be longer than the caller accepts', async () => {
    const limiter = new RateLimiter();
    await limiter.acquire('m', limits, 9000, 1000);
    await expect(limiter.acquire('m', limits, 9000, 5000)).rejects.toBeInstanceOf(RateLimitedError);
  });

  it('refuses a request that can never fit in the per-minute limit', async () => {
    const limiter = new RateLimiter();
    await expect(limiter.acquire('m', limits, 10_001, 60_000)).rejects.toBeInstanceOf(RequestTooLargeError);
  });

  it('tracks each model on its own', async () => {
    const limiter = new RateLimiter();
    await limiter.acquire('a', limits, 9000, 1000);
    expect(limiter.waitFor('b', limits, 9000)).toBe(0);
  });

  it('waits out a 429 and trusts a lower token limit reported by the provider', async () => {
    const limiter = new RateLimiter();
    limiter.block('m', 8000);
    expect(limiter.waitFor('m', limits, 1)).toBeGreaterThan(7000);
    await vi.advanceTimersByTimeAsync(8100);
    expect(limiter.waitFor('m', limits, 1)).toBe(0);

    limiter.learnTpm('m', 2000);
    await expect(limiter.acquire('m', limits, 3000, 1000)).rejects.toBeInstanceOf(RequestTooLargeError);
  });

  it('serves waiting requests in the order they came', async () => {
    const limiter = new RateLimiter();
    await limiter.acquire('m', limits, 9000, 1000);
    const order: number[] = [];
    const first = limiter.acquire('m', limits, 9000, 200_000).then(() => order.push(1));
    const second = limiter.acquire('m', limits, 9000, 200_000).then(() => order.push(2));
    await vi.advanceTimersByTimeAsync(130_000);
    await Promise.all([first, second]);
    expect(order).toEqual([1, 2]);
  });
});

describe('provider models', () => {
  it('tells Groq models from the default endpoint by their prefix', () => {
    expect(parseModelRef('groq:openai/gpt-oss-120b')).toEqual({ provider: 'groq', apiModel: 'openai/gpt-oss-120b' });
    expect(parseModelRef('openai/gpt-oss-20b')).toEqual({ provider: 'nim', apiModel: 'openai/gpt-oss-20b' });
    expect(limitsFor('nvidia/nemotron-3-super-120b-a12b')).toBeNull();
  });

  it('knows the published limits of each plan and lets .env override them', () => {
    const groq = config.llm.groq;
    const before = { plan: groq.plan, overrides: groq.overrides };
    try {
      groq.plan = 'free';
      expect(limitsFor('groq:openai/gpt-oss-120b')).toMatchObject({ rpm: 30, tpm: 8000, tpd: 200_000 });
      groq.plan = 'developer';
      expect(limitsFor('groq:openai/gpt-oss-120b')).toMatchObject({ rpm: 1000, tpm: 250_000 });
      groq.overrides = { ...groq.overrides, tpm: 100_000 };
      expect(limitsFor('groq:openai/gpt-oss-120b')?.tpm).toBe(100_000);
      expect(limitsFor('groq:qwen/qwen3.8-27b')?.maxOutput).toBeLessThanOrEqual(16_384);
    } finally {
      groq.plan = before.plan;
      groq.overrides = before.overrides;
    }
  });
});

describe('model calls on Groq', () => {
  const groq = 'groq:openai/gpt-oss-120b';
  const bodies: Array<Record<string, any>> = [];
  let behaviour: (body: Record<string, any>) => unknown = () => streamReply('selesai');
  const plan = config.llm.groq.plan;

  beforeEach(() => {
    bodies.length = 0;
    behaviour = () => streamReply('selesai');
    rateLimiter.reset();
    llmRouter.health.reset();
    config.llm.groq.plan = 'developer';
    llmClient.setClientForTesting({
      chat: {
        completions: {
          create: async (body: Record<string, any>) => {
            bodies.push(body);
            const reply = behaviour(body);
            if (reply instanceof Error) throw reply;
            return reply;
          },
        },
      },
    });
  });

  afterEach(() => {
    config.llm.groq.plan = plan;
    llmClient.setClientForTesting(null);
    rateLimiter.reset();
    llmRouter.health.reset();
  });

  it('sends the id Groq expects, a reply size that fits, and a low reasoning effort for quick roles', async () => {
    await llmRouter.complete({ role: 'fast', systemPrompt: 's', userPrompt: 'u', overrideModel: groq });
    await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u', overrideModel: groq });

    expect(bodies[0].model).toBe('openai/gpt-oss-120b');
    expect(bodies[0].reasoning_effort).toBe('low');
    expect(bodies[1].reasoning_effort).toBe(config.llm.groq.reasoningEffort);
    expect(bodies[0].max_tokens).toBeLessThanOrEqual(config.llm.groq.maxOutputTokens);
  });

  it('does not send Groq-only fields to the default endpoint', async () => {
    await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u', overrideModel: 'openai/gpt-oss-20b' });

    expect(bodies[0].model).toBe('openai/gpt-oss-20b');
    expect(bodies[0].reasoning_effort).toBeUndefined();
  });

  it('moves on to the next model when the request cannot fit the free plan, instead of failing', async () => {
    config.llm.groq.plan = 'free';

    const result = await llmRouter.complete({ role: 'backend', systemPrompt: 'x'.repeat(30_000), userPrompt: 'u', overrideModel: groq });

    expect(result.content).toBe('selesai');
    expect(bodies).toHaveLength(1);
    expect(bodies[0].model).not.toBe('openai/gpt-oss-120b');
  });

  it('lets a short reply through when little room is left, because the room is what counts and not the size asked for', async () => {
    config.llm.groq.plan = 'free';

    await llmRouter.complete({ role: 'fast', systemPrompt: 'x'.repeat(24_300), userPrompt: 'u', overrideModel: groq, maxTokens: 50 });

    expect(bodies).toHaveLength(1);
    expect(bodies[0].model).toBe('openai/gpt-oss-120b');
    expect(bodies[0].max_tokens).toBe(50);
  });

  it('caps the reply to what the per-minute token limit leaves room for', async () => {
    config.llm.groq.plan = 'free';

    await llmRouter.complete({ role: 'fast', systemPrompt: 'x'.repeat(8000), userPrompt: 'u', overrideModel: 'groq:openai/gpt-oss-20b' });

    expect(bodies[0].model).toBe('openai/gpt-oss-20b');
    expect(bodies[0].max_tokens).toBeLessThan(8000);
    expect(bodies[0].max_tokens).toBeGreaterThanOrEqual(1500);
  });

  it('treats a 429 as a wait, not as a broken model, and uses another model meanwhile', async () => {
    behaviour = (body) => (body.model === 'openai/gpt-oss-120b' ? Object.assign(httpError(429), { headers: { 'retry-after': '30' } }) : streamReply('dari model lain'));

    const result = await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u', overrideModel: groq });

    expect(result.content).toBe('dari model lain');
    expect(llmRouter.health.isHealthy(groq)).toBe(true);
    // The next call does not even try Groq while it said to wait.
    bodies.length = 0;
    await llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u', overrideModel: groq });
    expect(bodies.every((b) => b.model !== 'openai/gpt-oss-120b')).toBe(true);
  });

  it('keeps many parallel calls under the per-minute token limit', async () => {
    config.llm.groq.overrides = { ...config.llm.groq.overrides, tpm: 20_000 };
    try {
      const started: number[] = [];
      behaviour = () => {
        started.push(Date.now());
        return streamReply('ok');
      };
      // Each call reserves its prompt plus the largest reply, so only one fits per minute window: the rest go elsewhere.
      await Promise.all(Array.from({ length: 4 }, () => llmRouter.complete({ role: 'backend', systemPrompt: 'x'.repeat(10_000), userPrompt: 'u', overrideModel: groq })));
      const onGroq = bodies.filter((b) => b.model === 'openai/gpt-oss-120b').length;
      expect(onGroq).toBeLessThan(4);
      expect(bodies).toHaveLength(4);
    } finally {
      config.llm.groq.overrides = { ...config.llm.groq.overrides, tpm: undefined };
    }
  });

  it('skips models of a provider that has no key, and says so when none is left', async () => {
    llmClient.setClientForTesting(null);
    await expect(llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u', overrideModel: groq })).rejects.toThrow(/belum dikonfigurasi/);
  });
});
