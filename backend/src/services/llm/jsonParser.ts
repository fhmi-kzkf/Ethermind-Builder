import { ZodType, ZodTypeDef } from 'zod';

export class JSONParseError extends Error {
  constructor(message: string, public readonly rawText: string) {
    super(message);
    this.name = 'JSONParseError';
  }
}

/**
 * Robust JSON extractor from LLM outputs
 * Handles markdown formatting, preamble/postamble conversational text, and common formatting glitches
 */
export function extractAndParseJSON<T = any>(rawText: string, schema?: ZodType<T, ZodTypeDef, unknown>): T {
  let cleaned = rawText.trim();

  // Strip markdown code fences e.g. ```json ... ``` or ``` ... ```
  if (cleaned.includes('```')) {
    const codeBlockMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    if (codeBlockMatch && codeBlockMatch[1]) {
      cleaned = codeBlockMatch[1].trim();
    }
  }

  // Find outermost object or array if text still has conversational surroundings
  if (!cleaned.startsWith('{') && !cleaned.startsWith('[')) {
    const firstBrace = cleaned.indexOf('{');
    const firstBracket = cleaned.indexOf('[');

    let startIdx = -1;
    if (firstBrace !== -1 && firstBracket !== -1) {
      startIdx = Math.min(firstBrace, firstBracket);
    } else if (firstBrace !== -1) {
      startIdx = firstBrace;
    } else if (firstBracket !== -1) {
      startIdx = firstBracket;
    }

    if (startIdx !== -1) {
      cleaned = cleaned.substring(startIdx);
    }
  }

  // Find closing boundary
  const lastBrace = cleaned.lastIndexOf('}');
  const lastBracket = cleaned.lastIndexOf(']');
  const endIdx = Math.max(lastBrace, lastBracket);

  if (endIdx !== -1) {
    cleaned = cleaned.substring(0, endIdx + 1);
  }

  try {
    const parsed = JSON.parse(cleaned);

    if (schema) {
      const validated = schema.safeParse(parsed);
      if (!validated.success) {
        throw new JSONParseError(
          `JSON schema validation failed: ${validated.error.message}`,
          rawText
        );
      }
      return validated.data;
    }

    return parsed as T;
  } catch (error: any) {
    if (error instanceof JSONParseError) throw error;
    throw new JSONParseError(`Failed to parse extracted JSON: ${error.message}`, rawText);
  }
}
