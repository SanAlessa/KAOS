import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className='containerCheckOut'>
      <div className='containerStateCheckOut'>
        <Link to='/buy'><p>Información de Envío</p></Link><p>{'>'}</p><p>Forma de Pago</p>
      </div>
      <h1>¿Cómo vas a pagar?</h1>
      <div className='containerContentCheckout'>
        <div className='containerActionsCheckout'>
          <div className='containerPayInfo'>
            <div className='containerCardPay' style={{ backgroundImage: `url(https://1000marcas.net/wp-content/uploads/2019/12/PayPal-Logo.png)` }}></div>
          </div>
          <Link><div>Finalizar Compra</div></Link>
        </div>
        <div className='containerCartCheckout'>

        </div>
      </div>
    </div>
  )
}

export default Payment

// style={{backgroundImage:`url(https://i.pinimg.com/originals/fc/48/6e/fc486ebb189bd9b1bfbfe7fd1f70316d.jpg)`, width: '100%', height:'100%'}}

