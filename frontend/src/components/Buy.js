import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Paypal from './Paypal'
import { Alert } from 'rsuite'
import CardHistoryPurchase from './CardHistoryPurchase'
import '../styles/compra.css'

const Buy = (props) => {
  console.log(props.total)
  const [registro, setRegistro] = useState({
    nombre: '',
    apellido: '',
    pais: '',
    ciudad: '',
    direccion: '',
    codigoPostal: '',
    telefono: '',
    email: '',
  })

  const leerInput = e => {
    const valor = e.target.value
    const campo = e.target.name
    setRegistro({
      ...registro,
      [campo]: valor
    })
  }

  const validarCompra = e => {
    if (registro.nombre === '' || registro.apellido === '' || registro.pais === '' || registro.ciudad === '' || registro.codigoPostal === '' || registro.direccion === '' || registro.email === '' || registro.telefono === '') {
      Alert.warning("Todos los campos son requeridos!")
    }
  }

  return (
    <>
      <div className='containerMainBuy'>
        <div className="div1">
          <div className="bannerBuy">
            <p>1.Información de envío</p>
          </div>
          <div className='containerContentCheckout'>
            <div className='containerAddress'>
              <div className="parInputs">
                <input type='text' name="nombre" placeholder='Nombre' onChange={leerInput}></input>
                <input type='text' name="apellido" placeholder='Apellido' onChange={leerInput}></input>
              </div>
              <div className="parInputs">
                <input type='text' name="pais" placeholder='País de residencia' onChange={leerInput}></input>
                <input type='text' name="ciudad" placeholder='¿En qué ciudad se recibirá la compra?' onChange={leerInput}></input>
              </div>
              <div className="parInputs">
                <input type='text' name="direccion" placeholder='Indicanos la dirección' onChange={leerInput}></input>
                <input type='text' name="codigoPostal" placeholder='Indicanos el código postal' onChange={leerInput}></input>
              </div>
              <div className="parInputs">
                <input type='text' name="telefono" placeholder='Indicanos el teléfono de contacto' onChange={leerInput}></input>
                <input type='text' name="email" placeholder='Indicanos un mail' onChange={leerInput}></input>
              </div>
            </div>
          </div>
              <div className="containerMainPay">
                <div className="bannerBuy">
                  <p>2.Método de pago</p>
                </div>
                <div className='containerPayInfo'>
                  <Paypal total={props.total} history={props.history} validarCompra={validarCompra} />
                </div>
              </div>
        </div>
          <div className="div2">
            <div className='containerCartCheckoutDos'>
              {props.cart.map(product => <CardHistoryPurchase product={product} key={product.id} />)}
            </div>
              <p style={{marginLeft: '1vw'}}>Total: {props.total}</p>
          </div>

      </div>
      <Footer></Footer>
    </>
  )
}

const mapStateToProps = state => {
  return {
    total: state.purchaseR.total,
    cart: state.purchaseR.checkout,
  }
}

export default connect(mapStateToProps)(Buy)