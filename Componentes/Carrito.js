import React, { useReducer } from 'react';
import { TYPES } from './actions';
import Carrusel from './Carrusel';
import Footer from './Footer';
import NavBar from './NavBar';
import NewItemCart from './NewItemCart';
import Productos from './Productos';
import { secundState ,initialState } from './states';

const Carrito = () => {
    const [state, dispatch] = useReducer(secundState ,initialState)
    const {products, cart} = state;
    
    const addToCart = (id) => {
        dispatch ({type: TYPES.ADD_TO_CART, payload: id})
    }
    const removeToCart = (id, all = false) => {
        if (all) {
            dispatch ({type: TYPES.REMOVE_TO_CART, payload: id})
        } else {
            dispatch ({type: TYPES.REMOVE_ALL_TO_CART, payload: id})
        }
    }
    const deleteCart = (id) => {
        dispatch ({type: TYPES.DELETE_CART, payload:id})
    }
    return (
        <div>
            <NavBar/>
            <Carrusel/>
            <div className='ventas'>
                <div className='productos'>{products.map((producto) => <Productos key={producto.id} data={producto} addToCart={addToCart}/>)}</div>
            <div className='descripcionCarrito'>
                <h2>Producto:</h2>
                <h2>Precio:</h2>
                <h2>Interaciones:</h2>
            </div>
            <div className='carrito'>{cart.map((item, index) => <NewItemCart key={index} data={item} removeToCart={removeToCart}/>)}</div>
            <div className='fondoBotonEliminar' >
                <h3 className='totalPrecio'>Total: {cart.reduce((totalAcumulado, item) => totalAcumulado + item.price * item.quantity, 0 )}</h3>
                <button className='botonEliminar' onClick={deleteCart} ><i className="fa-regular fa-trash-can"></i></button>
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Carrito;
