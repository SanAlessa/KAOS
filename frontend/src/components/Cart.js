import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as GrIcons from 'react-icons/gr'
import { IconContext } from 'react-icons';
import CartPurchase from './CartPurchase';
import { connect } from 'react-redux';
import purchaseAction from '../redux/actions/purchaseAction';
import {BiPurchaseTagAlt} from 'react-icons/bi'
import '../styles/Navbar.css';


function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  if(props.cart.length > 0){
    var prices = props.cart.map(price=> price.price*price.quantity)
    var totalPrice = prices.reduce((a, b)=> a + b).toFixed(2)
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
            <h5 className="titulo3" style={{margin: 0, marginLeft: '2vw'}}><BiPurchaseTagAlt/> TU COMPRA</h5>
            <AiIcons.AiOutlineClose onClick={showSidebar} style={{ marginRight: '2vw', fontSize: '1.5rem', cursor: 'pointer' }} className='tituloCarrito' />
           </li>
            <li className='containerCartPurchaseSide'>
              <CartPurchase products={props.cart}/>
            </li>
            <li className='containerTotal'>
              <h4>TOTAL: $ {totalPrice}</h4>
            </li>
            <li className='containerButtonCheckOut'>
            <Link to="/buy"><button className='buttonCheckout' onClick={()=>{
              props.addTotal(totalPrice)
              showSidebar()}}>Finalizar Compra</button></Link>
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