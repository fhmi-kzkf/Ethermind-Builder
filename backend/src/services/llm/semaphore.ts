/** Limits how many model calls run at once across the whole platform, so parallel agents cannot flood the provider. */
export class Semaphore {
  private active = 0;
  private waiting: Array<() => void> = [];

  constructor(private limit: number) {}

  public get inUse(): number {
    return this.active;
  }

  /** Resolves with a release function once a slot is free. Slots are handed out in the order they were asked for. */
  public acquire(): Promise<() => void> {
    return new Promise((resolve) => {
      const grant = () => {
        this.active += 1;
        let released = false;
        resolve(() => {
          if (released) return;
          released = true;
          this.active -= 1;
          this.waiting.shift()?.();
        });
      };
      if (this.active < this.limit) grant();
      else this.waiting.push(grant);
    });
  }
}

/** Runs `task` over `items` with at most `limit` in flight. Every task finishes; the first error is thrown afterwards. */
export async function mapLimit<T, R>(items: T[], limit: number, task: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  const errors: unknown[] = [];
  let next = 0;

  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      try {
        results[index] = await task(items[index], index);
      } catch (error) {
        errors.push(error);
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));

  if (errors.length > 0) throw errors[0];
  return results;
}
