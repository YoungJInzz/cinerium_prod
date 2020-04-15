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
  selectAdult,
  selectTeen,
  selectSenior,
} from "../modules/booking";
import Booking from "../components/booking";

const BookingConatainer = ({
  person,
  movie,
  theater,
  timeData,
  region,
  regiontheater,
  movielist,
  theaterlist,
  date,
  currentStep,
  seatObj,
  screeninfo,
  selectMovie,
  selectRegion,
  selectTheater,
  selectScreen,
  selectDate,
  moveToNext,
  moveToBefore,
  selectAdult,
  selectTeen,
  selectSenior,
}) => {
  return (
    <Booking
      person={person}
      movie={movie}
      theater={theater}
      timeData={timeData}
      region={region}
      regiontheater={regiontheater}
      movielist={movielist}
      theaterlist={theaterlist}
      date={date}
      currentStep={currentStep}
      seatObj={seatObj}
      screeninfo={screeninfo}
      selectMovie={selectMovie}
      selectRegion={selectRegion}
      selectDate={selectDate}
      selectTheater={selectTheater}
      selectScreen={selectScreen}
      moveToBefore={moveToBefore}
      moveToNext={moveToNext}
      selectAdult={selectAdult}
      selectTeen={selectTeen}
      selectSenior={selectSenior}
    />
  );
};

export default connect(
  ({ booking }) => ({
    person: booking.person,
    movie: booking.movie,
    theater: booking.theater,
    timeData: booking.timeData,
    region: booking.region,
    date: booking.date,
    currentStep: booking.currentStep,
    seatObj: booking.seatObj,
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
    selectAdult,
    selectTeen,
    selectSenior,
  }
)(BookingConatainer);
