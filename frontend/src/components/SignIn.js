import React ,{useState} from 'react'
import {Alert} from 'rsuite'
import GoogleLogin from 'react-google-login'
import { AiOutlineEye  } from "react-icons/ai"
import userAction from '../redux/actions/userAction';
import {connect} from 'react-redux'
import {  Message } from 'rsuite'
import { Link } from 'react-router-dom';

function SignIn({signIn, history ,loggedUser}) {
    console.log(signIn)
    const [visible, setVisible] = useState(true)
    const [errores, setErrores] = useState('')
    const [usuario, setNuevoUsuario] = useState({
        email:'',
        password:''
    })


    const leerInput = e => {
        const valor = e.target.value
        const campo = e.target.name
        setNuevoUsuario({
            ...usuario,
            [campo]: valor
        })
    }
    console.log(usuario)
    const validarUsuario = async e => {
        setErrores('')
        if (usuario.email === '' || usuario.password === '') {
            Alert.warning('Todos los campos son requeridos')
        } else {
            const respuesta = await signIn(usuario)
            if (respuesta && !respuesta.success) {
                setErrores(respuesta.mensaje)
            }
            if (loggedUser !== null)
                setTimeout(() => {
                    history.push('/')
                }, 3000)
            
        }
    }
    const responseGoogle = async response => {
        if (response.error) {
        } else {
            const res = await signIn({
                email: response.profileObj.email,
                password: response.profileObj.googleId,
                google: 'true'
            }
            )
            if (res && !res.success) {
                Alert.error('Intente nuevamente')
            }
        }
    }

    return (
    <div>
            <div>
                <h2>Iniciar Sesión</h2>
                {errores !== '' && <Message type='info' description={errores} style={{ marginBottom: '2vh' }} />}

                <div >
                    <input type="text" name="email" placeholder="Ingrese su dirección de correo electrónico" onChange={leerInput} />
                </div>
                <div >
                    <input type={visible ? "password" : " text"} name="password" placeholder="Ingrese su contraseña" onChange={leerInput} />
                    <AiOutlineEye onClick={() => setVisible(!visible)} />
                </div>
                <button onClick={validarUsuario}>Ingresar</button>
            </div>
            <div>
            <GoogleLogin
                    clientId="844411322334-bc3sorc4j8lcrmosuddqcab17jf1fs41.apps.googleusercontent.com"
                    buttonText="Iniciar sesión con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <Link to='register'>Aun no tienes cuenta?,Registrate aqui!</Link>

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