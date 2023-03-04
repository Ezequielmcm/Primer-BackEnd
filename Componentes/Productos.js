import React from 'react';

const Productos = ({data, addToCart}) => {
    const {id, name, price, src, p} = data;
    
    return (
        <div className='producto'>
            <img className='imgProducto' src={src} />
            <button className='nombreProducto' onClick={() => addToCart(id)}>{name}</button>
            <h4>Precio: ${price}</h4>
            <p className='pDeProducto' >{p}</p>
        </div>
    );
}

export default Productos;
