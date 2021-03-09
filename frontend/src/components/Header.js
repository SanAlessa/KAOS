import logo from '../assets/kaos.png'
import Drawer from './Drawer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import Cart from './Cart'
import { useEffect } from 'react'
import userAction from '../redux/actions/userAction'

const Header = (props) => {
  useEffect(() => {
  }, [props.reload])


    if(props.loggedUser){
        var links = 
        <div className="linksHeader">
            <Link  to = "/adminPanel">ADMIN</Link>
            <div>Bienvenido {props.loggedUser.firstname}!</div>
            <Link to = "/"  onClick={()=> props.disconnectUser()}>Cerrar Sesion</Link>
        </div> 
    }
  
    return (
        <div className="logoBanner">
            <Drawer />
            <Link to='/' style={{ display: 'flex', justifyContent: 'center', height: '90%' ,width:'50%'}}>
                <img src={logo} className="logo"></img>
            </Link>
            <div>
            {links}
            </div>
            <div className="iconsHeader">
                <Link to='/signin' ><IoPersonCircleOutline style={{ fontSize: '2.2rem', color: 'black' }} /></Link>
                <Cart cart={props.cart} />
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
const mapDispatchToProps = {
  disconnectUser: userAction.disconnectUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
