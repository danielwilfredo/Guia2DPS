import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form"
import Mercado from "./components/Mercado"
const App = () => {

  const [tipo, setTipo] = useState(1);
  
  return (
<>
<div className="App">
      <div className="App-content">
        <h2>Seleccione una Opcion:</h2>
        <select onChange={e => setTipo(e.target.value)} value={tipo}>
          <option value={1}>Ejemplo Guia 2</option>
          <option value={2}>Ejercicio Complementario</option>
        </select>
        

        {(tipo==1) ? <Form/> : <Mercado/>}




      </div>
    </div>
</>


  );
};
export default App;
