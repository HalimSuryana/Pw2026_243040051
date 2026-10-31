
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
    <div className="profile-card">
      <div className="profile-card-main">
        {fotoUrl ? (
          <img className="profile-avatar" src={fotoUrl} alt={`Foto ${nama}`} />
        ) : (
          <div className="profile-avatar profile-initials" aria-hidden="true">
            {nama.split(' ').map((bagian) => bagian[0]).join('')}
          </div>
        )}

        <div className="profile-details">
          <h3>{nama}</h3>
          <p><span>NPM</span><strong>{npm}</strong></p>
          <p><span>Program studi</span><strong>{kelas}</strong></p>
        </div>
      </div>

      <div className="profile-card-footer">
        <span className={`status-badge ${status === 'Aktif' ? 'is-active' : 'is-inactive'}`}>
          <span className="status-indicator" />
          {status}
        </span>
        <span className="profile-status-label">Status akademik</span>
      </div>
    </div>
  );
}

export default KartuProfil;
