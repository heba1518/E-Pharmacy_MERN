import React from "react";
import Footer from "../../Components/Home/Footer/Footer";
import Header from "../../Components/Home/NavBar/Header";
import NavBar from "../../Components/Home/NavBar/NavBar";
import PictureContent from "../../Components/Home/PictureUpload/PictureContent";

const PictureUpload = () => {
  return (
    <>
      <Header />
      <NavBar />
      <PictureContent />
      <Footer />
    </>
  );
};

export default PictureUpload;
