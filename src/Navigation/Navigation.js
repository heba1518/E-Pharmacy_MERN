import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../Components/Home/Login/LoginForm";
import Header from "../Components/Home/NavBar/Header";
import NavBar from "../Components/Home//NavBar";
import LoginForm from "../Components/Home/Login/LoginForm";
import Checkout from "../Components/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AllShop from "../Components/AllShop/AllShop";

const Navigation = () => {
  return (
    <div>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/registration">
            <LoginForm />
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route exact path="/product">
            <ProductDetails />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
