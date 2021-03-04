import {combineReducers} from 'redux'
import userReducer from './userReducer'
import clothesReducer from './clothesReducer'

const rootReducer = combineReducers({
    userR:userReducer,
    clothesR:clothesReducer
})

export default rootReducer