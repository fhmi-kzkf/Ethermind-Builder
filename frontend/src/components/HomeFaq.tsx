import React from 'react';
import { supportLinks } from '../data/support';

interface Item {
  question: string;
  answer: React.ReactNode;
}

/**
 * Real hesitations of a small-business owner before trying, answered with what the platform does today,
 * including the unflattering parts. Each answer can be checked against the Keamanan and Harga pages.
 */
const ITEMS: Item[] = [
  {
    question: 'Apakah data saya aman?',
    answer: (
      <>
        Proyek, percakapan, dan kode Anda hanya bisa dibuka akun Anda. Teks percakapan dan gambar yang Anda lampirkan dikirim ke penyedia AI (NVIDIA NIM dan Groq) untuk menyusun rancangan dan kode, jadi jangan menulis kata sandi atau data pelanggan sungguhan di chat. Platform ini belum punya sertifikasi keamanan dan belum diuji penetrasi. Rinciannya ada di halaman{' '}
        <a className="link" href="#security">
          Keamanan
        </a>
        .
      </>
    ),
  },
  {
    question: 'Bagaimana jika kodenya error?',
    answer:
      'Setiap build diperiksa: dipasang, di-lint, dijalankan, dan dicoba lewat HTTP. Kalau ada yang gagal, perbaikan otomatis dicoba sampai tiga putaran. Bila masih gagal, hasilnya ditandai "Perlu ditinjau", tidak pernah ditulis berhasil, dan tombol Lanjutkan memperbaikinya tanpa menulis ulang semuanya. Kalau sebuah revisi merusak aplikasi, versi sebelumnya tetap utuh dan bisa dikembalikan dari Riwayat versi.',
  },
  {
    question: 'Berapa lama sampai aplikasinya bisa dicoba?',
    answer:
      'Biasanya beberapa menit. Dalam uji terakhir kami, satu aplikasi pencatatan warung selesai dibangun dalam sekitar lima menit sejak rancangan disetujui. Tes otomatis dan review AI menyusul di latar belakang. Waktunya bergantung pada mesin AI yang dipilih dan antrean, dan perbaikan otomatis bisa menambahnya. Tidak ada janji waktu yang pasti.',
  },
  {
    question: 'Apakah saya harus bisa membuat program?',
    answer:
      'Tidak. Anda bercerita dan memilih jawaban. Tapi hasil buatan AI bisa keliru, jadi coba dulu dengan data tiruan sebelum dipakai untuk data pelanggan sungguhan.',
  },
  {
    question: 'Apakah kodenya jadi milik saya?',
    answer: (
      <>
        Ya. Seluruh kode dan databasenya bisa diunduh sebagai .zip dan dijalankan di server mana pun yang memakai Node.js. Mencoba aplikasinya gratis; unduhan kodenya dibayar lewat QRIS setelah build selesai: Rp 35.000 di paket Basic, dan sudah termasuk di paket Pro (Rp 100.000 per aplikasi). Rinciannya ada di halaman{' '}
        <a className="link" href="#pricing">
          Harga
        </a>
        .
      </>
    ),
  },
  {
    question: 'Apakah pelanggan saya bisa memakai aplikasinya?',
    answer:
      'Bisa, lewat link live: alamat publik dengan nama pilihan Anda. Link live termasuk di paket Pro dan terbuka setelah pembayaran dikonfirmasi. Data aplikasi live terpisah dari pratinjau, jadi merevisi tidak menghapus isinya. Aplikasi yang lama tidak dibuka beristirahat dan menyala lagi dalam beberapa detik saat ada yang membukanya, jadi kunjungan pertama setelah sepi terasa lebih lambat.',
  },
  {
    question: 'Bisakah diubah setelah jadi?',
    answer:
      'Bisa. Tulis perubahannya di chat atau lewat Minta revisi, dan hanya bagian yang terpengaruh yang dikerjakan ulang. Setiap versi yang berhasil tersimpan dan bisa dikembalikan. Data yang Anda isi di versi lama tidak otomatis ikut ke versi hasil revisi.',
  },
];

export const HomeFaq: React.FC = () => {
  const contact = supportLinks();
  return (
    <section id="faq" className="section" aria-labelledby="judul-faq">
      <div className="container split">
        <div className="split__lead">
          <h2 id="judul-faq" className="split__title">
            Yang mungkin Anda ragukan
          </h2>
          <p className="lead">Jawabannya apa adanya, termasuk yang kurang menyenangkan.</p>
        </div>
        <div className="faq">
          {ITEMS.map((item) => (
            <details key={item.question} className="faq__item">
              <summary>{item.question}</summary>
              <p className="faq__answer">{item.answer}</p>
            </details>
          ))}
          <p className="faq__help muted">
            Macet saat membuat aplikasi? Tanyakan di chat di dalam proyek Anda: asisten menjawab soal aplikasi, status build, dan akun masuk.
            {contact.length > 0 && (
              <>
                {' '}
                Atau hubungi kami:{' '}
                {contact.map((link, index) => (
                  <React.Fragment key={link.href}>
                    {index > 0 && ', '}
                    <a className="link" href={link.href}>
                      {link.label}
                    </a>
                  </React.Fragment>
                ))}
                .
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
