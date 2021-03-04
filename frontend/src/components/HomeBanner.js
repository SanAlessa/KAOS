import React, { useState } from 'react';
import banner1 from '../assets/homeBack.png';
import banner2 from '../assets/homeBack2.png'
import logo from '../assets/kaoswhite.png'

const HomeBanner = () => {
    return (
        <>
            <div className="banner" style={{backgroundImage:`url(${banner2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <div style={{backgroundImage: `url(${logo})`, backgroundSize:'cover', backgroundPosition:'center'}} className="logoBanner"></div>
            </div> 
        </>
    )
}

export default HomeBanner