import { defineConfig } from 'vitest/config';
import { testEnv } from './vitest.config';

/** End-to-end builds: real npm install, real lint, real tests, real server. Needs network and several minutes. */
export default defineConfig({
  test: {
    include: ['tests/slow/**/*.test.ts'],
    globalSetup: ['tests/global-setup.ts'],
    fileParallelism: false,
    env: { ...testEnv, GATE_MIN_TESTS: '8', MAX_REMEDIATION_ROUNDS: '2', BUILD_MODE: 'strict' },
    testTimeout: 15 * 60 * 1000,
    hookTimeout: 5 * 60 * 1000,
  },
});
