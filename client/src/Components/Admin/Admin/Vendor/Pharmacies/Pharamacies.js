import React from "react";
import img1 from '../../../../../Assets/images/pharmacies/elezaby_logo.png'
import img2 from '../../../../../Assets/images/pharmacies/misr_pharmacy_logo.png';
import img3 from '../../../../../Assets/images/pharmacies/elhakim_pharmacy_logo.png';
import img4 from '../../../../../Assets/images/pharmacies/19011_logo.png';
import img5 from '../../../../../Assets/images/pharmacies/elghibili_logo.png';
const Pharmacies = () => {
  const orders = [
    {
      id: "0",
      photo: img1,
      name: "El Ezaby",
      email: "contactus@elezabypharmacy.com",
      address: "Ard El Golf Heliopolis, Cairo",
      phone: "+2024141445",
      status: "Active",
      date: "Apr 17, 2024",
    },
    {
      id: "1",
      photo: img2,
      name: "Misr ",
      address: "Mohandessin, Giza",
      email: "support@misrpharmacies.com",
      phone: "+201004819110",
      status: "Active",

      date: "Apr 1, 2024",
    },
    {
      id: "2",
      photo: img3,
      name: "Elhakim",
      address: "El-Khalifa El-Maamoun, Faiyum",
      email: "elhakimph@gmail.com",
      phone: "+2040706084",
      status: "Active",
      date: "Mar 23, 2024",
    },
    {
      id: "3",
      photo: img4,
      name: "19011",
      email: "pharmacies19011@gmail.com",
      address: "el baraka pastry, Faiyum",
      phone: "+02 26737212",
      status: "Active",
      date: "Mar 15, 2024",
    },
    {
      id: "4",
      photo: img5,
      name: "Elghbili",
      address: "Gamal Abd El-Nasir, Faiyum",
      email: "rushdypharmacies@gmail.com",
      phone: "+20842178313",
      status: "Deactive",
      date: "Mar 5, 2024",
    },
  ];
  const p = localStorage.getItem("newPharmacy");
  let newP = JSON.parse(p)
  if(newP.reqest){
    orders.push(newP)
  }


  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8 max-w-full sm:max-w-5xl">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="font-display text-teal-700 text-2xl leading-tight">
            Pharmacies Data
          </h2>
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-filter'
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Pharmacy Name"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-medium tracking-wide text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-teal-200"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
        </div>

        {/* view all orders */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-3xl rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal font-sans tracking-wide">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    User Info
                  </th>
                  <th
                    scope="col"
                    className="px-12 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Email
                  </th>
                
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Register Date
                  </th>

                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Message
                  </th>

                </tr>

              </thead>

              {/* all Orders data row */}
              {orders.map((order) => {
                return (
                  <tbody key={order._id}>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white font-body font-medium text-sm">
                        <div className="flex items-center w-24 sm:w-full">
                          <div className="flex-shrink-0">
                            <a href="/" className="block relative">
                              <img
                                alt="User Avatar"
                                src={order.photo}
                                className="mx-auto object-cover rounded-full h-10 w-10"
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {order.name.substr(0, 19)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.email}
                        </p>
                      </td>
                      
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.phone}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.date}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <div className="flex align-center justify-center">
                        
                          <button className="flex align-center justify-center font-body font-semibold text-red-600 hover:text-red-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>{' '}
                            Delete
                          </button>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <a href="https://t.me/+201012540959" target="_blank">

                        <button className="flex align-center justify-center font-sans font-medium text-teal-600 hover:text-teal-900">
                          Message{"  "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                          </svg>
                        </button>
                              </a>
                      </td>
                      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <button className="flex align-center justify-center font-sans font-medium text-teal-600 hover:text-teal-900">
                          Message{"  "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </button>
                      </td> */}
                    </tr>
                  </tbody>
                );
              })}
            </table>

            {/* Pagination */}
            <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-teal-500 bg-white hover:bg-teal-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-teal-50"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-teal-50"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-teal-50"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pharmacies;
