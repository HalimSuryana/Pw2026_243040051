import KartuProfil from '../kartuprofil';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';


function App() {
  // Data mata kuliah praktikum
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

  // Data keahlian mahasiswa
  const daftarSkill = [
    { id: 1, namaSkill: 'HTML', level: 'Menengah' },
    { id: 2, namaSkill: 'CSS', level: 'Menengah' },
    { id: 3, namaSkill: 'JavaScript', level: 'Pemula' },
    { id: 4, namaSkill: 'React JS', level: 'Pemula' },
    { id: 5, namaSkill: 'PHP', level: 'Menengah' }
  ] as const;

  // Data proyek portofolio
  const daftarProyek = [
    {
      id: 1,
      judul: 'Klinik Harmoni',
      deskripsi: 'Aplikasi pengelolaan data pasien dan reservasi klinik.',
      teknologi: ['PHP', 'MySQL'],
      github: 'https://github.com/'
    },
    {
      id: 2,
      judul: 'Sistem Reservasi Hotel',
      deskripsi: 'Sistem pengelolaan kamar, tamu, dan pembayaran hotel.',
      teknologi: ['SQL Server', 'Database'],
      github: 'https://github.com/'
    },
    {
      id: 3,
      judul: 'Koperasi Digital',
      deskripsi: 'Aplikasi pengelolaan anggota, simpanan, dan hasil panen.',
      teknologi: ['Java', 'Swing'],
      github: 'https://github.com/'
    },
    {
      id: 4,
      judul: 'Gema Nusantara',
      deskripsi: 'Aplikasi pengenalan alat musik tradisional Indonesia.',
      teknologi: ['Java', 'Android'],
      github: 'https://github.com/'
    }
  ];

  const notifikasiSapaan = () => {
    alert('Selamat datang di Portofolio Halim Suryana!');
  };

  return (
    <main className="page-shell">
      <header className="page-header">
        <h1>Showcase Portofolio</h1>
        <p>Mahasiswa Teknik Informatika · Praktikum Pemrograman Web</p>
      </header>

      <section className="content-section">
        <h2>Profil Mahasiswa</h2>
        <KartuProfil
          nama="Halim Suryana"
          npm="243040051"
          kelas="Teknik Informatika"
          status="Aktif"
        />
      </section>

      <section className="content-section">
        <h2>Keahlian Saya</h2>
        <div className="skill-list">
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.namaSkill}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Daftar Praktikum Semester</h2>
        <div className="course-list">
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>Showcase Portofolio Mini</h2>
        <div className="project-list">
          {daftarProyek.map((proyek) => (
            <article className="project-card" key={proyek.id}>
              <h3>{proyek.judul}</h3>
              <p>{proyek.deskripsi}</p>
              <div className="project-technologies">
                {proyek.teknologi.map((tech) => (
                  <span className="technology-tag" key={tech}>#{tech}</span>
                ))}
              </div>
              <a className="project-link" href={proyek.github} target="_blank" rel="noopener noreferrer">
                Lihat GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="interaction">
        <button className="welcome-button" onClick={notifikasiSapaan}>
          Uji Interaktivitas
        </button>
      </div>

      <footer className="page-footer">
        Praktikum Pemrograman Web · Modul 1 React JS
      </footer>
    </main>
  );
}

export default App;