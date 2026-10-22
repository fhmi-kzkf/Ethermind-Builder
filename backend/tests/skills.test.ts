import { describe, expect, it } from 'vitest';
import config from '../src/config';
import { AgentRole } from '../src/types';
import skillLibrary, { parseSkill, SkillLibrary } from '../src/services/skills/skillLibrary';

describe('Agent skill library', () => {
  it('loads every skill file in backend/skills without parse errors', () => {
    const names = skillLibrary.all().map((s) => s.name).sort();
    expect(names).toEqual(
      ['anti-slop', 'backend', 'copywriting', 'database', 'frontend', 'full-output', 'planning', 'reviewing', 'testing'].sort()
    );
  });

  it('gives each code-writing role the global filter plus its own skills, in order', () => {
    const names = (role: AgentRole) => skillLibrary.resolve(role).map((s) => s.name);

    expect(names('frontend')).toEqual(['anti-slop', 'full-output', 'frontend', 'copywriting']);
    expect(names('backend')).toEqual(['anti-slop', 'full-output', 'backend']);
    expect(names('database')).toEqual(['anti-slop', 'full-output', 'database']);
    expect(names('tester')).toEqual(['anti-slop', 'full-output', 'testing']);
    expect(names('reviewer')).toEqual(['anti-slop', 'reviewing']);
    expect(names('planner')).toEqual(['planning']);
  });

  it('leaves roles that write no code untouched', () => {
    const prompt = 'You are the orchestrator.';
    expect(skillLibrary.applyTo('orchestrator', prompt)).toBe(prompt);
    expect(skillLibrary.applyTo('fast', prompt)).toBe(prompt);
  });

  it('appends skills after the agent prompt so the agent prompt stays first', () => {
    const prompt = 'You are the Lead Backend Engineer.';
    const result = skillLibrary.applyTo('backend', prompt);

    expect(result.startsWith(prompt)).toBe(true);
    expect(result).toContain('Skill: anti-slop');
    expect(result).toContain('Skill: backend');
    expect(result).not.toContain('Skill: frontend');
  });

  it('adds named extra skills and ignores unknown ones', () => {
    const names = skillLibrary.resolve('backend', ['testing', 'does-not-exist']).map((s) => s.name);
    expect(names).toContain('testing');
    expect(names).not.toContain('does-not-exist');
  });

  it('returns the prompt unchanged when skills are disabled', () => {
    config.skills.enabled = false;
    try {
      expect(skillLibrary.applyTo('frontend', 'prompt')).toBe('prompt');
    } finally {
      config.skills.enabled = true;
    }
  });

  it('tolerates a missing skills directory', () => {
    const empty = new SkillLibrary('/nonexistent/skills/dir');
    expect(empty.all()).toEqual([]);
    expect(empty.applyTo('frontend', 'prompt')).toBe('prompt');
  });

  it('rejects malformed skill files', () => {
    expect(() => parseSkill('no frontmatter', 'bad.md')).toThrow(/frontmatter/);
    expect(() => parseSkill('---\nname: x\nroles: wizard\n---\nbody', 'bad.md')).toThrow(/unknown role/);
  });

  it('keeps the largest per-role skill bundle small enough for the token budget', () => {
    const bundle = skillLibrary.applyTo('frontend', '');
    const approxTokens = Math.ceil(bundle.length / 4);
    expect(approxTokens).toBeLessThan(4000);
  });
});
