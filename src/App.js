<<<<<<< Updated upstream

function App() {
  return (
    <>
    
=======
import { useState } from 'react';

function App() {

  const [nome, setNome] = useState()

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  return (
    <>
      <p>Insira seu nome: <input type="text" name="nome" id="nome" onChange={e => {
        setNome(e.target.value)
        armazenar("nome", nome)
      }}/></p>
      <p>O nome é: {localStorage.getItem("nome")}</p>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
