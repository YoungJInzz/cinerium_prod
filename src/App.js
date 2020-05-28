import React, { memo } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Serch from "./components/serch";
import Footer from "./components/footer";
import BookingPage from "./pages/bookingpage";
import Signup from "./components/signup";
import { Route, Switch } from "react-router-dom";
import TimetableByCinemaContainer from "./containers/timetableByCinemaContainer";
import BookingContainer from "./containers/bookingContainer";
import BookingConatainerFromTimetable from "./containers/bookingFromTimetableContainer";
import TestPage from "./pages/testPage";
const App = memo(() => {
  return (
    <>
      <Header />
      {/* <TestPage /> */}
      <Route path="/timetable" component={TimetableByCinemaContainer} />
      <Route path="/booking" component={BookingContainer} />
      <Route
        path="/bookingFromTimetable"
        component={BookingConatainerFromTimetable}
      />
      {/* <div>
        <BookingPage />
      </div> */}
    </>
  );
});

export default memo(App);
