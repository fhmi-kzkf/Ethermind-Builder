import { parseSpec } from '../../src/services/spec/specSchema';

/** A shop with login, two roles, relations, a money field, fixed-choice fields and custom endpoints. */
export const shopSpecRaw = {
  title: 'Toko Berkah Jaya',
  summary: 'Kasir dan pengelolaan stok untuk toko kelontong keluarga.',
  targetUsers: ['Pemilik toko', 'Kasir'],
  features: [
    { name: 'Katalog produk', description: 'Kelola produk dan stok', priority: 'must_have', userRole: 'admin' },
    { name: 'Kasir', description: 'Catat penjualan dan kurangi stok otomatis', priority: 'must_have', userRole: 'kasir' },
  ],
  auth: { mode: 'multi_role', roles: ['admin', 'kasir'] },
  designGuidelines: {
    theme: 'light',
    personality: 'hangat, ramah, seperti toko pasar tradisional',
    palette: { background: '#fbf6ee', surface: '#fffdf9', text: '#2a1c12', mutedText: '#6a5646', border: '#e8dccb', accent: '#b4451f' },
    typography: 'humanist-sans',
    radius: 'soft',
    density: 'comfortable',
    navStyle: 'sidebar',
  },
  pages: [
    { route: '/', name: 'Ringkasan', purpose: 'Penjualan hari ini dan stok yang menipis', kind: 'dashboard', icon: 'chart' },
    { route: '/pos', name: 'Kasir', purpose: 'Catat penjualan', kind: 'custom', icon: 'cart' },
    { route: '/products', name: 'Produk', purpose: 'Kelola produk dan stok', kind: 'crud', entity: 'Product', icon: 'box', roles: ['admin'] },
    { route: '/categories', name: 'Kategori', purpose: 'Kelompokkan produk', kind: 'crud', entity: 'Category', icon: 'tag', roles: ['admin'] },
  ],
  databaseSchema: [
    {
      name: 'Category',
      label: 'Kategori',
      access: { read: ['*'], write: ['admin'] },
      fields: [
        { name: 'name', type: 'String', required: true, unique: true, label: 'Nama kategori' },
        { name: 'description', type: 'String', required: false, label: 'Keterangan' },
      ],
    },
    {
      name: 'Product',
      label: 'Produk',
      access: { read: ['*'], write: ['admin'] },
      fields: [
        { name: 'name', type: 'String', required: true, label: 'Nama produk' },
        { name: 'sku', type: 'String', required: true, unique: true, label: 'Kode produk' },
        { name: 'price', type: 'Int', required: true, format: 'rupiah', label: 'Harga jual' },
        { name: 'stock', type: 'Int', required: true, default: 0, label: 'Stok' },
        { name: 'status', type: 'String', required: true, values: ['aktif', 'nonaktif'], default: 'aktif', label: 'Status' },
        { name: 'categoryId', type: 'String', required: false, relation: 'Category', label: 'Kategori' },
      ],
    },
    {
      name: 'Sale',
      label: 'Penjualan',
      access: { read: ['*'], write: ['admin', 'kasir'] },
      fields: [
        { name: 'receiptNumber', type: 'String', required: true, unique: true, label: 'Nomor struk' },
        { name: 'total', type: 'Int', required: true, format: 'rupiah', label: 'Total' },
        { name: 'method', type: 'String', required: true, values: ['tunai', 'transfer', 'qris'], default: 'tunai', label: 'Metode bayar' },
        { name: 'paidAt', type: 'DateTime', required: true, default: 'now', label: 'Waktu bayar' },
      ],
    },
    {
      name: 'SaleItem',
      label: 'Item penjualan',
      internal: true,
      fields: [
        { name: 'saleId', type: 'String', required: true, relation: 'Sale', label: 'Penjualan' },
        { name: 'productId', type: 'String', required: true, relation: 'Product', label: 'Produk' },
        { name: 'quantity', type: 'Int', required: true, min: 1, label: 'Jumlah' },
        { name: 'unitPrice', type: 'Int', required: true, format: 'rupiah', label: 'Harga satuan' },
      ],
    },
  ],
  apiEndpoints: [
    { method: 'POST', path: '/api/sales', description: 'Catat penjualan beserta item dan kurangi stok dalam satu transaksi', overridesCrud: true, roles: ['admin', 'kasir'], request: '{ items: [{ productId: string, quantity: number }], method: tunai|transfer|qris }', response: '{ id: string, receiptNumber: string, total: number }' },
    { method: 'GET', path: '/api/reports/summary', description: 'Total penjualan hari ini, jumlah transaksi, dan produk yang stoknya menipis', roles: ['admin', 'kasir'], response: '{ todayTotal: number, transactionCount: number, lowStock: [{ id: string, name: string, stock: number }] }' },
  ],
};

/** A small app without login and without custom endpoints: the plainest possible build. */
export const simpleSpecRaw = {
  title: 'Catatan Pelanggan',
  summary: 'Daftar pelanggan dan catatan kunjungan.',
  auth: { mode: 'none' },
  designGuidelines: { theme: 'dark', personality: 'tenang dan fokus', typography: 'neutral-sans', radius: 'sharp', density: 'compact', navStyle: 'topbar' },
  pages: [
    { route: '/', name: 'Pelanggan', purpose: 'Daftar pelanggan', kind: 'crud', entity: 'Customer', icon: 'users' },
    { route: '/visits', name: 'Kunjungan', purpose: 'Catatan kunjungan', kind: 'crud', entity: 'Visit', icon: 'calendar' },
  ],
  databaseSchema: [
    {
      name: 'Customer',
      label: 'Pelanggan',
      fields: [
        { name: 'name', type: 'String', required: true, label: 'Nama' },
        { name: 'email', type: 'String', required: false, format: 'email', label: 'Email' },
        { name: 'phone', type: 'String', required: false, format: 'phone', label: 'Telepon' },
        { name: 'vip', type: 'Boolean', required: true, label: 'Pelanggan VIP' },
      ],
    },
    {
      name: 'Visit',
      label: 'Kunjungan',
      fields: [
        { name: 'customerId', type: 'String', required: true, relation: 'Customer', label: 'Pelanggan' },
        { name: 'visitedAt', type: 'DateTime', required: true, label: 'Waktu kunjungan' },
        { name: 'notes', type: 'String', required: false, format: 'longtext', label: 'Catatan' },
      ],
    },
  ],
  apiEndpoints: [],
};

export const shopSpec = () => parseSpec(shopSpecRaw);
export const simpleSpec = () => parseSpec(simpleSpecRaw);
