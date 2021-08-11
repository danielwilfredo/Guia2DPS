import React, {useState} from 'react';
import Compras from "./Compras"

const Mercado = () => {

    //creando el state
    const [compra, setCompra]=useState({});
    const [cantidad, setCantidad]=useState({});


    //state de ayuda
    const [compras, setCompras]=useState({});
    const [cantidades, setCantidades]=useState({});

//cuando el usuario agrega un gasto
const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || compra.trim() === "") {
     alert("No deje cajas de texto vacias")
      return;
    }

    setCompras([...compras, compra]);
    setCantidades([...cantidades, cantidad])
    
    //resetear el form
    setCompra('');
    setCantidad(0);

  };


  
  const deleteCompra=indice=>{
    const newTodos=[...compras];
    newTodos.splice(indice,1);
    setCompras(newTodos);

}

  return (
<>
<form onSubmit={agregarGasto}>
      <h2>Lista de compras supermercado</h2>

    
        <label>Nombre producto</label>
        <input
          type="text"
         placeholder="Ejemplo: Transporte"
         name="compra"
          value={compra}
          onChange={(e) => setCompra(e.target.value)}
        />
        <label>Cantidad gasto</label>
        <input
          type="number"
          placeholder="Ejemplo: 300$"
          name="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          value="Agregar Gasto"
        />
    </form>
   
    {
       //   compras.map((value, index)=>(<Compras compras={value.compras} key={index} index={index} deleteCompra={deleteCompra}/>))
    } 
</>
  );
};
export default Mercado;