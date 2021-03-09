import '../styles/footer.css'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'
import logo from '../assets/kaoswhite.png'

const Footer = () => {
  return (
    <>
      <footer className="footer">

<<<<<<< HEAD
        <div>
          <NavLink to="/" className="brand">
            <img src={logo} style={{ width: '50%' }}></img>
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
            <div> <NavLink to="/" ><i class="fab fa-whatsapp fa-3x"></i></NavLink></div>
            <div> <NavLink to="/" ><i class="fab fa-instagram fa-3x"></i></NavLink></div>
            <div><NavLink to="/" ><i class="fab fa-facebook fa-3x"></i></NavLink></div>
            <div><NavLink to="/" ><i class="fab fa-twitter fa-3x"></i></NavLink></div>
          </div>
        </div>
      </footer>
      <div className="all__reserved">
        <hr className="hr" />
        <span>© KAOS - 2021 Copyright</span>
      </div>
    </>
  )
=======
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
                        <div> <NavLink to="/" ><i className="fab fa-whatsapp fa-3x"></i></NavLink></div>
                        <div> <NavLink to="/" ><i className="fab fa-instagram fa-3x"></i></NavLink></div>
                        <div><NavLink to="/" ><i className="fab fa-facebook fa-3x"></i></NavLink></div>
                        <div><NavLink to="/" ><i className="fab fa-twitter fa-3x"></i></NavLink></div>
                    </div>
                </div>
            </footer>
            <div className="all__reserved">
                <hr className="hr" />
                <span>© KAOS - 2021 Copyright</span>
            </div>
        </>
    )
>>>>>>> 417945c13f5f6d5a6a09b1f06bbbe0e274bfa84b

}

export default Footer