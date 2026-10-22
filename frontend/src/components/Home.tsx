import React, { useRef, useState } from 'react';
import { useHomeMotion } from '../motion/useHomeMotion';
import { EXAMPLES } from '../data/models';
import { Hero } from './Hero';
import { HomeFaq } from './HomeFaq';
import { DemoVideo } from './DemoVideo';
import { UsageProof } from './UsageProof';

interface HomeProps {
  onStartBuild: (prompt: string, selectedModel?: string) => void;
  busy?: boolean;
}

const STEPS: Array<{ title: string; body: string }> = [
  {
    title: 'Anda bercerita',
    body: 'Tulis usaha Anda dengan kata-kata sendiri, dan lampirkan screenshot atau sketsa tampilan yang Anda suka bila ada. Ethermind mengajukan dua sampai tiga pertanyaan pilihan, misalnya siapa saja yang memakai aplikasi dan apa yang paling sering dicatat. Anda baru lanjut setelah semuanya terjawab.',
  },
  {
    title: 'Anda menyetujui rancangan',
    body: 'Sebelum ada kode, Anda melihat halaman, data yang disimpan, dan peran pengguna. Ada yang tidak sesuai? Ubah lewat chat. Fitur yang belum bisa dibuat ditulis terang di bagian "Belum termasuk".',
  },
  {
    title: 'Aplikasi dibangun dan diperiksa',
    body: 'Beberapa agen menulis kode secara paralel, lalu aplikasi dijalankan sungguhan: dipasang, di-lint, dan dicoba lewat HTTP. Tes otomatis dan review AI menyusul di latar belakang, dan hasilnya dicatat apa adanya. Kalau perbaikan otomatis gagal, hasilnya ditandai "Perlu ditinjau", bukan berhasil.',
  },
  {
    title: 'Anda memakainya',
    body: 'Anda mendapat alamat untuk dicoba, akun administrator awal, dan, setelah membayar lewat QRIS, kode sumber lengkap dalam .zip. Mau ubah sesuatu? Tulis di chat, dan hanya bagian yang berubah yang dikerjakan ulang.',
  },
];

const RECEIVE: Array<[string, string]> = [
  ['Aplikasi web yang berjalan', 'bisa langsung dicoba'],
  ['Login dan peran pengguna', 'admin dan staf'],
  ['Database', 'SQLite, ada di folder proyek'],
  ['Halaman data (tambah, ubah, hapus)', 'dibuat dari rancangan'],
  ['Logika khusus usaha Anda', 'ditulis agen, bisa diubah'],
  ['Tes otomatis', 'ditulis dan dijalankan'],
  ['Kode sumber', 'unduh .zip, dibayar lewat QRIS'],
];

const LIMITS: string[] = [
  'Unggah foto, gambar, atau dokumen. Kolom tautan hanya menyimpan alamat teks.',
  'Merekam atau memutar suara.',
  'Mengirim email, SMS, atau WhatsApp.',
  'Pembayaran online dan sambungan ke bank atau marketplace.',
  'Berjalan tanpa internet atau sebagai aplikasi ponsel.',
];

export const Home: React.FC<HomeProps> = ({ onStartBuild, busy }) => {
  const [prompt, setPrompt] = useState('');
  const root = useRef<HTMLDivElement>(null);
  useHomeMotion(root);

  const fillFromExample = (text: string) => {
    setPrompt(text);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.setTimeout(() => document.getElementById('komposer')?.focus({ preventScroll: true }), 350);
  };

  return (
    <div ref={root}>
      <Hero prompt={prompt} onPromptChange={setPrompt} onStartBuild={onStartBuild} busy={busy} />

      <section className="container proof" aria-label="Contoh hasil">
        <figure className="shot">
          <DemoVideo describedBy="keterangan-tur" />
          <figcaption id="keterangan-tur" className="small muted">
            Rekaman layar asli, tanpa suara: dari cerita tentang warung sampai aplikasi yang berjalan. Isi tabel adalah data contoh yang ditulis AI.
          </figcaption>
        </figure>
        <UsageProof />
      </section>

      <section id="cara-kerja" className="section" aria-labelledby="judul-cara-kerja">
        <div className="container split">
          <div className="split__lead">
            <h2 id="judul-cara-kerja" className="split__title">
              Dari cerita sampai aplikasi yang bisa dipakai
            </h2>
            <p className="lead">Empat tahap. Di dua tahap pertama, tidak ada yang dibuat tanpa persetujuan Anda.</p>
          </div>
          <ol className="steps">
            {STEPS.map((step, index) => (
              <li key={step.title} className="step">
                <span className="step__n num" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="stack-sm">
                  <h3>{step.title}</h3>
                  <p className="muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contoh" className="section section--warm" aria-labelledby="judul-contoh">
        <div className="container">
          <div className="section-head">
            <h2 id="judul-contoh">Mulai dari salah satu cerita ini</h2>
            <p className="lead">Pilih yang paling dekat dengan usaha Anda. Teksnya akan muncul di kotak di atas dan bisa Anda ubah sebelum dikirim.</p>
          </div>
          <ul className="examples">
            {EXAMPLES.map((example) => (
              <li key={example.id} className="example">
                <div className="stack-sm">
                  <h3>{example.title}</h3>
                  <p className="muted">{example.summary}</p>
                </div>
                <button type="button" className="btn btn--secondary btn--sm" onClick={() => fillFromExample(example.prompt)}>
                  Pakai cerita ini
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="judul-isi">
        <div className="container">
         <div className="panel-dark receive">
          <div className="stack">
            <h2 id="judul-isi" className="split__title">
              Yang Anda bawa pulang
            </h2>
            <p className="lead">Bukan tampilan contoh. Ini aplikasi dengan data dan aturan yang bekerja, dan kodenya milik Anda.</p>
          </div>
          <ul className="leader-list receive__list">
            {RECEIVE.map(([name, value]) => (
              <li key={name} className="leader">
                <span>{name}</span>
                <span className="muted">{value}</span>
              </li>
            ))}
          </ul>
         </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="judul-batas">
        <div className="container">
          <div className="limits card card--warm">
            <div className="stack">
              <h2 id="judul-batas">Yang belum bisa kami buat</h2>
              <p className="lead">Lebih baik Anda tahu sekarang daripada kecewa nanti. Aplikasi yang dibuat belum dapat:</p>
            </div>
            <ul className="limits__list">
              {LIMITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="muted limits__foot">AI bisa salah. Karena itu setiap build diperiksa, dan yang tidak lolos berhenti di status "Perlu ditinjau" untuk Anda lanjutkan.</p>
          </div>
        </div>
      </section>

      <HomeFaq />

      <section className="section closing" aria-labelledby="judul-penutup">
        <div className="container closing__inner">
          <h2 id="judul-penutup" className="split__title">
            Siap bercerita tentang usaha Anda?
          </h2>
          <button
            type="button"
            className="btn"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.setTimeout(() => document.getElementById('komposer')?.focus({ preventScroll: true }), 350);
            }}
          >
            Tulis ceritanya
          </button>
        </div>
      </section>
    </div>
  );
};
