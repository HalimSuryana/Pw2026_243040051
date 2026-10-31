type ItemMatkulProps = {
  kode: string;
  nama: string;
  sks: number;
  hari: string;
};

function ItemMatkul({ kode, nama, sks, hari }: ItemMatkulProps) {
  return (
    <article className="course-card">
      <div className="course-details">
        <span className="course-code">{kode}</span>
        <h3>{nama}</h3>
        <p>Jadwal praktikum · {hari}</p>
      </div>
      <span className="course-credits">{sks} SKS</span>
    </article>
  );
}

export default ItemMatkul;