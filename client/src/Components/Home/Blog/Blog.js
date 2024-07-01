// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import './blog.css'
import img1 from '../../Blog/cf.jpg'
import img2 from '../../Blog/2.jpg'
import img3 from '../../Blog/3.jpg'
const Blog = () => {
  return (
    <div id="blog">
      <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h2 className="font-display text-center text-4xl mb-4 font-semibold text-teal-500 tracking-wide">
          Our Latest News
        </h2>
        <p className="font-sans text-center mb-12 text-gray-700"></p>
        <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src= {img1}
              class="object-cover w-full h-64"
              alt=""
            />
            <div class="p-5 mb-4">
              <p class="pb-4 mb-3 font-sans text-xs font-semibold tracking-wide uppercase border-b border-gray-300 ">
                <a
                  href="/"
                  class="pr-4 text-teal-500 transition-colors duration-200 border-r border-gray-300 hover:text-teal-accent-700"
                  aria-label="Category"
                  title="date"
                >
                  28 JUN 2024
                </a>
                <span class="px-4 text-gray-600">Dr. Emma Hammett</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                class="inline-block pt-3 mb-3 text-2xl font-medium leading-5 text-gray-700 transition-colors duration-200 font-display"
              >
                How to save a knocked out tooth?
              </a>
              <p class="pb-4 mb-2 text-gray-700">
              An injury to the tooth is very scary but can happen very easily whilst running or playing.
              </p>
              <Link to={`/Blog`}>
                <a
                  href="#_"
                  class="px-4 py-2 tracking-wide text-white transition-all bg-teal-500 rounded-sm shadow-lg cursor-pointer hover:text-white hover:bg-teal-500"
                >
                  Read More{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    class="svg-inline--fa fa-arrow-right fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    ></path>
                  </svg>
                </a>
              </Link>{" "}
            </div>
          </div>
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src={img2}
              class="object-cover w-full h-64"
              alt=""
            />
            <div class="p-5 mb-4">
              <p class="pb-4 mb-3 font-sans text-xs font-semibold tracking-wide uppercase border-b border-gray-300 ">
                <a
                  href="/"
                  class="pr-4 text-teal-500 transition-colors duration-200 border-r border-gray-300 hover:text-teal-accent-700"
                  aria-label="Category"
                  title="date"
                >
                  28 FEB 2024
                </a>
                <span class="px-4 text-gray-600">Dr Ahmed Saber</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                class="inline-block pt-3 mb-3 text-2xl font-medium leading-5 text-gray-700 transition-colors duration-200 font-display"
              >
                Support for Carers
              </a>
              <p class="pb-4 mb-2 text-gray-700">
              Unpaid carers are a lifeline to those they look after and are of huge benefit to society as a whole. 
              </p>
              <Link to={`/Blog`}>
                <a
                  href="#_"
                  class="px-4 py-2 tracking-wide text-white transition-all bg-teal-500 rounded-sm shadow-lg cursor-pointer hover:text-white hover:bg-teal-500"
                >
                  Read More{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    class="svg-inline--fa fa-arrow-right fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    ></path>
                  </svg>
                </a>
              </Link>{" "}
            </div>
          </div>
          <div class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src={img3}
              class="object-cover w-full h-64"
              alt=""
            />
            <div class="p-5 mb-4">
              <p class="pb-4 mb-3 font-sans text-xs font-semibold tracking-wide uppercase border-b border-gray-300 ">
                <a
                  href="/"
                  class="pr-4 text-teal-500 transition-colors duration-200 border-r border-gray-300 hover:text-teal-accent-700"
                  aria-label="Category"
                  title="date"
                >
                  5 SEP 2023
                </a>
                <span class="px-4 text-gray-600">Dr Sara Ramsy</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                class="inline-block pt-3 mb-3 text-2xl font-medium leading-5 text-gray-700 transition-colors duration-200 font-display"
              >
                Latest Advances in Asthma Treatment
              </a>
              <p class="pb-4 mb-2 text-gray-700">
              There have been recent updates in asthma treatments, including the MART treatment plan. 
              </p>
              <Link to={`/Blog`}>
                <a
                  href="#_"
                  class="px-4 py-2 tracking-wide text-white transition-all bg-teal-500 rounded-sm shadow-lg cursor-pointer hover:text-white hover:bg-teal-500"
                >
                  Read More{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    class="svg-inline--fa fa-arrow-right fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    ></path>
                  </svg>
                </a>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;