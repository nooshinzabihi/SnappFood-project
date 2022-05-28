import { useEffect , useState } from 'react';
import axios from 'axios'

export default function useVendorList(pageNumber) {

   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)
   const [vendors, setVendors] = useState([])
   const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method : 'GET',
            url : 'https://snappfood.ir/mobile/v3/restaurant/vendors-list',
            params : {
                page : pageNumber,
                page_size : 10 ,
                lat : 35.754 ,
                long : 51.328
            }
        }).then(res => {
            setVendors(prevVendor => {
                return [...new Set([...prevVendor , ...res.data.data.finalResult.map(v =>v.data.title)])]
            })
            setHasMore(res.data.data.finalResult.length > 0)
            setLoading(false)
            
        }).catch( e => {
            setError(true)
        })
    }, [pageNumber])

    return { loading , error , vendors , hasMore }
}
