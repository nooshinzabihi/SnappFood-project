import {vendorGetAll , vendorError , vendorLoading , hasMore  , pageNumber, test} from './actionType'

export const testAct =()=>{
    return {
        type: test,
    }
}

export const getAll =()=>({
    type: vendorGetAll,
});
export const getError =()=>({
    type: vendorError
});
export const getLoad =()=>({
    type: vendorLoading
});
export const getMore =()=>({
    type: hasMore
});
export const getPageNumber=()=>({
    type: pageNumber
});
