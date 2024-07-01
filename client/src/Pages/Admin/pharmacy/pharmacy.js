import React, { useEffect } from 'react';
import VendorLayout from '../../../Components/Admin/pharmacy/VendorLayout';

const VendoDashboardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VendorLayout />
    </>
  );
};

export default VendoDashboardPage;
