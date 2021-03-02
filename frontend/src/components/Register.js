import React ,{useState} from 'react'
import { FaEye } from "react-icons/fa";

export default function Register() {
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
console.log(nuevoUsuario)
    const validarUsuario = async () => {
        alert('Me hiciste click')   
        const respuesta = await     

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
                        <FaEye onClick={() => setVisible(!visible)} />
            </div>
                <button onClick={validarUsuario}>Enviar Registro</button>
            </div>
        </div>
        
    </div>    
    )   
}
