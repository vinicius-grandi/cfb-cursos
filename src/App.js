import './App.css'

import { useState } from 'react'

function App() {

  const [echeckbox, setEcheckbox] = useState(false)
  const [cb, setCb] = useState({opt1:false, opt2: false, opt3:false})

  const carros = [
    {categoria:'Esporte', preco:110000, modelo:'Golf GTI',},
    {categoria:'Esporte', preco:1210000, modelo:'Camaro',},
    {categoria:'SUV', preco:312100, modelo:'HRV',},
    {categoria:'SUV', preco:42332, modelo:'T-Cross',},
    {categoria:'Utilitario', preco:323432, modelo:'Hillux',},
    {categoria:'Utilitario', preco:202404, modelo:'Ranger',},
  ]

  const linhas = (cat = '') => {
    const li = []
    const filtro = []

    // eslint-disable-next-line array-callback-return
    carros.forEach(e => {
      if(e.categoria === cat) {
        filtro.push(
          <tbody>
            <tr>
              <td>{e.categoria}</td>
              <td>R${e.preco}</td>
              <td>{e.modelo}</td>
            </tr>
          </tbody>
        )
      } else {
        li.push(
          <tbody>
            <tr>
              <td>{e.categoria}</td>
              <td>R${e.preco}</td>
              <td>{e.modelo}</td>
            </tr>
          </tbody>
        )
      }
    })
    if (cat !== '') {
      return filtro
    }
    return li
  }

  const TabelaCarros = cat => {
    return (
      <table>
        <thead>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
        </thead>
        {linhas(cat)}
      </table>
    )
  }


  return (
    <>
      {(!echeckbox)?TabelaCarros():TabelaCarros(echeckbox.valor)}
      <fieldset>
        <legend>Filtros</legend>
        <label>
        <input type="checkbox" checked={cb.opt1} onClick={e => 
          {
            if(e.target.checked === false) { 
              cb.opt1 = false
              setEcheckbox(false)
            }
            else {
            cb.opt1 = true
            cb.opt2 = false
            cb.opt3 = false

            setEcheckbox({
            valor:e.target.value, checked:e.target.checked
          })}}} name='cb' value='Esporte'/> 
        Carro Esporte 
        </label>
        <label> 
        <input type="checkbox" checked={cb.opt2} onClick={e => 
          {
            if(e.target.checked === false) { 
              cb.opt2 = false
              setEcheckbox(false)
            }
            else {
            cb.opt2 = true
            cb.opt1 = false
            cb.opt3 = false
            
            setEcheckbox({
            valor:e.target.value, checked:e.target.op3
          })}}} name='cb' value='SUV' />
        SUV 
        </label>
        <label > 
        <input type="checkbox" checked={cb.opt3}onClick={e => 
          {
            if(e.target.checked === false) { 
              cb.opt3 = false
              setEcheckbox(false)
            }
            else {
            cb.opt3 = true
            cb.opt1 = false
            cb.opt2 = false
            
            setEcheckbox({
            valor:e.target.value, checked:e.target.checked
          })}}} name='cb' value='Utilitario' />
        Utilitário 
        </label>
      </fieldset>
      {console.log(echeckbox)}
    </>
  );
}

export default App;
