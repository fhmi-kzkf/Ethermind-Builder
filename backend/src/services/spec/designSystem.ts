import { DesignGuidelines } from './specSchema';

export interface Palette {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;
  accent: string;
}

export interface ResolvedDesign {
  theme: 'light' | 'dark';
  navStyle: 'sidebar' | 'topbar';
  typography: DesignGuidelines['typography'];
  radius: DesignGuidelines['radius'];
  density: DesignGuidelines['density'];
  personality: string;
  tokens: Record<string, string>;
  /** Human-readable notes on colors that were corrected to meet WCAG AA. */
  adjustments: string[];
}

const MIN_TEXT = 4.5;
const MIN_UI = 3;

/** Starting points for specs that do not carry a palette. All pass WCAG AA before any correction. */
const CURATED_LIGHT: Palette[] = [
  { background: '#f4f7f6', surface: '#ffffff', text: '#14201e', mutedText: '#4c5d59', border: '#d5dfdc', accent: '#0f766e' },
  { background: '#faf6f1', surface: '#fffdfa', text: '#2b1d16', mutedText: '#6b5547', border: '#e6d9cc', accent: '#b4411f' },
  { background: '#f5f6fb', surface: '#ffffff', text: '#161a33', mutedText: '#4e5578', border: '#d9dcee', accent: '#3b3fb6' },
  { background: '#f3f6f0', surface: '#fcfdfb', text: '#18241a', mutedText: '#4f6153', border: '#d6e0d2', accent: '#2f6b2f' },
];
const CURATED_DARK: Palette = {
  background: '#121417',
  surface: '#1b1f24',
  text: '#e8ecf0',
  mutedText: '#a3adb8',
  border: '#2e353d',
  accent: '#5eb6ff',
};

