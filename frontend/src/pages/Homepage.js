import { connect } from 'react-redux'
import clothesActions from '../redux/actions/clothesActions'
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

const Homepage = (props) => {
    useEffect(() => {
        props.getClothes()
    }, [])



    console.log(props.lastClothes)
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
                    {props.lastClothes.map(card => {
                        return (
                            <div className="clothCard" style={{ backgroundImage: `url(${card.stock[0].images[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
                    <img src={box3} className="jeansBox"></img>
                    <img src={box4} className="jeansBox"></img>

                </div>

            </div>
            <Footer></Footer>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        lastClothes: state.clothesR.lastClothes
    };
};

const mapDispatchToProps = {
    getClothes: clothesActions.getClothes
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);