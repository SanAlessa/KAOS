import axios from 'axios'
import {API} from '../../API'


const purchaseAction = {
    checkout: (clothes) => {
        return (dispatch, getState) => {
            var cart = getState().purchaseR.checkout
            cart.push(clothes)
            dispatch({type: 'CHECKOUT', payload: cart})
        }
    },

    incOne:(product) => {
        return (dispatch, getState) => {
            var cart = getState().purchaseR.checkout
            cart.map(toModify => (toModify.id  === product.id) && toModify.quantity++)
            dispatch({type: 'CHECKOUT', payload: cart})
        }
    },

    substOne:(product) => {
        return (dispatch, getState) => {
            var cart = getState().purchaseR.checkout
            cart.map(toModify => (toModify.id  === product.id) && toModify.quantity--)
            dispatch({type: 'CHECKOUT', payload: cart})
        }
    },

    deleteClothes:(product) => {
        return (dispatch, getState)=>{
            var cart = getState().purchaseR.checkout.filter(toModify => (toModify.id  !== product.id))
            dispatch({type: 'CHECKOUT', payload: cart})
        }
    },

    getCart: (cart) => {
        return (dispatch, getState) => {
            var forcedCart = JSON.parse(cart)
            dispatch({type: 'CHECKOUT', payload: forcedCart})
        }
    },

    forceReload:(reload) => {
        return (dispatch) => {
            dispatch({type: 'RELOAD', payload: reload})
        }
    },

    addTotal: (total)=>{
        return(dispatch)=>{
            dispatch({type: 'TOTAL', payload: total})
        }
    },

    sendPurchase: (token) => {
        return async (dispatch, getState)=>{
            var purchase = getState().purchaseR.checkout
            try {
                const response = await axios.post(`http://localhost:4000/api/purchase`, purchase, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response)
                dispatch({type: 'NEW_PURCHASE', payload: response.data.response})
            }catch(error){
                console.log(error)
            }
        }
    },

    getPurchases: (id)=>{
        console.log(id)
        return async(dispatch)=>{
            try {
                const response = await axios.post('http://localhost:4000/api/getPurchases', {id} )
                dispatch({type: 'NEW_PURCHASE', payload: response.data.response})
                console.log(response)
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default purchaseAction