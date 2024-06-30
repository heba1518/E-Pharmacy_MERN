import React from "react";
import img2 from "../../../../Assets/images/products/coloverin.jpg";
import img1 from "../../../../Assets/images/products/minalax.jpg";
import pImg from "../../../../Assets/images/test4.png";

const EditOrders = ({ setEditModal}) => {
  const orders = [
    {
      id: "0",
      photo: "https://i.imgur.com/FHMKqK5.png",
      name: "Mariam_Mohammed",
      address: "El Hwatem, Faiyum",
      price: "80.5",
      status: "In Progress",
      email: "mariamabeltwab@gmail.com",
      number: "WU88191111",
      date: "June 30, 2024",
      datetime: "2024-01-22",
      phone: "+201012540958",
      age: "24",
      weight: "65",
      invoiceHref: "#",
      total: "80.05",
      products: [
        {
          id: 1,
          name: "Minalax",
          quantity: "1",
          price: "11.5£",
          brand: "AMOUN",
          category: "Laxative",
          status: "Delivered April 22, 2024",
          imageSrc: img1,
          imageAlt: "Detail of mechanical pencil ",
        },
        {
          id: 2,
          name: "Coloverin D",
          quantity: "1",
          price: "69£",
          brand: "Chemipharm",
          category: "Antiflatulent",
          status: "Delivered April 22, 2024",
          imageSrc: img2,
          imageAlt: "Detail of mechanical pencil ",
        },
      ],
      PriscriptionImg: pImg,
    },
  ];

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
                <div className="max-w-xl ml-3">
                  <h1 className="text-2xl font-semibold tracking-tight text-teal-500 sm:text-3xl ">
                    Order history
                  </h1>
                  <p className="mt-2 text-sm text-gray-500">
                    Check the status of recent orders, manage returns, and
                    download invoices.
                  </p>
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

              {/* Order Details */}
              <div className="bg-white">
                <div className="max-w-7xl mx-auto  px-4 sm:px-6 pb-16 lg:px-8">
                  <div className="mt-1">
                    <h2 className="sr-only">Recent orders</h2>

                    <div className="space-y-20">
                      {orders.map((order) => (
                        <div key={order.number}>
                          <h3 className="sr-only">
                            Order placed on{" "}
                            <time dateTime={order.datetime}>{order.date}</time>
                          </h3>

                          <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                            <dl className="divide-y font-sans divide-gray-200 space-y-2 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-x-6 lg:w-2/3 lg:flex-none lg:gap-x-8">
                              <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                <dt className="font-medium text-gray-900"></dt>
                                <a href="/" className="block relative">
                                  <img
                                    alt="User Avatar"
                                    src={order.photo}
                                    className=" object-cover rounded-full h-10 w-10"
                                  />
                                </a>
                              </div>
                              <div className="flex justify-between sm:block">
                                <dt className="font-medium text-gray-900">
                                  Customer Name
                                </dt>
                                <dd className="sm:mt-1">
                                  <time dateTime={order.datetime}>
                                    {order.name}
                                  </time>
                                </dd>
                              </div>
                              <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                <dt className="font-medium text-gray-900">
                                  Email
                                </dt>
                                <dd className="sm:mt-1">{order.email}</dd>
                              </div>
                              <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                <dt className="font-medium text-gray-900">
                                  Phone Number
                                </dt>
                                <dd className="sm:mt-1">{order.phone}</dd>
                              </div>
                            </dl>

                            <p className="block w-52 font-semibold py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                              Order Status
                            </p>
                          </div>

                          <div className="bg-gray-50 rounded-lg py-3 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                            <dl className="divide-y font-sans divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-x-6 lg:w-2/3 lg:flex-none lg:gap-x-8">
                              <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                <dt className="font-medium text-gray-900"></dt>
                                <dd className="sm:mt-1"></dd>
                              </div>
                              <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                <dt className="font-medium text-gray-900">
                                  Age
                                </dt>
                                <dd className="sm:mt-1">{order.age}</dd>
                              </div>
                              <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                <dt className="font-medium text-gray-900">
                                  Weight
                                </dt>
                                <dd className="sm:mt-1">{order.weight}</dd>
                              </div>
                            </dl>
                          </div>

                          <div className="bg-gray-50 rounded-lg py-3 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                            <dl className="divide-y font-sans divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-x-6 lg:w-2/3 lg:flex-none lg:gap-x-8">
                              <div className="flex justify-between sm:block">
                                <dt className="font-medium text-gray-900">
                                  Date placed
                                </dt>
                                <dd className="sm:mt-1">
                                  <time dateTime={order.datetime}>
                                    {order.date}
                                  </time>
                                </dd>
                              </div>
                              <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                <dt className="font-medium text-gray-900">
                                  Order number
                                </dt>
                                <dd className="sm:mt-1">{order.number}</dd>
                              </div>
                              <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                                <dt>Total amount</dt>
                                <dd className="sm:mt-1">{order.total}£</dd>
                              </div>
                              <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                <dt className="font-medium text-gray-900">
                                  Delivery Address
                                </dt>
                                <dd className="sm:mt-1">{order.address}</dd>
                              </div>
                            </dl>

                            <select
                              className={`block w-52 font-semibold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                                order.status === "Pending"
                                  ? "text-yellow-900"
                                  : order.status === "Confirmed"
                                  ? "text-indigo-600"
                                  : order.status === "Completed"
                                  ? "text-green-600"
                                  : order.status === "Cancelled"
                                  ? "text-red-600"
                                  : "text-blue-600"
                              }`}
                              name="status"
                              defaultValue={order.status}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>

                          <div className="flex">
                            <table className="mt-4 w-full text-gray-500 sm:w-1/2 sm:mt-6">
                              <caption className="sr-only">Products</caption>
                              <thead className="sr-only text-sm text-gray-900 text-left sm:not-sr-only">
                                <tr>
                                  <th
                                    scope="col"
                                    className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-medium"
                                  >
                                    Product
                                  </th>
                                  <th
                                    scope="col"
                                    className="hidden w-1/6 pr-8 py-3 font-medium sm:table-cell"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="hidden w-1/6 pr-8 py-3 font-medium sm:table-cell"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="hidden w-1/5 pr-8 py-3 font-medium sm:table-cell"
                                  >
                                    Category
                                  </th>
                                  <th
                                    scope="col"
                                    className="hidden pr-8 py-3 font-medium sm:table-cell"
                                  >
                                    Brand
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="border-b border-gray-200 divide-y text-gray-800 divide-gray-200 text-sm sm:border-t">
                                {order.products.map((product) => (
                                  <tr key={product.id}>
                                    <td className="py-6 pr-8">
                                      <div className="flex items-center">
                                        <img
                                          src={product.imageSrc}
                                          alt={product.imageAlt}
                                          className="w-16 h-16 object-center object-cover rounded mr-6"
                                        />
                                        <div>
                                          <div className="font-medium text-gray-800">
                                            {product.name}
                                          </div>
                                          <div className="mt-1 sm:hidden">
                                            {product.price}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="hidden py-6 pr-8 sm:table-cell">
                                      {product.price}
                                    </td>
                                    <td className="hidden py-6 pr-8 sm:table-cell">
                                      {product.quantity}
                                    </td>
                                    <td className="hidden py-6 pr-8 sm:table-cell">
                                      {product.category}
                                    </td>
                                    <td className="hidden py-6 pr-8 sm:table-cell">
                                      {product.brand}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <div className="w-1/2 flex justify-center items-center">
                              <img
                                src={order.PriscriptionImg}
                                alt="Image description"
                                className="w-1/2 object-center object-cover rounded"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Modal Opacity */}
      <div className="opacity-25 fixed inset-0 z-40 bg-gray-900" />
    </section>
  );
};

export default EditOrders;
