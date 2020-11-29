import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faYoutube,
  faLinkedin,
  faFacebookSquare,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBone,
  faDog,
  faHeart,
  faUserTie,
  faCalendarAlt,
  faChevronDown,
  faQuestionCircle,
  faMedal,
  faAddressBook,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { Component } from "react";
import { ProvideAuth } from "./Auth";
// Pages
import Mainpage from "./pages/MainPage";
import Notfound from "./pages/NotfoundPage";
import Pricingpage from "./pages/PricingPage";
import YourBookingpage from "./pages/YourBookingPage";
import Signinpage from "./pages/Signinpage";
import Createpage from "./pages/CreateAccountPage";
import Helppage from "./pages/Helppage";
import Checkoutpage from "./pages/Checkoutpage";
import Confirmationpage from "./pages/Confirmationpage";
import Createsuccesspage from "./pages/Createsuccesspage";
import Testpage from "./pages/Testpage";
import Googlesucpage from "./pages/Googlesucpage";

library.add(
  fab,
  faQuestionCircle,
  faMedal,
  faAddressBook,
  faBone,
  faDog,
  faHeart,
  faUserTie,
  faCalendarAlt,
  faFacebook,
  faYoutube,
  faLinkedin,
  faChevronDown,
  faArrowDown,
  faGoogle,
  faFacebookSquare
);

// Redirect to at the end is like a default of switch,
// if none matches redirect to error page. so the url can be switched to 404 error page
//Todo , you booking should be accessible only when user is loged in,similiar for pricing page when btn is clicked
// and users not logged in redirect them to login page.
function App() {
  // find out what all of these are doing below!!!!!!!!!!!!!!!!!!
  return (
    <Router>
      <ProvideAuth>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/googleauth" component={Googlesucpage} />
          <Route exact path="/pricing" component={Pricingpage} />
          <Route exact path="/yourbooking" component={YourBookingpage} />
          <Route exact path="/signin" component={Signinpage} />
          <Route exact path="/help" component={Helppage} />
          <Route exact path="/createaccount" component={Createpage} />
          <Route exact path="/checkout" component={Checkoutpage} />
          <Route exact path="/confirmation" component={Confirmationpage} />
          <Route exact path="/createsuccess" component={Createsuccesspage} />
          <Route exact path="/test" component={Testpage} />
          <Route exact path="/404" component={Notfound} />
          <Redirect to="/404" />
        </Switch>
      </ProvideAuth>
    </Router>
  );
}
export default App;
