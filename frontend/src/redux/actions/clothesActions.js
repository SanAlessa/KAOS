import axios from 'axios'
import { API } from '../../API'

const clothesActions = {
  addClothes: (product) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(`${API}/clothes/addClothes`, product)
        dispatch({ type: 'ADD_CLOTHES', payload: response.data.response })
      } catch (error) {
        console.log(error)
      }
    }
  },
  getClothes: () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${API}/clothes/getClothes`)
        dispatch({ type: 'GET_CLOTHES', payload: response.data.response })
      } catch (error) {
        console.log(error)
      }
    }
  },
  getOne:(id)=>{
    return async (dispatch)=>{
      try {
        const response = await axios.get(`${API}/clothes/getOne/${id}`)
        dispatch({type: 'GET_ONE', payload: response.data.response})
      } catch (error){
        console.log(error)
      }
    }
  }
}

export default clothesActions