const FONT_STACKS: Record<DesignGuidelines['typography'], { body: string; heading: string }> = {
  'neutral-sans': {
    body: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  'humanist-sans': {
    body: 'Seravek, "Gill Sans Nova", Ubuntu, Calibri, "DejaVu Sans", "Source Sans Pro", sans-serif',
    heading: 'Seravek, "Gill Sans Nova", Ubuntu, Calibri, "DejaVu Sans", "Source Sans Pro", sans-serif',
  },
  'geometric-sans': {
    body: 'Avenir, Montserrat, Corbel, "URW Gothic", "Source Sans Pro", sans-serif',
    heading: 'Avenir, Montserrat, Corbel, "URW Gothic", "Source Sans Pro", sans-serif',
  },
  'editorial-serif': {
    body: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: '"Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, Charter, Cambria, serif',
  },
  mono: {
    body: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    heading: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
  },
};

const RADII: Record<DesignGuidelines['radius'], [number, number, number]> = {
  sharp: [2, 4, 6],
  soft: [6, 10, 16],
  round: [10, 16, 28],
};

type RGB = [number, number, number];

function toRgb(hex: string): RGB {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function toHex([r, g, b]: RGB): string {
  const part = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return `#${part(r)}${part(g)}${part(b)}`;
}

function luminance(hex: string): number {
  const channel = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const [r, g, b] = toRgb(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

function mix(a: string, b: string, t: number): string {
  const ra = toRgb(a);
  const rb = toRgb(b);
  return toHex([ra[0] + (rb[0] - ra[0]) * t, ra[1] + (rb[1] - ra[1]) * t, ra[2] + (rb[2] - ra[2]) * t]);
}

/** Moves `fg` toward black or white until it reaches `min` contrast against every background given. */
function ensureContrast(fg: string, backgrounds: string[], min: number): string {
  const worst = (color: string) => Math.min(...backgrounds.map((bg) => contrastRatio(color, bg)));
  if (worst(fg) >= min) return fg;

  const avgLum = backgrounds.reduce((sum, bg) => sum + luminance(bg), 0) / backgrounds.length;
  const target = avgLum > 0.4 ? '#000000' : '#ffffff';
  for (let step = 1; step <= 40; step++) {
    const candidate = mix(fg, target, step / 40);
    if (worst(candidate) >= min) return candidate;
  }
  return target;
}

function hashString(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickPalette(guidelines: DesignGuidelines, title: string): Palette {
  if (guidelines.palette) return { ...guidelines.palette };

  const base = guidelines.theme === 'dark' ? { ...CURATED_DARK } : { ...CURATED_LIGHT[hashString(title) % CURATED_LIGHT.length] };
  if (guidelines.primaryColor) base.accent = guidelines.primaryColor;
  return base;
}

export function resolveDesign(guidelines: DesignGuidelines, title: string): ResolvedDesign {
  const adjustments: string[] = [];
  const palette = pickPalette(guidelines, title);
  const isDark = guidelines.theme === 'dark';

  const backgrounds = [palette.background, palette.surface];

  const fix = (label: string, color: string, against: string[], min: number): string => {
    const fixed = ensureContrast(color, against, min);
    if (fixed !== color) adjustments.push(`${label} ${color} -> ${fixed} (needs ${min}:1 contrast)`);
    return fixed;
  };

  const text = fix('text', palette.text, backgrounds, 7);
  const mutedText = fix('mutedText', palette.mutedText, backgrounds, MIN_TEXT);
  const accentText = fix('accent as link text', palette.accent, backgrounds, MIN_TEXT);
  const borderStrong = ensureContrast(mix(text, palette.background, 0.55), backgrounds, MIN_UI);

  // Button fill: pick the label color with more contrast, and darken/lighten the fill if neither reaches AA.
  let accent = palette.accent;
  const labelOn = (fill: string) => (contrastRatio('#ffffff', fill) >= contrastRatio('#111111', fill) ? '#ffffff' : '#111111');
  for (let step = 1; step <= 40 && contrastRatio(labelOn(accent), accent) < MIN_TEXT; step++) {
    accent = mix(palette.accent, isDark ? '#ffffff' : '#000000', step / 40);
  }
  if (accent !== palette.accent) adjustments.push(`accent ${palette.accent} -> ${accent} (button label needs ${MIN_TEXT}:1 contrast)`);
  const onAccent = labelOn(accent);

  const semantic = isDark
    ? { danger: '#ff8a80', success: '#6fdc8c', warning: '#ffcc66' }
    : { danger: '#b42318', success: '#1a7f37', warning: '#8a5a00' };
  const semanticFixed = Object.fromEntries(
    Object.entries(semantic).map(([name, color]) => [name, ensureContrast(color, backgrounds, MIN_TEXT)])
  );
  const softOf = (color: string) => mix(color, palette.surface, isDark ? 0.82 : 0.9);

  const [rSm, rMd, rLg] = RADII[guidelines.radius];
  const fonts = FONT_STACKS[guidelines.typography];
  const compact = guidelines.density === 'compact';

  const tokens: Record<string, string> = {
    '--bg': palette.background,
    '--surface': palette.surface,
    '--surface-2': mix(palette.surface, palette.background, 0.5),
    '--text': text,
    '--muted': mutedText,
    '--border': palette.border,
    '--border-strong': borderStrong,
    '--accent': accent,
    '--accent-text': accentText,
    '--on-accent': onAccent,
    '--accent-soft': mix(accent, palette.surface, isDark ? 0.8 : 0.88),
    '--danger': semanticFixed.danger,
    '--danger-soft': softOf(semanticFixed.danger),
    '--success': semanticFixed.success,
    '--success-soft': softOf(semanticFixed.success),
    '--warning': semanticFixed.warning,
    '--warning-soft': softOf(semanticFixed.warning),
    '--radius-sm': `${rSm}px`,
    '--radius-md': `${rMd}px`,
    '--radius-lg': `${rLg}px`,
    '--radius-pill': guidelines.radius === 'round' ? '999px' : `${rMd}px`,
    '--font-body': fonts.body,
    '--font-heading': fonts.heading,
    '--control-h': compact ? '2.25rem' : '2.75rem',
    '--space-unit': compact ? '0.25rem' : '0.3125rem',
    '--shadow': isDark ? '0 1px 2px rgb(0 0 0 / 0.5)' : '0 1px 2px rgb(16 24 40 / 0.06), 0 1px 3px rgb(16 24 40 / 0.08)',
  };

  return {
    theme: guidelines.theme,
    navStyle: guidelines.navStyle,
    typography: guidelines.typography,
    radius: guidelines.radius,
    density: guidelines.density,
    personality: guidelines.personality,
    tokens,
    adjustments,
  };
}

export function renderTokensCss(design: ResolvedDesign): string {
  const lines = Object.entries(design.tokens).map(([name, value]) => `  ${name}: ${value};`);
  return `/* Generated from the approved spec. Edit the spec, not this file. */\n:root {\n  color-scheme: ${design.theme};\n${lines.join('\n')}\n}\n`;
}
