import fs from 'fs';
import path from 'path';
import config from '../../config';
import { AgentRole } from '../../types';

export interface Skill {
  name: string;
  description: string;
  roles: AgentRole[];
  order: number;
  body: string;
}

const VALID_ROLES: AgentRole[] = [
  'orchestrator',
  'planner',
  'backend',
  'frontend',
  'database',
  'tester',
  'reviewer',
  'devops',
  'fast',
];

const PREAMBLE = `# ENGINEERING SKILLS
These skills define the quality bar for everything you output. If the task or spec gives an explicit instruction (palette, stack, endpoint list), follow it; where it is silent, follow the skills.`;

export function parseSkill(raw: string, source: string): Skill {
  const match = raw.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`Skill ${source}: missing frontmatter`);
  }

  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx > 0) meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }

  if (!meta.name) throw new Error(`Skill ${source}: frontmatter needs a name`);

  const roles = (meta.roles || '')
    .split(',')
    .map((r) => r.trim())
    .filter(Boolean);
  const unknown = roles.filter((r) => !VALID_ROLES.includes(r as AgentRole));
  if (unknown.length > 0) {
    throw new Error(`Skill ${source}: unknown role(s) ${unknown.join(', ')}`);
  }

  return {
    name: meta.name,
    description: meta.description || '',
    roles: roles as AgentRole[],
    order: Number(meta.order) || 100,
    body: match[2].trim(),
  };
}

export class SkillLibrary {
  private skills: Map<string, Skill> | null = null;

  constructor(private readonly dir: string = config.skills.dir) {}

  public reload(): void {
    this.skills = null;
  }

  public all(): Skill[] {
    return Array.from(this.load().values());
  }

  /**
   * Skills for a role (by their `roles` frontmatter) plus any named extras, ordered by `order`.
   */
  public resolve(role: AgentRole, extraNames: string[] = []): Skill[] {
    const loaded = this.load();
    const picked = new Map<string, Skill>();

    for (const skill of loaded.values()) {
      if (skill.roles.includes(role)) picked.set(skill.name, skill);
    }
    for (const name of extraNames) {
      const skill = loaded.get(name);
      if (skill) {
        picked.set(name, skill);
      } else {
        console.warn(`[SkillLibrary] Unknown skill "${name}" requested, skipping`);
      }
    }

    return Array.from(picked.values()).sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  }

  /**
   * Returns the system prompt with the role's skills appended; unchanged when there are none.
   */
  public applyTo(role: AgentRole, systemPrompt: string, extraNames: string[] = []): string {
    if (!config.skills.enabled) return systemPrompt;

    const skills = this.resolve(role, extraNames);
    if (skills.length === 0) return systemPrompt;

    return `${systemPrompt}\n\n${PREAMBLE}\n\n${skills.map((s) => s.body).join('\n\n')}`;
  }

  private load(): Map<string, Skill> {
    if (this.skills) return this.skills;

    const loaded = new Map<string, Skill>();

    if (!fs.existsSync(this.dir)) {
      console.warn(`[SkillLibrary] Skills directory not found: ${this.dir}`);
      this.skills = loaded;
      return loaded;
    }

    for (const file of fs.readdirSync(this.dir).filter((f) => f.endsWith('.md')).sort()) {
      try {
        const skill = parseSkill(fs.readFileSync(path.join(this.dir, file), 'utf8'), file);
        loaded.set(skill.name, skill);
      } catch (err) {
        console.error(`[SkillLibrary] Skipping ${file}:`, (err as Error).message);
      }
    }

    this.skills = loaded;
    return loaded;
  }
}

export const skillLibrary = new SkillLibrary();
export default skillLibrary;
