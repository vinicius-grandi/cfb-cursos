import { useState } from "react";

function App() {

  const [nome, setNome] = useState('')
  const handleChangeNome = e => setNome(e.target.value)

  const [genero, setGenero] = useState('Helicóptero de Combate')

  return (
    <>
      <label>Digite seu nome: <input 
      type="text" 
      name="fnome" 
      onChange={e => handleChangeNome(e)} 
      placeholder="Insira aqui"/></label>
      <p>Seu nome é: {nome}</p>

      <label>
        <p>Selecione seu genêro:</p>
        <select value={genero} onChange={e => setGenero(e.target.value)}>
          <option value="Mulher">Mulher</option>
          <option value="Homem">Homem</option>
          <option value="Outro">Outro</option>
        </select>
      </label>
      <p>Gênero: {genero}</p>
    </>
  );
}

export default App;
