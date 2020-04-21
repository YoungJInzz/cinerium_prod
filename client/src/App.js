import React, { memo } from "react";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Serch from "./components/serch"
import Footer from "./components/footer";
import BookingPage from "./pages/bookingpage";
import Signup from "./components/signup";

const App = memo(() => {
  return (
    <>
      <div>
        <Navigation />
        {/* <Signup/> */}
        <Main />
        <Serch/>
        <Footer />
      </div>
      
      <div>
        <BookingPage />
      </div>
    </>
  );
});

export default memo(App);
