const initState = {
  loggedUser: null
}
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      localStorage.setItem('token', action.payload.response.token)
      return {
        ...state,
        loggedUser: action.payload.response
      }
    case 'DISCONNECT_USER':
      localStorage.clear()
      return {
        ...state,
        loggedUser: null
      }
    default:
      return state
  }
}
export default userReducer