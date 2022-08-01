import React from "react";
import "./FindTutors.css";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import headerbg from "../assets/bg-1.jpeg";
import tutors from "../assets/tutors.svg";
import Footer from "../components/Footer";

const FindTutor = () => {
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
          <div className="d-flex page-header-title text-center justify-content-center align-items-center h-100">
            <div className="page-header-text">
              <h1 className="mb-3 page-header-text">Tutors</h1>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="findtutor-section-1">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-6  findtutor-leftside d-flex justify-content-center flex-start flex-column">
              <h1 className="title">Find Your Tutor Here</h1>
              <h3 className="heading">We have experienced staff.</h3>
              <p className="description">
                Tutors at Q Quranic are very professional at their Quran
                teaching skills. They are all well education from Islamic
                education centers. <br />
                You can go through the below tutors profile and can contact the
                Q Quranic team to assign your choosin tutor on your preferable
                time.
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
            <div className="col-12 col-lg-4  findtutore-rightside d-flex justify-content-center flex-end flex-column">
              <img src={tutors} alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

      <section className="findtutor-section-2">
        <div className="container">
          <h1 className="main-heading text-center fw-bold">
            Professional Tutors In A List
          </h1>
          <h3 className="sub-heading text-center">
            To choose any tutor, contact us to start with choosen tutor.
          </h3>
          <div className="CardsMainDiv">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <tr>
                  <td>Education:</td>
                  <td>BSIT</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>Experience:</td>
                  <td>5 Year</td>
                </tr>
                <tr>
                  <td>Whatsapp:</td>
                  <td>+923040070085</td>
                </tr>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <tr>
                  <td>Education:</td>
                  <td>BSIT</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>Experience:</td>
                  <td>5 Year</td>
                </tr>
                <tr>
                  <td>Whatsapp:</td>
                  <td>+923040070085</td>
                </tr>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <tr>
                  <td>Education:</td>
                  <td>BSIT</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>Experience:</td>
                  <td>5 Year</td>
                </tr>
                <tr>
                  <td>Whatsapp:</td>
                  <td>+923040070085</td>
                </tr>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <tr>
                  <td>Education:</td>
                  <td>BSIT</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>Experience:</td>
                  <td>5 Year</td>
                </tr>
                <tr>
                  <td>Whatsapp:</td>
                  <td>+923040070085</td>
                </tr>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <tr>
                  <td>Education:</td>
                  <td>BSIT</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>Experience:</td>
                  <td>5 Year</td>
                </tr>
                <tr>
                  <td>Whatsapp:</td>
                  <td>+923040070085</td>
                </tr>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <tr>
                  <td>Education:</td>
                  <td>BSIT</td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>Experience:</td>
                  <td>5 Year</td>
                </tr>
                <tr>
                  <td>Whatsapp:</td>
                  <td>+923040070085</td>
                </tr>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FindTutor;
