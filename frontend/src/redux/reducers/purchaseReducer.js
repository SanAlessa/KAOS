const initState = {
  checkout: []
}

const purchaseReducer = (state=initState, action) => {
  switch(action.type){
    case 'CHECKOUT': 
    localStorage.setItem('cart', JSON.stringify(action.payload))
    return {
      ...state,
      checkout: action.payload
    }
    default: 
      return state
  }
}

export default purchaseReducer