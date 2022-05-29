import {vendorGetAll , vendorError , vendorLoading , hasMore  , pageNumber}from './actionTypes'


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
