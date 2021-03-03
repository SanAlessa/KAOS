import React ,{useState} from 'react'
import {Alert} from 'rsuite'
import GoogleLogin from 'react-google-login'
import { AiOutlineEye  } from "react-icons/ai"

function SignIn() {
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
        if (usuario.email === '' || usuario.password === '') {
            alert('Todos los campos son requeridos')
        } else {
            // const response = await SignIn(usuario)
            
        }
    }

    return (
    <div>
            <div>
                <h2>Iniciar Sesión</h2>
                <div >
                    <input type="text" name="email" placeholder="Ingrese su dirección de correo electrónico" onChange={leerInput} />
                </div>
                <div >
                    <input type={visible ? "password" : " text"} name="password" placeholder="Ingrese su contraseña" onChange={leerInput} />
                    <AiOutlineEye onClick={() => setVisible(!visible)} />
                </div>
                <button onClick={validarUsuario}>Ingresar</button>
            </div>
    </div>

    )
}
 
export default SignIn