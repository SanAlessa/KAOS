
const purchaseAction = {
    checkout: (clothes) => {
        return (dispatch, getState) => {
            var cart = getState().purchaseR.checkout
            cart.push(clothes)
            dispatch({type: 'CHECKOUT', payload: cart})
            console.log(cart)
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
        console.log(product)
        return (dispatch, getState)=>{
            var cart = getState().purchaseR.checkout.filter(toModify => (toModify.id  !== product.id))
            console.log(cart)
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
        console.log(reload)
        return (dispatch) => {
            dispatch({type: 'RELOAD', payload: reload})
        }
    }
}

export default purchaseAction