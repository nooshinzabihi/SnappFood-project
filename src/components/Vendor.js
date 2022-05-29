import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { testAct } from '../stateManagment/Actions/vendorActions'
import store from '../stateManagment/store'

export default function Vendor() {
    let { id } = useParams();

    const dispatch = useDispatch()

    return (
        <div >
            Vendor details for id: {id}
            <button
                onClick={e => {
                    dispatch(testAct())
                    console.log(store.getState())
                }}
            >test</button>
        </div>
    )
}
