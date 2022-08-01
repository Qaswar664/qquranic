import React from "react";
import { NavLink } from "react-router-dom";
import "./Error404.css";
import Error404 from "../components/Error404";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headerbg from "../assets/headerbg.webp";

const Error = () => {
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
            <h1 className="mb-3 page-header-text">Error</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <NavLink to="/">back to homepage</NavLink>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Error;
