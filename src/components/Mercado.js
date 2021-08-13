import React, {useState} from 'react';
import Compras from "./Compras"

const Mercado = () => {

    //creando el state
    const [producto, setProducto]=useState('');
    const [cantidad, setCantidad]=useState(0);
    //state de ayuda
    const [lista, setLista]=useState([]);




//cuando el usuario agrega un gasto
const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || producto.trim() === "") {
     alert("No deje cajas de texto vacias")
      return;
    }

    //armar la lista
    const listaCompra = {
      cantidad, producto
    }

    let listaAyuda =[...lista];
    listaAyuda.push(listaCompra);

    //set la lista
    setLista(listaAyuda);
    
 
    //resetear el form
    setProducto('');
    setCantidad(0);

  };

  const deleteCompra= indice=>{
    const newTodos=[...lista];
    newTodos.splice(indice,1);
    setLista(newTodos);
  }



  return (
<>
<form onSubmit={agregarGasto}>
      <h2>Lista de compras supermercado</h2>

    
        <label>Nombre producto</label>
        <input
        type="text"
         placeholder="Ejemplo: Transporte"
         name="producto"
         className="lista-compra"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />
        <label>Cantidad gasto</label>
        <input
          type="number"
          placeholder="Ejemplo: 300$"
          name="cantidad"
          className="lista-compra"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
        <input
        className="btn-comprar"
          type="submit"
          value="Agregar Gasto"
        />
    </form>
   
    {     
         lista.map((value, index)=>(<Compras cantidad={value.cantidad} producto={value.producto} key={index} index={index} deleteCompra={deleteCompra}/>))
    } 
</>
  );
};
export default Mercado;