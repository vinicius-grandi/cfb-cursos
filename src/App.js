import { useState } from 'react'

function App() {
  const pessoa = {nome:'', idade:'', endereco:'',}
  const [form, setForm] = useState(pessoa)

  const handleFormChange = e => {
    switch(e.target.id) {
      case "tnome":
      setForm({...form, nome:e.target.value})
      break
      case "idade":
      setForm({...form, idade:e.target.value})
      break
      case "endereco":
      setForm({...form, endereco:e.target.value})
      break
      default:
        console.log('Useless Default')
  }}

  return (
    <>
      <p>
        <label htmlFor="tnome">Seu nome: </label>
        <input type="text" id='tnome' onChange={e => handleFormChange(e)}/>
        <br/>
        <label htmlFor="idade">Sua Idade: </label>
        <input type="number" id='idade' onChange={e => handleFormChange(e)}/>
        <br/>
        <label htmlFor="endereco">Endereço: </label>
        <input type="text" id='endereco' onChange={e => handleFormChange(e)}/>
        <br/>
        <button onClick={() => setForm(pessoa)}>Enviar</button>
      </p>
      <p>
        Nome: {form.nome} <br/>
        Idade: {form.idade} <br/>
        Endereço: {form.endereco}
      </p>
    </>
  );
}

export default App