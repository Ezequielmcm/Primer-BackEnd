import React from 'react';

const NavBar = () => {
    return (
        <div className='navBar'>
            <a href='#' className='titulo'>Tienda De Ropa</a>
            <div className="buscar">
                <input type="text" placeholder="Buscar" required />
                <div className="btn">
                <i className="fas fa-search icon"></i>
            </div>
            </div>
            <a href='#' className='registrarse'>Registrarse</a>
        </div>
    );
}

export default NavBar;
