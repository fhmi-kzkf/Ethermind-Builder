import { describe, expect, it } from 'vitest';
import { contrastRatio, renderTokensCss, resolveDesign } from '../src/services/spec/designSystem';
import { delegateName, humanize, kebab, relationFieldName, resourcePath } from '../src/services/spec/naming';
import { customEndpointGroups, isStandardCrud, parseSpec, validateSpec } from '../src/services/spec/specSchema';
import { shopSpec, shopSpecRaw, simpleSpec } from './fixtures/specs';

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

describe('naming', () => {
  it('turns entity names into REST paths, plural and kebab-cased', () => {
    expect(resourcePath('Product')).toBe('products');
    expect(resourcePath('StockMovement')).toBe('stock-movements');
    expect(resourcePath('Category')).toBe('categories');
    expect(resourcePath('Address')).toBe('addresses');
    expect(resourcePath('Person')).toBe('people');
    expect(kebab('SaleItem')).toBe('sale-item');
  });

  it('derives delegate, relation and display names', () => {
    expect(delegateName('SaleItem')).toBe('saleItem');
    expect(relationFieldName('productId')).toBe('product');
    expect(humanize('stockQuantity')).toBe('Stock quantity');
  });
});

describe('spec parsing and validation', () => {
  it('accepts the fixture specs without problems', () => {
    expect(validateSpec(shopSpec())).toEqual([]);
    expect(validateSpec(simpleSpec())).toEqual([]);
  });

  it('forces the real stack into techStack whatever the planner wrote', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.techStack = { frontend: 'React / Next.js + Tailwind' };

    expect(JSON.stringify(parseSpec(raw).techStack)).not.toContain('Next.js');
  });

  it('removes automatic fields and normalizes type names', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.databaseSchema[0].fields.unshift({ name: 'id', type: 'String', required: true, label: 'Id' }, { name: 'size', type: 'integer', required: true, label: 'Ukuran' });

    const entity = parseSpec(raw).databaseSchema[0];

    expect(entity.fields.some((f) => f.name === 'id')).toBe(false);
    expect(entity.fields.find((f) => f.name === 'size')?.type).toBe('Int');
  });

  it('drops standard CRUD endpoints the planner listed, but keeps ones that replace CRUD on purpose', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.apiEndpoints.push({ method: 'GET', path: '/api/products', description: 'Daftar produk' }, { method: 'DELETE', path: '/api/products/:id', description: 'Hapus produk' });

    const spec = parseSpec(raw);

    expect(spec.apiEndpoints.map((e) => `${e.method} ${e.path}`).sort()).toEqual(['GET /api/reports/summary', 'POST /api/sales']);
    expect(isStandardCrud(spec, { method: 'GET', path: '/api/products', description: '' })).toBe(true);
    expect(isStandardCrud(spec, { method: 'GET', path: '/api/reports/summary', description: '' })).toBe(false);
  });

  it('groups custom endpoints by their first path segment', () => {
    expect(Array.from(customEndpointGroups(shopSpec()).keys())).toEqual(['sales', 'reports']);
  });

  it('reports every kind of structural mistake in words the planner can act on', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.auth.roles = ['kasir', 'admin'];
    raw.databaseSchema.push({ name: 'user', label: 'Pengguna', fields: [{ name: 'Email', type: 'Money', required: true }] });
    raw.databaseSchema[1].fields.push({ name: 'supplierId', type: 'String', required: true, relation: 'Supplier', label: 'Pemasok' });
    raw.pages.push({ route: '/', name: 'Dobel', kind: 'custom' }, { route: '/users', name: 'Pengguna', kind: 'custom' }, { route: '/x', name: 'X', kind: 'crud', entity: 'Nope' });
    raw.apiEndpoints.push({ method: 'POST', path: '/orders', description: 'Tanpa awalan' }, { method: 'GET', path: '/api/auth/me', description: 'Dilarang', response: '{}' });

    const problems = validateSpec(parseSpec(raw)).join('\n');

    expect(problems).toContain('must start with "admin"');
    expect(problems).toContain('PascalCase');
    expect(problems).toContain('camelCase');
    expect(problems).toContain('type "Money" is not supported');
    expect(problems).toContain('relation target "Supplier" does not exist');
    expect(problems).toContain('used by more than one page');
    expect(problems).toContain('reserved by the platform');
    expect(problems).toContain('entity" is missing or does not exist');
    expect(problems).toContain('path must start with /api/');
    expect(problems).toContain('provided by the platform');
    expect(problems).toContain('"response" is required');
  });

  it('requires Indonesian display labels so the UI never shows raw field names', () => {
    const raw = clone(shopSpecRaw) as any;
    delete raw.databaseSchema[1].label;
    delete raw.databaseSchema[1].fields[0].label;

    const problems = validateSpec(parseSpec(raw)).join('\n');

    expect(problems).toContain('Product');
    expect(problems).toContain('"label"');
  });

  it('blocks a User entity when login creates one, and a CRUD page for an internal entity', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.databaseSchema.push({ name: 'User', label: 'Pengguna', fields: [{ name: 'name', type: 'String', required: true, label: 'Nama' }] });
    raw.pages.push({ route: '/items', name: 'Item', kind: 'crud', entity: 'SaleItem' });

    const problems = validateSpec(parseSpec(raw)).join('\n');

    expect(problems).toContain('created automatically');
    expect(problems).toContain('is internal');
  });

  it('upgrades specs saved before the design system existed', () => {
    const legacy = {
      title: 'Aplikasi Lama',
      pages: [{ route: '/', name: 'Beranda', purpose: 'x', components: [] }],
      databaseSchema: [{ name: 'Item', fields: [{ name: 'name', type: 'String', required: true }] }],
      designGuidelines: { theme: 'light', primaryColor: '#1c1c1c', cardRadius: '24px', fontFamily: 'Inter' },
    };

    const spec = parseSpec(legacy);

    expect(spec.auth.mode).toBe('none');
    expect(spec.designGuidelines.typography).toBe('neutral-sans');
    expect(spec.pages[0].kind).toBe('custom');
  });
});

