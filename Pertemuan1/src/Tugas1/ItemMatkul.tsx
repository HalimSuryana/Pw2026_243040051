type ItemMatkulProps = {
  kode: string;
  nama: string;
  sks: number;
  hari: string;
};

function ItemMatkul({ kode, nama, sks, hari }: ItemMatkulProps) {
  return (
    <article className="course-item">
      <div>
        <strong className="course-code">{kode}</strong>
        {' - '}
        {nama}
        <div className="course-day">
          Jadwal: {hari}
        </div>
      </div>

      <span className="course-credits">{sks} SKS</span>
    </article>
  );
}

export default ItemMatkul;