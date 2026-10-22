export interface StreamOptions {
  finish?: string;
  /** Silence before the first chunk, like a slow or overloaded model. */
  delayMs?: number;
  signal?: AbortSignal;
}

const sleep = (ms: number, signal?: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    if (signal?.aborted) return reject(Object.assign(new Error('Request was aborted.'), { name: 'AbortError' }));
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(Object.assign(new Error('Request was aborted.'), { name: 'AbortError' }));
    });
  });

/** What the OpenAI SDK returns for stream: true, minus the network. */
export async function* streamReply(content: string, options: StreamOptions = {}) {
  if (options.delayMs) await sleep(options.delayMs, options.signal);
  const middle = Math.ceil(content.length / 2);
  yield { choices: [{ delta: { content: content.slice(0, middle) }, finish_reason: null }] };
  yield { choices: [{ delta: { content: content.slice(middle) }, finish_reason: null }] };
  yield { choices: [{ delta: {}, finish_reason: options.finish ?? 'stop' }] };
  yield { choices: [], usage: { prompt_tokens: 100, completion_tokens: Math.max(1, Math.ceil(content.length / 4)) } };
}

export const httpError = (status: number, message = `HTTP ${status}`) => Object.assign(new Error(message), { status });
