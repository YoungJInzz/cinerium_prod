import React from "react";
import Dates from "./date";
import MovieSection from "./movieSection";
import TheatherSection from "./theatherSection";
import TimeSection from "./timeSection";
import BookInfo from "./bookInfo";

const Booking = ({
  movie,
  theater,
  timeData,
  region,
  regiontheater,
  movielist,
  theaterlist,
  date,
  screeninfo,
  selectMovie,
  selectRegion,
  selectTheater,
  selectDate,
  selectScreen,
}) => {
  return (
    <div>
      <div className="booking-container">
        <div className="step1">
          <MovieSection
            movie={movie}
            movielist={movielist}
            selectMovie={selectMovie}
            selectScreen={selectScreen}
          />
          <TheatherSection
            region={region}
            selectRegion={selectRegion}
            theater={theater}
            theaterlist={theaterlist}
            regiontheater={regiontheater}
            selectTheater={selectTheater}
            selectScreen={selectScreen}
          />
          <Dates
            date={date}
            selectDate={selectDate}
            selectScreen={selectScreen}
          />
          <TimeSection
            timeData={timeData}
            selectScreen={selectScreen}
            screeninfo={screeninfo}
          />
        </div>
      </div>
      <BookInfo
        movie={movie}
        theater={theater}
        timeData={timeData}
        date={date}
        screeninfo={screeninfo}
      />
    </div>
  );
};

export default Booking;
