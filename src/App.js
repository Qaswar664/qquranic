import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import FindTutor from "./pages/FindTutor";
import PricePlan from "./pages/PricePlan";
import HowItWorks from "./pages/HowItWorks";
import Quran from "./pages/Quran";
import Qaida from "./pages/Qaida";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ToS from "./pages/ToS";
import Testimonials from "./pages/Testimonials";
import FaQ from "./pages/FaQ";
import WhyUS from "./pages/WhyUs";
import UseApp from "./pages/UseApp";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initialState, reducer } from "./reducer/UseReducer";
import StudentDashboard from "./components/dashboards/student-dashboard/StudentDashboard";
import PrivateRoutes from "./routes/PrivateRoutes";
import Navbar from "./components/Navbar";

// 1 context api
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Switch>
        {/* <Route path="/student-dashboard" component={StudentDashboard}></Route> */}
           <PrivateRoutes/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/findtutors" component={FindTutor}></Route>
          <Route path="/priceplan" component={PricePlan}></Route>
          <Route path="/howitworks" component={HowItWorks}></Route>
          <Route path="/quran" component={Quran}></Route>
          <Route path="/qaida" component={Qaida}></Route>
          <Route path="/aboutus" component={Aboutus}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/courses" component={Courses}></Route>
          <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
          <Route path="/tos" component={ToS}></Route>
          <Route path="/testimonials" component={Testimonials}></Route>
          <Route path="/whyus" component={WhyUS}></Route>
          <Route path="/faqs" component={FaQ}></Route>
          <Route path="/useapp" component={UseApp}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route component={Error}></Route>
        </Switch>
      </UserContext.Provider>
      <ToastContainer />
    </>
  );
};

export default App;
