import createStore from 'redux'
import Reducers from './Reducers'
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const presistConfig ={
    key : 'root',
    storage,
}
const persistedReducer = persistReducer(presistConfig , Reducers  )


export default store = createStore(persistedReducer);
export default presistor = persistStore(store);
