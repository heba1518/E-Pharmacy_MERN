import React, { useState } from "react";


const QuantityButton = ({product, updateQuantity, value}) => {
  const [count, setCount] = useState(product.quantity);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    product.quantity = count
    updateQuantity(product._id, product)
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1); 
      product.quantity = count
      updateQuantity(product._id, product)    
    }
  };


  return (
    <div className={`flex justify-between align-center items-center rounded w-32  r text-base sm:text-lg font-medium tracking-wide leading-6 transition duration-150 ease-in-out border border-teal-400 focus:outline-none md:w-40 ${value? 'h-9': 'h-12'}`}>
      <div onClick={incrementCount}>
        <i className="fas fa-plus m-1 py-2 px-4 cursor-pointer font-normal text-teal-600"></i>
      </div>

      <span className="mx-2 text-center w-2 text-gray-900 md:w-8 font-medium">
        {product.quantity}
      </span>

      <div onClick={decrementCount}>
        <i className="fas fa-minus m-1 py-2 px-4 cursor-pointer font-normal text-teal-600"></i>
      </div>
    </div>
  );
};

export default QuantityButton;
