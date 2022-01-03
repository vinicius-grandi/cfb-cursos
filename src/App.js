import { useState } from "react";

function App() {
  const [log, setLog] = useState(false)
  return (
    <>
      <h1>Condicionais</h1>
      <button onClick={() => setLog(!log)}>{log?'Logar':'Deslogar'}</button>
      <p>Você está {log?'Logado':'Deslogado'}</p>
    </>
  );
}

export default App;
