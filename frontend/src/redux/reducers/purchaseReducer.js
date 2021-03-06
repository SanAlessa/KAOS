const initState = {
  checkout: []
}

const purchaseReducer = (state=initState, action) => {
  switch(action.type){
    case 'ADD_PRODUCT':
      return {
        ...state,
        checkout: action.payload
      }
    default: 
      return state
  }
}

export default purchaseReducer