import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {

  return (
    <>
      <li>
        <Link to="/allShop"> 
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
          >
          Pharmacies
        </a>
          </Link>
      </li>
      <li>
        <a
          href="#features"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="/medicine"
          aria-label="Product pricing"
          title="Product pricing"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Medicine
        </a>
      </li>
      <li>
        <a
          href="#blog"
          aria-label="Blog"
          title="Blog"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Blog
        </a>
      </li>
    </>
  );
};

export default NavLinks;
