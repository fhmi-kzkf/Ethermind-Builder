import { describe, expect, it } from 'vitest';
import { tail } from '../src/services/quality-gate/checker';

describe('what a failed tool tells the repair model', () => {
  const frames = Array.from({ length: 60 }, (_, i) => `    at $n.request (C:\\workspace\\node_modules\\@prisma\\client\\runtime\\library.js:${i}:6307)`);
  const prismaFailure = [
    'Seed gagal: PrismaClientValidationError:',
    'Invalid `prisma.category.create()` invocation:',
    '{ data: { name: "Makanan Ringan" } }',
    'Argument `type` is missing.',
    ...frames,
    'Akun administrator dibuat: gate@example.com',
  ].join('\n');

  it('keeps the message that says what is wrong and drops the stack frames that buried it', () => {
    const shown = tail(prismaFailure);

    expect(shown).toContain('Argument `type` is missing.');
    expect(shown).not.toContain('library.js');
  });

  it('keeps both the start and the end of a very long output', () => {
    const long = `START ${'x'.repeat(5000)} END`;
    const shown = tail(long, 1000);

    expect(shown.length).toBeLessThan(1100);
    expect(shown.startsWith('START')).toBe(true);
    expect(shown.endsWith('END')).toBe(true);
  });
});
