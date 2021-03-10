const initState= {
  clothes:[],
  lastClothes:[]
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
        clothes:action.payload,
        lastClothes: action.payload.slice(action.payload.length - 5, action.payload.length)
      }
    default:
      return state
  }
}

export default clothesReducer