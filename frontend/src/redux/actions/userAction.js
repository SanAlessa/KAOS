import axios from 'axios'
import {API} from '../../API'

const userAction = {
    registerUser: (nuevoUsuario) => {
        console.log(nuevoUsuario)
        return async (dispatch , getState) => {
            try{
                const respuesta = await axios.post(`${API}/user/signup`, nuevoUsuario)
                dispatch({
                        type: 'REGISTER_USER' ,
                        payload: respuesta.data
                })
            }
            catch(error){
              console.log(error)
            }  
        }
    },
    registerUserGoogle: (nuevoUsuario) => {
        console.log(nuevoUsuario)
        return async (dispatch , getState) => {
            try{
                const respuesta = await axios.post(`${API}/user/signup`, nuevoUsuario)
                dispatch({
                        type: 'REGISTER_USER' ,
                        payload: respuesta.data
                })
            }
            catch(error){
              console.log(error)
            }  
        }
    },
    loginUser: (usuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('https://kaos-challenge.herokuapp.com/api/user/signin', usuario)
            console.log(respuesta)
            if(!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({
            type:'LOG_USER', 
            payload: respuesta.data
            }) 
            alert("Bienvenido " + respuesta.data.response.firstname + " "+ respuesta.data.response.lastname + "!")
        }
    },

    disconnectUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'DISCONNECT_USER'})
        }
    },


}
export default userAction
