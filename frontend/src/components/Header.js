import logo from '../assets/kaos.png'
import Drawer from './Drawer'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { IoPersonCircleOutline } from 'react-icons/io5'
import Cart from './Cart'
import { useEffect } from 'react'

const Header = (props) => {
    console.log(props)


    useEffect(()=>{
        console.log(props.cart)

    },[props.cart.length])


    return (
        <div className="logoBanner">
            <Drawer />
            <Link to='/' style={{display:'flex', justifyContent:'center', height:'80%'}}>
                <img src={logo} className="logo"></img>
            </Link>
            <div className="iconsHeader">
                <Link to='signin' ><IoPersonCircleOutline style={{ fontSize: '34', color: 'black' }} /></Link>
                <Cart cart={props.cart}/>
            </div>
        </div>
    )
}

const mapStateToProps =state=> {
    return {
      cart: state.purchaseR.checkout
    }
  }

export default connect(mapStateToProps)(Header)