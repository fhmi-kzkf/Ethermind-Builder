import { spawnSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { describe, expect, it } from 'vitest';
import { renderApp } from '../src/services/generation/appRenderer';
import { renderCrudTests } from '../src/services/generation/crudTests';
import { renderPrismaSchema } from '../src/services/generation/prismaSchema';
import { shopSpec, simpleSpec } from './fixtures/specs';

const byPath = (files: Array<{ path: string; content: string }>) => new Map(files.map((f) => [f.path, f.content]));

describe('generated application', () => {
  const shop = renderApp(shopSpec());
  const shopFiles = byPath(shop.files);
  const simple = renderApp(simpleSpec());
  const simpleFiles = byPath(simple.files);

  it('writes valid JavaScript for every generated module', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ethermind-syntax-'));
    try {
      const broken: string[] = [];
      for (const [file, content] of [...shopFiles, ...simpleFiles]) {
        if (!file.endsWith('.js')) continue;
        const target = path.join(dir, file.replace(/[\\/]/g, '__').replace(/\.js$/, '.mjs'));
        fs.writeFileSync(target, content);
        const check = spawnSync(process.execPath, ['--check', target], { encoding: 'utf8' });
        if (check.status !== 0) broken.push(`${file}: ${check.stderr.split('\n').find((l) => l.includes('Error')) ?? check.stderr}`);
      }
      expect(broken).toEqual([]);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it('never declares a variable in the generated update test that the test does not use', () => {
    const spec = shopSpec();
    const product = spec.databaseSchema.find((e) => e.name === 'Product')!;
    const enumOnly = { ...product, fields: [{ name: 'status', type: 'String', required: true, values: ['aktif', 'nonaktif'], default: 'aktif', label: 'Status' }] };

    const content = renderCrudTests(spec, enumOnly).content;

    expect(content).toContain('"nonaktif"');
    expect(content).not.toContain('const current');
    // A derived value still gets the variable it needs.
    expect(renderCrudTests(spec, product).content).toContain('const current');
  });

  it('only includes login code when the spec asks for login', () => {
    expect(shopFiles.has('src/routes/auth.js')).toBe(true);
    expect(shopFiles.has('src/routes/users.js')).toBe(true);
    expect(shopFiles.has('public/js/login.js')).toBe(true);
    expect(shopFiles.get('.env.example')).toContain('JWT_SECRET=');

    expect(simpleFiles.has('src/routes/auth.js')).toBe(false);
    expect(simpleFiles.has('public/js/login.js')).toBe(false);
    expect(simpleFiles.get('.env.example')).not.toContain('JWT_SECRET');
    expect(simpleFiles.get('prisma/schema.prisma')).not.toContain('model User');
  });

  it('models relations on both sides, with indexes and the right delete behaviour', () => {
    const schema = renderPrismaSchema(shopSpec());

    expect(schema).toContain('model User {');
    expect(schema).toMatch(/category Category\? @relation\("Product_categoryId", fields: \[categoryId\], references: \[id\], onDelete: SetNull\)/);
    expect(schema).toMatch(/products Product\[\] @relation\("Product_categoryId"\)/);
    expect(schema).toMatch(/product Product @relation\("SaleItem_productId", fields: \[productId\], references: \[id\], onDelete: Restrict\)/);
    expect(schema).toContain('@@index([categoryId])');
    expect(schema).toContain('@@index([status])');
    expect(schema).toContain('price Int\n');
    expect(schema).toContain('status String @default("aktif")');
    expect(schema).toContain('paidAt DateTime @default(now())');
    expect(schema).not.toMatch(/Float/);
  });

  it('gives internal entities no public API, page or tests, and mounts custom routes before generated ones', () => {
    expect(shopFiles.has('src/routes/sale-items.js')).toBe(false);
    expect(shopFiles.has('tests/sale-items.crud.test.js')).toBe(false);

    const index = shopFiles.get('src/routes/index.js') as string;
    expect(index).not.toContain('sale-items');
    expect(index.indexOf("router.use('/sales', custom1)")).toBeLessThan(index.indexOf("router.use('/products'"));
  });

  it('disables the generated routes a custom endpoint replaces', () => {
    const sales = shopFiles.get('src/routes/sales.js') as string;
    const tests = shopFiles.get('tests/sales.crud.test.js') as string;

    expect(sales).toContain("disable: ['create']");
    expect(tests).not.toContain('creates a record');
    expect(tests).toContain('lists records');
  });

  it('applies the entity access rules to routes, pages and tests', () => {
    expect(shopFiles.get('src/routes/products.js')).toContain("access: { read: ['*'], write: ['admin'] }");
    expect(shopFiles.get('public/js/pages/products.js')).toContain("writeRoles: ['admin']");
    expect(shopFiles.get('tests/products.crud.test.js')).toContain("does not let the kasir role change data");
  });

  it('validates input with Indonesian messages and sensible limits', () => {
    const products = shopFiles.get('src/routes/products.js') as string;

    expect(products).toContain("'Wajib diisi'");
    expect(products).toContain("min(0, 'Tidak boleh kurang dari 0')");
    expect(products).toContain("z.enum(['aktif', 'nonaktif']");
    expect(simpleFiles.get('src/routes/customers.js')).toContain("email('Format email belum benar')");
    expect(simpleFiles.get('src/routes/customers.js')).toContain('regex(');
    expect(simpleFiles.get('src/routes/visits.js')).toContain('max(2000');
  });

  it('builds navigation from the spec, adding user management only for multi-role apps', () => {
    const config = shopFiles.get('public/js/app.config.js') as string;

    expect(config).toContain("path: '/pos'");
    expect(config).toContain("module: '/js/pages/home.js'");
    expect(config).toContain("path: '/users'");
    expect(config).toContain("path: '/account'");
    expect(simpleFiles.get('public/js/app.config.js')).not.toContain('/users');
  });

  it('turns design choices into different looks for different clients', () => {
    expect(shopFiles.get('public/index.html')).toContain('data-nav="sidebar"');
    expect(simpleFiles.get('public/index.html')).toContain('data-nav="topbar"');
    expect(shopFiles.get('public/css/tokens.css')).toContain('--accent: #b4451f');
    expect(shopFiles.get('public/css/tokens.css')).toContain('color-scheme: light');
    expect(simpleFiles.get('public/css/tokens.css')).toContain('color-scheme: dark');
    expect(simpleFiles.get('public/css/tokens.css')).toContain('--radius-md: 4px');
    expect(shopFiles.get('public/css/tokens.css')).not.toEqual(simpleFiles.get('public/css/tokens.css'));
    expect(shopFiles.get('public/favicon.svg')).toContain('>T<');
  });

  it('escapes the app name in the page shell', () => {
    const spec = shopSpec();
    spec.title = 'Toko <script>alert(1)</script> "Maju"';

    const html = byPath(renderApp(spec).files).get('public/index.html') as string;

    expect(html).not.toContain('<script>alert');
    expect(html).toContain('&lt;script&gt;');
  });

  it('documents the app it built', () => {
    const readme = shopFiles.get('README.md') as string;

    expect(readme).toContain('# Toko Berkah Jaya');
    expect(readme).toContain('/api/products');
    expect(readme).toContain('POST');
    expect(readme).toContain('/api/reports/summary');
    expect(readme).toContain('npm run restore');
    expect(readme).toContain('SEED_ADMIN_PASSWORD');
  });

  it('never ships the old fixed look to every client', () => {
    const everything = [...shopFiles.values(), ...simpleFiles.values()].join('\n');

    expect(everything).not.toMatch(/Parchment|#fcfbf8|Ethermind/i);
    expect(everything).not.toMatch(/innerHTML\s*=|alert\(|TODO|lorem ipsum/i);
  });
});
