import logo from '../assets/kaos.png'
import { connect } from 'react-redux'
import { Link , NavLink} from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import Cart from './Cart'
import { useEffect } from 'react'


const Header = (props) => {
  useEffect(() => {
  }, [props.reload])  
    if(props.loggedUser){
        var links = 
        <div className="linksHeader">
          <Link to="/userProfile">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '6vw'}}>
          <IoPersonCircleOutline style={{ fontSize: '2.2rem', color: 'black'}} />                                      
            <h6 style={{margin: 0}}className="saludo">{props.loggedUser.firstname.split(' ', 1)}</h6>
          </div>
          </Link>
        </div> 
    }
      return (
        <div className="logoBanner">
            <div style={{ display: 'flex', height: '90%' ,width:'50%', marginLeft: '2vw'}}>
            <Link to='/'>
                <img src={logo} className="logo" alt="logo"></img>
            </Link>
            </div>
            <div className="links">
                <Link  className="links"to ="/">HOME</Link>
                <Link className="links" to ="/productStore">SHOP</Link>
                {!props.loggedUser && <NavLink className="links" to ="/signIn">SIGN IN</NavLink>}
                {(props.loggedUser && props.loggedUser.rol === 'admin') && <Link className="links" to="/adminPanel">Admin Panel</Link>}
                {links}
                <Cart cart={props.cart} />
                <h5>{props.cart.length}</h5>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.userR.loggedUser,
    cart: state.purchaseR.checkout,
    reload: state.purchaseR.reload
  }
}


export default connect(mapStateToProps)(Header)
