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
    }

}
export default userAction
