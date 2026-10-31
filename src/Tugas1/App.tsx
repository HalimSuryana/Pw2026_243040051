import KartuProfil from '../kartuprofil';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';
import './App.css';

const daftarPraktikum = [
  {
    id: 101,
    kode: 'IF211',
    nama: 'Pemrograman Web',
    sks: 3,
    hari: 'Senin'
  },
  {
    id: 102,
    kode: 'IF212',
    nama: 'Sistem Basis Data',
    sks: 3,
    hari: 'Rabu'
  },
  {
    id: 103,
    kode: 'IF213',
    nama: 'Rekayasa Perangkat Lunak',
    sks: 3,
    hari: 'Kamis'
  },
  {
    id: 104,
    kode: 'IF214',
    nama: 'Arsitektur Sistem Terdistribusi',
    sks: 2,
    hari: 'Jumat'
  }
];

const daftarSkill = [
  { id: 1, namaSkill: 'HTML', level: 'Menengah' },
  { id: 2, namaSkill: 'CSS', level: 'Menengah' },
  { id: 3, namaSkill: 'JavaScript', level: 'Pemula' },
  { id: 4, namaSkill: 'React JS', level: 'Pemula' },
  { id: 5, namaSkill: 'PHP', level: 'Menengah' }
] as const;

const daftarProyek = [
  {
    id: 1,
    judul: 'Klinik Harmoni',
    deskripsi: 'Aplikasi pengelolaan data pasien dan reservasi klinik.',
    teknologi: ['PHP', 'MySQL']
  },
  {
    id: 2,
    judul: 'Sistem Reservasi Hotel',
    deskripsi: 'Sistem pengelolaan kamar, tamu, dan pembayaran hotel.',
    teknologi: ['SQL Server', 'Database']
  },
  {
    id: 3,
    judul: 'Koperasi Digital',
    deskripsi: 'Aplikasi pengelolaan anggota, simpanan, dan hasil panen.',
    teknologi: ['Java', 'Swing']
  },
  {
    id: 4,
    judul: 'Gema Nusantara',
    deskripsi: 'Aplikasi pengenalan alat musik tradisional Indonesia.',
    teknologi: ['Java', 'Android']
  }
];

function App() {
  const notifikasiSapaan = () => {
    alert('Terima kasih sudah berkunjung ke portofolio Halim Suryana!');
  };

  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="brand" href="#beranda" aria-label="Halim Suryana, beranda">
          <span className="brand-mark">H</span>
          <span>halim<span className="brand-dot">.</span></span>
        </a>

        <nav className="main-nav" aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#proyek">Proyek</a>
          <a href="#praktikum">Praktikum</a>
        </nav>

        <a
          className="header-link"
          href="https://github.com/HalimSuryana"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="beranda">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> PORTOFOLIO MAHASISWA</p>
            <h1>Halo, saya <span>Halim Suryana.</span></h1>
            <p className="hero-description">
              Mahasiswa Teknik Informatika yang sedang belajar membangun
              pengalaman digital yang bermanfaat, satu proyek pada satu waktu.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyek">
                Jelajahi proyek <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-quiet" href="#tentang">Kenali saya</a>
            </div>
            <div className="hero-meta">
              <span>Teknik Informatika</span>
              <span className="meta-divider" aria-hidden="true" />
              <span>NPM 243040051</span>
            </div>
          </div>

          <aside className="hero-profile" aria-label="Ringkasan profil">
            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />
            <div className="profile-card-wrap">
              <p className="card-overline">PROFIL SINGKAT</p>
              <KartuProfil
                nama="Halim Suryana"
                npm="243040051"
                kelas="Teknik Informatika"
                status="Aktif"
              />
              <p className="profile-note">Terus belajar, terus bertumbuh.</p>
            </div>
          </aside>
        </section>

        <section className="content-section about-section" id="tentang">
          <div className="section-heading">
            <p className="section-kicker">01 / TENTANG SAYA</p>
            <h2>Belajar hari ini, berkarya esok hari.</h2>
          </div>
          <div className="about-copy">
            <p>
              Saya adalah mahasiswa Teknik Informatika yang tertarik pada
              pengembangan web dan pembuatan aplikasi. Portofolio ini merangkum
              beberapa proyek latihan, teknologi yang sedang saya pelajari, dan
              kegiatan praktikum semester ini.
            </p>
            <button className="button button-dark" onClick={notifikasiSapaan} type="button">
              Sapa saya <span aria-hidden="true">✳</span>
            </button>
          </div>
        </section>

        <section className="content-section" id="keahlian">
          <div className="section-heading">
            <p className="section-kicker">02 / YANG SAYA PELAJARI</p>
            <h2>Keahlian</h2>
            <p className="section-description">
              Teknologi yang sedang saya gunakan dan kembangkan.
            </p>
          </div>
          <div className="skills-grid">
            {daftarSkill.map((skill) => (
              <BadgeSkill
                key={skill.id}
                namaSkill={skill.namaSkill}
                level={skill.level}
              />
            ))}
          </div>
        </section>

        <section className="content-section projects-section" id="proyek">
          <div className="section-heading section-heading-row">
            <div>
              <p className="section-kicker">03 / PILIHAN KARYA</p>
              <h2>Proyek pilihan</h2>
              <p className="section-description">
                Beberapa ide dan aplikasi yang saya kerjakan selama belajar.
              </p>
            </div>
            <a
              className="text-link"
              href="https://github.com/HalimSuryana/Pw2026_243040051"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka repositori <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="projects-grid">
            {daftarProyek.map((proyek, index) => (
              <article className="project-card" key={proyek.id}>
                <div className="project-card-top">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <h3>{proyek.judul}</h3>
                <p>{proyek.deskripsi}</p>
                <div className="project-tags" aria-label="Teknologi yang digunakan">
                  {proyek.teknologi.map((tech) => (
                    <span className="project-tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section courses-section" id="praktikum">
          <div className="section-heading">
            <p className="section-kicker">04 / KEGIATAN KULIAH</p>
            <h2>Praktikum semester ini</h2>
            <p className="section-description">
              Mata kuliah yang menjadi bagian dari perjalanan belajar saya.
            </p>
          </div>
          <div className="courses-grid">
            {daftarPraktikum.map((matkul) => (
              <ItemMatkul key={matkul.id} {...matkul} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#beranda">
          <span className="brand-mark">H</span>
          <span>halim<span className="brand-dot">.</span></span>
        </a>
        <p>Dibuat dengan semangat belajar · 2026</p>
        <a href="https://github.com/HalimSuryana" target="_blank" rel="noopener noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
