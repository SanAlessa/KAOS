import React, { useState } from 'react';
import banner1 from '../assets/homeBack1.png';
import banner2 from '../assets/homeBack2.png'

const HomeBanner = () => {

    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
        </>
    )
}

export default HomeBanner