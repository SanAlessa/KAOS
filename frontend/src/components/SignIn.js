import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Alert } from 'rsuite'
import GoogleLogin from 'react-google-login'
import { AiOutlineEye } from "react-icons/ai"
import userAction from '../redux/actions/userAction';
import { connect } from 'react-redux'
import { Message } from 'rsuite'
import Footer from './Footer'
import '../styles/log.css'
import 'rsuite/dist/styles/rsuite-default.css'

function SignIn({ signIn, history, loggedUser, registerUser, registerUserGoogle }) {
  const [visible, setVisible] = useState(true)
  const [errores, setErrores] = useState('')
  const [nuevoLogin, setNuevoLogin] = useState({
    email: '',
    password: ''
  })
  // console.log(loggedUser)

  const [nuevoUsuario, setNuevoUsuario] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  const leerInput = e => {
    const valor = e.target.value
    const campo = e.target.name
    setNuevoLogin({
      ...nuevoLogin,
      [campo]: valor
    })
  }
  const registrar = e => {
    const campo = e.target.name
    var valor = e.target.value
    setNuevoUsuario({
      ...nuevoUsuario,
      [campo]: valor
    })
  }
  const validarUsuario = async e => {
    setErrores('')
    if (nuevoLogin.email === '' || nuevoLogin.password === '') {
      Alert.warning('Todos los campos son requeridos')
    } else {
      const respuesta = await signIn(nuevoLogin)
      if (respuesta && !respuesta.success) {
        respuesta.errores.map(respuesta=>Alert.error(respuesta.message))
      }

    }
  }

  const validarRegistro = async e => {
    e.preventDefault()
    if (nuevoUsuario.firstname === '' || nuevoUsuario.lastname === '' || nuevoUsuario.email === '' || nuevoUsuario.password === '') {
      Alert.warning('Todos los campos deben estar completos', 3000)
    } 
    const respuesta = await registerUser(nuevoUsuario)
    if(respuesta && !respuesta.success){
      respuesta.errors.map(respuesta=>Alert.error(respuesta.message, 5000))
    }else {
      Alert.success('Tu cuenta fue creada con exito', 4000)
    }
  }
  
  const responseGoogle = async response => {
    if (response.error) {
      Alert.error("Algo pasó , vuelva a intentarlo...", 4000)
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

  const responseGoogleReg = async (response) => {
      const respuesta = await registerUserGoogle({
        firstname: response.profileObj.name,
        lastname: response.profileObj.familyName,
        email: response.profileObj.email,
        password: response.profileObj.googleId,
      })
      if (respuesta && !respuesta.success) {
        setErrores(respuesta.errores)
      } else {
        Alert.success('Tu cuenta fue creada con exito', 4000)
      }
    
  }
  return (
    <>
      <div className="main">
        <div className="logSign">
          <div className="login">

            <h2>INICIAR SESIÓN</h2>
            {errores !== '' && <Message type="error" description={errores} style={{}} />}

            <div className="inputsDiv">
              <input className="inputsLog" type="text" name="email" placeholder="Ingrese su dirección de correo electrónico" onChange={leerInput} />
            </div>
            <div className="inputsDiv">
              <input className="inputsLog" type={visible ? "password" : " text"} name="password" placeholder="Ingrese su contraseña" onChange={leerInput}></input>
              <AiOutlineEye className='eye1' onClick={() => setVisible(!visible)} />
            </div>
            <button className="btnLog" onClick={validarUsuario}>Ingresar</button>
            <div>
              <GoogleLogin
                clientId="359967007495-bqpfk2li40j7njsbkkcr97l4hijrmqia.apps.googleusercontent.com"
                buttonText="Iniciar sesión con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className='btngoogle'
              />
            </div>
            <Link to='/send-email'><p>Olvidé mi contraseña</p></Link>
          </div>
          <div className="signUp">
            <h2>NO TENÉS CUENTA? REGISTRATE!</h2>
            <div>
              <input className="inputsLog" name='firstname' type='text' placeholder='Ingrese su nombre' onChange={registrar} />
            </div>
            <div>
              <input className="inputsLog" name='lastname' type='' placeholder='Ingrese su Apellido' onChange={registrar} />
            </div>
            <div>
              <input className="inputsLog" name='email' type='text' placeholder='Ingrese su dirección de correo electrónico' onChange={registrar} />
            </div>
            <div>
              <div>
                <input className="inputsLog" name='password' type={visible ? 'password' : 'text'} placeholder='Elija su contraseña' onChange={registrar} />
                <AiOutlineEye className='eye' onClick={() => setVisible(!visible)} />
              </div>

            </div>
            <button onClick={validarRegistro} className="btnLog" style={{ height: '20%' }}>Enviar Registro</button>
            <div className="googlediv">
              <GoogleLogin
                className='btngoogle'
                clientId="359967007495-bqpfk2li40j7njsbkkcr97l4hijrmqia.apps.googleusercontent.com"
                buttonText="Crear una cuenta con Google"
                onSuccess={responseGoogleReg}
                onFailure={responseGoogleReg}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.userR.loggedUser
  }
}
const mapDispatchToProps = {
  signIn: userAction.loginUser,
  registerUser: userAction.registerUser,
  registerUserGoogle: userAction.registerUserGoogle

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)