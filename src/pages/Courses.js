import React, { useState } from "react";
import "./PageHeader.css";
import "./Courses.css";
import coursesApi from "../API/coursesApi";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import headerbg from "../assets/bg-1.jpeg";
import Footer from "../components/Footer";
import courses from "../assets/courses-image.png";

const Course = () => {
  const [serviceData] = useState(coursesApi);
  return (
    <>
      <Navbar />

      {/* page header start */}
      <div className="bgdiv">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: `url(${headerbg})`,
          }}
        >
          <div className="d-flex page-header-title justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">Courses</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="course-section-1">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-6  courses-leftside d-flex justify-content-center flex-start flex-column">
              <h1 className="title">Course We Offere</h1>
              <h3 className="heading">Basic to advance islamic courses.</h3>
              <p className="description">
                Q Quranic provide different islamic courses inlcuding basic to
                advance level. We teach these courses we offer very well through
                a step by step process of teaching and learning.
              </p>

              <br />
              <h3 className="heading">
                Contact us to start learning from your selected tutor!
              </h3>
              <div className="text-left col-3 mt-2 findtutor-button">
                <button className="btn mt-3" type="button">
                  <NavLink
                    className="btn-findtutor p-3 btn-findtutor-border"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </button>
              </div>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-4  courses-rightside d-flex justify-content-center flex-end flex-column">
              <img src={courses} alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

      <section className="course-section-2">
        <div className="container course-container justify-content-center">
          <h1 className="main-heading text-center fw-bold">
            Different Islamic Courses
          </h1>
          <h3 className="sub-heading text-center">
            To see detail of any course, just click on course name it.
          </h3>

          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 text-center courses-container-subdivP"
                    key={id}
                  >
                    <i className={`course-image-p ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="course-description">{info}</p>
                    <div className="button-row">
                      <button className="btn ">
                        <NavLink
                          className="btn-style1 p-3 btn-howitworks-border"
                          to="#"
                        >
                          Course Detail
                        </NavLink>
                      </button>
                      <button className="btn ">
                        <NavLink
                          className="btn-style2 p-3 btn-howitworks-border"
                          to="/signup"
                        >
                          Get Trial
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Course;
