import { defineConfig } from 'vitest/config';

export const testEnv = {
  NODE_ENV: 'test',
  DATABASE_URL: 'file:./test.db',
  JWT_SECRET: 'test-secret-test-secret-test-secret-1234',
  NVIDIA_API_KEY: '',
  OPENAI_API_KEY: '',
  GROQ_API_KEY: '',
  // Pinned so the machine's .env cannot change what the tests expect.
  GROQ_PLAN: 'free',
  GROQ_MAX_QUEUE_MS: '20000',
  GROQ_MAX_OUTPUT_TOKENS: '16000',
  GROQ_REASONING_EFFORT: 'medium',
  MODEL_VISION: 'groq:qwen/qwen3.8-27b',
  MODEL_VISION_FALLBACKS: '',
  VISION_MAX_IMAGES: '3',
  VISION_MAX_BYTES: '4000000',
  VISION_IMAGE_TOKENS: '1800',
  GROQ_RPM: '',
  GROQ_TPM: '',
  GROQ_RPD: '',
  GROQ_TPD: '',
  // Tests must never reach real cloud services, even when .env has credentials.
  FIREBASE_PROJECT_ID: '',
  FIREBASE_CLIENT_EMAIL: '',
  FIREBASE_PRIVATE_KEY: '',
  FIREBASE_SERVICE_ACCOUNT_KEY: '',
  SANDBOX_MODE: 'local',
  STORAGE_DIR: './storage-test',
  WORKSPACES_DIR: './storage-test/workspaces',
  EXPORTS_DIR: './storage-test/exports',
  PREVIEW_PORT_START: '5400',
  PREVIEW_PORT_END: '5450',
};

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    exclude: ['storage/**', 'storage-test/**', 'node_modules/**', 'dist/**', 'tests/slow/**'],
    globalSetup: ['tests/global-setup.ts'],
    fileParallelism: false,
    env: testEnv,
    testTimeout: 20000,
    hookTimeout: 20000,
  },
});
