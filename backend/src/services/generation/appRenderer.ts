import fs from 'fs';
import path from 'path';
import config from '../../config';
import { FileOperation } from '../../types';
import { SpecDefinition, SpecPage } from '../spec/specSchema';
import { renderTokensCss, resolveDesign, ResolvedDesign } from '../spec/designSystem';
import { entityByName, PAGE_ICONS } from '../spec/specSchema';
import { renderCrudPage, renderEntityRoute, renderRoutesIndex, slugForRoute } from './crudFiles';
import { literal } from './literal';
import { renderCrudTests, renderFactories } from './crudTests';
import { renderEnvExample, renderReadme } from './docs';
import { renderPrismaSchema } from './prismaSchema';

const SKIPPED_DIRS = new Set(['node_modules', 'data', 'coverage', 'backups']);
const DEFAULT_ICON: Record<SpecPage['kind'], (typeof PAGE_ICONS)[number]> = { crud: 'list', dashboard: 'chart', custom: 'file' };

function readTree(root: string, dir = ''): FileOperation[] {
  const files: FileOperation[] = [];
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (SKIPPED_DIRS.has(entry.name)) continue;
    const relative = dir ? `${dir}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...readTree(root, relative));
    else files.push({ path: relative, content: fs.readFileSync(path.join(root, relative), 'utf8') });
  }
  return files;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function packageName(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'aplikasi';
}

export function pageModulePath(page: SpecPage): string {
  return `public/js/pages/${slugForRoute(page.route)}.js`;
}

function renderIndexHtml(spec: SpecDefinition, design: ResolvedDesign): string {
  const title = escapeHtml(spec.title);
  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${escapeHtml(spec.summary || spec.title)}" />
    <meta name="color-scheme" content="${design.theme}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/css/tokens.css" />
    <link rel="stylesheet" href="/css/base.css" />
  </head>
  <body>
    <div id="app" data-nav="${design.navStyle}"></div>
    <noscript>Aplikasi ini memerlukan JavaScript. Aktifkan JavaScript di browser Anda lalu muat ulang halaman.</noscript>
    <script type="module" src="/js/main.js"></script>
  </body>
</html>
`;
}

function renderFavicon(spec: SpecDefinition, design: ResolvedDesign): string {
  const letter = escapeHtml(spec.title.trim().charAt(0).toUpperCase() || 'A');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${design.tokens['--accent']}"/><text x="16" y="22.5" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="${design.tokens['--on-accent']}">${letter}</text></svg>\n`;
}

function renderServerConfig(spec: SpecDefinition): string {
  return `export const appConfig = ${literal({ title: spec.title, summary: spec.summary, auth: { mode: spec.auth.mode, roles: spec.auth.roles } })};\n`;
}

function renderClientConfig(spec: SpecDefinition): string {
  const pages: Array<Record<string, unknown>> = spec.pages.map((page) => ({
    path: page.route,
    name: page.name,
    module: `/js/pages/${slugForRoute(page.route)}.js`,
    icon: page.icon || DEFAULT_ICON[page.kind],
    ...(page.roles?.length ? { roles: page.roles } : {}),
  }));

  if (spec.auth.mode === 'multi_role') {
    pages.push({ path: '/users', name: 'Pengguna', module: '/js/pages/_users.js', icon: 'users', roles: [spec.auth.roles[0]] });
  }
  if (spec.auth.mode !== 'none') {
    pages.push({ path: '/account', name: 'Akun saya', module: '/js/pages/_account.js', icon: 'settings' });
  }

  return `export const appConfig = ${literal({ title: spec.title, auth: { mode: spec.auth.mode, roles: spec.auth.roles }, pages })};\n`;
}

export interface RenderedApp {
  files: FileOperation[];
  design: ResolvedDesign;
}

/**
 * Everything about the app that follows mechanically from the approved spec: the platform code,
 * database schema, standard REST resources, standard pages, design tokens, tests for all of those,
 * and the docs. Agents only write what the spec cannot determine (custom endpoints, custom pages,
 * seed data, tests for custom logic).
 */
export function renderApp(spec: SpecDefinition): RenderedApp {
  const design = resolveDesign(spec.designGuidelines, spec.title);
  const byPath = new Map<string, FileOperation>();
  const put = (file: FileOperation) => byPath.set(file.path, file);

  for (const file of readTree(config.templates.appDir)) put(file);
  if (spec.auth.mode !== 'none') {
    for (const file of readTree(config.templates.authDir)) put(file);
  }

  const manifest = byPath.get('package.json');
  if (manifest) put({ ...manifest, content: manifest.content.replace('__PACKAGE_NAME__', packageName(spec.title)) });

  put({ path: 'prisma/schema.prisma', content: renderPrismaSchema(spec) });
  put({ path: 'src/app.config.js', content: renderServerConfig(spec) });
  put({ path: 'public/js/app.config.js', content: renderClientConfig(spec) });
  put({ path: 'public/index.html', content: renderIndexHtml(spec, design) });
  put({ path: 'public/css/tokens.css', content: renderTokensCss(design) });
  put({ path: 'public/favicon.svg', content: renderFavicon(spec, design) });
  put({ path: '.env.example', content: renderEnvExample(spec) });
  put({ path: 'README.md', content: renderReadme(spec) });
  put({ path: 'data/.gitkeep', content: '' });

  put(renderRoutesIndex(spec));
  put(renderFactories(spec));
  for (const entity of spec.databaseSchema) {
    if (entity.internal) continue;
    put(renderEntityRoute(spec, entity));
    put(renderCrudTests(spec, entity));
  }

  for (const page of spec.pages) {
    if (page.kind !== 'crud' || !page.entity) continue;
    const entity = entityByName(spec, page.entity);
    if (entity) put(renderCrudPage(spec, entity, page));
  }

  return { files: Array.from(byPath.values()), design };
}
