import React, { useState } from 'react'
import { connect } from 'react-redux'
import userAction from '../redux/actions/userAction'
import Footer from './Footer'
import { Alert } from 'rsuite'
/* import Swal from 'sweetalert2' */

const ForgotPassword = (props) => {
    const email = props.match.params.email
    const [usuario, setUsuario] = useState({ password: '', newPassword: '' })
    // const [errores, setErrores] = useState([])
    const [visible, setVisible] = useState(false)

    const readInput = e => { //receive the event
        const valor = e.target.value // capture the value
        const campo = e.target.name // capture the field

        setUsuario({ //modify the user I have in the useState
            ...usuario,
            [campo]: valor
        });
    }

    const checkIfInputsAreEmpty = !usuario.password
    const changePassword = async e => { // function that runs when you click the create user button
        e.preventDefault() //prevent reloading the page
        if (checkIfInputsAreEmpty) {
            Alert.success("Debe ingresar una nueva contraseña", 3000)
            return true
        } else if (usuario.password !== usuario.newPassword) {
            Alert.success("Las contraseñas no coinciden", 3000)
        } else {
            const respuesta = await props.newPassword(email, usuario.password)
            if (respuesta && !respuesta.success) {
                Alert.warning("Ups! Algo salio mal, intentelo nuevamente mas tarde", 3000)
            } else {
                Alert.success("Contraseña cambiada con exito!", 3000)
            }
        }
    }

    return (
        <>
            <div className="main">

                <div className="divMain" >
                    <div className="recuPass">
                        <h2>Recuperar Contraseña</h2>
                        <div className="userNameAndPassword">
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', height: '100%' }}>
                                <input className="inputCarga" type={visible ? "text" : "password"} name="password" placeholder="Nueva contraseña" onChange={readInput} />
                                <div style={{ width: '100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                                    <input className="inputCarga" type={visible ? "text" : "password"} name="newPassword" placeholder="Confirmá tu contraseña" onChange={readInput} />
                                    <i className='eye1' className={visible ? "far fa-eye-slash" : "far fa-eye"} onClick={() => setVisible(!visible)}></i>
                                </div>

                            </div>
                        </div>
                        <button className="botonRegister" onClick={changePassword} >Restablecer Contraseña</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

const mapDispatchToProps = { // map the actions
    newPassword: userAction.newPassword //mapDispachToProps object that has an action value
}

export default connect(null, mapDispatchToProps)(ForgotPassword)