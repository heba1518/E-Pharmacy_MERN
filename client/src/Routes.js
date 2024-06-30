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
import Medicines from "./Components/Home/Medicine/Medicine";
import PictureUpload from "./Pages/PictureUpload/PictureUpload";
import Blog from "./Pages/Blog/Blog";

import Pharmacy from './Pages/Admin/pharmacy/pharmacy'

import CreateShop from './Pages/Shop/CreateShop';
import Company from './Pages/About/Company';
import Career from './Pages/About/Career';
import ContactSupport from './Pages/Support/ContactSupport';
import HelpResources from './Pages/Support/HelpResources';
import ReleaseUpdate from './Pages/Support/ReleaseUpdate';
import FAQ from './Pages/Platform/FAQ';
import Pricing from './Pages/Platform/Pricing';
import TermsPrivacy from './Pages/Platform/TermsPrivacy';
import UserDashboard from './Components/Admin/User/UserDashboard';
import EditUserInfo from './Components/Admin/User/EditUserInfo/EditUserInfo';
import AdminDashboardPage from './Pages/Admin/Admin/AdminDashboardPage';

const Navigation = () => {
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/registration" element={<RegistrationPage />} />

          <Route path="/shopDetails/:vendorId" element={<ShopDetailsPage />} />

          <Route path="/Blog" element={<Blog />} />

          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/medicine" element={<Medicines />} />
          <Route path="/Prescription" element={<PictureUpload />} />

          <Route
            exact
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />
{/* client/src/Components/Admin/Vendor */}
          <Route
            exact
            path="/vendor/:panel"
            element={<VenderDashboardPage />}
          />
          <Route
            exact
            path="/vendo/:panel"
            element={<Pharmacy />}
          />

          <Route
            exact
            path="/admin/:panel"
            element={<AdminDashboardPage />}
          />
          <Route path="/allShop" element={<AllShop />} />

          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/profile/:id" element={<VenderDashboardPage />} />
          

          <Route path="/createShop" element ={<CreateShop />}/>
            
         
          <Route exact path="/company" element ={<Company />}/>
            
        
          <Route exact path="/career" element ={ <Career />}/>
           
        
          <Route exact path="/contact" element ={<ContactSupport />}/>
            
        
          <Route exact path="/resources" element ={<HelpResources />}/>
            
        
          <Route exact path="/release-update" element ={<ReleaseUpdate />}/>
            
        
          <Route exact path="/FAQ" element ={<FAQ />}/>
            
        
          <Route exact path="/pricing" element ={<Pricing />}/>
            
        
          <Route exact path="/terms&privacy" element ={<TermsPrivacy />}/>
            
        
          <Route exact path="/userProfile/:id" element ={<UserDashboard/>}/>
            
        
          <Route exact path="/editUserInfo" element ={<EditUserInfo/>}/>
            
        
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
