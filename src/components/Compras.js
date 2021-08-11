import React from 'react';

const Compras = ({lista,index, deleteCompra}) => {
    return (

        <>
        <div className="list">
            <h3>Cantidad: {lista.cantidad}</h3> 
           
            <h3>Producto: {lista.compra}</h3>
            <button className="btn-delete"
            onClick={()=>deleteCompra(index)}
            >X
            </button>
        </div>
        </>


      );
}
 
export default Compras;