// import HeaderImg from '../Components/HeaderImg'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage.css'
import HomeBanner from './HomeBanner'

const Homepage = () => {

    return (
        <>
            <HomeBanner></HomeBanner>
            <div className="main">
                <h1>TRUE STYLE NEVER DIES</h1>
                <p>Somos KAOS Clothing!</p>
            </div>
            <div className="main">
                <h1>categories and last entries</h1>
            </div>
        </>
    )
}



export default Homepage;