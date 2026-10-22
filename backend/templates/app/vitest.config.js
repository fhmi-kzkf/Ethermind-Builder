import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.js'],
    globalSetup: ['tests/global-setup.js'],
    fileParallelism: false,
    testTimeout: 20000,
    hookTimeout: 60000,
    env: {
      NODE_ENV: 'test',
      DATABASE_URL: 'file:../data/test.db',
      JWT_SECRET: 'test-secret-test-secret-test-secret-1234',
    },
    coverage: {
      provider: 'v8',
      include: ['src/**/*.js'],
      reporter: ['text-summary', 'json-summary'],
      reportsDirectory: './coverage',
    },
  },
});
