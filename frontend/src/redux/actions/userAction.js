import axios from 'axios'

const userAction = {
    registerUser: (nuevoUsuario) => {
        // console.log(nuevoUsuario)
        return async (dispatch , getState) => {
            try{
                const respuesta = await axios.post('http://localhost:4000/api/user/signup', nuevoUsuario)
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
                const respuesta = await axios.post('http://localhost:4000/api/user/signup', nuevoUsuario)
                dispatch({
                        type: 'REGISTER_USER' ,
                        payload: respuesta.data
                })
                console.log(respuesta.data)

            }
            catch(error){
              console.log(error)
            }  
        }
    }

}
export default userAction
