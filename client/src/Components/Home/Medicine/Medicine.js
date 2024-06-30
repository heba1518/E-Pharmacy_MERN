import React from 'react';
import Products from '../../Products/Products';
import Categories from '../../Categories/Categories';
import NavBar from '../NavBar/NavBar';
const Medicines = () => {
 
  return (
    <div>
    <NavBar/>
    <div className="flex md:flex-row flex-col-reverse mx-auto container px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      
    <div className="md:w-3/12 bg-white order-first">
      <Categories />
    </div>

    <div className="md:w-10/12 order-last">
      <Products />
    </div>
    </div>
    </div>
  );
};

export default Medicines;