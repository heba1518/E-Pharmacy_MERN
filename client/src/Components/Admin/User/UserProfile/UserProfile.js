import React from 'react';
import {Link } from 'react-router-dom'

const UserProfile = () => {
    let u = localStorage.getItem("userBuy");
    let user = JSON.parse(u)
    console.log(user.email)
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-2">
            <div className="user-profile w-full flex flex-col items-center justify-center">
                <div className="user-image">
                <img className="h-60 w-60 rounded-full" src="https://i.imgur.com/FHMKqK5.png" alt="" />
                </div>
                <div className="user-details py-4 text-center">
                    <h4 className="text-2xl font-bold pb-1">{user.userName}</h4>
                    <p className="text-lg">Email: {user.email}</p>
                    <p className="text-lg">Phone: +{user.phone}</p>
                    {/* <p className="text-lg">Address: El Hwatem, Faiyum</p> */}
                </div>
                <Link to="/editUserInfo">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Edit Info
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;