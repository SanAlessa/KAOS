import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'

const Paypal =({total, sendPurchase, loggedUser})=>{
  const paypal = useRef()
  useEffect(()=>{
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE", 
          purchase_units: [{description: "Compra", amount: {value: total, currency_code: "USD"}}],
        })},
        onApprove: (data, actions) => {
          actions.order.capture()
          alert('Compra Finalizada')
          sendPurchase(loggedUser.token)
        },
        onError: (error)=>{
          alert('algo fallo')
          console.log(error)
        }
    }).render(paypal.current)
  })
  return(
    <div ref={paypal}></div>
  )
}

const mapStateToProps =state => {
  return {
    loggedUser: state.userR.loggedUser,
  }
}


const mapDispatchToProps = {
  sendPurchase: purchaseAction.sendPurchase
}


export default connect(mapStateToProps, mapDispatchToProps)(Paypal)