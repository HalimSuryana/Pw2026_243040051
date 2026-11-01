
type KartuProfilProps = {
  nama: string;
  npm: string;
  kelas: string;
  status: 'Aktif' | 'Tidak Aktif';
  fotoUrl?: string;
};

function KartuProfil({
  nama,
  npm,
  kelas,
  status,
  fotoUrl
}: KartuProfilProps) {
  return (
    <article className="profile-card">
      <div className="profile-details">
        <img
          src={fotoUrl || '/foto-halim.jpg'}
          alt={`Foto ${nama}`}
          className="profile-photo"
        />

        <div className="profile-copy">
          <h3>{nama}</h3>
          <p>
            NPM: <strong>{npm}</strong>
          </p>
          <p>Kelas: {kelas}</p>
        </div>
      </div>

      <div className="profile-status">
        <span className={`status-badge ${status === 'Aktif' ? 'is-active' : 'is-inactive'}`}>
          Status Akademik: {status}
        </span>
      </div>
    </article>
  );
}

export default KartuProfil;
