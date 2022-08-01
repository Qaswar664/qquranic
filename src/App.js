import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import FindTutor from "./pages/FindTutor";
import PricePlan from "./pages/PricePlan";
import HowItWorks from "./pages/HowItWorks";
import Quran from "./pages/Quran";
import Qaida from "./pages/Qaida";
import Aboutus from "./pages/Aboutus";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ToS from "./pages/ToS";
import Testimonials from "./pages/Testimonials";
import FaQ from "./pages/FaQ";
import WhyUS from "./pages/WhyUs";
import UseApp from "./pages/UseApp";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Logout from "./components/Logout";
import Error from "./pages/Error";

import { initialState, reducer } from "./reducer/UseReducer";
// 1 context api
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/findtutors" component={FindTutor}></Route>
          <Route path="/priceplan" component={PricePlan}></Route>
          <Route path="/howitworks" component={HowItWorks}></Route>
          <Route path="/quran" component={Quran}></Route>
          <Route path="/qaida" component={Qaida}></Route>
          <Route path="/aboutus" component={Aboutus}></Route>
          <Route path="/aboutme" component={Aboutme}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/courses" component={Courses}></Route>
          <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
          <Route path="/tos" component={ToS}></Route>
          <Route path="/testimonials" component={Testimonials}></Route>
          <Route path="/whyus" component={WhyUS}></Route>
          <Route path="/faqs" component={FaQ}></Route>
          <Route path="/useapp" component={UseApp}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route component={Error}></Route>
        </Switch>
      </UserContext.Provider>
    </>
  );
};

export default App;
