import React ,{useState} from 'react'
import { connect } from 'react-redux'
import { AiOutlineEye  } from "react-icons/ai"
import userAction from '../redux/actions/userAction'

 function Register({registerUser}) {
     console.log(registerUser)
    const [nuevoUsuario, setNuevoUsuario] = useState({})
    const [visible, setVisible] = useState(true)

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
         if (nuevoUsuario.firstname === '' || nuevoUsuario.lastname === '' || nuevoUsuario.email === '' || nuevoUsuario.password === '' ) {
         alert('Todos los campos deben estar completos')
         const respuesta = await registerUser(nuevoUsuario)
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
        </div>
        
    </div>    
    )   
}
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
    registerUser :userAction.registerUser   
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)

