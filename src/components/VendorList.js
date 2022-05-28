import React , {  useState , useRef , useCallback} from 'react';
import { Link } from 'react-router-dom';
import useVendorList from '../useVendorList'

function VendorList (){
    const [pageNumber, setPageNumber] = useState(1);
    const { 
        loading ,
        error ,
        vendors ,
        hasMore 
    } = useVendorList (pageNumber)

    const observer = useRef();
    const lastVendorElementRef = useCallback((node )=> {
        if (loading)  return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries )=> {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1)
          }
        })
        if (node) observer.current.observe(node)
      }, [loading , hasMore])

    return (
        <>
        
            {vendors.map((vendor , index) => {
                if (vendors.length === index + 1 ){
                    return <div ref={lastVendorElementRef} key ={index}>
                            <Link to = {`${vendor}`} >
                                {vendor}
                            </Link>
                        </div>
                }else{
                    return <div  key = {index}>
                        <Link to = {`${vendor}`} >
                            {vendor}
                        </Link>
                    </div>
                }
            })}
            <div>{loading && 'در حال بارگذاری ...'}</div>
            <div>{error && 'خطایی رخ داده است .'}</div>
           
        </>
    )
}

export default VendorList;