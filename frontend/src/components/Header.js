import logo from '../assets/kaos.png'
import Drawer from './Drawer'
import { connect } from 'react-redux'
import { Link , NavLink} from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import Cart from './Cart'
import { useEffect } from 'react'
import userAction from '../redux/actions/userAction'
import {Dropdown}  from 'react-bootstrap'
import { Alert } from 'rsuite'

const Header = (props) => {
  useEffect(() => {
  }, [props.reload])  
    if(props.loggedUser){

        var links = 
        <div className="linksHeader">
           <div>
            
          </div>
          <div>
            <h6 className="saludo">{props.loggedUser.firstname.split(' ', 1)}</h6>
            <NavLink  to = "/" className="saludo1"  onClick={()=> props.disconnectUser(Alert.info('Hasta la proxima',2000)) }>EXIT</NavLink>
          </div>
         
        </div> 
    }
      return (
        <div className="logoBanner">
            {/* <Drawer /> */}
            <Link to='/' style={{ display: 'flex', justifyContent: 'center', height: '90%' ,width:'50%'}}>
                <img src={logo} className="logo" alt="logo"></img>
            </Link>
            <div className="links">
                <Link  className="links"to ="/">HOME</Link>
                <Link className="links" to ="/productStore">SHOP</Link>
                <NavLink className="links" to ="/signIn">SIGN IN/SIGN UP</NavLink>
                
            </div>
            <div className="logout">
                {links}
             </div>
            <div className="iconsHeader">
                <IoPersonCircleOutline style={{ fontSize: '2.2rem', color: 'black' }} />
                                         
                <div style={{display: 'flex', marginRight: '1vw'}}>
                    <Cart cart={props.cart} />
                    <h5>{props.cart.length}</h5>
                </div>
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
