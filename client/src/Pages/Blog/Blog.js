import React from "react";
import Footer from "../../Components/Home/Footer/Footer";
import Header from "../../Components/Home/NavBar/Header";
import NavBar from "../../Components/Home/NavBar/NavBar";
import Blog from "../../Components/Blog/Blog";

const PictureUpload = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section className="px-4 py-3 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl border-t border-gray-200">
        <Blog />
      </section>
      <Footer />
    </>
  );
};

export default PictureUpload;
