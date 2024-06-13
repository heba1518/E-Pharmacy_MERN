import React, { useEffect } from 'react';
import VendorLayout from '../../../Components/Admin/Admin/Vendor/VendorLayout';

const AdminDashboardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VendorLayout />
    </>
  );
};

export default AdminDashboardPage;