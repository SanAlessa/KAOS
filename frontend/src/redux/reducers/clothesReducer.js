const initState= {
  clothes:[]
}

const clothesReducer =(state = initState, action) =>{
  switch(action.type){
    case 'ADD_CLOTHES':
      return {
        ...state,
        clothes: action.payload
      }
    case 'GET_CLOTHES':
      return {
        ...state,
        clothes:action.payload
      }
    default:
      return state
  }
}

export default clothesReducer