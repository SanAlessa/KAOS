
const purchaseAction = {
    checkout: (cart) => {
        console.log(cart)
        return (dispatch, getState) => {
            dispatch({type: 'CHECKOUT', payload: cart})
        }
    },
    addClothes:(product)=>{
        return(dispatch, getState) => {
            dispatch({type: 'ADD_PRODUCT', payload: product})
        }
    },
    deleteClothes:(product)=>{
        return(getState)=>{
            
        }
    }

}

export default purchaseAction