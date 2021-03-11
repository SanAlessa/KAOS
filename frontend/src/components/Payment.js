import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Paypal from './Paypal'
import CartPurchase from './CartPurchase'

const Payment = (props) => {
  console.log(props.total)
  return (
    <div className='containerCheckOut'>
      <div className='containerStateCheckOut'>
        <Link to='/buy'><p>Información de Envío</p></Link><p>{'>'}</p><p>Forma de Pago</p>
      </div>
      <h1>¿Cómo vas a pagar?</h1>
      <div className='containerContentCheckout'>
        <div className='containerActionsCheckout'>
          <div className='containerPayInfo'>
          <Paypal total={props.total}/>
          </div>
          <Link><div>Finalizar Compra</div></Link>
        </div>
        <div className='containerCartCheckout'>
        <CartPurchase products={props.cart}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps=state=>{
  return{
    total: state.purchaseR.total,
    cart: state.purchaseR.checkout

  }
}

export default connect(mapStateToProps) (Payment)


