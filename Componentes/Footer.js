import React from 'react';

const Footer = () => {
    return (
        <div className='footerPadre'>
            <div className='enlacesFooter'>
                <a href='#'><i className="fa-brands fa-facebook"></i></a>
                <a className='enlaceFooter2' href='#'><i className="fa-brands fa-instagram"></i></a>
                <a href='#'><i className="fa-brands fa-whatsapp"></i></a>
            </div>
            <div className='cajaInfoFooter'>
                <div className='masVendidasFooter'>
                <p><strong>Categorías más vistas:</strong></p> 
                    <a href='#'>Celulares libres</a> 
                    <a href='#'>Camara digitales</a> 
                    <a href='#'>Notebooks, Ropa y acesorios de dama</a> 
                    <a href='#'>Ropa de hombre</a> 
                    <a href='#'>Ropa y juego de niños</a> 
                    <a href='#'>Calzados, Pc gamer</a> 
                    <a href='#'>Deporte y exteriores</a> 
                    <a href='#'>Relojes y lentes</a> 
                    <a href='#'>Libro</a> 
                </div>
                <div className='productosDestacadosFooter'>
                <p><strong>Productos destacados:</strong></p>
                    <a href='#'>Bond touch </a>
                    <a href='#'>Xiaomi Redmi note 8 </a>
                    <a href='#'>Baccarat Rouge 540 </a>
                    <a href='#'>Ryzen 5 3600 </a>
                    <a href='#'>Playstation 5 </a>
                    <a href='#'>BTS Light Stick Army </a>
                    <a href='#'>Termos Stanley </a>
                    <a href='#'>Mouse Gaming Glorius </a>
                    <a href='#'>Motorola Moto G8 </a>
                    <a href='#'>Samsung Galaxy Tab S6 </a>
                </div>
                <div className='otrasCategoriasFooter'>
                <p><strong>Otras categorías:</strong></p> 
                    <a href='#'>Ofertas de la semana </a>
                    <a href='#'>Tecnología </a>
                    <a href='#'>Hogar y Jardín </a>
                    <a href='#'>Componentes gamer </a>
                    <a href='#'>Juegos de niños </a>
                    <a href='#'>Talles especiales </a>
                    <a href='#'>Ciclísmo </a>
                    <a href='#'>Auricules </a>
                    <a href='#'>Gaming </a>
                    <a href='#'>Herramientas </a>
                </div>
            </div>
            <div className='derechosDeAutor'>
                <a className='derechosDeAutor' href='#'>© 2014 - 2023 - Tiendamia - Todos los derechos reservados - Todas las marcas son propiedad de sus respectivos dueños</a>
            </div>
        </div>
    );
}

export default Footer;
