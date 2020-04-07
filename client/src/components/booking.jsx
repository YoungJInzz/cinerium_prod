import React from "react";
import Dates from "./date";
import MovieSection from "./movieSection";
import TheatherSection from "./theatherSection";
import TimeSection from "./timeSection";
import BookInfo from "./bookInfo";

const Booking = ({
  movie,
  theater,
  screenId,
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
          <Dates date={date} selectDate={selectDate} />
          <TimeSection
            screenId={screenId}
            selectScreen={selectScreen}
            screeninfo={screeninfo}
          />
        </div>
      </div>
      <BookInfo
        movie={movie}
        theater={theater}
        screenId={screenId}
        date={date}
        screeninfo={screeninfo}
      />
    </div>
  );
};

export default Booking;
