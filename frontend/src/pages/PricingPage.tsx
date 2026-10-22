import React from 'react';
import { MODEL_CHOICES, TIER_LABEL } from '../data/models';
import { Notice } from '../components/ui';

interface PricingPageProps {
  onStart: () => void;
}

const BASIC_ROWS: Array<[string, string]> = [
  ['Membuat aplikasi', 'Gratis'],
  ['Pratinjau yang bisa dicoba', 'Gratis'],
  ['Link live untuk pelanggan Anda', 'tidak termasuk'],
  ['Unduh kode sumber (.zip)', 'Rp 35.000'],
];

const PRO_ROWS: Array<[string, string]> = [
  ['Membuat aplikasi', 'termasuk'],
  ['Pratinjau yang bisa dicoba', 'termasuk'],
  ['Link live untuk pelanggan Anda', 'termasuk'],
  ['Unduh kode sumber (.zip)', 'termasuk'],
];

export const PricingPage: React.FC<PricingPageProps> = ({ onStart }) => {
  const enginesOf = (tier: 'basic' | 'pro') => MODEL_CHOICES.filter((m) => m.tier === tier);

  return (
    <>
      <header className="container page-head">
        <h1>Harga per aplikasi, tanpa langganan</h1>
        <p className="lead">Anda membayar untuk aplikasi yang jadi, bukan per bulan. Ada dua paket, dibedakan oleh mesin AI yang menulis kodenya.</p>
        <div style={{ marginTop: 'var(--space-5)', maxWidth: '40rem' }}>
          <Notice title="Bayar setelah aplikasi selesai, lewat QRIS">
            Membuat dan mencoba aplikasi tidak dipungut biaya. Yang berbayar adalah unduhan kode sumber. Anda memindai QRIS dari bank atau dompet digital apa pun, dan nominalnya ditambah kode unik 1 sampai 999 rupiah agar pembayaran Anda bisa dikenali. Belum ada konfirmasi otomatis dari bank: tim kami mencocokkannya secara manual, jadi unduhan terbuka setelah itu.
          </Notice>
        </div>
      </header>

      <section className="container section--tight" aria-labelledby="judul-paket">
        <h2 id="judul-paket" className="sr-only">
          Paket
        </h2>
        <div className="plans">
          <article className="plan" aria-labelledby="paket-basic">
            <div className="plan__head">
              <h3 id="paket-basic" style={{ fontSize: 'var(--text-2xl)' }}>
                Basic
              </h3>
              <p className="plan__price num">Gratis</p>
              <p className="muted">Untuk mencoba ide. Aplikasi bisa dibuat dan dicoba tanpa biaya; kode sumbernya dibayar bila Anda ingin membawanya pulang.</p>
            </div>
            <ul className="leader-list">
              {BASIC_ROWS.map(([name, value]) => (
                <li key={name} className="leader">
                  <span>{name}</span>
                  <span className="num">{value}</span>
                </li>
              ))}
            </ul>
            <div className="plan__engines">
              <p className="label">Mesin AI di paket ini</p>
              {enginesOf('basic').map((m) => (
                <p key={m.id} className="small muted">
                  {m.name}
                </p>
              ))}
            </div>
            <button type="button" className="btn btn--secondary" onClick={onStart}>
              Mulai dengan Basic
            </button>
          </article>

          <article className="plan plan--pro" aria-labelledby="paket-pro">
            <div className="plan__head">
              <h3 id="paket-pro" style={{ fontSize: 'var(--text-2xl)' }}>
                Pro
              </h3>
              <p className="plan__price num">Rp 100.000</p>
              <p className="muted">Per aplikasi. Untuk usaha yang akan memakainya sungguhan: mesin AI lebih besar, dan kode sumber sudah termasuk.</p>
            </div>
            <ul className="leader-list">
              {PRO_ROWS.map(([name, value]) => (
                <li key={name} className="leader">
                  <span>{name}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="plan__engines">
              <p className="label">Mesin AI di paket ini</p>
              {enginesOf('pro').map((m) => (
                <p key={m.id} className="small muted">
                  {m.name}
                </p>
              ))}
            </div>
            <button type="button" className="btn" onClick={onStart}>
              Mulai dengan Pro
            </button>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="judul-mesin">
        <div className="container">
          <div className="section-head">
            <h2 id="judul-mesin">Mesin AI yang bisa Anda pilih</h2>
            <p className="lead">Pilihan ini muncul di kotak cerita pada halaman awal. Kecepatan dan ketelitian berbeda, dan Anda boleh berganti untuk proyek berikutnya.</p>
          </div>
          <ul className="model-list">
            {MODEL_CHOICES.map((m) => (
              <li key={m.id} className="model-row">
                <strong>{m.name}</strong>
                <span className={`tag${m.tier === 'pro' ? ' tag--accent' : ''}`}>{TIER_LABEL[m.tier]}</span>
                <span className="muted">{m.note}</span>
              </li>
            ))}
          </ul>
          <p className="small muted" style={{ marginTop: 'var(--space-4)' }}>
            Bila satu mesin sedang lambat atau menolak permintaan, build otomatis dilanjutkan oleh mesin cadangan.
          </p>
        </div>
      </section>

      <section className="section section--warm" aria-labelledby="judul-catatan">
        <div className="container">
          <h2 id="judul-catatan" className="sr-only">
            Yang perlu Anda tahu sebelum memesan
          </h2>
          <div className="notes">
            <div>
              <h3>Bila build tidak lolos</h3>
              <p className="muted">
                Hasilnya ditandai "Perlu ditinjau", bukan berhasil. Tombol Lanjutkan menjalankan perbaikan dan pemeriksaan lagi pada kode yang sudah ditulis, tanpa menulis ulang dari awal.
              </p>
            </div>
            <div>
              <h3>Link live beristirahat saat sepi</h3>
              <p className="muted">
                Aplikasi live yang lama tidak dibuka dimatikan sementara, lalu menyala lagi dalam beberapa detik saat ada yang membukanya. Datanya aman dan terpisah dari pratinjau, jadi membangun ulang atau merevisi tidak menghapus isinya.
              </p>
            </div>
            <div>
              <h3>Kode itu milik Anda</h3>
              <p className="muted">Kode sumber lengkap dan databasenya bisa diunduh sebagai .zip dan dijalankan di server mana pun yang menjalankan Node.js.</p>
            </div>
            <div>
              <h3>Ada hal yang belum bisa</h3>
              <p className="muted">
                Unggah foto atau dokumen, rekam suara, kirim email atau WhatsApp, dan pembayaran online di dalam aplikasi yang dibuat belum didukung. Daftar lengkapnya ada di bagian bawah halaman awal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Mulai">
        <div className="container row-between">
          <p className="lead" style={{ color: 'var(--ink)' }}>
            Belum yakin paket mana? Mulai bercerita dulu, pilihan mesin bisa diganti kapan saja sebelum build.
          </p>
          <button type="button" className="btn" onClick={onStart}>
            Tulis cerita usaha Anda
          </button>
        </div>
      </section>
    </>
  );
};
