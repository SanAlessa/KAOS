import axios from 'axios'
import {API} from '../../API'

const clothesActions = {
  addClothes: (product) =>{
    console.log(product)
    return async (dispatch) => {
      try{
        const response = await axios.post(`${API}/clothes/addClothes`, product)
        dispatch({type: 'ADD_CLOTHES', payload: response.data.response})
        console.log(response)
      }catch(error){
        console.log(error)
      }
    }
  }
}

export default clothesActions