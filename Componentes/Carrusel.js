import React from 'react';

const Carrucel = () => {
    return (
        <div>
            <div id='contentItemCarrucel'>
            <div className='carrucel' id='itemCarrucelA'>
                <div className='tarjetaCarrucel' id='idCarrucelA'>
                    <img className='imgCarrucel' src='https://i.pinimg.com/originals/47/d8/f1/47d8f152eb4225730a07c1fe953ee8fc.jpg'/>
                </div>
                <div className='flachasCarrucel'>
                    <a className='aCarrucel' href='#itemCarrucelD'><i className="fa-solid fa-arrow-left"></i></a> 
                    <a className='aCarrucel' href='#itemCarrucelB'><i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='carrucel' id='itemCarrucelB'>
                <div className='tarjetaCarrucel' id='idCarrucelB'>
                    <img className='imgCarrucel' src='https://img.freepik.com/vector-gratis/plantilla-portada-redes-sociales-boutique-ropa-minimalista-plana_23-2149342340.jpg?w=2000'/>
                </div>
                <div className='flachasCarrucel'>
                    <a className='aCarrucel' href='#itemCarrucelA'><i className="fa-solid fa-arrow-left"></i></a> 
                    <a className='aCarrucel' href='#itemCarrucelC'><i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='carrucel' id='itemCarrucelC'>
                <div className='tarjetaCarrucel' id='idCarrucelC'>
                    <img className='imgCarrucel' src='https://i.pinimg.com/originals/e2/89/20/e2892023196ffa47fa64da49e01cb3dd.jpg'/>
                </div>
                <div className='flachasCarrucel'>
                    <a className='aCarrucel' href='#itemCarrucelB'><i className="fa-solid fa-arrow-left"></i></a> 
                    <a className='aCarrucel' href='#itemCarrucelD'><i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='carrucel' id='itemCarrucelD'>
                <div className='tarjetaCarrucel' id='idCarrucelD'>
                    <img className='imgCarrucel' src='https://i.pinimg.com/originals/51/b6/49/51b64946d5851292b7d0c6f508d4ef04.jpg'/>
                </div>
                <div className='flachasCarrucel'>
                    <a className='aCarrucel' href='#itemCarrucelC'><i className="fa-solid fa-arrow-left"></i></a> 
                    <a className='aCarrucel' href='#itemCarrucelA'><i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            </div>
            <div id='puntosCarrucel'>
                <a href='#itemCarrucelA'>o</a>
                <a href='#itemCarrucelB'>o</a>
                <a href='#itemCarrucelC'>o</a>
                <a href='#itemCarrucelD'>o</a>
            </div>
        </div>
    );
}

export default Carrucel;
