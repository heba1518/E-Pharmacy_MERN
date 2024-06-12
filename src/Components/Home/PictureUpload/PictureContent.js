import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import productsLocal from "../../../Data/products";

const ListOfMedicinesInPrescription = () => {
  const [setSearchItem] = useState("");
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

  useEffect(() => {
    const matchedMedicines = productsLocal.filter((medicine) =>
      extractedWordsArray.includes(medicine.name)
    );
    setFilteredProducts(matchedMedicines);
  }, [extractedWordsArray]);

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  const isActive = (product) => {
    return product.fav;
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

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
            {filteredProducts.map((product) => {
              return (
                <tbody key={product._id}>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white font-body font-medium text-sm">
                      <Link to={`/productDetails/${product._id}`}>
                        <div className="flex items-center w-24 sm:w-full">
                          <div className="flex-shrink-0">
                            <img
                              alt="User Avatar"
                              src={product.image}
                              className="mx-auto object-cover rounded-full h-10 w-10"
                            />
                          </div>
                          <div className="ml-3">
                            <a href={product.href}>
                              <p className="text-gray-900 whitespace-no-wrap">
                                {product.name}
                              </p>
                            </a>
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
