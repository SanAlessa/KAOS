const initState = {
    loggedUser: null
  }
  
  const userReducer = (state = initState, action) =>{
    console.log("llegue al reducer")

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