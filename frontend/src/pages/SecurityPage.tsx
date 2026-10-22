import React from 'react';

const FACTS: Array<{ title: string; body: string }> = [
  {
    title: 'Proyek Anda hanya terlihat oleh Anda',
    body: 'Proyek, percakapan, rancangan, build, dan unduhan kode hanya bisa dibuka pemiliknya. Klien lain yang mencoba membuka alamat yang sama mendapat jawaban "tidak ditemukan", jadi keberadaannya pun tidak terlihat. Operator dan administrator platform dapat melihat semua proyek.',
  },
  {
    title: 'Akun dan sesi',
    body: 'Kata sandi disimpan sebagai hash bcrypt, bukan teks asli. Sesi memakai token bertanda tangan. Permintaan ke API dibatasi lajunya, dan pendaftaran umum tidak bisa membuat akun staf atau administrator.',
  },
  {
    title: 'Setiap aplikasi punya folder dan database sendiri',
    body: 'Aplikasi yang dibuat berjalan dari folder kerjanya sendiri dengan database SQLite sendiri, sehingga data satu proyek tidak bercampur dengan proyek lain. Saat ini aplikasi dijalankan sebagai proses lokal di server platform. Mode Docker untuk produksi sudah ditulis tetapi belum teruji dalam praktik.',
  },
  {
    title: 'Menghapus proyek',
    body: 'Menghapus proyek menghentikan pratinjaunya dan menghapus folder aplikasi beserta databasenya dari platform.',
  },
];

const CHECKS: Array<{ name: string; detail: string; when: 'before' | 'after' }> = [
  { name: 'Build', detail: 'Dependensi dipasang, skema database dan data contoh dijalankan, lalu aplikasi dimuat. Gagal di sini berarti aplikasi belum bisa menyala.', when: 'before' },
  { name: 'Lint', detail: 'Kode dibaca ESLint. Kesalahan nyata seperti sintaks rusak, nama tidak dikenal, atau HTML tidak aman menggagalkan pemeriksaan. Gaya penulisan hanya jadi peringatan.', when: 'before' },
  { name: 'Smoke test', detail: 'Aplikasi dijalankan sungguhan, lalu halaman dan API utamanya dicoba lewat HTTP, termasuk login bila aplikasi memakainya.', when: 'before' },
  { name: 'Tes otomatis', detail: 'Tes ditulis dan dijalankan dengan cakupan kode minimal 70% dan sedikitnya 8 tes. Tes yang gagal dicatat apa adanya.', when: 'after' },
  { name: 'Pemindaian keamanan', detail: 'Mencari rahasia yang tertanam di kode, pola injeksi, HTML tidak aman, dan memeriksa dependensi yang punya kerentanan diketahui dengan npm audit.', when: 'after' },
  { name: 'Checklist peluncuran', detail: 'Memeriksa file wajib dan meta viewport, variabel lingkungan yang dipakai kode tercantum di .env.example, setiap halaman punya tampilan, data contoh tidak membuat akun, dan skrip backup benar-benar menghasilkan cadangan.', when: 'after' },
  { name: 'Review kode oleh AI', detail: 'Model lain membaca kode dan mencari kesalahan logika serta pelanggaran kontrak antara halaman dan API.', when: 'after' },
];

const CAVEATS: string[] = [
  'Kode yang ditulis AI bisa mengandung kesalahan. Pemeriksaan di atas mengurangi risikonya, tidak menghilangkannya.',
  'Aplikasi yang dihasilkan belum diuji penetrasi oleh pihak ketiga.',
  'Platform ini tidak memiliki sertifikasi keamanan apa pun, dan tidak mengklaim kepatuhan terhadap standar tertentu.',
  'Ujilah aplikasi dengan data tiruan sebelum dipakai untuk data pelanggan yang sebenarnya.',
];

export const SecurityPage: React.FC = () => (
  <>
    <header className="container page-head">
      <h1>Keamanan: yang kami lakukan, dan yang tidak kami jamin</h1>
      <p className="lead">Halaman ini hanya memuat hal yang memang dikerjakan kode platform. Di bagian akhir ada daftar hal yang tidak bisa kami janjikan.</p>
    </header>

    <section className="container section--tight" aria-labelledby="judul-data">
      <h2 id="judul-data" className="sr-only">
        Data dan akun
      </h2>
      {FACTS.map((fact) => (
        <div key={fact.title} className="facts">
          <h3>{fact.title}</h3>
          <p className="muted">{fact.body}</p>
        </div>
      ))}
      <div className="facts">
        <h3>Yang dikirim ke penyedia AI</h3>
        <p className="muted">
          Untuk menyusun rancangan dan menulis kode, teks percakapan Anda, gambar yang Anda lampirkan, rancangan, dan potongan kode dikirim ke penyedia model AI, yaitu NVIDIA NIM dan Groq. Kebijakan data masing-masing penyedia berlaku atas kiriman itu, dan kami tidak dapat mengatur bagaimana mereka menyimpannya. Jangan menulis kata sandi atau data pelanggan sungguhan di dalam chat. Jangan melampirkan gambar yang memuat data pribadi.
        </p>
      </div>
    </section>

    <section className="section" aria-labelledby="judul-pemeriksaan">
      <div className="container">
        <div className="section-head">
          <h2 id="judul-pemeriksaan">Tujuh pemeriksaan sebelum aplikasi dinyatakan siap</h2>
          <p className="lead">
            Dalam mode cepat (bawaan), tiga pemeriksaan pertama berjalan sebelum aplikasi diserahkan, supaya Anda bisa mencobanya lebih dulu. Empat sisanya berjalan di latar belakang setelah itu, dan hasilnya dicatat apa adanya di halaman proyek. Mode ketat menunggu ketujuhnya lolos sebelum menyerahkan.
          </p>
        </div>
        <ol className="checks">
          {CHECKS.map((check) => (
            <li key={check.name} className="check">
              <h3>{check.name}</h3>
              <span className={`tag${check.when === 'before' ? ' tag--ok' : ''}`}>{check.when === 'before' ? 'Sebelum diserahkan' : 'Setelah diserahkan'}</span>
              <p>{check.detail}</p>
            </li>
          ))}
        </ol>
        <p style={{ marginTop: 'var(--space-5)', maxWidth: '44rem' }}>
          Build yang tidak lolos setelah perbaikan otomatis ditandai "Perlu ditinjau". Platform tidak pernah menyebutnya berhasil, dan Anda dapat memakai tombol Lanjutkan untuk mencoba memperbaikinya tanpa menulis ulang semuanya.
        </p>
      </div>
    </section>

    <section className="section section--tight" aria-labelledby="judul-batas-jamin">
      <div className="container">
        <div className="caveats card card--warm">
          <h2 id="judul-batas-jamin">Yang tidak kami jamin</h2>
          <ul>
            {CAVEATS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);
