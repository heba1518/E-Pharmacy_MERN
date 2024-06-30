import React from 'react';
import NavBar from '../../../Home/NavBar/NavBar';
import Footer from '../../../Home/Footer/Footer'
import img from '../../../../Assets/images/logo5.png'
const EditUserInfo = () => {
    let u = localStorage.getItem("user");
    let user = JSON.parse(u)
    return (
        <>
        <NavBar/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="mt-10 divide-y divide-gray-200">
            <div className="space-y-1">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Profile</h3>
                
            </div>
            <div className="mt-6">
                <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">{user.userName}</span>
                    <span className="ml-4 flex-shrink-0">
                        <button
                        type="button"
                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                        Update
                        </button>
                    </span>
                    </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt className="text-sm font-medium text-gray-500">Photo</dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">
                        <img
                        className="h-8 w-8 rounded-full"
                        src="https://i.imgur.com/FHMKqK5.png"
                        alt=""
                        />
                    </span>
                    <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                        <button
                        type="button"
                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                        Update
                        </button>
                        <span className="text-gray-300" aria-hidden="true">
                        |
                        </span>
                        <button
                        type="button"
                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                        Remove
                        </button>
                    </span>
                    </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">{user.email}</span>
                    <span className="ml-4 flex-shrink-0">
                        <button
                        type="button"
                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                        Update
                        </button>
                    </span>
                    </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">{user.phone}</span>
                    <span className="ml-4 flex-shrink-0">
                        <button
                        type="button"
                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                        Update
                        </button>
                    </span>
                    </dd>
                </div>
               
                </dl>
            </div>
            </div>
        </div>

        <Footer/>
    </>
    );
};

export default EditUserInfo;