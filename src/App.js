import React, { useState } from 'react';
import data from './data';
import List from './List';
import '../src/index.css';
function App() {
  const [mhs, setMhs] = useState(data)
  return (
    <>
      <section className='app'>
        <h3
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          Data {mhs.length} Mahasiswa
        </h3>
        <List mhs={mhs} />
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
          <button onClick={() => setMhs([])} style={{
            padding: ".5rem 2rem",
            borderRadius: "10px",
            width: "30%",
            cursor: "pointer",
            margin: "30px 0"
          }}>Clear All</button>
        </div>
      </section>
    </>
  )
}

export default App;
