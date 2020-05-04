import React, { useEffect } from "react";
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
  handleseatSelected,
  handleseatSelectedIndex,
  handleSeatArr,
  getInitScreens,
  getScreens,
  initShowTimes,
  initTotal,
  selectScreenName,
  screenName,
  setTotalSeat,
  getSeatTable,
  changeTicketState,
} from "../modules/booking";
import Booking from "../components/booking";

const BookingConatainer = ({
  seatTable,
  selectScreenName,
  initShowTimes,
  initTotal,
  group,
  dates,
  cinemas,
  movies,
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
  seatArr,
  userId,
  seatSelected,
  seatSelectedIndex,
  handleseatSelected,
  handleseatSelectedIndex,
  handleSeatArr,
  getInitScreens,
  getScreens,
  InitState,
  getSCreensState,
  showTimes,
  screenName,
  setTotalSeat,
  totalSeat,
  getSeatTable,
  changeTicketState,
}) => {
  useEffect(() => {
    getInitScreens();
    getScreens();
  }, []);

  return (
    <Booking
      group={group}
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
      seatArr={seatArr}
      userId={userId}
      seatSelected={seatSelected}
      seatSelectedIndex={seatSelectedIndex}
      handleseatSelected={handleseatSelected}
      handleseatSelectedIndex={handleseatSelectedIndex}
      handleSeatArr={handleSeatArr}
      movies={movies}
      cinemas={cinemas}
      dates={dates}
      getScreens={getScreens}
      getInitScreens={getInitScreens}
      InitState={InitState}
      getSCreensState={getSCreensState}
      showTimes={showTimes}
      initShowTimes={initShowTimes}
      initTotal={initTotal}
      selectScreenName={selectScreenName}
      screenName={screenName}
      setTotalSeat={setTotalSeat}
      totalSeat={totalSeat}
      getSeatTable={getSeatTable}
      seatTable={seatTable}
      changeTicketState={changeTicketState}
    />
  );
};

export default connect(
  ({ booking, loading }) => ({
    person: booking.person,
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
    seatArr: booking.seatArr,
    userId: booking.userId,
    seatSelected: booking.seatSelected,
    seatSelectedIndex: booking.seatSelectedIndex,
    movies: booking.movies,
    cinemas: booking.cinemas,
    dates: booking.dates,
    group: booking.group,
    InitState: loading.GET_INITSCREENS,
    getSCreensState: loading.GET_SCREENS,
    showTimes: booking.showTimes,
    screenName: booking.screenName,
    setTotalSeat: booking.setTotalSeat,
    totalSeat: booking.totalSeat,
    seatTable: booking.seatTable,
  }),
  {
    getSeatTable,
    getInitScreens,
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
    handleseatSelected,
    handleseatSelectedIndex,
    handleSeatArr,
    getScreens,
    initShowTimes,
    initTotal,
    selectScreenName,
    setTotalSeat,
    changeTicketState,
  }
)(BookingConatainer);
