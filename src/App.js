import Globais from "./componentes/Globais";
import { useState } from 'react'
import Info from "./componentes/Info";

function App() {
  const [ano, setAno] = useState(Globais.ano)

  const gravarAno = (e) => {
    Globais.ano = e
  }

  return (
    <>
      <p>Canal: {Globais.canal}</p>
      <p>Ano: {ano}</p>
      <p>Insira o ano: <input
         type="number"
         onChange={e => {
          setAno(e.target.value)
          gravarAno(e.target.value)
        }}/>
      </p>
      <Info />
    </>
  );
}

export default App;
