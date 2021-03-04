const initState = {
    loggedUser: null
  }
  
  const userReducer = (state = initState, action) =>{
      switch(action.type){
        case 'REGISTER_USER' :
          return{
            
            ...state,
            loggedUser: action.payload
          }
          case 'DISCONNECT_USER':
            return {
                ...state,
                loggedUser: null
              }
        default :
          return state
      }
  }
  export default userReducer