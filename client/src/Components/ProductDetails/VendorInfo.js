import React from 'react';
import vendorData from '../../Data/vendor';
import ShowRating from '../Common/ShowRating';

const VendorInfo = () => {
  const vendor = vendorData[0];
  return (
    <div className="text-gray-800 text-md font-sans font-medium tracking-wide flex flex-col gap-1">
      <h3>Store Name: {vendor.shopName}</h3>
      <h3>Owner Name: {vendor.name}</h3>
      <h3>Owner Phone: {vendor.phone}</h3>
      <h3>Owner Email: {vendor.email}</h3>
      <h3>
        Address: {vendor.location} {vendor.location && ','} {vendor.city}
      </h3>
      
    </div>
  );
};

export default VendorInfo;
