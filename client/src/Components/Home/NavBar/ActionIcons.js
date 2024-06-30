import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderCart from "../OrderCart/OrderCart";
import WishList from "../WishList/WishList";
import products from "../../../Data/products";

const ActionIcons = () => {
  const [openFav, setOpenFav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [login, setLogin] = useState(false);
  // const [profile, setProfile] = useState();
  const [user, setUser] = useState(false);
  const [path, setPath] = useState("");
  const [id, setID] = useState("");

  const [data, setData] = useState(localStorage.getItem("products"));
  useEffect(() => {
    handleLogin();
    handleProfile();
    const handleStorageChange = () => {
      // Update the component state when localStorage changes
      setData(localStorage.getItem("products"));
    };

    // Add event listener for storage event
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Clean up by removing the event listener
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once after component mounts

  const handleLogin = () => {
    const arr = localStorage.getItem("profile");
    const profile = JSON.parse(arr);
    setLogin(profile);
  };

  const handleCart = () => {};
  const handleLogOut = () => {
    localStorage.setItem("profile", false);
    window.location.href = "/";
    setLogin(false);
  };

  const handleProfile = () => {
    let u = localStorage.getItem("user");
    let us = JSON.parse(u);
    setUser(us);


    if(us.role == "pharmacy"){
      if(us.userName == "Pharmacy123"){
        setPath('/vendor/dashboard')
      }else{
        setPath('/vendo/dashboard')
      }
      
    }else if(us.role == "admin"){
      setPath('/admin/dashboard')
    }else{
      setPath('/userProfile/666044742eac70ecfd68ab73')

    }
  };
  // const array = localStorage.getItem('products');
  // const products = JSON.parse(array);

  let fav = 0;
  products.forEach((product) => {
    if (product.fav) {
      fav += 1;
    }
  });
  let cart = 0;
  products.forEach((product) => {
    if (product.cart) {
      cart += 1;
    }
  });

  return (
    <>
      <li>
        <a href="#search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 font-medium cursor-pointer text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </a>
      </li>

      <li>
        <button
          onClick={() => setOpenFav(true)}
          className="py-4 relative border-2 border-transparent text-gray-700 rounded-full hover:text-teal-accent-700 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          aria-label="Favorite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 font-medium cursor-pointer text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="absolute inset-0 object-right-top -mr-6">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-teal-500 text-white">
              {fav}
            </div>
          </span>
        </button>
      </li>
      <li>
        <button
          onClick={() => setOpenCart(true)}
          className="py-4 relative border-2 border-transparent text-gray-800 rounded-full hover:text-teal-accent-700 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          aria-label="Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 font-medium cursor-pointer text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="absolute inset-0 object-right-top -mr-6">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-teal-500 text-white">
              {cart}
            </div>
          </span>
        </button>
      </li>
      <Link to={path}>
        {login && (
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 font-medium cursor-pointer text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </li>
        )}
      </Link>
      {!login && (
        <a href="/login">
          <p class="px-3 py-1 text-lg font-medium tracking-wide text-white transition-colors duration-200 bg-teal-500 rounded-md hover:bg-teal-700">
            Login
          </p>
        </a>
      )}
      <div className="relative inline-flex">
        {login && (
          <button
            onClick={() => handleLogOut()}
            className="inline-flex justify-center items-center group"
            aria-haspopup="true"
          >
            <div className="flex items-center truncate">
              <span className="font-body truncate ml-2 mr-1 text-base font-medium text-teal-500 hover:text-teal-800">
                Logout
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-500 hover:text-teal-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Open cart modal */}
      <OrderCart open={openCart} setOpen={setOpenCart} />
      <WishList open={openFav} setOpen={setOpenFav}></WishList>
    </>
  );
};

export default ActionIcons;
