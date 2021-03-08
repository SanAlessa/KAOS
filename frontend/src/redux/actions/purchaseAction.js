
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
            cart.map(toModify => (toModify.color && toModify.size) === (product.color && product.size) && toModify.quantity++)
            dispatch({type: 'CHECKOUT', payload: cart})
        }
    },

    substOne:(product) => {
        return (dispatch, getState) => {
            var cart = getState().purchaseR.checkout
            cart.map(toModify => (toModify.color && toModify.size) === (product.color && product.size) && toModify.quantity--)
            dispatch({type: 'CHECKOUT', payload: cart})
        }
    },

    deleteClothes:(product) => {
        return (dispatch, getState)=>{
            var cart = getState().purchaseR.checkout.filter(toModify => (toModify.color && toModify.size) !== (product.color && product.size))
            console.log(cart)
            dispatch({type: 'CHECKOUT', payload: cart})
        }
    }
}

export default purchaseAction