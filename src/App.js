<<<<<<< Updated upstream
=======
import { useEffect, useState, useRef } from "react";
>>>>>>> Stashed changes

function App() {
  const effectTimesCalled = useRef(0)

  useEffect(() => {
    ++effectTimesCalled.current
  })

  const [num, setNum] = useState(0) 

  return (
    <>
<<<<<<< Updated upstream
    
=======
      <button onClick={() => setNum(num + 2)}>Click-me</button>
      <p>O valor de clicks é o dobro do hook effect: {num}</p>
      <p>O hook foi chamado {effectTimesCalled.current}</p>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
