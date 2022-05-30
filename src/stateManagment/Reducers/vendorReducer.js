import {vendorGetAll , vendorError , vendorLoading , hasMore , pageNumber, test} from '../Actions/actionType'

const initialState = {
   loading : true,
   error : false,
   vendors :[],
   hasMore : false,
   pageNumber : 1
}

function vendorReducer(state = initialState , action){
     
    switch (action.type) {
        case test: 
            return state + 1
        case vendorGetAll:
           return {...state , vendors : state.vendors};
        case vendorError:
            return  {...state , error : !state.error};
        case vendorLoading:
            return  {...state , loading : !state.loading};
        case hasMore:
            return {...state , hasMore : !state.hasMore};
        case pageNumber:
            return {...state , pageNumber : state.pageNumber + 1};   
        default:
            return state;
            
    }
    
}
export default vendorReducer;