import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux'
import purchaseAction from '../redux/actions/purchaseAction'
import '../styles/log.css'
import 'rsuite/dist/styles/rsuite-default.css'
import { Alert } from 'rsuite'

const Paypal =({total, sendPurchase, loggedUser})=>{
  console.log(total.toFixed(2))
  const paypal = useRef()
  useEffect(()=>{
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE", 
          purchase_units: [{description: "Compra", amount: {value: total.toFixed(2), currency_code: "USD"}}],
        })},
        onApprove: (data, actions) => {
          actions.order.capture()
          Alert.success("Compra exitosa!")
          sendPurchase(loggedUser.token)
        },
        onError: (error)=>{
          Alert.warning("Hubo un error en el pago, intente nuevamente")
          console.log(error)
        }
    }).render(paypal.current)
  })
  return(
    <div className="paypal" ref={paypal}></div>
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