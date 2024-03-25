import React from "react";
import './Hero.css';
const Hero = () => {
  return (
    <section>
      <div className="w-full px-3 antialiased lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div class="container py-24 mx-auto text-center sm:px-4 font-sans">
            <h1 class="text-4xl font-semibold font-display leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none">
              <span
                class="relative inline-block text-transparent text-gray-800 tracking-normal"
                id="test"
              >
                Your medication, delivered
              </span>
            </h1>
            <div class="max-w-lg mx-auto mt-6 sm:mt-8 text-sm text-center text-gray-600 tracking-wide sm:text-base md:max-w-xl md:text-lg xl:text-xl">
              Say goodbye to all your healthcare worries with us
            </div>
            <div class="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full border-2 border-teal-300 shadow-3xl">
              <input
                type="text"
                name="search"
                placeholder="Search your medicine from here"
                class="w-full h-12 px-6 py-2 font-medium text-teal-800 placeholder-gray-500 tracking-wide focus:outline-none border-none"
              />
              <span class="relative top-0 right-0 block "><button type="button" class="hero-search-button">Search</button></span>
            </div>
            <div class="mt-12 text-base tracking-wider text-teal-300">
              Take care of your healthcare now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
