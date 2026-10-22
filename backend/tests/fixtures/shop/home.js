import { api } from '../lib/api.js';
import { h } from '../lib/dom.js';
import { number, rupiah } from '../lib/format.js';
import { card, dataTable, pageHeader, statCard } from '../lib/ui.js';

export default {
  title: 'Ringkasan',

  async load() {
    const { data } = await api.get('/api/reports/summary');
    return data;
  },

  render(summary, ctx) {
    const average = summary.transactionCount > 0 ? Math.round(summary.todayTotal / summary.transactionCount) : 0;

    return h(
      'div',
      { class: 'page' },
      pageHeader({ title: 'Ringkasan hari ini', subtitle: `Selamat bekerja, ${ctx.user.name}.` }),
      h(
        'div',
        { class: 'stat-grid' },
        statCard({ label: 'Penjualan hari ini', value: rupiah(summary.todayTotal), tone: 'success' }),
        statCard({ label: 'Jumlah transaksi', value: number(summary.transactionCount) }),
        statCard({ label: 'Rata-rata per transaksi', value: rupiah(average) }),
        statCard({ label: 'Produk hampir habis', value: number(summary.lowStock.length), tone: summary.lowStock.length > 0 ? 'warning' : 'neutral' })
      ),
      card({
        title: 'Perlu dibeli ulang',
        children:
          summary.lowStock.length === 0
            ? [h('p', { class: 'muted' }, 'Semua stok masih aman.')]
            : [
                dataTable({
                  caption: 'Produk dengan stok menipis',
                  columns: [
                    { key: 'name', label: 'Produk' },
                    { key: 'stock', label: 'Sisa stok', align: 'end', render: (row) => number(row.stock) },
                  ],
                  rows: summary.lowStock,
                }),
              ],
      })
    );
  },
};
