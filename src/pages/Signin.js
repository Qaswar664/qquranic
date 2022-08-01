import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// import "./SinginC.css";
import axios from "axios";
import { UserContext } from "../App";
import Navbar from "../components/Navbar";
import SigninC from "../components/SigninC";
import Footer from "../components/Footer";
import headerbg from "../assets/headerbg.webp";

const Signin = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Signin = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (!email || !password) {
      alert("please fill email and password properly frontend");
    } else {
      await axios
        .post("/signin", user)
        .then((res) => {
          alert(res.data.message);
          //localStorage.setItem("token", "new");
          dispatch({ type: "USER", payload: true });
          alert("Login success frontend");
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

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
            <h1 className="mb-3 page-header-text">Login/Sign In</h1>
          </div>
        </div>
      </div>
      {/* page header end */}

      <section className="signin-section">
        <div className="container signin-container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="signin-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    To Explore More <br /> Sign In.
                  </h1>
                  {/* <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p> */}
                  <figure>
                    <img
                      src="./images/hero1.png"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="signup-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 mt-5 signup-input-feild">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 signup-input-feild">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          placeholder="Password"
                          value={user.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100 mt-3"
                      onClick={Signin}
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signin;
