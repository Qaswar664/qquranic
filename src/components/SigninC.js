// import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import "./SinginC.css";
// import axios from "axios";
// import { UserContext } from "../App";

// const SigninC = () => {
//   const { state, dispatch } = useContext(UserContext);

//   const history = useHistory();

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const Signin = async (e) => {
//     e.preventDefault();
//     const { email, password } = user;
//     if (!email || !password) {
//       alert("please fill email and password properly frontend");
//     } else {
//       await axios
//         .post("/signin", user)
//         .then((res) => {
//           alert(res.data.message);
//           //localStorage.setItem("token", "new");
//           dispatch({ type: "USER", payload: true });
//           alert("Login success frontend");
//           history.push("/");
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <>
//       <section className="signin-section">
//         <div className="container signin-container">
//           <div className="row">
//             <div className="col-12 col-lg-10 mx-auto">
//               <div className="row">
//                 <div className="signin-leftside col-12 col-lg-5">
//                   <h1 className="main-heading fw-bold">
//                     To Explore More <br /> Sign In.
//                   </h1>
//                   {/* <p className="main-hero-para">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Deserunt eaque alias similique.
//                   </p> */}
//                   <figure>
//                     <img
//                       src="./images/hero1.png"
//                       alt="contatUsImg"
//                       className="img-fluid"
//                     />
//                   </figure>
//                 </div>

//                 {/* right side contact form  */}
//                 <div className="signup-rightside col-12 col-lg-7">
//                   <form method="POST">
//                     <div className="row">
//                       <div className="col-12 mt-5 signup-input-feild">
//                         <input
//                           type="email"
//                           name="email"
//                           id="email"
//                           className="form-control"
//                           placeholder="Email"
//                           value={user.email}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-12 signup-input-feild">
//                         <input
//                           type="password"
//                           name="password"
//                           id="password"
//                           className="form-control"
//                           placeholder="Password"
//                           value={user.password}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>

//                     <button
//                       type="submit"
//                       className="btn btn-style w-100 mt-3"
//                       onClick={Signin}
//                     >
//                       Sign In
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SigninC;

// // import React from "react";
// // import { NavLink } from "react-router-dom";

// // const SigninC = () => {
// //   return (
// //     <>
// //       <section className="signin">
// //         <div className="container mt-5">
// //           <div className="signin-content">
// //             <div className="signin-image">
// //               <figure>
// //                 <img src="./images/hero1.png" alt="signin img" />
// //               </figure>
// //               <NavLink to="/signup" className="signin-image-link">
// //                 Create a new accout1
// //               </NavLink>
// //             </div>

// //             <div className="signin-form">
// //               <h2 className="form-title">Sign In</h2>
// //               <form className="login-form" id="login-form">
// //                 <div className="form-group">
// //                   <label htmlFor="email"></label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     id="email"
// //                     autoComplete="off"
// //                     placeholder="Your email"
// //                   />
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="password"></label>
// //                   <input
// //                     type="password"
// //                     name="password"
// //                     id="password"
// //                     autoComplete="off"
// //                     placeholder="Your Password"
// //                   />
// //                 </div>

// //                 <div className="form-group form-button">
// //                   <input
// //                     type="submit"
// //                     name="signin"
// //                     id="signin"
// //                     className="form-submit"
// //                     value="Login"
// //                   />
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default SigninC;
