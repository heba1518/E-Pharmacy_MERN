import React, { useState } from 'react';
import products from '../../Data/products';

const Categories = () => {
  const categories = [...new Set(products.map((product) => product.category))]

  
  return (
    <div className="mt-12">
      {/* <input type="hidden" id="hiddenInput" value={filteredProducts} /> */}
      <h1 className="px-3 text-lg font-display font-semibold mb-5 text-teal-700">
        Product Category
      </h1>
      <div className=" ">
        {categories.map((singleCategory) => (
           <div className="m-2" onClick={()=>{<cat cat={singleCategory}/>}}>
            {/* <input type="hidden" id="hiddenInput" value={singleCategory} /> */}
            <cat cat={singleCategory}/>
            <ul>
              <li className="bg-teal-50 hover:bg-teal-100 shadow-4xl my-4 p-2 cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="text-gray-800 whitespace-no-wrap tracking-wide">
                    {singleCategory}
                  </p>
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
