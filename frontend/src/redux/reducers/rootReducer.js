import {combineReducers} from 'redux'
import userReducer from './userReducer'
import clothesReducer from './clothesReducer'
import purchaseReducer from './purchaseReducer'

const rootReducer = combineReducers({
    userR:userReducer,
    clothesR:clothesReducer,
    purchaseR: purchaseReducer
})

export default rootReducer