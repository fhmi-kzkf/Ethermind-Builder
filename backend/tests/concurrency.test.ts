import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import config from '../src/config';
import prisma, { initDatabase } from '../src/db/prisma';
import llmClient from '../src/services/llm/client';
import llmRouter from '../src/services/llm/router';
import { mapLimit, Semaphore } from '../src/services/llm/semaphore';
import { streamReply } from './helpers/fakeStream';
import { makeProjectWithJob, makeUser } from './helpers/platform';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('semaphore', () => {
  it('never lets more than the limit run at once and serves waiters in order', async () => {
    const gate = new Semaphore(2);
    const order: number[] = [];
    let running = 0;
    let peak = 0;

    await Promise.all(
      [1, 2, 3, 4, 5].map(async (id) => {
        const release = await gate.acquire();
        order.push(id);
        running += 1;
        peak = Math.max(peak, running);
        await sleep(20);
        running -= 1;
        release();
      })
    );

    expect(peak).toBe(2);
    expect(order).toEqual([1, 2, 3, 4, 5]);
    expect(gate.inUse).toBe(0);
  });

  it('ignores a second release of the same slot', async () => {
    const gate = new Semaphore(1);
    const release = await gate.acquire();

    release();
    release();

    expect(gate.inUse).toBe(0);
    const again = await gate.acquire();
    expect(gate.inUse).toBe(1);
    again();
  });
});

describe('mapLimit', () => {
  it('keeps results in input order and runs up to the limit in parallel', async () => {
    let running = 0;
    let peak = 0;

    const results = await mapLimit([30, 10, 20, 40], 2, async (ms, index) => {
      running += 1;
      peak = Math.max(peak, running);
      await sleep(ms);
      running -= 1;
      return `${index}:${ms}`;
    });

    expect(results).toEqual(['0:30', '1:10', '2:20', '3:40']);
    expect(peak).toBe(2);
  });

  it('lets every task finish before reporting the first error', async () => {
    const finished: number[] = [];

    await expect(
      mapLimit([1, 2, 3, 4], 2, async (n) => {
        await sleep(10 * n);
        finished.push(n);
        if (n === 2) throw new Error('boom');
        return n;
      })
    ).rejects.toThrow('boom');

    expect(finished.sort()).toEqual([1, 2, 3, 4]);
  });

  it('handles an empty list', async () => {
    expect(await mapLimit([], 3, async () => 1)).toEqual([]);
  });
});

describe('model calls made for builds', () => {
  let jobId: string;
  let projectId: string;

  beforeAll(async () => {
    await initDatabase();
    const made = await makeProjectWithJob(await makeUser('client'), 'running');
    jobId = made.job.id;
    projectId = made.project.id;
  });

  afterEach(() => {
    llmClient.setClientForTesting(null);
    llmRouter.health.reset();
  });

  function slowClient() {
    const state = { running: 0, peak: 0 };
    llmClient.setClientForTesting({
      chat: {
        completions: {
          create: async (_body: unknown, options?: { signal?: AbortSignal }) => {
            state.running += 1;
            state.peak = Math.max(state.peak, state.running);
            await sleep(40);
            state.running -= 1;
            return streamReply('selesai', { signal: options?.signal });
          },
        },
      },
    });
    return state;
  }

  it('share a limited number of slots, so parallel agents cannot flood the provider', async () => {
    const state = slowClient();

    await Promise.all(Array.from({ length: 14 }, () => llmRouter.complete({ role: 'backend', systemPrompt: 's', userPrompt: 'u', jobId, projectId })));

    expect(state.peak).toBe(config.llm.maxConcurrent);
  });

  it('never queue chat behind them', async () => {
    const state = slowClient();

    await Promise.all(Array.from({ length: 14 }, () => llmRouter.complete({ role: 'fast', systemPrompt: 's', userPrompt: 'u' })));
    expect(state.peak).toBe(14);
    expect((await prisma.job.findUnique({ where: { id: jobId } }))?.tokensUsed).toBeGreaterThanOrEqual(0);
  });
});
