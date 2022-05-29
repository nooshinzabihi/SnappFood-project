import {combineReducers} from 'redux'
import vendorReducer from './vendorReducer'

//combine all reducers in one file
export default combineReducers ({
    vendorState : vendorReducer
})