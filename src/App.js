import Carro from './componentes/Carro.jsx'
import { useState } from 'react'

function App() {
  const [fator, setFator] = useState(0)
  const [carro, setCarro] = useState(true)

  return (
    <>    
      <h1>Componentes de Classe</h1>
      
      {carro ?
        <>
          <Carro fator={Number(fator)}/>
          <p>Fator de velocidade<input type="number" onChange={(e) => setFator(e.target.value)}/></p>
        </>
       : <p>F para o carrinho</p>}

      <p>Existência do Carro: <button onClick={() => setCarro(!carro)}>
        Sumir/Aparecer</button></p>
    </>
  );
}

export default App;
