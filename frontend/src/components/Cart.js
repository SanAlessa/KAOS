import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as GrIcons from 'react-icons/gr'

import '../styles/Navbar.css';
import { IconContext } from 'react-icons';
import CartPurchase from './CartPurchase';
import { connect } from 'react-redux';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

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
              <h2 style={{margin: '0'}}>TU CARRITO</h2>
                <AiIcons.AiOutlineClose onClick={showSidebar} style={{marginRight: '2vw', fontSize: '1.5rem', cursor: 'pointer'}}/>
            </li>
            <li>
              <CartPurchase products={props.cart}/>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

const mapStateToProps=state=> {
  return {
    cart: state.purchaseR.checkout,
    reload: state.purchaseR.reload
  }
}

export default connect(mapStateToProps)(Navbar);