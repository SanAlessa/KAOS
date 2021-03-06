import React, { useState } from 'react'
import { Alert } from 'rsuite'
import GoogleLogin from 'react-google-login'
import { AiOutlineEye } from "react-icons/ai"
import userAction from '../redux/actions/userAction';
import { connect } from 'react-redux'
import { Message } from 'rsuite'
import { Link } from 'react-router-dom';
import '../styles/log.css'

function SignIn({ signIn, history, loggedUser }) {
    const [visible, setVisible] = useState(true)
    const [errores, setErrores] = useState('')
    const [usuario, setNuevoUsuario] = useState({
        email: '',
        password: ''
    })
// console.log(loggedUser)


    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        setNuevoUsuario({
            ...usuario,
            [campo]: valor
        })
    }
    const validarUsuario = async e => {
        setErrores('')
        if (usuario.email === '' || usuario.password === '') {
            Alert.warning('Todos los campos son requeridos')
        } else {
            const respuesta = await signIn(usuario)
            if (respuesta && !respuesta.success) {
                setErrores(respuesta.mensaje)
            }
                setTimeout(() => {
                    history.push('/')
                }, 2500)

        }
    }
    const responseGoogle = async response => {
        if (response.error) {
            Alert.error("Algo pasó , vuelva a intentarlo...",4000)
        } else {
            const res = await signIn({
                email: response.profileObj.email,
                password: response.profileObj.googleId,
                google: 'true'
            })
            setTimeout(() => {
                history.push('/')
            }, 2500)
        }
    }

    return (
        <div className="main">
            <div className="logSign">
                <div className="login">

                    <h2>INICIAR SESIÓN</h2>
                    {errores !== '' && <Message type='info' description={errores} style={{ marginBottom: '2vh' }} />}

                    <div className="inputsDiv">
                        <input className="inputsLog" type="text" name="email" placeholder="Ingrese su dirección de correo electrónico" onChange={leerInput} />
                    </div>
                    <div className="inputsDiv">
                        <input className="inputsLog" style={{marginLeft:'1%'}} type={visible ? "password" : " text"} name="password" placeholder="Ingrese su contraseña" onChange={leerInput} />
                        <AiOutlineEye onClick={() => setVisible(!visible)} />
                    </div>
                    <button className="btnLog" onClick={validarUsuario}>Ingresar</button>
                    <div>
                        <GoogleLogin
                            clientId="844411322334-bc3sorc4j8lcrmosuddqcab17jf1fs41.apps.googleusercontent.com"
                            buttonText="Iniciar sesión con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="googleBtn"
                        />
                    </div>
                    <Link to='register'>Aún no tenés cuenta? Registrate aquí!</Link>

                </div>
                <div className="signUp">
                    <p>AGREGAMOS ACÁ EL SIGN UP???</p>
                    <p>☺</p>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser
    }
}
const mapDispatchToProps = {
    signIn: userAction.loginUser

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)