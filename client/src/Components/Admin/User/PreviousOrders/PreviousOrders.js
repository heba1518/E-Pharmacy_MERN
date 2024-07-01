import React from "react";
import { Fragment, useState } from "react";

import img4 from "../../../../Assets/images/products/alphintern.jpg";
import img8 from "../../../../Assets/images/products/flagyl.png";
import img5 from "../../../../Assets/images/products/panadol.webp";

const PreviousOrders = () => {
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

  let p = localStorage.getItem("prev");
  let orders = JSON.parse(p);
  console.log(orders);
  // const orders = [
  //   {
  //     number: "WU88191111",
  //     date: getFormattedDate(),
  //     datetime: getFormattedDate(),
  //     invoiceHref: "#",
  //     total: totalPrice,
  //     products: cartProducts
  //   },
  //   // More orders...
  // ];
  const numbers = [
    "WU88191118",
    "WU88191119",
    "WU88191120",
    "WU88191121",
    "WU88191115",
    "WU88191116",
    "WU88191117",
  ];
  
  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
      <div className="max-w-xl">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Previous Orders
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Check the status of recent orders, manage returns, and download
          invoices.
        </p>
      </div>

      <section aria-labelledby="recent-heading" className="mt-16">
        <h2 id="recent-heading" className="sr-only">
          Recent orders
        </h2>

        <div className="space-y-20">
          {orders.map((order, index) => (
            <div key={order.number}>
              <h3 className="sr-only">
                Order placed on{" "}
                <time dateTime={getFormattedDate}>{getFormattedDate}</time>
              </h3>

              <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                  <div className="flex justify-between sm:block">
                    <dt className="font-medium text-gray-900">Date placed</dt>
                    <dd className="sm:mt-1">
                      <time dateTime={getFormattedDate}>
                        {getFormattedDate}
                      </time>
                    </dd>
                  </div>
                  <div className="flex justify-between pt-6 sm:block sm:pt-0">
                    <dt className="font-medium text-gray-900">Order number</dt>
                    <dd className="sm:mt-1">{numbers[index]}</dd>
                  </div>
                  <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                    <dt>Total amount</dt>
                    <dd className="sm:mt-1">{order.tot}</dd>
                  </div>
                </dl>
                <a
                  href={order.invoiceHref}
                  className="w-full flex items-center justify-center bg-white mt-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:mt-0"
                >
                  View Invoice
                  <span className="sr-only">for order {numbers[index]}</span>
                </a>
              </div>

              <table className="mt-4 w-full text-gray-500 sm:mt-6">
                <caption className="sr-only">Products</caption>
                <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                  <tr>
                    <th
                      scope="col"
                      className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="hidden pr-8 py-3 font-normal sm:table-cell"
                    >
                      Status
                    </th>
                    <th scope="col" className="w-0 py-3 font-normal text-right">
                      Info
                    </th>
                  </tr>
                </thead>
                <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                  {order.products.map((product) => (
                    <tr key={product.id}>
                      <td className="py-6 pr-8">
                        <div className="flex items-center">
                          <img
                            src={product.image}
                            alt={product.imageAlt}
                            className="w-16 h-16 object-center object-cover rounded mr-6"
                          />
                          <div>
                            <div className="font-medium text-gray-900">
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
                        {product.status}
                      </td>
                      <td className="py-6 font-medium text-right whitespace-nowrap">
                        <a href={product.href} className="text-indigo-600">
                          View<span className="hidden lg:inline"> Product</span>
                          <span className="sr-only">, {product.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PreviousOrders;