describe('tolerating how models write JSON', () => {
  it('treats null as "not applicable" instead of rejecting the whole spec', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.apiEndpoints[1].request = null;
    raw.pages[0].entity = null;
    raw.databaseSchema[1].access = null;

    const spec = parseSpec(raw);

    expect(spec.apiEndpoints.find((e) => e.path === '/api/reports/summary')?.request).toBeUndefined();
    expect(validateSpec(spec)).toEqual([]);
  });

  it('accepts a list of roles for a feature as one comma-separated string', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.features = [{ name: 'Laporan', description: 'Ringkasan', priority: 'must_have', userRole: ['admin', 'kasir'] }];

    expect(parseSpec(raw).features[0].userRole).toBe('admin, kasir');
  });

  it('treats an endpoint that claims to replace a CRUD route that does not exist as a plain custom endpoint', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.apiEndpoints.push({ method: 'POST', path: '/api/transaksi', description: 'Catat transaksi', overridesCrud: true, roles: ['admin'], request: '{ total: number }', response: '{ id: string }' });

    const spec = parseSpec(raw);
    const endpoint = spec.apiEndpoints.find((e) => e.path === '/api/transaksi')!;

    expect(endpoint.overridesCrud).toBeUndefined();
    expect(validateSpec(spec)).toEqual([]);
  });

  it('drops a one-item "values" list so the field becomes free text', () => {
    const raw = clone(shopSpecRaw) as any;
    raw.databaseSchema[1].fields.find((f: any) => f.name === 'status').values = ['aktif'];
    raw.databaseSchema[1].fields.find((f: any) => f.name === 'sku').values = [];

    const fields = parseSpec(raw).databaseSchema[1].fields;

    expect(fields.find((f) => f.name === 'status')?.values).toBeUndefined();
    expect(fields.find((f) => f.name === 'sku')?.values).toBeUndefined();
  });
});

describe('design system', () => {
  it('repairs low-contrast colors until they meet WCAG AA', () => {
    const spec = clone(shopSpecRaw) as any;
    spec.designGuidelines.palette = { background: '#ffffff', surface: '#ffffff', text: '#cccccc', mutedText: '#dddddd', border: '#eeeeee', accent: '#ffee00' };

    const design = resolveDesign(parseSpec(spec).designGuidelines, 'Uji');
    const t = design.tokens;

    expect(contrastRatio(t['--text'], t['--bg'])).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(t['--muted'], t['--surface'])).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(t['--accent-text'], t['--bg'])).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(t['--on-accent'], t['--accent'])).toBeGreaterThanOrEqual(4.5);
    expect(design.adjustments.length).toBeGreaterThan(0);
  });

  it('leaves an already accessible palette untouched', () => {
    const design = resolveDesign(shopSpec().designGuidelines, 'Toko');

    expect(design.adjustments).toEqual([]);
    expect(design.tokens['--accent']).toBe('#b4451f');
  });

  it('picks a different starting palette per business when the planner gives none', () => {
    const base = clone(shopSpecRaw) as any;
    delete base.designGuidelines.palette;
    const accents = new Set(['Toko Berkah', 'Bengkel Maju', 'Salon Cantik', 'Klinik Sehat', 'Warung Bu Sari', 'Kedai Kopi'].map((title) => resolveDesign(parseSpec(base).designGuidelines, title).tokens['--accent']));

    expect(accents.size).toBeGreaterThan(1);
  });

  it('uses a dark base for dark themes and keeps semantic colors readable on it', () => {
    const design = resolveDesign(simpleSpec().designGuidelines, 'Gelap');

    expect(design.theme).toBe('dark');
    expect(contrastRatio(design.tokens['--text'], design.tokens['--bg'])).toBeGreaterThanOrEqual(7);
    expect(contrastRatio(design.tokens['--danger'], design.tokens['--surface'])).toBeGreaterThanOrEqual(4.5);
  });

  it('turns every design choice into CSS tokens and no external font requests', () => {
    const css = renderTokensCss(resolveDesign(shopSpec().designGuidelines, 'Toko'));

    expect(css).toContain('--radius-md: 10px;');
    expect(css).toContain('--control-h: 2.75rem;');
    expect(css).toContain('color-scheme: light;');
    expect(css).not.toMatch(/https?:|@import/);
  });
});
