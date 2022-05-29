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
        <div className="container">
            <div className ="vendors__item__box">
                {vendors.map((vendor , index) => {
                    if (vendors.length === index + 1 ){
                        return <div className ="vendors__item">
                                <Link to = {`${vendor}`} className="vendors__link">
                                    <section ref={lastVendorElementRef} key ={index} className ="vendors__section__item">
                                        <h3>{vendor}</h3>
                                    </section>
                                </Link>
                            </div>
                    }else{
                        return <div className ="vendors__item" >
                                <Link to = {`${vendor}`} className="vendors__link">
                                    <section  key = {index} className ="vendors__section__item">
                                        <h3>{vendor}</h3>
                                    </section>
                                </Link>
                            </div>
                    }
                })}
                <div>{loading && 'در حال بارگذاری ...'}</div>
                <div>{error && 'خطایی رخ داده است .'}</div>
            
            </div>
        </div>
    )
}

export default VendorList;