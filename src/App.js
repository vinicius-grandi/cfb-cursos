import { useState } from 'react'

function App() {

  const [info, setInfo] = useState({peso:0, altura:0, resultado:0})

  return (
    <>
      <p><label htmlFor="peso">Informe seu peso: <input 
        type="number" 
        id="peso" 
        onChange={e => setInfo({...info, peso:e})}/></label></p>

      <p><label htmlFor="altura">Informe sua altura: <input 
        type="number" 
        id="altura" 
        onChange={e => setInfo({...info, altura:e})} /></label></p>
      <button>Calcular</button>

      <p>Resultado: {info.altura / info.peso}</p>

      <table>
        <thead>
          <th>Classificação</th>
          <th>IMC</th>
        </thead>
        <tbody>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
