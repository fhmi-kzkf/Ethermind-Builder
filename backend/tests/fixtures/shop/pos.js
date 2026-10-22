import { api } from '../lib/api.js';
import { clear, h } from '../lib/dom.js';
import { number, rupiah } from '../lib/format.js';
import { button, card, field, pageHeader, searchInput } from '../lib/ui.js';

const METHODS = [
  { value: 'tunai', label: 'Tunai' },
  { value: 'transfer', label: 'Transfer' },
  { value: 'qris', label: 'QRIS' },
];

export default {
  title: 'Kasir',

  async load() {
    const { data } = await api.get('/api/products', { limit: 100, status: 'aktif' });
    return data;
  },

  isEmpty: (products) => products.length === 0,
  empty: { title: 'Belum ada produk', message: 'Tambahkan produk di menu Produk sebelum mencatat penjualan.' },

  render(products, ctx) {
    const cart = new Map();
    let filter = '';

    const list = h('div', { class: 'stack' });
    const cartBody = h('div', { class: 'stack' });
    const totalLabel = h('p', { class: 'stat-value' });
    const method = field({ name: 'method', label: 'Metode bayar', type: 'select', required: true, options: METHODS });
    const pay = button({ label: 'Bayar', icon: 'check', variant: 'primary', onClick: () => checkout() });

    const total = () => Array.from(cart.values()).reduce((sum, line) => sum + line.product.price * line.quantity, 0);

    function change(product, delta) {
      const current = cart.get(product.id)?.quantity ?? 0;
      const next = Math.min(product.stock, Math.max(0, current + delta));
      if (next === 0) cart.delete(product.id);
      else cart.set(product.id, { product, quantity: next });
      draw();
    }

    function drawProducts() {
      const visible = products.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()));
      clear(list).append(
        ...(visible.length === 0
          ? [h('p', { class: 'muted' }, 'Tidak ada produk yang cocok.')]
          : visible.map((product) =>
              h(
                'div',
                { class: 'cluster' },
                h('div', null, h('strong', null, product.name), h('p', { class: 'muted' }, `${rupiah(product.price)} - stok ${number(product.stock)}`)),
                button({ ariaLabel: `Tambah ${product.name}`, icon: 'plus', disabled: product.stock === 0 || (cart.get(product.id)?.quantity ?? 0) >= product.stock, onClick: () => change(product, 1) })
              )
            ))
      );
    }

    function drawCart() {
      const lines = Array.from(cart.values());
      clear(cartBody).append(
        ...(lines.length === 0
          ? [h('p', { class: 'muted' }, 'Keranjang masih kosong. Pilih produk di sebelah kiri.')]
          : lines.map(({ product, quantity }) =>
              h(
                'div',
                { class: 'cluster' },
                h('span', null, `${product.name} x ${quantity}`),
                h('span', { class: 'muted' }, rupiah(product.price * quantity)),
                button({ ariaLabel: `Kurangi ${product.name}`, icon: 'x', variant: 'ghost', onClick: () => change(product, -1) })
              )
            ))
      );
      totalLabel.textContent = rupiah(total());
      pay.disabled = lines.length === 0;
    }

    function draw() {
      drawProducts();
      drawCart();
    }

    async function checkout() {
      const items = Array.from(cart.values()).map(({ product, quantity }) => ({ productId: product.id, quantity }));
      const result = await ctx.run(() => api.post('/api/sales', { items, method: method.getValue() }), { button: pay });
      if (!result) return;
      ctx.toast.success(`Penjualan ${result.data.receiptNumber} tercatat: ${rupiah(result.data.total)}`);
      ctx.reload();
    }

    draw();

    return h(
      'div',
      { class: 'page' },
      pageHeader({ title: 'Kasir', subtitle: 'Pilih produk, cek keranjang, lalu bayar.' }),
      h(
        'div',
        { class: 'grid-auto' },
        card({
          title: 'Produk',
          children: [searchInput({ placeholder: 'Cari produk...', onSearch: (value) => { filter = value; drawProducts(); } }), list],
        }),
        card({
          title: 'Keranjang',
          children: [cartBody, h('div', null, h('p', { class: 'muted' }, 'Total'), totalLabel), method.el, pay],
        })
      )
    );
  },
};
