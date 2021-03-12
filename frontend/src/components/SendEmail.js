import React, { useState } from 'react'
import { connect } from 'react-redux'
import userAction from '../redux/actions/userAction'
import Footer from './Footer'
import '../styles/log.css'
import 'rsuite/dist/styles/rsuite-default.css'
import { Alert } from 'rsuite'


const SendEmail = (props) => {
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [errores, setErrores] = useState([])

    const checkIfInputsAreEmpty = email === ''

    const validateUser = async e => { // function that runs when you click the create user button
        e.preventDefault() //prevent reloading the page
        if (checkIfInputsAreEmpty) {
            Alert.warning("Por favor ingresá un mail válido")
            return true
        }
        setErrores([])

        const respuesta = await props.resetPassword(email)
        if (respuesta && !respuesta.success) {
            setErrores(respuesta.errores.details)
        } else {
            Alert.success("Se ha enviado un correo electrónico a tu cuenta")
            setVisible(true)
        }
    }


    return (
        <>
            <div className="main">
                <div className="divMain">
                    <div className="recuPass">
                        <h2>Restablecer contraseña</h2>
                        <p>Por favor completá con tu dirección de E-mail para recibir un enlace de restablecimiento de contraseña.</p>
                        <div className="inputsRecu">
                            <input className="inputRegister" type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value.trim())} />
                            <button className="botonPassword" onClick={validateUser} >Restablecer mi contraseña</button>
                            {visible && <p>Se ha enviado un correo electrónico a tu casilla de mail.</p>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

const mapDispatchToProps = { // map the actions
    resetPassword: userAction.resetPassword //mapDispachToProps object that has an action value
}

export default connect(null, mapDispatchToProps)(SendEmail)