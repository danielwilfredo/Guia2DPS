import React, {useState} from 'react';

const Mercado = () => {

    //creando el state
    const [compra, setCompra]=useState('');
    const [cantidad, setCantidad]=useState(0);

//cuando el usuario agrega un gasto
const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || compra.trim() === "") {
     alert("hubo un error")
      return;
    }
    
    //construir el gasto
    const gasto = {
        compra,
      cantidad,
    };

 

    //resetear el form
    setCompra('');
    setCantidad(0);

  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>

    
        <label>Nombre producto</label>
        <input
          type="text"
         placeholder="Ejemplo: Transporte"
          value={compra}
          onChange={(e) => setCompra(e.target.value)}
        />
        <label>Cantidad gasto</label>
        <input
          type="number"
          placeholder="Ejemplo: 300$"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          value="Agregar Gasto"
        />

    </form>
  );
};
export default Mercado;