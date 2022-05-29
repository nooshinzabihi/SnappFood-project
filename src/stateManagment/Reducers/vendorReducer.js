import {vendorGetAll , vendorError , vendorLoading , hasMore , pageNumber} from '../Actions/actionTypes'

const initialState = {
   loading : true,
   error : false,
   vendors :[],
   hasMore : false,
   pageNumber : 1
}
function vendorReducer(state = initialState , action){
    switch (action.type) {
        case vendorGetAll:
           return {...state , vendors : state.vendors};
        case vendorError:
            return  state.error = !state.error;
        case vendorLoading:
            return  state.loading = !state.loading;
        case hasMore:
            return state.hasMore = !state.hasMore;
        case hasMore:
            return state.pageNumber = state.pageNumber + 1;   
        default:
            return state;
    }
}
export default vendorReducer;