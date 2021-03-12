import axios from 'axios'
import { Alert } from 'rsuite'
import { API } from '../../API'

const userAction = {
  registerUser: (nuevoUsuario) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post(`${API}/user/signup`, nuevoUsuario)
        if(!respuesta.data.success){
          return respuesta.data
        }
        dispatch({
          type: 'LOGIN_USER',
          payload: respuesta.data
        })
      }
      catch (error) {
        Alert.warning("Ups! Algo salio mal, intentalo nuevamente mas tarde", 3000)
      }
    }
  },
  registerUserGoogle: (nuevoUsuario) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post(`${API}/user/signup`, nuevoUsuario)
        dispatch({
          type: 'LOGIN_USER',
          payload: respuesta.data
        })
      }
      catch (error) {
        Alert.warning("Ups! Algo salio mal, intentalo nuevamente mas tarde", 3000)
      }
    }
  },
  loginUser: (usuario) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post(`${API}/user/signin`, usuario)
        if (!respuesta.data.success) {
          return respuesta.data
        }
        dispatch({
          type: 'LOGIN_USER',
          payload: respuesta.data
        })
        Alert.success("Bienvenido " + respuesta.data.response.firstname + "!")
        return ({ success: true })
      } catch (error) {
        return ({ success: false, respuesta: error })
      }
    }
  },
  logFromLS: (token) => {
    return async (dispatch, getState) => {
      try {
        const response = await axios.post(`${API}/user/ls`, { token }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
        dispatch({ type: 'LOGIN_USER', payload: { response: { ...response.data.response } } })
      }
      catch (error) {
        if (error.response.status === 401) {
          Alert.warning("Ups! Algo salio mal, intentalo nuevamente mas tarde", 3000)
          localStorage.clear()
          return true
        }
      }
    }
  },
  resetPassword: (email)=> {
    return async (dispatch) => {
        try{
            const response = await axios.post(`${API}/user/reset-password`, {email})
            dispatch({type: 'RESET_PASSWORD'})
            console.log(response)
        }catch(error){
          Alert.warning("Ups! Algo salio mal, intentalo nuevamente mas tarde", 3000)
        }
    }
}, 
newPassword: (email, password) => {
  return async(dispatch) => {
      try{
          const response = await axios.put(`${API}/user/reset-password`, {email, password})
          dispatch({type: 'CHANGE_PASSWORD'})
      }catch(error){
        Alert.warning("Ups! Algo salio mal, intentalo nuevamente mas tarde", 3000)
      }
  }
},
  disconnectUser: () => {
    return (dispatch, getState) => {
      dispatch({ type: 'DISCONNECT_USER' })
    }
  },

  addAdmin:(token)=>{
    return async (dispatch, getState)=>{
      try{
        const response = await axios.post(`${API}/addAdmin`, {token}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      }catch (error){
        Alert.warning("Ups! Algo salio mal, intentalo nuevamente mas tarde", 3000)
      }
    }
  }

}
export default userAction
