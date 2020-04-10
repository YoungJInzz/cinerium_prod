import React, { memo } from "react";
import Navigation from "./components/navigation";
import Main from "./components/main";
import Footer from "./components/footer";
import BookingPage from "./pages/bookingpage";

const App = memo(() => {
  return (
    <>
      {/* <div className="App">
        <>
          <Navigation />
          <Main />
          <Footer />
        </>
      </div> */}

      <div>
        <BookingPage />
      </div>
    </>
  );
});

export default memo(App);
