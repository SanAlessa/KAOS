import React, { useEffect, useRef } from 'react'

const Paypal =({total})=>{
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
          const order = actions.order.capture()
          alert('Compra Finalizada')
          console.log(order)
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

export default Paypal