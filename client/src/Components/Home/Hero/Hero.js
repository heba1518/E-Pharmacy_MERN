import React from "react";
import "./Hero.css";
const Hero = () => {
  // const handleInputChange()
  const handleInputChange = (e) => {
    let searchTerm = e.target.value;
    localStorage.setItem("serch", JSON.stringify(searchTerm));
  };
  return (
    <section id="search">
      <div className="w-full px-3 antialiased lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div class="container py-24 mx-auto text-center sm:px-4 font-sans">
            <h1 class="text-5xl font-display jost-semibold leading-10 tracking-tight text-gray-800 sm:text-5xl">
              <span
                class="relative inline-block text-transparent text-5xl leading-10 text-gray-800 tracking-normal sm:text-5xl sm:leading-none"
                id="test"
              >
                Your medication, delivered
              </span>
            </h1>
            <div class="mx-auto mt-6 sm:mt-8 text-sm text-center text-gray-500 tracking-wide sm:text-sm md:max-w-xl md:text-sm xl:text-lg">
              Say goodbye to all your healthcare worries with us
            </div>
            <div class="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full border-2 border-teal-500 shadow-xl">
              <input
                type="text"
                name="search"
                // value={searchItem}
                onChange={handleInputChange}
                placeholder="Search your medicine from here"
                class="w-full h-12 px-6 py-2 font-medium text-teal-800 placeholder-gray-400 tracking-wide focus:outline-none border-none"
              />
              <span class="relative top-0 right-0 block ">
                <button
                  type="button"
                  class="hero-search-button"
                  
                >
                  <a href="#features">

                  Search
                  </a>
                </button>
              </span>
            </div>
            <div class="mt-12 text-base tracking-wider text-teal-500">
              Take care of your healthcare now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
