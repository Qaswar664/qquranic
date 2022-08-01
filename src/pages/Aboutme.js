import React from "react";
import Navbar from "../components/Navbar";
import AboutmeC from "../components/AboutmeC";
import Footer from "../components/Footer";
import headerbg from "../assets/headerbg.webp";

const Aboutme = () => {
  return (
    <>
      <Navbar />

      {/* page header start */}
      <div
        className="p-5 text-center bg-image"
        style={{
          // backgroundImage:
          //   "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          backgroundImage: `url(${headerbg})`,
          height: 400,
        }}
      >
        <div className="d-flex page-header-title justify-content-center align-items-center h-100">
          <div className="page-header-text">
            <h1 className="mb-3 page-header-text">About me/ Profile </h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <Footer />
    </>
  );
};

export default Aboutme;
