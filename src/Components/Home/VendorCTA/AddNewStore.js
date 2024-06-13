import { RadioGroup } from "@headlessui/react";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import img from '../../../Assets/images/pharmacies/gemy_pharmacies_logo.png'
// import { createVendorAccount } from "../../Redux/user/actions";

const AddNewStore = ({ setEditModal }) => {
  const dispatch = useDispatch();
  const settings = [
    {
      delivery: "Yes",
      description: "The shop has its own delivery system.",
    },
    {
      delivery: "No",
      description: "The shop does not have its own delivery system.",
    },
  ];

  const [isDeliveryHas, setIsDeliveryHas] = useState(settings[0]);
  const [logoImgURL, setLogoImgURl] = useState(null);
  const [formData, setFormData] = useState({});
  const [bannerImgURL, setBannerImgURl] = useState(
    "https://i.ibb.co/zR760Cw/Image-2.jpg"
  );

  const handelBlur = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [h, seth] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
    handleImageUpload(e, image);
  };

  const handleImageUpload = (e, setImage) => {

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem('uploadedImage', base64String);
        seth(base64String)
      };
      reader.readAsDataURL(image);

  };

  function getFormattedDate() {
    // Get today's date
    const today = new Date();

    // Extract year, month, and day
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
    const day = String(today.getDate()).padStart(2, "0"); // Pad day with leading zeros if necessary

    // Format date as YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
  const onSubmit = () => {
    const vendorData = {
      shopName: formData.shopName,
      name: formData.shopName,
      email: formData.email,
      phone: formData.phone,
      request: false,
      // logo: logoImgURL,
      date:getFormattedDate(),
      photo:h,
      banner: bannerImgURL,
      address: formData.address + ", " + formData.city,
      password: formData.password,
      hasOwnDelivery: isDeliveryHas.delivery === "No" ? false : true,
    };
    localStorage.setItem("newPharmacy", JSON.stringify(vendorData));
  };

  return (
    <section>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
        <div className="container items-center px-5 py-12 lg:px-20 ml-0 lg:ml-20">
          <div
            className="w-full mx-auto border rounded-lg shadow-xl text-gray-800 bg-white"
            aria-hidden="false"
            aria-describedby="modalDescription"
            role="dialog"
          >
            <div className="bg-white shadow overflow-hidden sm:rounded-lg font-body font-medium">
              <div className="flex items-center justify-between pt-8 px-5 mb-4">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Add Your Pharmacy
                  </h3>
                </div>

                <button
                  className="justify-end p-1 mr-4 -mt-6 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 text-teal-600 hover:bg-teal-700 focus:outline-none"
                  type="button"
                  aria-label="Close"
                  aria-hidden="true"
                  onClick={() => setEditModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* Product Details */}
            <form className="p-5 space-y-8 divide-y divide-gray-200">
              <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                  <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Pharmacy Name
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="shopName"
                          id="shop-name"
                          placeholder="Pharmacy name"
                          autoComplete="given-name"
                          className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                          onBlur={(e) => {
                            handelBlur(e);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Pharmacy Owner name
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="ownerName"
                          id="owner-name"
                          placeholder="Ahmed Magdy"
                          autoComplete="owner-name"
                          className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                          onBlur={(e) => {
                            handelBlur(e);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Email address
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="example@email.com"
                          autoComplete="email"
                          className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                          onBlur={(e) => {
                            handelBlur(e);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="01012540959"
                          autoComplete="phone"
                          className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                          onBlur={(e) => {
                            handelBlur(e);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Pharmacy Logo
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="w-8 h-8 mx-auto text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a Logo</span>
                                <input
                                  id="file-upload"
                                  
                                    onChange={(e)=>{handleImageChange(e)}} 
                                  
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Cover photo
                                    </label>
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                                        <div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg
                                            className="w-12 h-12 mx-auto text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                            >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" onChange={(e)=>handleImageUpload(e,setBannerImgURl)}  name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                        </div>
                                    </div>
                                </div> */}
                  </div>
                </div>

                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                  <div className="space-y-6 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Street address
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="address"
                          id="street-address"
                          autoComplete="street-address"
                          className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onBlur={(e) => {
                            handelBlur(e);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        City
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                          onBlur={(e) => {
                            handelBlur(e);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Password
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                          onBlur={(e) => {
                            handelBlur(e);
                          }}
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                          onBlur={(e) => {
                            handelBlur(e);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="pt-6 sm:pt-5">
                      <div role="group" aria-labelledby="label-email">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                          <div>
                            <div
                              className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                              id="label-email"
                            >
                              Has Own Delivery System?
                            </div>
                          </div>
                          <div className="mt-4 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg space-y-4">
                              <RadioGroup
                                value={isDeliveryHas}
                                onChange={setIsDeliveryHas}
                              >
                                <RadioGroup.Label className="sr-only">
                                  Privacy setting
                                </RadioGroup.Label>
                                <div className="-space-y-px bg-white rounded-md">
                                  {settings.map((setting, settingIdx) => (
                                    <RadioGroup.Option
                                      key={setting.delivery}
                                      value={setting}
                                      className={({ checked }) =>
                                        classNames(
                                          settingIdx === 0
                                            ? "rounded-tl-md rounded-tr-md"
                                            : "",
                                          settingIdx === settings.length - 1
                                            ? "rounded-bl-md rounded-br-md"
                                            : "",
                                          checked
                                            ? "bg-indigo-50 border-indigo-200 z-10"
                                            : "border-gray-200",
                                          "relative border p-4 flex cursor-pointer focus:outline-none"
                                        )
                                      }
                                    >
                                      {({ active, checked }) => (
                                        <>
                                          <span
                                            className={classNames(
                                              checked
                                                ? "bg-indigo-600 border-transparent"
                                                : "bg-white border-gray-300",
                                              active
                                                ? "ring-2 ring-offset-2 ring-indigo-500"
                                                : "",
                                              "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                                            )}
                                            aria-hidden="true"
                                          >
                                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                                          </span>
                                          <div className="flex flex-col ml-3">
                                            <RadioGroup.Label
                                              as="span"
                                              className={classNames(
                                                checked
                                                  ? "text-indigo-900"
                                                  : "text-gray-900",
                                                "block text-sm font-medium"
                                              )}
                                            >
                                              {setting.delivery}
                                            </RadioGroup.Label>
                                            <RadioGroup.Description
                                              as="span"
                                              className={classNames(
                                                checked
                                                  ? "text-indigo-700"
                                                  : "text-gray-500",
                                                "block text-sm"
                                              )}
                                            >
                                              {setting.description}
                                            </RadioGroup.Description>
                                          </div>
                                        </>
                                      )}
                                    </RadioGroup.Option>
                                  ))}
                                </div>
                              </RadioGroup>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setEditModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
                      onSubmit();
                    }}
                    className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Join
                  </button>
                </div>
              </div>

              {/* <div className="pt-5">
                <div className="flex justify-end">
                <button
                    type="button"
                    aria-label="Close"
                  aria-hidden="true"
                  onClick={() => setEditModal(false)}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Save
                  </button>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>

      {/* Background Modal Opacity */}
      <div className="opacity-25 fixed inset-0 z-40 bg-gray-900" />
    </section>
  );
};

export default AddNewStore;
