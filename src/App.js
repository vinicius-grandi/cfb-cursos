import { useState } from "react";
import Carro from "./componentes/Carro";

function App() {
  const [fator, setFator] = useState(0)
  return (
    <>    
      <h1>Componentes de Classe</h1>
      <Carro fator={Number(fator)}/>
      <p>Fator de velocidade<input type="number" onChange={(e) => setFator(e.target.value)}/></p>
    </>
  );
}

export default App;
