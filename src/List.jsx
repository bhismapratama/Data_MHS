import React from 'react';

const List = ({ mhs }) => {
  return (
    <>
      {mhs.map((kelas) => {
        const { id, nama, nrp, image } = kelas;
        return (
          <article key={id} className='ibadah'>
            <div className="img">
              <img src={image} alt={nama} />
            </div>
            <div>
              <h3>{nama}</h3>
              <h4>nomor NRP : {nrp}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
