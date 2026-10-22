export interface Limits {
  /** Requests per minute, tokens per minute, requests per day, tokens per day. Infinity means no limit. */
  rpm: number;
  tpm: number;
  rpd: number;
  tpd: number;
}

const MINUTE = 60_000;
const DAY = 24 * 60 * MINUTE;

/** Waiting would take longer than the caller is willing to wait, so it should use another model instead. */
export class RateLimitedError extends Error {
  constructor(public readonly key: string, public readonly waitMs: number, public readonly reason: string) {
    super(`${key} sedang dibatasi (${reason}); perlu menunggu ${Number.isFinite(waitMs) ? `${Math.ceil(waitMs / 1000)} detik` : 'terlalu lama'}`);
    this.name = 'RateLimitedError';
  }
}

/** One request alone is larger than the per-minute token limit, so no amount of waiting lets it through. */
export class RequestTooLargeError extends Error {
  constructor(public readonly key: string, public readonly tokens: number, public readonly limit: number) {
    super(`Permintaan ${tokens} token melebihi batas ${limit} token per menit untuk ${key}`);
    this.name = 'RequestTooLargeError';
  }
}

interface Use {
  at: number;
  tokens: number;
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Keeps calls to a rate-limited provider under its published limits (RPM, TPM, RPD, TPD) by holding them back
 * just long enough, instead of sending them and getting 429. Limits are tracked per key (one key per model),
 * in order of arrival. A provider's own 429 and the limits it reports in its headers override what was configured.
 */
export class RateLimiter {
  private uses = new Map<string, Use[]>();
  private blockedUntil = new Map<string, number>();
  private learnedTpm = new Map<string, number>();
  private queues = new Map<string, Promise<unknown>>();

  /** The configured limits, with the per-minute token limit the provider itself reported when it is lower. */
  public effective(key: string, limits: Limits): Limits {
    const learned = this.learnedTpm.get(key);
    return learned && learned < limits.tpm ? { ...limits, tpm: learned } : limits;
  }

  /** The provider says how many tokens per minute this account really has. */
  public learnTpm(key: string, tpm: number): void {
    if (Number.isFinite(tpm) && tpm > 0) this.learnedTpm.set(key, tpm);
  }

  /** The provider answered 429: send nothing to this key until it says it is ready. */
  public block(key: string, ms: number): void {
    this.blockedUntil.set(key, Math.max(this.blockedUntil.get(key) ?? 0, Date.now() + ms));
  }

  /** Milliseconds until a request of this size would be let through; 0 when it can go now. */
  public waitFor(key: string, limits: Limits, tokens: number): number {
    const now = Date.now();
    const list = (this.uses.get(key) ?? []).filter((u) => now - u.at < DAY);
    this.uses.set(key, list);

    let wait = Math.max(0, (this.blockedUntil.get(key) ?? 0) - now);
    const within = (windowMs: number) => list.filter((u) => now - u.at < windowMs);

    const byCount = (windowMs: number, max: number) => {
      const inWindow = within(windowMs);
      if (!Number.isFinite(max) || inWindow.length < max) return 0;
      return inWindow[inWindow.length - max].at + windowMs - now;
    };
    const byTokens = (windowMs: number, max: number) => {
      if (!Number.isFinite(max)) return 0;
      const inWindow = within(windowMs);
      let total = inWindow.reduce((sum, u) => sum + u.tokens, 0) + tokens;
      for (const use of inWindow) {
        if (total <= max) return 0;
        total -= use.tokens;
        if (total <= max) return use.at + windowMs - now;
      }
      return total <= max ? 0 : windowMs;
    };

    wait = Math.max(wait, byCount(MINUTE, limits.rpm), byTokens(MINUTE, limits.tpm), byCount(DAY, limits.rpd), byTokens(DAY, limits.tpd));
    return Math.max(0, wait);
  }

  /**
   * Reserves room for one request and resolves when it may be sent. Requests for the same key go in the order
   * they asked. Throws RateLimitedError at once if the wait would exceed `maxWaitMs`.
   */
  public acquire(key: string, limits: Limits, tokens: number, maxWaitMs: number): Promise<void> {
    const effective = this.effective(key, limits);
    if (tokens > effective.tpm) return Promise.reject(new RequestTooLargeError(key, tokens, effective.tpm));
    if (tokens > effective.tpd) return Promise.reject(new RequestTooLargeError(key, tokens, effective.tpd));

    const previous = this.queues.get(key) ?? Promise.resolve();
    const run = previous.catch(() => undefined).then(async () => {
      for (;;) {
        const wait = this.waitFor(key, effective, tokens);
        if (wait <= 0) break;
        if (wait > maxWaitMs) throw new RateLimitedError(key, wait, 'batas permintaan atau token tercapai');
        await sleep(wait + 25);
      }
      const list = this.uses.get(key) ?? [];
      list.push({ at: Date.now(), tokens });
      this.uses.set(key, list);
    });
    this.queues.set(key, run);
    return run;
  }

  public reset(): void {
    this.uses.clear();
    this.blockedUntil.clear();
    this.learnedTpm.clear();
    this.queues.clear();
  }
}

export const rateLimiter = new RateLimiter();
