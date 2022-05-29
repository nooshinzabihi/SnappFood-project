import React from 'react';


function VendorDetails(props) {
    
    const vendor = props.vendordetails;
    return (
        <>
            <div className="vendors__details__cover">
                <div className="cover">
                    <img src={vendor.backgroundImage ? vendor.backgroundImage : props.default.coverPath } alt={vendor.description}/>
                </div>
                <div className="logo">
                    <img src={vendor.defLogo} alt={vendor.description}/>
                </div>
            </div>
            <div className="vendors__details__summary">
                <h3>{vendor.title}</h3>
                <div className="summary">{ vendor.description ?  vendor.description : props.default.description}</div>
                <div className="delivery">
                    <span className="delivery__method">ارسال اکسپرس</span>
                    <span className="price">{vendor.deliveryFee} تومان </span>
                </div>
                
            </div>
        </>
    )
}

VendorDetails.defaultProps = {
    default :{
        coverPath :"",
        description : '.......'
    }
};

export default VendorDetails;

