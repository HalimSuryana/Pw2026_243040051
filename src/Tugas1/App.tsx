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
    <div
      style={{
        maxWidth: '850px',
        margin: '40px auto',
        padding: '25px',
        fontFamily: 'Arial, sans-serif',
        color: '#333'
      }}
    >
      {/* Header */}
      <header
        style={{
          textAlign: 'center',
          marginBottom: '35px',
          padding: '25px',
          backgroundColor: '#1B365D',
          color: 'white',
          borderRadius: '12px'
        }}
      >
        <h1>Showcase Portofolio</h1>
        <p>Mahasiswa Teknik Informatika</p>
        <p>Praktikum Pemrograman Web - Modul 1</p>
      </header>

      {/* Profil Mahasiswa */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Profil Mahasiswa</h2>

        <KartuProfil
          nama="Halim Suryana"
          npm="243040051"
          kelas="Teknik Informatika"
          status="Aktif"
        />
      </section>

      {/* Keahlian */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Keahlian Saya</h2>

        <div>
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.namaSkill}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      {/* Daftar Mata Kuliah */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Daftar Praktikum Semester</h2>

        {daftarPraktikum.map((matkul) => (
          <ItemMatkul
            key={matkul.id}
            {...matkul}
          />
        ))}
      </section>

      {/* Portofolio */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Showcase Portofolio Mini</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px'
          }}
        >
          {daftarProyek.map((proyek) => (
            <div
              key={proyek.id}
              style={{
                padding: '20px',
                border: '1px solid #D0D7DE',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 3px 8px rgba(0,0,0,0.06)'
              }}
            >
              <h3 style={{ color: '#1B365D' }}>
                {proyek.judul}
              </h3>

              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {proyek.deskripsi}
              </p>

              <div style={{ marginBottom: '15px' }}>
                {proyek.teknologi.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#E8EEF5',
                      color: '#1B365D',
                      padding: '5px 9px',
                      borderRadius: '5px',
                      fontSize: '12px',
                      marginRight: '5px',
                      marginBottom: '5px'
                    }}
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              <a
                href={proyek.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '9px 14px',
                  backgroundColor: '#1B365D',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '13px'
                }}
              >
                Lihat GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Tombol Interaksi */}
      <div style={{ textAlign: 'center', marginTop: '35px' }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: '#1B365D',
            color: 'white',
            padding: '13px 25px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Uji Interaktivitas
        </button>
      </div>

      <footer
        style={{
          textAlign: 'center',
          marginTop: '35px',
          padding: '15px',
          borderTop: '1px solid #ddd',
          color: '#777',
          fontSize: '13px'
        }}
      >
        Praktikum Pemrograman Web - Modul 1 React JS
      </footer>
    </div>
  );
}

export default App;