import { describe, expect, it } from 'vitest';
import { fileFormatInstructions, parseFileBlocks } from '../src/services/agents/fileBlocks';
import { JSONParseError } from '../src/services/llm/jsonParser';

const block = (path: string, content: string) => `=== FILE: ${path} ===\n${content}\n=== END FILE ===`;

describe('file blocks (how agents return code)', () => {
  it('reads one or several files from a reply', () => {
    const reply = `${block('src/a.js', 'export const a = 1;')}\n\n${block('src/b.js', 'export const b = 2;')}`;

    expect(parseFileBlocks(reply).files).toEqual([
      { path: 'src/a.js', content: 'export const a = 1;' },
      { path: 'src/b.js', content: 'export const b = 2;' },
    ]);
  });

  it('keeps code with quotes, backslashes, template strings and regexes exactly as written', () => {
    const code = [
      "const quote = 'it\\'s \"fine\"';",
      'const path = "C:\\\\temp\\\\file";',
      'const pattern = /^\\d{3}\\/[a-z]+$/;',
      'const greeting = `Halo ${name}\\nBaris baru`;',
      'const unicode = "\\u00e9";',
    ].join('\n');

    expect(parseFileBlocks(block('x.js', code)).files[0].content).toBe(code);
  });

  it('ignores chatter around the blocks and a markdown fence wrapped around a whole file', () => {
    const reply = `Tentu, ini filenya:\n${block('x.js', '```js\nexport default 1;\n```')}\nSemoga membantu!`;

    expect(parseFileBlocks(reply).files).toEqual([{ path: 'x.js', content: 'export default 1;' }]);
  });

  it('tolerates spacing and a different number of "=" in the markers', () => {
    const reply = '==== FILE:  src/a.js  ====\nexport const a = 1;\n==== END FILE ====';

    expect(parseFileBlocks(reply).files).toEqual([{ path: 'src/a.js', content: 'export const a = 1;' }]);
  });

  it('accepts a single file whose closing marker the model forgot', () => {
    expect(parseFileBlocks('=== FILE: x.js ===\nexport default 1;\n').files).toEqual([{ path: 'x.js', content: 'export default 1;\n' }]);
  });

  it('does not guess when several files are present but one is unterminated', () => {
    const reply = `${block('a.js', 'a')}\n=== FILE: b.js ===\nunfinished`;

    expect(parseFileBlocks(reply).files.map((f) => f.path)).toEqual(['a.js']);
  });

  it('still accepts the old JSON format from a model that ignores the instructions', () => {
    const reply = JSON.stringify({ files: [{ path: 'x.js', content: 'export default 1;' }] });

    expect(parseFileBlocks(reply).files).toEqual([{ path: 'x.js', content: 'export default 1;' }]);
  });

  it('reports a reply with no files so the model can be asked again', () => {
    expect(() => parseFileBlocks('Maaf, saya tidak bisa.')).toThrow(JSONParseError);
    expect(() => parseFileBlocks(block('x.js', '   '))).toThrow(JSONParseError);
  });

  it('tells the model the exact format, with the path it should use', () => {
    const text = fileFormatInstructions('public/js/pages/home.js');

    expect(text).toContain('=== FILE: public/js/pages/home.js ===');
    expect(text).toContain('=== END FILE ===');
    expect(text).toContain('No JSON');
  });
});
