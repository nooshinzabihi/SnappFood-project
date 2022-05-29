import React from 'react'

export default function VendorDetails(props) {
    const vendor = props.vendordetails
    return (
        <>
            <div className="vendors__details__cover">
                <div className="cover">
                    <img src={`${vendor.coverPath}`} alt={vendor.description}/>
                </div>
                <div className="logo">
                    <img src={`${vendor.defLogo}`} alt={vendor.description}/>
                </div>
            </div>
            <div className="vendors__details__summary">
                <h3>{vendor.title}</h3>
                <div className="summary">{vendor.description}</div>
                <div>
                    <span className="delivery__method">ارسال اکسپرس</span>
                    <span className="price">{vendor.deliveryFee}</span>
                </div>
                
            </div>
        </>
    )
}
