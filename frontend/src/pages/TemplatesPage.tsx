import React, { useId, useMemo, useState } from 'react';
import { DEFAULT_MODEL_ID, EXAMPLES, ExamplePrompt } from '../data/models';
import { EmptyState } from '../components/ui';

interface TemplatesPageProps {
  onSelectTemplate: (prompt: string, model?: string) => void;
}

interface Story extends ExamplePrompt {
  group: string;
}

const GROUP_OF: Record<string, string> = {
  warung: 'Toko dan penjualan',
  kasir: 'Toko dan penjualan',
  stok: 'Stok dan gudang',
  booking: 'Jasa dan jadwal',
  servis: 'Jasa dan jadwal',
  crm: 'Tim dan pelanggan',
};

// Every story asks only for what the generated apps can really do: records, forms, roles and reports.
const EXTRA: Story[] = [
  {
    id: 'pesanan',
    group: 'Toko dan penjualan',
    title: 'Pesanan pelanggan',
    summary: 'Daftar pelanggan, pesanan masuk, dan status pengerjaan tiap pesanan.',
    prompt: 'Buatkan aplikasi pesanan untuk usaha kue rumahan: daftar pelanggan, pesanan dengan tanggal ambil, daftar item dan total harga, dan status pesanan (baru, diproses, siap diambil, selesai).',
  },
  {
    id: 'pembelian',
    group: 'Stok dan gudang',
    title: 'Pembelian dari pemasok',
    summary: 'Pemasok, barang yang dibeli, dan utang yang belum dibayar.',
    prompt: 'Buatkan aplikasi pembelian barang dari pemasok: daftar pemasok, catatan pembelian dengan daftar barang dan harga, tanggal barang diterima, dan jumlah utang yang belum dilunasi per pemasok.',
  },
  {
    id: 'sewa',
    group: 'Jasa dan jadwal',
    title: 'Sewa alat',
    summary: 'Daftar alat, penyewa, tanggal sewa dan kembali, serta alat yang masih keluar.',
    prompt: 'Buatkan aplikasi penyewaan alat: daftar alat dengan tarif per hari, data penyewa, tanggal sewa dan tanggal kembali, status alat (tersedia, disewa), dan catatan biaya yang dicatat manual oleh petugas.',
  },
  {
    id: 'anggota',
    group: 'Tim dan pelanggan',
    title: 'Keanggotaan sanggar atau gym',
    summary: 'Anggota, paket, masa berlaku, dan pembayaran yang dicatat petugas.',
    prompt: 'Buatkan aplikasi keanggotaan untuk sanggar olahraga: daftar anggota, paket keanggotaan dengan harga, tanggal mulai dan berakhir, pembayaran yang dicatat manual oleh petugas, dan daftar anggota yang masa berlakunya hampir habis.',
  },
];

const STORIES: Story[] = [...EXAMPLES.map((e) => ({ ...e, group: GROUP_OF[e.id] ?? 'Lainnya' })), ...EXTRA];
const GROUPS = Array.from(new Set(STORIES.map((s) => s.group)));

export const TemplatesPage: React.FC<TemplatesPageProps> = ({ onSelectTemplate }) => {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState<string>('semua');
  const searchId = useId();

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return STORIES.filter((s) => (group === 'semua' || s.group === group) && (!q || `${s.title} ${s.summary} ${s.prompt}`.toLowerCase().includes(q)));
  }, [query, group]);

  const shownGroups = GROUPS.filter((g) => visible.some((s) => s.group === g));
  const reset = () => {
    setQuery('');
    setGroup('semua');
  };

  return (
    <>
      <header className="container page-head">
        <h1>Contoh cerita untuk memulai</h1>
        <p className="lead">Pilih cerita yang paling dekat dengan usaha Anda. Cerita langsung membuka percakapan baru, dan di sana Anda masih bisa mengubahnya sebelum rancangan dibuat.</p>
      </header>

      <section className="container section--tight" aria-label="Daftar contoh">
        <div className="filters">
          <div className="field">
            <label htmlFor={searchId}>Cari contoh</label>
            <input id={searchId} type="search" className="input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Misalnya: stok, jadwal, kasir" />
          </div>
          <div className="chips" style={{ justifyContent: 'flex-start' }} role="group" aria-label="Jenis usaha">
            {['semua', ...GROUPS].map((g) => (
              <button key={g} type="button" className="chip" aria-pressed={group === g} onClick={() => setGroup(g)}>
                {g === 'semua' ? 'Semua' : g}
              </button>
            ))}
          </div>
          <p className="small muted" role="status" aria-live="polite">
            {visible.length} cerita ditampilkan
          </p>
        </div>

        {visible.length === 0 ? (
          <EmptyState
            title="Tidak ada cerita yang cocok"
            action={
              <button type="button" className="btn btn--secondary" onClick={reset}>
                Hapus pencarian
              </button>
            }
          >
            Coba kata yang lebih umum, atau tulis cerita Anda sendiri dari halaman awal.
          </EmptyState>
        ) : (
          shownGroups.map((g) => (
            <section key={g} className="template-group" aria-labelledby={`grup-${GROUPS.indexOf(g)}`}>
              <h2 id={`grup-${GROUPS.indexOf(g)}`}>{g}</h2>
              <ul className="template-grid">
                {visible
                  .filter((s) => s.group === g)
                  .map((story) => (
                    <li key={story.id} className="template-card">
                      <h3>{story.title}</h3>
                      <p className="muted">{story.summary}</p>
                      <p className="template-card__prompt">{story.prompt}</p>
                      <button type="button" className="btn" onClick={() => onSelectTemplate(story.prompt, DEFAULT_MODEL_ID)}>
                        Pakai cerita ini
                      </button>
                    </li>
                  ))}
              </ul>
            </section>
          ))
        )}
      </section>
    </>
  );
};
