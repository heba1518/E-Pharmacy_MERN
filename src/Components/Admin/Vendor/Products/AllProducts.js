import React, { useState } from 'react';
import AddNewProducts from './AddNewProducts';
import img2 from "../../../../Assets/images/products/panadol.webp"
import img4 from "../../../../Assets/images/products/alphintern.jpg";
import img5 from "../../../../Assets/images/products/antinal.webp";
import img6 from "../../../../Assets/images/products/apidone.jpg";
import img8 from "../../../../Assets/images/products/flagyl.png";
import img10 from "../../../../Assets/images/products/Strepsils.jpg";

const AllProducts = () => {
  const [editModal, setEditModal] = useState(false);
  const [viewProduct, setViewProduct] = useState();

  const orders = [
    {
      _id: "e02d3e9a-4b37-4b95-bcd2-3bd28effd937",
      shopId: "0743def8-4a34-4d23-bd7d-1dd3b36d1c84",
      name: "ANTINAL",
      image: img5,
      description:
        "Suspected acute diarrhea caused by bacteria in the absence of suspicion of invasive phenomena ( poor general condition, fever, poisoning signs of infection ...). The treatment does not eliminate dietary and rehydration if The importance of rehydration with oral rehydration solution or intravenous should be adjusted according to the intensity of diarrhea, age and patient characteristics (associated diseases ...).",
      price: 36,
      rating: 5,
      totalReview: 12,
      brand: "AMOUN",
      category: "diarrhea & gastroenteritis",
      stock: 32,
      document: 20,
      isDeliveryFree: false,
      fav: false,
      cart: false,
      quantity:1,
    },
    {
      _id: "a5c7863c-6754-432b-8e2f-9d2210b1dbfd",
      shopId: "debe1e61-5d49-47a1-b544-d59c0e52003e",
      name: "FLAGYL",
      image: img8,
      description: "FLAGYL 125 MG / 5 ML ( METRONIDAZOLE ) SUSPENSION 100 ML",
      price: 16,
      rating: 4,
      totalReview: 12,
      brand: "SANOFI",
      category: "Enteric disinfectants",
      stock: 59,
      document: 96,
      isDeliveryFree: true,
      fav: false,
      cart: false,
      quantity:1,
    },
    {
      _id: "c990a9e3-0b7a-4d43-822d-4d81048f5852",
      shopId: "ce2231a8-c886-43fd-92c8-0fe70a622fa2",
      name: "Alphintern",
      image: img4,
      description:
        "Alphintern tablets ( chemotrypsin 300 mg + trypsin 300 mg ) 30 film-coated tablets ",
      price: 54,
      rating: 4,
      brand: "AMOUN",
      category: "Anti-inflammatory",
      stock: 39,
      document: 1,
      isDeliveryFree: true,
      fav: false,
      cart: false,
      quantity:1,
    },
    {
      _id: "f0d2c336-5b07-45a5-8676-993fa5b45b11",
      shopId: "0743def8-4a34-4d23-bd7d-1dd3b36d1c84",
      name: "Panadol",
      image: img2,
      description:
        "This medication is a trusted ally in managing a spectrum of discomforts, including headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers. It is important to note that while it eases the pain of mild arthritis, it does not address the root cause of inflammation. For optimal relief, it is recommended to adhere to dosing guidelines: orally or rectally, take 325 to 650 mg every 4 to 6 hours, or 1000 mg every 6 to 8 hours. While rare, some individuals may experience side effects such as bloody stools, cloudy urine, fever, skin rash, sore throat, or unusual tiredness. Should any of these symptoms manifest, it is crucial to promptly consult with your healthcare provider. Additionally, safeguard your health by strictly adhering to the prescribed dosage to mitigate the risk of liver damage. Your well-being is paramount, so please feel free to voice any questions or concerns you may have. Your health journey is important to us, and we are here to support you every step of the way.",
      price: 36,
      rating: 5,
      totalReview: 12,
      brand: "GSK",
      category: "Analgesics and antipyretics",
      stock: 32,
      document: 20,
      isDeliveryFree: false,
      fav: false,
      cart: false,
      quantity:1,
    },
    {
      _id: "1ff9b0c2-d0b5-4bf4-a44d-8a441bd44fc1",
      shopId: "6e097319-04c9-4c89-8f4e-42bef7e9c5e8",
      name: "Apidone",
      image: img6,
      description:
        "Apidone Syrup ( Chlorpheniramine 2 mg + Dexamethasone 0.5 mg ) 125 mL",
      price: 15,
      rating: 3,
      totalReview: 12,
      brand: "AMOUN",
      category: "treatment and prevention",
      stock: 43,
      document: 31,
      isDeliveryFree: true,
      fav: false,
      cart: false,
      quantity:1,
    },
  ];
 
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8 max-w-full sm:max-w-5xl">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <div className="flex-start">
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-medium tracking-wide text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-teal-200"
              onClick={() => setEditModal(true)}
            >
              Add a new Product
            </button>
            {/* <button
              className="flex-shrink-0 px-4 py-2 text-base font-medium tracking-wide text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-teal-200 ml-6"
              type="submit"
            >
              Add Category
            </button>{' '} */}
          </div>
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-filter'
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="User Name"
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
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Product Info
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Stock
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Suppliers
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
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
                                src={order.image}
                                className="mx-auto object-cover rounded-full h-10 w-10"
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {order.name.substr(0, 12)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.category}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.stock}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.brand}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.price}£
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <div className="flex align-center justify-center">
                          <button
                            className="flex align-center justify-center font-body font-semibold text-yellow-900 hover:text-orange-900"
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
                            </svg>{' '}
                            Edit
                          </button>
                          <button className="flex align-center ml-5 justify-center font-body font-semibold text-red-600 hover:text-red-900">
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

      {/* Edit Modal Component */}
      {editModal ? (
        <AddNewProducts setEditModal={setEditModal} viewProduct={viewProduct} />
      ) : null}
    </section>
  );
};

export default AllProducts;
