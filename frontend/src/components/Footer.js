import '../styles/footer.css'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import logo from '../assets/kaoswhite.png'

const Footer = () => {
    return (
        <>
            <footer>

                <div>
                    <NavLink to="/" className="brand">
                        <img src={logo} style={{width:'50%'}}></img>
                        </NavLink>
                </div>
                <div className="container__items__footer">
                    <div className="linksFooter">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">Tienda</NavLink>
                        <NavLink to="/">SuperSale</NavLink>
                        <NavLink to="/">Contacto</NavLink>
                    </div>
                    <div className="container__icons__social" >
                        <div> <NavLink to="/" ><p>Whatsapp</p></NavLink></div>
                        <div> <NavLink to="/" ><p>Instagram</p></NavLink></div>
                        <div><NavLink to="/" ><p>Facebook</p></NavLink></div>
                    </div>

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