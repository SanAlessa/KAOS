import axios from 'axios'
import { Alert } from 'rsuite'
import { API } from '../../API'

const userAction = {
  registerUser: (nuevoUsuario) => {
    console.log(nuevoUsuario)
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post(`${API}/user/signup`, nuevoUsuario)
        dispatch({
          type: 'LOGIN_USER',
          payload: respuesta.data
        })
      }
      catch (error) {
        console.log(error)
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
        console.log(error)
      }
    }
  },
  loginUser: (usuario) => {
    return async (dispatch, getState) => {
      try {
        const respuesta = await axios.post('https://kaos-challenge.herokuapp.com/api/user/signin', usuario)
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
        const response = await axios.post('https://kaos-challenge.herokuapp.com/api/user/ls', { token }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({ type: 'LOGIN_USER', payload: { response: { ...response.data.response } } })
      }
      catch (error) {
        if (error.response.status === 401) {
          alert("esta intentando ingresar sin permisos")
          localStorage.clear()
          return true
        }
      }
    }
  },
  resetPassword: (email)=> {
    return async (dispatch) => {
        try{
            const response = await axios.post(`http://localhost:4000/api/user/reset-password`, {email})
            dispatch({type: 'RESET_PASSWORD'})
            console.log(response)
        }catch(error){
            alert("error padre")
        }
    }
}, 
newPassword: (email, password) => {
  return async(dispatch) => {
      try{
          const response = await axios.put(`http://localhost:4000/api/user/reset-password`, {email, password})
          dispatch({type: 'CHANGE_PASSWORD'})
      }catch(error){
          alert("error en el coso")
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
        const response = await axios.post(`http://localhost:4000/api/addAdmin`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response)
      }catch (error){
        console.log(error)
      }
    }
  }

}
export default userAction
