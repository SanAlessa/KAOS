import axios from 'axios'
import {API} from '../../API'
import { Alert } from 'rsuite'

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
                const response = await axios.post(`${API}/purchase`, purchase, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({type: 'NEW_PURCHASE', payload: response.data.response})
            }catch(error){
                Alert.warning("Ups! Algo salio mal, intentalo nuevamente mas tarde", 3000)
            }
        }
    },

    getPurchases: (id)=>{
        return async(dispatch)=>{
            try {
                const response = await axios.post(`${API}/getPurchases`, {id} )
                console.log(response.data.response[0])
                dispatch({type: 'NEW_PURCHASE', payload: response.data.response[0].purchase})
                console.log('despacho')
            }catch(error){
                Alert.warning("Ups! Algo salio mal, intentalo nuevamente mas tarde", 3000)
            }
        }
    },

    cleanCheckout: ()=>{
        return (dispatch)=>{
            console.log('llega')
            dispatch({type: 'CLEAN', payload: []})
        }
    }
}

export default purchaseAction