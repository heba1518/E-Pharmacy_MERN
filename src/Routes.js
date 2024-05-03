import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VenderDashboardPage from "./Pages/Admin/Vendor/VenderDashboardPage";
import LoginPage from "./Pages/Authentication/LoginPage";
import RegistrationPage from "./Pages/Authentication/RegistrationPage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import Home from "./Pages/Home/Home";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AllShop from "./Pages/Shop/AllShop";
import ShopDetailsPage from "./Pages/Shop/ShopDetailsPage";
import Picture from "./Components/Home/PictureUpload/picture";
import Medicines from "./Components/Home/Medicine/Medicine";

const Navigation = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/registration" element={<RegistrationPage />} />

          <Route path="/shopDetails/:vendorId" element={<ShopDetailsPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/medicine" element={<Medicines />} />
          <Route path="/uploadPrescription" element={<Picture />} />

          <Route
            exact
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />

          <Route
            exact
            path="/vendor/:panel"
            element={<VenderDashboardPage />}
          />

          <Route path="/allShop" element={<AllShop />} />

          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/profile/:id" element={<VenderDashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
