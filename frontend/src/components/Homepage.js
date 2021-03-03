import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage.css'
import HomeBanner from './HomeBanner'
import fotoPrueba from '../assets/fotoPrueba.jpeg'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'

const Homepage = () => {
    const newSeason = ["1", "2", "3", "4", "5"]

    return (
        <>
            <HomeBanner></HomeBanner>
            <div className="main">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="motto"></div>
                    <p>NEW SEASON IS HERE!</p>
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