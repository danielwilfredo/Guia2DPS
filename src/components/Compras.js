import React from 'react';

const Compras = ({cantidad, producto, index, deleteCompra}) => {
    return (

        <>
        <div className="list">
        <h3><span className="titulo">Nombre Producto:</span> {producto} </h3>  
        <h3 className="espacio">  </h3>
        <h3><span className="titulo">Cantidad:</span> {cantidad}</h3>
            <button className="btn-delete"
            onClick={()=>deleteCompra(index)}
            >X
            </button>
        </div>
        </>


      );
}
 
export default Compras;