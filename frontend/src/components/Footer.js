import '../styles/footer.css'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import logo from '../assets/kaoswhite.png'

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div>
                    <NavLink to="/" className="brand">
                        <img src={logo} style={{width:'50%'}}></img>
                        </NavLink>
                </div>
                <div className="container__items__footer">
                    <div className="linksFooter">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/ProductStore">STORE</NavLink>
                        <NavLink to="/">SUPERSALE</NavLink>
                        <NavLink to="/">CONTACT</NavLink>
                    </div>
                    <div className="container__icons__social" >
                        <div> <NavLink to="/" ><i class="fab fa-whatsapp fa-3x"></i></NavLink></div>
                        <div> <NavLink to="/" ><i class="fab fa-instagram fa-3x"></i></NavLink></div>
                        <div><NavLink to="/" ><i class="fab fa-facebook fa-3x"></i></NavLink></div>
                        <div><NavLink to="/" ><i class="fab fa-twitter fa-3x"></i></NavLink></div>
                    </div>
                </div>
                <div style={{width:'30%'}}>

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