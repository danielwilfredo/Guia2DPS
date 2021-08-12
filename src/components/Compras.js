import React from 'react';

const Compras = ({cantidad, producto, index, deleteCompra}) => {
    return (

        <>
        <div className="list">
            <h3>{cantidad}</h3>
            <h3>{producto}</h3>
            <button className="btn-delete"
            onClick={()=>deleteCompra(index)}
            >X
            </button>
        </div>
        </>


      );
}
 
export default Compras;