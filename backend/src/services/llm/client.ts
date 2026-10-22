import OpenAI from 'openai';
import config from '../../config';
import { ProviderId } from './providers';

export class LLMClient {
  private clients = new Map<ProviderId, OpenAI>();
  /** Set by tests: one scripted client answers for every provider. */
  private override: OpenAI | null = null;

  private build(provider: ProviderId): OpenAI | null {
    const settings = provider === 'groq' ? { baseURL: config.llm.groq.baseUrl, apiKey: config.llm.groq.apiKey } : { baseURL: config.llm.baseUrl, apiKey: config.llm.apiKey };
    if (!settings.apiKey || settings.apiKey.trim().length === 0) return null;

    const label = provider === 'groq' ? 'Groq' : this.isNvidiaNim() ? 'NVIDIA NIM' : 'Custom Provider';
    console.log(`[LLMClient] ${label} client connected to ${settings.baseURL}`);
    return new OpenAI({
      ...settings,
      // Timeouts, retries and failover are handled per call in the router; the SDK must not retry on its own.
      timeout: config.llm.maxTotalMs,
      maxRetries: 0,
    });
  }

  public getClient(provider: ProviderId = 'nim'): OpenAI | null {
    if (this.override) return this.override;
    if (!this.clients.has(provider)) {
      const created = this.build(provider);
      if (created) this.clients.set(provider, created);
    }
    return this.clients.get(provider) ?? null;
  }

  public isConfigured(provider?: ProviderId): boolean {
    if (this.override) return true;
    if (provider) return this.getClient(provider) !== null;
    return this.getClient('nim') !== null || this.getClient('groq') !== null;
  }

  /** Replaces the OpenAI client for every provider; pass null to restore the configured ones. Used by tests to script model replies. */
  public setClientForTesting(client: unknown | null): void {
    this.override = client as OpenAI | null;
  }

  public isNvidiaNim(): boolean {
    return Boolean(config.llm.isNvidiaNim || config.llm.baseUrl.includes('nvidia.com'));
  }
}

export const llmClient = new LLMClient();
export default llmClient;
