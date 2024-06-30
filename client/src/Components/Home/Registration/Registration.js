import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../../Redux/user/actions";
import FormValidation from "../../../Validation/FormValidation";
import "./register.css";
import axios from "axios";

import users from "../../../Data/user";
import Notification from "../../../Helpers/Notification";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-hot-toast";
// import {NotificationManager} from 'react-notifications'

const Registration = ({ setIsAccount }) => {
  const [state, setState] = useState({});
  const [formData, setFormData] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [type, setType] = useState("");
  // const [state, setState] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   userName: "",
  //   firstName: "",
  //   lastName: "",
  //   successMessage: null,
  // });
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handelBlur = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  
  const check = () => {
    // e.preventDefault();
    const { firstName, lastName, userName, phone, email, password } = formData;
    if (
      firstName === undefined ||
      lastName === undefined ||
      userName === undefined ||
      phone === undefined ||
      email === undefined ||
      password === undefined
    ) {
      setShowNotification(true);
      setNotificationMessage("Please Fill All Fields");
      setType("error");
      return;
   
    }
    
  };


  const sendDetailsToServer = (e) => {
    localStorage.setItem("orderProducts",JSON.stringify([]))
    localStorage.setItem("prev",JSON.stringify([]))
    localStorage.setItem("prescription",JSON.stringify(false))
    localStorage.setItem("status",JSON.stringify("In Progress"))
    // e.preventDefault();
    check();
    if (state.email.length && state.password.length) {
      // props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
        userName: state.userName,
        phone: state.phone,
        role: "user"
      };
      axios
        .post("http://localhost:4000/api/users/register", payload)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            
            if(response.data.success){
              setShowNotification(true);
              setNotificationMessage(`${formData.firstName}, You Sign Up Successfuly!`);
              setType("success");
              window.location.href = "/login";
            }else{
              setShowNotification(true);
              setNotificationMessage(response.data.msg);
              console.log(response.data)
              setType("error");
              
            }
            console.log("done", response);
            // redirectToHome();
            // props.showError(null)
          } else {
            console.log("error");
            // props.showError("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Please enter valid username and password");
      // props.showError('Please enter valid username and password')
    }
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.cmPassword) {

      sendDetailsToServer();
      console.log("go");
    } else {
      console.log(state.password, "   ", state.cmPassword)
      console.log("no");
      // props.showError('Passwords do not match');
    }
  };

  return (
    <div>
      <div className="relative min-h-screen flex">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div
            className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-teal-900 text-white bg-no-repeat bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/9hFrQqt/medicine-home-banner.png)",
            }}
          >
            <div className="absolute bg-gradient-to-b from-teal-600 to-teal-400 opacity-75 inset-0 z-0"></div>
            <div className="w-full max-w-md z-10">
              <div className="sm:text-4xl font-semibold text-gray-100 leading-tight mb-6">
                Your medication, delivered <br /> Say goodbye to all your
                healthcare worries with us
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book it has?
              </div>
            </div>

            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <form className="max-w-xl p-4 mx-auto mt-4">
              <div className="mb-8 font-display text-5xl font-semibold text-center text-teal-500">
                Register
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    onBlur={(e) => handelBlur(e)}
                    name="firstName"
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-red-500 hover:shadow-xl focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Heba"
                    // value={state.firstName}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    onBlur={(e) => handelBlur(e)}
                    name="lastName"
                    className="block w-full px-4 py-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-purple-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Sabry"
                    // value={state.lastName}
                    // onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3">
                  <label
                    className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    onBlur={(e) => handelBlur(e)}
                    name="userName"
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-orange-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="HebaSabry987"
                    // value={state.userName}
                    // onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-first-name"
                  >
                    Email Address
                  </label>
                  <input
                    onBlur={(e) => handelBlur(e)}
                    name="email"
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-indigo-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="heba95@example.com"
                    // value={state.email}
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-last-name"
                  >
                    Phone Number
                  </label>
                  <input
                    onBlur={(e) => handelBlur(e)}
                    name="phone"
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-yellow-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    // value={state.phone}
                    // onChange={handleChange}
                    placeholder="+20 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <label
                    className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-first-name"
                  >
                    Password
                  </label>
                  <input
                    onBlur={(e) => handelBlur(e)}
                    name="password"
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-green-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                    type="password"
                    // value={state.password}
                    // onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label
                    className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                    htmlFor="grid-last-name"
                  >
                    Confirm Password
                  </label>
                  <input
                    onBlur={(e) => handelBlur(e)}
                    name="cmPassword"
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-blue-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                    type="password"
                    // value={state.passwordCon}
                    // onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={(e) => handleSubmitClick(e)}
                  className="px-8 py-2 font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500"
                >
                  Register
                </button>
                {showNotification && (
                  <Notification type={type} message={notificationMessage} />
                )}
              </div>

              <div className="flex justify-center mt-1">
                <a
                  onClick={() => setIsAccount((bool) => !bool)}
                  className="text-teal-500 mt-5 text-lg font-semibold no-underline cursor-pointer transition ease-in duration-300 hover:no-underline hover:text-teal-700 hover:opacity-80"
                >
                  Already have account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
