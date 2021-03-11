import React, {useState} from 'react'
import { connect } from 'react-redux'
import userAction from '../redux/actions/userAction'
/* import Swal from 'sweetalert2' */

const ForgotPassword = ( props ) => {
    const email = props.match.params.email
    const [usuario, setUsuario] = useState({ password:'', newPassword: '' })
    const [errores, setErrores] = useState ([])
    const [visible, setVisible] = useState(false)

    const readInput = e => { //receive the event
        const valor = e.target.value // capture the value
        const campo = e.target.name // capture the field

        setUsuario ({ //modify the user I have in the useState
            ...usuario,
            [campo]:valor
        });
    }

    const checkIfInputsAreEmpty = !usuario.password
    const changePassword = async e => { // function that runs when you click the create user button
        e.preventDefault() //prevent reloading the page
        if(checkIfInputsAreEmpty){
            alert ('Debe ingresar una nueva contraseña')
            return true
        }else if(usuario.password !== usuario.newPassword){
            alert('las contraseñas no coinciden')
        }else{
            const respuesta = await props.newPassword(email, usuario.password)
            if(respuesta && !respuesta.success){
                alert("algo salio mal linea 34")
            }else {
               alert("cambio contraseña linea 36")
            }
        }
    }

return (
    <div className="containerRegister">
        <div className="imagRegister"></div>
            <div className="registerInput" >
                <div className= "register">
                    <h2>Recuperar Contraseña</h2>
                    <div className="userNameAndPassword">
                        <div style={{display:'flex',alignItems:'center'}}>
                            <input className="inputRegister" type={visible ? "text" : "password"} name="password" placeholder="Contraseña" onChange={readInput} />
                            <input className="inputRegister" type={visible ? "text" : "password"} name="newPassword" placeholder="Contraseña" onChange={readInput} />
                            <i className={visible ? "far fa-eye-slash" : "far fa-eye"} onClick={()=>setVisible(!visible)}></i>
                        </div>
                    </div>
                    <button className="botonRegister" onClick={changePassword} >Restablecer Contraseña</button>
                </div>
            </div>
        <div style={{height:"50vh", width:"60vw"}}>
            {/* {errores.map(error => alert(error))} */}
        </div>
    </div>
        )
    }

const mapDispatchToProps = { // map the actions
    newPassword: userAction.newPassword //mapDispachToProps object that has an action value
}

export default connect(null,mapDispatchToProps) (ForgotPassword)