import React, { useEffect } from "react";
import Dates from "./date";
import MovieSection from "./movieSection";
import TheatherSection from "./theatherSection";
import TimeSection from "./timeSection";
import BookInfo from "./bookInfo";

const Booking = ({
  movie,
  theater,
  screen,
  region,
  regiontheater,
  movielist,
  theaterlist,
  screeninfo,
  selectMovie,
  selectTheater,
  selectScreen,
}) => {
  useEffect(() => {
    console.log("screeninfo");
  }, []);
  return (
    <div>
      <div className="booking-container">
        <div className="step1">
          <MovieSection movielist={movielist} selectMovie={selectMovie} />
          <TheatherSection
            region={region}
            theaterlist={theaterlist}
            regiontheater={regiontheater}
            selectTheater={selectTheater}
          />
          <Dates />
          <TimeSection screeninfo={screeninfo} />
        </div>
        <BookInfo movie={movie} />
      </div>
    </div>
  );
};

export default Booking;
