const CATEGORIES = [
  { name: 'Sembako', description: 'Beras, minyak, gula, dan kebutuhan pokok' },
  { name: 'Minuman', description: 'Air mineral, teh, kopi, dan minuman kemasan' },
  { name: 'Jajanan', description: 'Biskuit, keripik, dan makanan ringan' },
  { name: 'Kebersihan', description: 'Sabun, deterjen, dan perlengkapan rumah' },
];

const PRODUCTS = [
  { sku: 'SMB-001', name: 'Beras Pandan Wangi 5 kg', price: 72000, stock: 18, category: 'Sembako' },
  { sku: 'SMB-002', name: 'Minyak Goreng 2 liter', price: 38500, stock: 24, category: 'Sembako' },
  { sku: 'SMB-003', name: 'Gula Pasir 1 kg', price: 17500, stock: 3, category: 'Sembako' },
  { sku: 'MNM-001', name: 'Teh Botol 450 ml', price: 5500, stock: 48, category: 'Minuman' },
  { sku: 'MNM-002', name: 'Air Mineral 600 ml', price: 3500, stock: 96, category: 'Minuman' },
  { sku: 'MNM-003', name: 'Kopi Sachet Susu', price: 2500, stock: 4, category: 'Minuman' },
  { sku: 'JJN-001', name: 'Biskuit Kelapa 250 g', price: 11000, stock: 30, category: 'Jajanan' },
  { sku: 'JJN-002', name: 'Keripik Singkong Balado', price: 9000, stock: 22, category: 'Jajanan' },
  { sku: 'KBR-001', name: 'Sabun Mandi Batang', price: 4500, stock: 40, category: 'Kebersihan' },
  { sku: 'KBR-002', name: 'Deterjen Bubuk 800 g', price: 21500, stock: 12, category: 'Kebersihan' },
];

export default async function seedDemoData(prisma) {
  if ((await prisma.product.count()) > 0) return;

  const categoryIds = new Map();
  for (const category of CATEGORIES) {
    const created = await prisma.category.upsert({ where: { name: category.name }, update: {}, create: category });
    categoryIds.set(category.name, created.id);
  }

  const products = [];
  for (const { category, ...product } of PRODUCTS) {
    products.push(await prisma.product.create({ data: { ...product, categoryId: categoryIds.get(category) } }));
  }

  // A few sales over the last days so the dashboard has history to show.
  const basket = [
    [products[3], 6],
    [products[4], 12],
    [products[6], 2],
  ];
  for (let daysAgo = 1; daysAgo <= 3; daysAgo += 1) {
    const paidAt = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
    const total = basket.reduce((sum, [product, quantity]) => sum + product.price * quantity, 0);
    const sale = await prisma.sale.create({
      data: { receiptNumber: `STR-DEMO-${String(daysAgo).padStart(4, '0')}`, total, method: daysAgo === 2 ? 'qris' : 'tunai', paidAt },
    });
    await prisma.saleItem.createMany({
      data: basket.map(([product, quantity]) => ({ saleId: sale.id, productId: product.id, quantity, unitPrice: product.price })),
    });
  }
}
