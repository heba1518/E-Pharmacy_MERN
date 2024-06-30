import React,{useState} from "react";
import { Link, useParams } from "react-router-dom";
import QuantityButton from "../Common/QuantityButton";

// import ShowRating from '../Common/ShowRating';
import products, { updateQuantity } from "../../Data/products";

// import Rate from './Rate';
const ProductInfo = () => {
  const { productId } = useParams();
  const [pro, setPro] = useState(products);
  const product = products.find((product) => product._id === productId);

  const updateProducts = (id, newData) => {
    const index = products.findIndex((item) => item._id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...newData };
      setPro(products);
      localStorage.setItem("products", JSON.stringify(products));
      return true;
    }
    return false;
  };


  const handleAddToCart = (id, product) => {
    product.cart = true;
    const updated = updateProducts(id, product);

  };

  return (
    <div className="mx-auto flex flex-wrap justify-between">
      <img
        alt="ecommerce"
        className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={product.image}
      />
      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-teal-500 text-3xl font-display title-font font-medium mb-2">
          {product.name}
        </h1>
        <h2 className="text-sm title-font text-gray-800 tracking-widest mb-2">
          Brand: {product.brand}
        </h2>
        {/* <div className="mb-2">
          <ShowRating value={product.rating} />
          {/* <Rate/> */}
        {/* </div> */}
        <p className="leading-relaxed tracking-wide text-gray-800 font-sans h-20 overflow-hidden">
          {product.description}
        </p>
  
        <div className="flex mt-4 items-center pb-4 border-b-2 border-gray-100 mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">
            {product.price}£
          </span>
        </div>
        <div className="flex flex-wrap gap-3 align-center">
          <QuantityButton
            product={product}
            updateQuantity={updateQuantity}
            value={false}
          />

          
            <button class="flex flex-wrap items-center py-2 px-4 text-lg rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700"onClick={() => handleAddToCart(product._id, product)}>
              <i class="fas fa-cart-plus"></i> &nbsp; Add To Cart
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
