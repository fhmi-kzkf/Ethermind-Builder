import React from 'react';
import { Notice } from '../components/ui';

interface LegalPageProps {
  kind: 'terms' | 'privacy';
}

const Draft: React.FC = () => (
  <div className="draft-note" style={{ maxWidth: '40rem', marginTop: 'var(--space-5)' }}>
    <Notice tone="warn" title="Draf, belum ditinjau konsultan hukum">
      Teks ini ditulis dari cara platform bekerja sekarang. Sebelum layanan dibuka untuk umum, teks ini perlu ditinjau dan dilengkapi.
    </Notice>
  </div>
);

const Terms: React.FC = () => (
  <article className="prose">
    <h2>Apa yang dilakukan layanan ini</h2>
    <p>Ethermind membantu Anda menyusun rancangan aplikasi dari percakapan, lalu menulis, menjalankan, dan memeriksa aplikasi web berdasarkan rancangan yang Anda setujui.</p>

    <h2>Kode itu milik Anda</h2>
    <p>Kode sumber dan database aplikasi yang dibuat untuk Anda adalah milik Anda. Anda dapat mengunduhnya sebagai berkas .zip dan menjalankannya di tempat lain.</p>

    <h2>Hasil AI bisa salah</h2>
    <p>Kode ditulis oleh model AI dan dapat mengandung kesalahan. Platform memeriksa setiap build, tetapi pemeriksaan itu mengurangi risiko dan tidak menghilangkannya. Ujilah aplikasi dengan data tiruan dan tinjau hasilnya sebelum dipakai untuk usaha atau data pelanggan yang sebenarnya.</p>

    <h2>Tanpa jaminan</h2>
    <p>Layanan diberikan apa adanya. Kami tidak menjamin aplikasi bebas dari kesalahan, selalu tersedia, atau cocok untuk keperluan tertentu. Anda bertanggung jawab atas penggunaan aplikasi yang Anda jalankan.</p>

    <h2>Harga dan pembayaran</h2>
    <p>Membuat dan mencoba aplikasi tidak dipungut biaya. Unduhan kode sumber dibayar setelah build selesai, lewat QRIS, sesuai harga di halaman Harga. Nominal yang Anda bayar ditambah kode unik 1 sampai 999 rupiah untuk mengenali pembayaran Anda.</p>
    <p>Pembayaran dikonfirmasi secara manual oleh operator setelah dana terlihat masuk, bukan otomatis oleh bank, sehingga unduhan terbuka setelah konfirmasi itu. Kami menyimpan catatan pesanan (proyek, nominal, dan waktu), bukan data rekening atau dompet digital Anda. Harga dapat berubah; pesanan yang sudah dibayar tidak terpengaruh.</p>

    <h2>Penggunaan yang tidak diperbolehkan</h2>
    <ul>
      <li>Memakai layanan untuk kegiatan yang melanggar hukum.</li>
      <li>Mencoba menembus akun, proyek, atau data milik pengguna lain.</li>
      <li>Membebani layanan secara berlebihan atau mengganggu pengguna lain.</li>
    </ul>
    <p>Kami dapat membatasi atau menghentikan akun yang menyalahgunakan layanan.</p>

    <h2>Perubahan</h2>
    <p>Syarat ini dapat berubah seiring layanan berkembang. Perubahan yang berarti akan diumumkan di halaman ini.</p>
  </article>
);

const Privacy: React.FC = () => (
  <article className="prose">
    <h2>Data yang kami simpan</h2>
    <ul>
      <li>Alamat email dan hash kata sandi (kata sandi asli tidak disimpan).</li>
      <li>Proyek Anda: nama, percakapan dengan asisten, rancangan, dan riwayat build.</li>
      <li>Kode aplikasi yang dibuat dan database aplikasi itu.</li>
      <li>Catatan pemakaian: model yang dipakai, jumlah token, dan perkiraan biaya tiap build.</li>
    </ul>
    <p>Data ini dipakai untuk menjalankan layanan: menampilkan proyek Anda, melanjutkan percakapan, membangun dan menjalankan aplikasi, serta menghitung pemakaian.</p>

    <h2>Yang dikirim ke penyedia AI</h2>
    <p>Untuk menyusun rancangan dan menulis kode, teks percakapan, gambar yang dilampirkan, rancangan, dan potongan kode dikirim ke penyedia model AI, yaitu NVIDIA NIM dan Groq. Kebijakan data masing-masing penyedia berlaku atas kiriman itu. Jangan menulis kata sandi atau data pelanggan sungguhan di dalam chat. Jangan melampirkan gambar yang memuat data pribadi.</p>

    <h2>Yang tidak kami lakukan</h2>
    <ul>
      <li>Kami tidak menjual data Anda.</li>
      <li>Proyek Anda tidak dapat dibuka oleh pengguna lain. Operator dan administrator platform dapat melihat proyek untuk keperluan pengelolaan layanan.</li>
    </ul>

    <h2>Menghapus data</h2>
    <p>Menghapus proyek dari halaman Proyek saya menghentikan pratinjaunya dan menghapus folder aplikasi beserta databasenya dari platform. Untuk menghapus akun, hubungi kami lewat alamat di bawah.</p>

    <h2>Kontak</h2>
    <p>[alamat kontak akan ditambahkan]</p>
  </article>
);

export const LegalPage: React.FC<LegalPageProps> = ({ kind }) => (
  <>
    <header className="container page-head">
      <h1>{kind === 'terms' ? 'Syarat layanan' : 'Kebijakan privasi'}</h1>
      <Draft />
    </header>
    <section className="container section--tight">{kind === 'terms' ? <Terms /> : <Privacy />}</section>
  </>
);
