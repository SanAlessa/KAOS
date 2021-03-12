import { connect } from 'react-redux'
import clothesActions from '../redux/actions/clothesActions'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage.css'
import HomeBanner from '../components/HomeBanner'
import Footer from '../components/Footer'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import box3 from '../assets/box3.png'
import box4 from '../assets/box4.png'

const Homepage = (props) => {
    useEffect(() => {
        props.getClothes() 
    }, [])
 
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
                            <Link to={`/product/${card._id}`} key={card._id} className="clothCardLink">
                                <div className="clothCard" style={{ backgroundImage: `url(${card.stock[0].images[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </div>
            <div className="main1">
                <div className="sectionsDiv">
                    <div className="boxes" style={{ backgroundImage: `url(${box1})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                    <div className="info">
                        <p>NEW SEASON 2021. Descubrí todo lo nuevo que te trae KAOS para esta temporada! Buzos, remes, bermudas y más. Qué esperás para enloquecer? Corré al shop, que no va a durar mucho...</p>
                    </div>
                </div>
                <div className="sectionsDiv">
                    <div className="info">
                        <p>Próximamente SUPER SALE para que te animes por si te quedaste con las ganas! Descuentos de hasta el 50% OFF! Seguinos en nuestras redes para estar al tanto, lanzaremos el evento el 27/3 y solo va a estar disponible por 24 horas! No digas que no te avisamos...</p>
                    </div>
                    <div className="boxes" style={{ backgroundImage: `url(${box2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                </div>
            </div>
            <div className="main2">
                <div className="bannerFrase">
                    <p>FIND NEW TRENDS AND ROCK YOUR STYLE</p>
                </div>
                <div className="superSaleBanner">
                    <img src={box3} className="jeansBox" alt={box3}></img>
                    <img src={box4} className="jeansBox" alt={box4}></img>

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
