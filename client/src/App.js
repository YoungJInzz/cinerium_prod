import React, { memo } from "react";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Serch from "./components/serch";
import Footer from "./components/footer";
import BookingPage from "./pages/bookingpage";
import Signup from "./components/signup";
import { Route } from "react-router-dom";
import TimetableByCinemaContainer from "./containers/timetableByCinemaContainer";
import BookingContainer from "./containers/BookingContainer";
import TestPage from "./pages/testPage";
const App = memo(() => {
  return (
    <>
      <Route path="/" component={TestPage} />
      <Route path="/booking" exact={true} component={BookingPage} />
      <Route
        path="/cinema"
        exact={true}
        component={TimetableByCinemaContainer}
      />

      {/* <div>
        <BookingPage />
      </div> */}
    </>
  );
});

export default memo(App);
