import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartPurchase from './CartPurchase'
import uuid from 'react-uuid'

const Buy = (props) => {
  console.log(props.total)
  const [country, setCountry] = useState([])

  const fetchCountries = async () => {
    const APIcall = await fetch('https://restcountries.eu/rest/v2/all');
    const responseCountries = await APIcall.json();
    setCountry(responseCountries)
  }

  useEffect(() => {
    fetchCountries();
  }, [])

  return (
    <div className='containerCheckOut'>
      <div className='containerStateCheckOut'>
        <p>Información de Envío</p><p>{'>'}</p><Link to='/payment'><p>Forma de Pago</p></Link>
      </div>
      <h1>¿A dónde querés recibir el producto?</h1>
      <div className='containerContentCheckout'>
        <div className='containerActionsCheckout'>
          <select placeholder='Country' name='userCountry'>
            <option defaultValue='' selected disabled hidden>Elegí el país</option>
            {country.map(country => {
              return (
                <>
                  <option key={uuid()} value={country.value}>{country.name}</option>
                </>
              )
            })
            }
          </select>
          <input type='text' placeholder='¿En qué ciudad se recibirá la compra?'></input>
          <input type='text' placeholder='Indicanos la dirección'></input>
          <input type='text' placeholder='Indicanos el código postal'></input>
          <input type='text' placeholder='Indicanos el teléfono de contacto'></input>
          <Link to={{pathname:"/payment", state: 'que onda?'}}><div>Elegir Método de Pago</div></Link>
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
    cart: state.purchaseR.checkout,
  }
}


export default connect(mapStateToProps)(Buy)