import '../styles/footer.css'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import logo from '../assets/kaoswhite.png'

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div className="brandDiv">
                    <NavLink to="/" className="brand">
                        <img src={logo} style={{width:'50%'}} alt="Logo"></img>
                        </NavLink>
                </div>
                <div className="seguir">
                    <div><p>Seguinos en nuestras redes!</p></div>
                    <div className="container__items__footer">
                        {/* <div className="container__icons__social" > */}
                        <div> <NavLink to="/" ><i className="fab fa-whatsapp fa-3x"></i></NavLink></div>
                        <div> <NavLink to="/" ><i className="fab fa-instagram fa-3x"></i></NavLink></div>
                        <div><NavLink to="/" ><i className="fab fa-facebook fa-3x"></i></NavLink></div>
                        <div><NavLink to="/" ><i className="fab fa-twitter fa-3x"></i></NavLink></div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="linksFooter">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/ProductStore">STORE</NavLink>
                    <NavLink to="/">SUPERSALE</NavLink>
                    <NavLink to="/">CONTACT</NavLink>
                </div>
            </footer>
            <div className="all__reserved">
                <hr className="hr" />
                <span>© KAOS - 2021 Copyright</span>
            </div>
        </>
    )

}

export default Footer