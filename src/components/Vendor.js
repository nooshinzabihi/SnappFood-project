import React from 'react'
import {useParams} from 'react-router-dom'

export default function Vendor() {
    let { id } = useParams();

    return (
        <div >
            Vendor details for id: {id}
        </div>
    )
}
