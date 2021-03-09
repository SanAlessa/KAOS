import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage.css'
import HomeBanner from '../components/HomeBanner'
import Footer from '../components/Footer'
import fotoPrueba from '../assets/fotoPrueba.jpeg'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import box3 from '../assets/box3.png'
import box4 from '../assets/box4.png'

const Homepage = () => {
    const newSeason = ["1", "2", "3", "4", "5"]
     

    return (
        <>
            <HomeBanner></HomeBanner>
            <div className="main">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="motto"></div>
                    <p className="title">NEW SEASON IS HERE!</p>
                </div>
                <div className="allCards">
                    {newSeason.map(card => {
                        return (
                            <div className="clothCard" style={{ backgroundImage: `url(${fotoPrueba})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="main">
                <div className="sectionsDiv">
                    <div className="boxes" style={{ backgroundImage: `url(${box1})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                    <div className="info">
                        <p>OLVIDA LAS REGLAS....SI TE GUSTA,ÚSALO.</p>
                    </div>
                </div>
                <div className="sectionsDiv">
                    <div className="info">
                        <p>LAS MODAS PASAN , EL ESTILO ES ETERNO</p>
                    </div>
                    <div className="boxes" style={{ backgroundImage: `url(${box2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                </div>
            </div>
            <div className="main">
                <div className="bannerFrase">
                    <p>FIND NEW TRENDS AND ROCK YOUR STYLE</p>
                </div>
                <div className="superSaleBanner">
                    <img src={box3} className="jeansBox"></img>
                    <img src={box4} className="jeansBox"></img>

                </div>

            </div>
            <Footer></Footer>
            
        </>
    )
}

export default Homepage;


// { url:"foto1.jpeg"},
// { url:"foto2.jpeg"},
// { url:"foto3.jpeg"}, 
// { url:"foto4.jpg"},
// { url:"foto5.jpg"}
// {fotos.map(foto => {
//     const fotito = require (`../assets/${foto.url}`)
//     return(
//       <div key={foto.url} className="carrusel">
//           <div style={{backgroundImage:`url("${fotito.default}")`,height:"100vh", width:"100vw",backgroundRepeat:'no-repeat', backgroundSize: 'contain'}}></div>
//       </div>       
//     )
//   })}
//   {newSeason.map(card => {
//     return (
//         <div className="clothCard" style={{ backgroundImage: `url(${card.default})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
//         </div>
//     )
// })}
