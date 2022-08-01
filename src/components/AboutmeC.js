import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./AboutmeC.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AboutmeC() {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  function LoginCheck(req, res) {
    console.log("before axioss ggget called frontend");
    axios
      .get("/aboutme")
      .then((res) => {
        console.log("after then caleed frontend");
        if (!res.data) {
          console.log("data not matched in frontend");
          alert("data not matched in frontend");
          console.log("after showing data not match alert frontned");
          history.push("/signin");
        } else {
          console.log("before profile data set succes frontend");
          setUserData(res.data);
          console.log("after profile data set succes frontend");
        }
      })
      .catch((error) => {
        console.log("set profile data error frontend");
        setUserData(error);
      });
  }
  useEffect(() => {
    LoginCheck({});
  }, []);

  return (
    <>
      <section className="aboutme-section mt-5">
        <div className="container aboutme-container">
          <form method="GET">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-image">
                  <img src="./images/hero1.png" alt="profile-pic" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-heading">
                  <h3>{userData.name}</h3>
                  <h4>{userData.work}</h4>
                  {/* <h4>{userData.name}</h4> */}
                  <p className="profile-rating mt-3 mb-5">Ranking</p>

                  <ul className="nav nav" role="tablist">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        to="/"
                        role="tab"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 edit-ptofile-button">
                <input
                  type="submit"
                  className="profile-edit-button"
                  value="edit profile"
                  name="btn-AddMore"
                />
              </div>
            </div>
            <div className="row">
              {/* left side link */}
              <div className="col-md-4">
                <div className="profile-links">
                  <p>Work Links</p>
                  <a href="/">youtube</a>
                  <a href="/">Facebook</a>
                  <a href="/">instagram</a>
                  <a href="/">twitter</a>
                  <a href="/">linkedin</a>
                </div>
              </div>

              {/* right side data toggle */}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="User id">User id</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">{userData._id}</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Contact</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">{userData.phone}</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Email</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">{userData.email}</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Profession</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">{userData.work}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AboutmeC;
