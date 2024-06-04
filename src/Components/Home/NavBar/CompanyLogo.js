import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo5.png";

const CompanyLogo = () => {
  return (
    <div>
      <Link
        to="/"
        href="/"
        aria-label="Enaya"
        title="Enaya"
        className="inline-flex items-center mr-5"
      >
        <img src={logo} alt="logo" className="w-20 h-15" />
        <span className="text-xl chonburi-regular font-display tracking-wide text-teal-400 uppercase">
          Enaya
        </span>
      </Link>
    </div>
  );
};

export default CompanyLogo;
