import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import productsLocal, { updateQuantity } from "../../../Data/products";
// import img2 from "../../../Assets/images/products/panadol.webp";
// import img4 from "../../../Assets/images/products/alphintern.jpg";
// import img5 from "../../../Assets/images/products/antinal.webp";
// import img6 from "../../../Assets/images/products/apidone.jpg";
// import img8 from "../../../Assets/images/products/flagyl.png";

const ListOfMedicinesInPrescription = () => {
  const [searchItem, setSearchItem] = useState("");
  const [products, setProducts] = useState(productsLocal);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const location = useLocation();
  const { extractedWords } = location.state || { extractedWords: "[]" };

  let extractedWordsArray = [];

  try {
    extractedWordsArray = JSON.parse(extractedWords);
  } catch (error) {
    console.error("Failed to parse extractedWords:", error);
  }

  // Create an array to store matched medicines
  const matchedMedicines = productsLocal.filter((medicine) =>
    extractedWordsArray.includes(medicine.name)
  );
  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  const isActive = (product) => {
    return product.fav;
  };
  localStorage.setItem("products", JSON.stringify(products));

  const updateProducts = (id, newData) => {
    const index = products.findIndex((item) => item._id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...newData };
      setProducts(products);
      localStorage.setItem("products", JSON.stringify(products));
      return true;
    }
    return false;
  };

  useEffect(() => {}, [products]);

  const handleToggleWishlist = (id, product) => {
    product.fav = !product.fav;
    const updated = updateProducts(id, product);
    if (updated) {
      setFilteredProducts([...products]);
    } else {
      console.log("Product not found");
    }
  };
  const handleAddToCart = (id, product) => {
    product.cart = true;
    const updated = updateProducts(id, product);
    if (updated) {
      setFilteredProducts([...products]);
    } else {
      console.log("Product not found");
    }
  };

  const handleInputChange = (e) => {
    let searchTerm = e.target.value;
    setSearchItem(searchTerm);

    let filteredItems = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredItems);
  };

  // const orders = [
  //   {
  //     _id: "e02d3e9a-4b37-4b95-bcd2-3bd28effd937",
  //     shopId: "0743def8-4a34-4d23-bd7d-1dd3b36d1c84",
  //     name: "ANTINAL",
  //     image: img5,
  //     description:
  //       "Suspected acute diarrhea caused by bacteria in the absence of suspicion of invasive phenomena ( poor general condition, fever, poisoning signs of infection ...). The treatment does not eliminate dietary and rehydration if The importance of rehydration with oral rehydration solution or intravenous should be adjusted according to the intensity of diarrhea, age and patient characteristics (associated diseases ...).",
  //     price: 36,
  //     rating: 5,
  //     totalReview: 12,
  //     brand: "AMOUN",
  //     category: "diarrhea & gastroenteritis",
  //     stock: 32,
  //     document: 20,
  //     isDeliveryFree: false,
  //     fav: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     _id: "a5c7863c-6754-432b-8e2f-9d2210b1dbfd",
  //     shopId: "debe1e61-5d49-47a1-b544-d59c0e52003e",
  //     name: "FLAGYL",
  //     image: img8,
  //     description: "FLAGYL 125 MG / 5 ML ( METRONIDAZOLE ) SUSPENSION 100 ML",
  //     price: 16,
  //     rating: 4,
  //     totalReview: 12,
  //     brand: "SANOFI",
  //     category: "Enteric disinfectants",
  //     stock: 59,
  //     document: 96,
  //     isDeliveryFree: true,
  //     fav: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     _id: "c990a9e3-0b7a-4d43-822d-4d81048f5852",
  //     shopId: "ce2231a8-c886-43fd-92c8-0fe70a622fa2",
  //     name: "Alphintern",
  //     image: img4,
  //     description:
  //       "Alphintern tablets ( chemotrypsin 300 mg + trypsin 300 mg ) 30 film-coated tablets ",
  //     price: 54,
  //     rating: 4,
  //     brand: "AMOUN",
  //     category: "Anti-inflammatory",
  //     stock: 39,
  //     document: 1,
  //     isDeliveryFree: true,
  //     fav: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     _id: "f0d2c336-5b07-45a5-8676-993fa5b45b11",
  //     shopId: "0743def8-4a34-4d23-bd7d-1dd3b36d1c84",
  //     name: "Panadol",
  //     image: img2,
  //     description:
  //       "This medication is a trusted ally in managing a spectrum of discomforts, including headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers. It is important to note that while it eases the pain of mild arthritis, it does not address the root cause of inflammation. For optimal relief, it is recommended to adhere to dosing guidelines: orally or rectally, take 325 to 650 mg every 4 to 6 hours, or 1000 mg every 6 to 8 hours. While rare, some individuals may experience side effects such as bloody stools, cloudy urine, fever, skin rash, sore throat, or unusual tiredness. Should any of these symptoms manifest, it is crucial to promptly consult with your healthcare provider. Additionally, safeguard your health by strictly adhering to the prescribed dosage to mitigate the risk of liver damage. Your well-being is paramount, so please feel free to voice any questions or concerns you may have. Your health journey is important to us, and we are here to support you every step of the way.",
  //     price: 36,
  //     rating: 5,
  //     totalReview: 12,
  //     brand: "GSK",
  //     category: "Analgesics and antipyretics",
  //     stock: 32,
  //     document: 20,
  //     isDeliveryFree: false,
  //     fav: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  //   {
  //     _id: "1ff9b0c2-d0b5-4bf4-a44d-8a441bd44fc1",
  //     shopId: "6e097319-04c9-4c89-8f4e-42bef7e9c5e8",
  //     name: "Apidone",
  //     image: img6,
  //     description:
  //       "Apidone Syrup ( Chlorpheniramine 2 mg + Dexamethasone 0.5 mg ) 125 mL",
  //     price: 15,
  //     rating: 3,
  //     totalReview: 12,
  //     brand: "AMOUN",
  //     category: "treatment and prevention",
  //     stock: 43,
  //     document: 31,
  //     isDeliveryFree: true,
  //     fav: false,
  //     cart: false,
  //     quantity: 1,
  //   },
  // ];

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-full sm:max-w-5xl">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow-3xl rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal font-sans tracking-wide">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                >
                  Medicine Name
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
                  Brand
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
            {matchedMedicines.map((product) => {
              return (
                <tbody key={product._id}>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white font-body font-medium text-sm">
                      <Link to={`/productDetails/${product._id}`}>
                        <div className="flex items-center w-24 sm:w-full">
                          <div className="flex-shrink-0">
                            <a href="/" className="block relative">
                              <img
                                alt="User Avatar"
                                src={product.image}
                                className="mx-auto object-cover rounded-full h-10 w-10"
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {product.name.substr(0, 12)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {product.category}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {product.brand}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {product.price}£
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                      <td>
                        <div className="flex align-center justify-center">
                          <button
                            className="hover:bg-teal-400 text-gray-900 hover:text-teal-50 p-2 rounded-full transition duration-150 ease-in-out"
                            title="Add to Wishlist"
                            onClick={() =>
                              handleToggleWishlist(product._id, product)
                            }
                          >
                            <svg
                              className="w-5 h-5  transition duration-150 ease-in-out"
                              // fill="none"
                              fill={product.fav ? "teal" : "none"}
                              stroke={product.fav ? "none" : "teal"}
                              // stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          className="flex py-2 px-3 text-sm rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700"
                          title="Add to Wishlist"
                          onClick={() => handleAddToCart(product._id, product)}
                        >
                          Add to Cart
                        </button>
                      </td>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListOfMedicinesInPrescription;
