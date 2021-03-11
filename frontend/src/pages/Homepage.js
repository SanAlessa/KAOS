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
