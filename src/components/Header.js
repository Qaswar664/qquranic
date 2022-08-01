import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import axios from "../API/axios";
import { NavLink } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Signup = (e) => {
    e.preventDefault();
    const { name, email, phone, course, country } = user;
    if (name && email && phone && course && country) {
      axios.post("/trail", user).then((res) => {
        alert(res.data.message);
        history.push("/");
      });
    } else {
      alert("Please fill all fields correctly!");
    }
  };
  return (
    <>
      <header className="header-section  ">
        <section className="container header-container ">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Learn Quran with tajweed <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Whether you are proficient in reading the Quran and want to
                teach others or whether you wish to learn, create an account and
                begin your journey towards success.
              </p>
              <h3 className="header-btn-title">Want to know more about us?</h3>
              <div className="two btn">
                <button className="btn">
                  <NavLink
                    className="btn-style btn-style1 btn-style-border"
                    to="/aboutus"
                  >
                    About Us
                  </NavLink>
                </button>
                <button className="btn ">
                  <NavLink
                    className="btn-style2 btn-style-border"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </button>
              </div>
            </div>

            {/*  --------------- header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side ">
              <form class="row g-3 form-row shadow p-3 mb-5  rounded">
                <div class="col-12 form-rows">
                  <label for="inputName" class="form-label">
                    Student Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter your name here"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-12 form-rows">
                  <label for="inputFName" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter email here"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-12 form-rows">
                  <label for="inputNumber" class="form-label">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Please enter number with country code"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>

                <div class="col-md-6 form-rows">
                  <label for="inputState" class="form-label">
                    Course
                  </label>
                  <select
                    name="course"
                    id="course"
                    class="form-select"
                    value={user.course}
                    onChange={handleChange}
                  >
                    <option selected>Select Course</option>
                    <option>Basic Qaida</option>
                    <option>Quran with Tajweed</option>
                    <option>Quran Memorization</option>
                    <option>Quran Translation</option>
                    <option>Quran Tafseer</option>
                    <option>Namaz, Kalma, Dua</option>
                  </select>
                </div>
                <div class="col-md-6 form-rows">
                  <label for="inputCity" class="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="country"
                    id="country"
                    placeholder="Entry your country name"
                    value={user.country}
                    onChange={handleChange}
                  />
                </div>

                <div class="col-12 form-rows">
                  <button
                    type="submit"
                    class="btn-style3 btn-style-border"
                    onClick={Signup}
                  >
                    Get Trial
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
