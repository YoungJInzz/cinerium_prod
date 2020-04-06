import React from "react";
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
  selectRegion,
  selectTheater,
  selectDate,
  selectScreen,
}) => {
  // useEffect(() => {
  //   console.log(theater);
  // }, [theater]);
  return (
    <div>
      <div className="booking-container">
        <div className="step1">
          <MovieSection
            movie={movie}
            movielist={movielist}
            selectMovie={selectMovie}
          />
          <TheatherSection
            region={region}
            selectRegion={selectRegion}
            theater={theater}
            theaterlist={theaterlist}
            regiontheater={regiontheater}
            selectTheater={selectTheater}
          />
          <Dates />
          <TimeSection screeninfo={screeninfo} />
        </div>
        <BookInfo movie={movie} theater={theater} />
      </div>
    </div>
  );
};

export default Booking;
