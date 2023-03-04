import React from 'react';

const NewItemCart = ({data, removeToCart}) => {
    const {id, name, price, quantity} = data;

    return (
        <div className='productoCart'>
            <h3>{name}</h3>
            <h4>${price} X {quantity}</h4>
            <div>
                <button type="button" className="btn btn-primary btn-lg botonesEliminarCarrito1" onClick={() => removeToCart(id, true)}>Sacar</button>
                <button type="button" className="btn btn-primary btn-lg botonesEliminarCarrito2" onClick={() => removeToCart(id)}>Sacar Todo</button>
            </div>
        </div>
    );
}

export default NewItemCart;
