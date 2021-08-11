import React from 'react';

const Compras = ({compras, index, deleteCompra}) => {
    return (

        <>
        <div className="list">
            <h3>{}</h3>
            <button className="btn-delete"
            onClick={()=>deleteCompra(index)}
            >X
            </button>
        </div>
        </>


      );
}
 
export default Compras;