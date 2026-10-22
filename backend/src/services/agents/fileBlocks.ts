import { extractAndParseJSON, JSONParseError } from '../llm/jsonParser';
import { FilesSchema } from './agentIO';

/**
 * Agents hand back code as plain delimited blocks, not as JSON strings. Source code is full of quotes,
 * newlines and backslashes, and models (small ones especially) escape them wrongly inside JSON, which
 * showed up as unterminated strings, broken unicode escapes and unbalanced brackets in written files.
 */
export function fileFormatInstructions(examplePath: string): string {
  return `Output format: write every file as a plain block. No JSON, no escaping, no markdown fences:

=== FILE: ${examplePath} ===
(the complete file content, exactly as it should be saved)
=== END FILE ===

Put nothing outside the blocks. Start each file with its own imports.`;
}

const BLOCK = /^[ \t]*={3,}[ \t]*FILE:[ \t]*(.+?)[ \t]*={3,}[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*={3,}[ \t]*END FILE[ \t]*={3,}/gm;
const OPEN = /^[ \t]*={3,}[ \t]*FILE:[ \t]*(.+?)[ \t]*={3,}[ \t]*\r?\n/m;

/** Removes a markdown code fence some models add around a whole file. */
function unfence(content: string): string {
  const fenced = /^\s*```[\w-]*\r?\n([\s\S]*?)\r?\n```\s*$/.exec(content);
  return fenced ? fenced[1] : content;
}

export function parseFileBlocks(raw: string): { files: Array<{ path: string; content: string }> } {
  const files: Array<{ path: string; content: string }> = [];
  for (const match of raw.matchAll(BLOCK)) {
    const content = unfence(match[2]);
    if (content.trim()) files.push({ path: match[1].trim(), content });
  }

  // A final block without its closing line: accept it only when it is the single block in the reply.
  if (files.length === 0) {
    const open = OPEN.exec(raw);
    if (open && raw.indexOf(open[0]) === raw.lastIndexOf(open[0])) {
      const content = unfence(raw.slice(open.index + open[0].length).replace(/\r?\n[ \t]*={3,}[ \t]*END FILE[ \t]*={3,}[\s\S]*$/, ''));
      if (content.trim()) files.push({ path: open[1].trim(), content });
    }
  }

  if (files.length > 0) return { files };

  // The model ignored the format and sent JSON: still accept it.
  try {
    return extractAndParseJSON(raw, FilesSchema);
  } catch {
    throw new JSONParseError('no "=== FILE: path ===" blocks were found in the reply', raw);
  }
}
