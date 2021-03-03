import React ,{useState} from 'react'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { AiOutlineEye  } from "react-icons/ai"
import userAction from '../redux/actions/userAction'
import {Alert} from 'rsuite'
import  'rsuite/dist/styles/rsuite-default.css'

 function Register({registerUser ,registerUserGoogle}) {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })
    const [visible, setVisible] = useState(true)
    const [errores, setErrores] = useState([])


    const leerInput = e => {
        const campo = e.target.name
        var valor = e.target.value
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]: valor
        })
    }
    const validarUsuario = async e  => {
        e.preventDefault() 
        const respuesta = await registerUser(nuevoUsuario)
        if (nuevoUsuario.firstname === '' || nuevoUsuario.lastname === '' || nuevoUsuario.email === '' || nuevoUsuario.password === '' ) {
            Alert.warning('Todos los campos deben estar completos',3000)
         }
    }

    const responseGoogle = async (response) => {
        console.log(response)

        if (response.error) {
            Alert.error("Algo pasó , vuelve a intentarlo...",3000)
        } else {
            const respuesta = await registerUserGoogle({
                firstname: response.profileObj.name,
                lastname: response.profileObj.familyName,
                email: response.profileObj.email,
                password: response.profileObj.googleId,

            })
            if (respuesta && !respuesta.success) {
                setErrores(respuesta.errores)
            } else {
                Alert.success('Tu cuenta fue creada con exito',3000)
            }
        }
      }
    return (
    <div>
        <div>
            <h2>Ingresá tus datos</h2>
            <div>
                <input name='firstname' type='text' placeholder='Ingrese su nombre' onChange={leerInput} />
            </div>
            <div>
                <input name='lastname' type='' placeholder='Ingrese su Apellido' onChange={leerInput} />
            </div>
            <div>
                <input name='email' type='text' placeholder='Ingrese su dirección de correo electrónico' onChange={leerInput} />
            </div>
            <div>
            <div className="inputDiv">
                        <input name='password' type={visible ? 'password' : 'text'} placeholder='Elija su contraseña' onChange={leerInput}  />
                        <AiOutlineEye onClick={() => setVisible(!visible)} />
            </div>
                <button onClick={validarUsuario}>Enviar Registro</button>
            </div>
            <div>
            <GoogleLogin 
                    clientId="56670268622-ujtfv11jtt2esb9qe4cgo4drut70tgu4.apps.googleusercontent.com"
                    buttonText="Create Account"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
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
    registerUser :userAction.registerUser ,
    registerUserGoogle:userAction.registerUserGoogle  
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)

