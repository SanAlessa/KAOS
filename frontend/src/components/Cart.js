import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as GrIcons from 'react-icons/gr'

import '../styles/Navbar.css';
import { IconContext } from 'react-icons';
import CartPurchase from './CartPurchase';
import { connect } from 'react-redux';
import purchaseAction from '../redux/actions/purchaseAction';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  if(props.cart.length > 0){
    var prices = props.cart.map(price=> price.price*price.quantity)
    var totalPrice = prices.reduce((a, b)=> a + b)
  }
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <GrIcons.GrCart onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
            <AiIcons.AiOutlineClose onClick={showSidebar} style={{ marginRight: '2vw', fontSize: '1.5rem', cursor: 'pointer' }} className='tituloCarrito' />
           </li>
            <h6 className='containerCart' style={{ margin: '0' }}></h6>

            <li className='containerCartPurchaseSide'>
              <CartPurchase products={props.cart}/>
            </li>
            <li className='containerTotal'>
              <h3>TOTAL: $ {totalPrice && totalPrice.toFixed(3)}</h3>
            </li>
            <li className='containerButtonCheckOut'>
            <Link to="/buy"><button className='buttonCheckout' onClick={()=>props.addTotal(totalPrice)}>Finalizar Compra</button></Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.purchaseR.checkout,
    reload: state.purchaseR.reload
  }
}

const mapDispatchToProps={
  addTotal: purchaseAction.addTotal
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);