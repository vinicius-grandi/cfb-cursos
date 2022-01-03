<<<<<<< Updated upstream

function App() {
  return (
    <>
    
=======
function App() {
  const carros = ['HB20', 'Palio Focus', 'Lambourguini','Ferrari', 'Lambreta de 4 rodas', 'Caminhão Pequeno']
  const listaCarros = carros.map((e, i) => (
    <ul><li id={i}>{e}</li></ul>
  ))

  return (
    <>
      <h1>Manipulando Listas</h1>
      <h2>Carros Brabos:</h2>
      {listaCarros}
>>>>>>> Stashed changes
    </>
  );
}

export default App;
