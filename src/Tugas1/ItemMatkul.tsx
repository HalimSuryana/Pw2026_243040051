type ItemMatkulProps = {
  kode: string;
  nama: string;
  sks: number;
  hari: string;
};

function ItemMatkul({ kode, nama, sks, hari }: ItemMatkulProps) {
  return (
    <div
      style={{
        padding: '15px 18px',
        backgroundColor: '#F8F9FA',
        borderLeft: '5px solid #1B365D',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px'
      }}
    >
      <div>
        <strong style={{ color: '#1B365D' }}>
          {kode}
        </strong>
        {' - '}
        {nama}

        <div style={{ fontSize: '12px', color: '#777', marginTop: '5px' }}>
          Jadwal: {hari}
        </div>
      </div>

      <span
        style={{
          backgroundColor: '#E1E4E8',
          padding: '5px 10px',
          borderRadius: '12px',
          fontSize: '13px'
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;