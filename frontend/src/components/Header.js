import logo from '../assets/kaos.png'
import Drawer from './Drawer'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import Cart from './Cart'
import { useEffect} from 'react'

const Header = (props) => {

    useEffect(()=>{
    },[props.reload])


    return (
        <div className="logoBanner">
            <Drawer />
            <Link to='/' style={{display:'flex', justifyContent:'center', height:'80%'}}>
                <img src={logo} className="logo"></img>
            </Link>
            <div className="iconsHeader">
                <Link to='/signin' ><IoPersonCircleOutline style={{ fontSize: '2.2rem', color: 'black' }} /></Link>
                <Cart cart={props.cart} />
            </div>
        </div>
    )
}

const mapStateToProps =state=> {
    return {
      cart: state.purchaseR.checkout,
      reload: state.purchaseR.reload
    }
  }

export default connect(mapStateToProps)(Header)