import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/homeBack.png';
import banner2 from '../assets/homeBack2.png'
import logo from '../assets/kaoswhite.png'

const HomeBanner = () => {

    return (
        <>
        <Link to='signIn'>Iniciar Sesion</Link>
            <div className="banner" style={{backgroundImage:`url(${banner2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div style={{backgroundImage: `url(${logo})`, backgroundSize:'cover', backgroundPosition:'center'}} className="logoBanner"></div>
            </div> 
        </>
    )
}

export default HomeBanner