import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllCustomers from './Customers/AllCustomers';
import AllMessages from './Messages/AllMessages';
import AllOrders from './Orders/AllOrders';
import VendorNavbar from './Partials/VendorNavbar';
import VendorSidebar from './Partials/VendorSidebar';
import VendorDashboard from './VendorDashboard';
import Pharmacies from './Pharmacies/Pharamacies';
import Requests from './requests/request';
const VendorLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { panel } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <VendorSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <VendorNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-teal-50 min-h-screen">
            {/* Dashboard Content */}
            {panel === 'dashboard' ? (
              <VendorDashboard />
            ) : panel === 'allOrders' ? (
              <AllOrders />
            ) : panel === 'customers' ? (
              <AllCustomers />
            ) : panel === 'pharmacies' ? (
              <Pharmacies />
            ) : panel === 'messages' ? (
              <AllMessages />
            ): panel === 'requests' ? (
              <Requests/>
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
