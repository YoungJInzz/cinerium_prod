import React from "react";
import { connect } from "react-redux";
import {
  selectMovie,
  selectRegion,
  selectTheater,
  selectDate,
  selectScreen,
  moveToNext,
  moveToBefore,
} from "../modules/booking";
import Booking from "../components/booking";

const BookingConatainer = ({
  movie,
  theater,
  timeData,
  region,
  regiontheater,
  movielist,
  theaterlist,
  date,
  currentStep,
  screeninfo,
  selectMovie,
  selectRegion,
  selectTheater,
  selectScreen,
  selectDate,
  moveToNext,
  moveToBefore,
}) => {
  return (
    <Booking
      movie={movie}
      theater={theater}
      timeData={timeData}
      region={region}
      regiontheater={regiontheater}
      movielist={movielist}
      theaterlist={theaterlist}
      date={date}
      currentStep={currentStep}
      screeninfo={screeninfo}
      selectMovie={selectMovie}
      selectRegion={selectRegion}
      selectDate={selectDate}
      selectTheater={selectTheater}
      selectScreen={selectScreen}
      moveToBefore={moveToBefore}
      moveToNext={moveToNext}
    />
  );
};

export default connect(
  ({ booking }) => ({
    movie: booking.movie,
    theater: booking.theater,
    timeData: booking.timeData,
    region: booking.region,
    date: booking.date,
    currentStep: booking.currentStep,
    regiontheater: booking.regiontheater,
    movielist: booking.movielist,
    theaterlist: booking.theaterlist,
    screeninfo: booking.screeninfo,
  }),
  {
    selectMovie,
    selectRegion,
    selectTheater,
    selectDate,
    selectScreen,
    moveToBefore,
    moveToNext,
  }
)(BookingConatainer);
