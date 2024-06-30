import React from "react";

const ContactVendor = () => {
  return (
    <div>
      <div className="bg-white rounded m-2 shadow-3xl z-20 pt-5 pb-6 px-2 mt-10 border-t-2 border-teal-400">
        <div>
          <h1 className="text-xl text-gray-800">Contact with Vendor</h1>
          <h3 className="text-base text-gray-700">
            Have a question? <br/>feel free to contact us!
          </h3>
        </div>
        <div className="pt-3">
          <a href="https://t.me/+201013290987" target="_blank">
          <button
                  className="flex py-2 px-3 text-sm rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700"
                 
                >
                 Send Message
                </button>
           
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactVendor;
