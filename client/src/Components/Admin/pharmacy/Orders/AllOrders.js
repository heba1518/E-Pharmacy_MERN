import React, { useState } from "react";
import EditOrders from "./EditOrders";

const AllOrders = () => {
  const [editModal, setEditModal] = useState(false);
  const [viewOrder, setViewOrder] = useState();
  const [status, setStatus] = useState("Processing");
  const u = localStorage.getItem("userBuy");
  let user = JSON.parse(u);
  const p = localStorage.getItem("orderProducts");
  let pro = JSON.parse(p);
  let total = 0;
  pro.forEach((product) => {
    total += product.tot;
  });
  let tot = 0;
  pro.forEach((product) => {
    tot += product.products.length;
  });
  let s = localStorage.getItem("status")
  let r = JSON.parse(s)

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
  const orders = [
   
  ];

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8 max-w-full sm:max-w-5xl">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="font-display text-teal-700 text-2xl leading-tight">
            All Orders
          </h2>
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-filter'
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Customer Name"
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
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Address
                  </th>

                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Order Date
                  </th>
                  {/* <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Price
                  </th> */}
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left pl-12 text-sm uppercase font-semibold"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    colspan="2"
                    className="px-20 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-semibold"
                  >
                    Action
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
                          {order.address}
                        </p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.date}
                        </p>
                      </td>
                      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.price}£
                        </p>
                      </td> */}
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <span
                          className={`relative inline-block px-3 py-1 w-28 text-center font-semibold leading-tight ${
                            order.status === "Pending"
                              ? "text-yellow-900"
                              : order.status === "Confirmed"
                              ? "text-indigo-600"
                              : order.status === "Completed"
                              ? "text-green-800"
                              : order.status === "Cancelled"
                              ? "text-red-500"
                              : "text-blue-800"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`absolute inset-0 opacity-50 rounded-full ${
                              order.status === "Pending"
                                ? "bg-yellow-600"
                                : order.status === "Confirmed"
                                ? "bg-indigo-200"
                                : order.status === "Completed"
                                ? "bg-green-200"
                                : order.status === "Cancelled"
                                ? "bg-red-200"
                                : "bg-blue-300"
                            }`}
                          ></span>
                          <span className="relative">{order.status}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <button
                          className="flex align-center justify-center font-body font-semibold text-teal-600 hover:text-teal-900"
                          onClick={() => setEditModal(true)}
                        >
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
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>{" "}
                          Edit
                        </button>
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
                    </tr>
                  </tbody>
                );
              })}
            </table>

            {/* Pagination */}
            {/* <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* Edit Modal Component */}
      {editModal ? (
        <EditOrders
          setEditModal={setEditModal}
          viewOrder={viewOrder}
          orders={orders}
        />
      ) : null}
    </section>
  );
};

export default AllOrders;
