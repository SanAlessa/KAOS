// import HeaderImg from '../Components/HeaderImg'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeBanner from '../components/HomeBanner'
import motto from '../assets/motto.png'
import fotoPrueba from '../assets/fotoPrueba.jpeg'
import backgroundCards from '../assets/aest1.jpg'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import bannerRock from '../assets/rockIt.png'
import '../styles/homepage.css'

const Homepage = () => {
    const newSeason = ["1", "2", "3", "4", "5"]

    return (
        <>
            <HomeBanner></HomeBanner>
            <div className="main">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="motto" style={{ backgroundImage: `url(${motto})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                    <p>NEW SEASON IS HERE!</p>
                </div>
                <div className="allCards" style={{ backgroundImage: `url(${backgroundCards})`, backgroundPosition: 'center' }}>
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
                        <p>Acá iría un textito...</p>
                    </div>
                </div>
                <div className="sectionsDiv">
                    <div className="info">
                        <p>Acá iría otro textito...</p>
                    </div>
                    <div className="boxes" style={{ backgroundImage: `url(${box2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                </div>
            </div>
            <div className="main">
                <div className="bannerFrase">
                    <p>FIND NEW TRENDS AND ROCK YOUR STYLE</p>
                </div>
                <div className="superSaleBanner">

                </div>

            </div>
        </>
    )
}



export default Homepage;