import React, { useEffect } from "react";
import Dates from "./date";
import MovieSection from "./movieSection";
import TheatherSection from "./theatherSection";
import TimeSection from "./timeSection";
import BookInfo from "./bookInfo";
import SeatSelectSection from "./seatSelectSection";

const Booking = ({
  group,
  movie,
  theater,
  timeData,
  region,
  regiontheater,
  movielist,
  theaterlist,
  date,
  currentStep,
  person,
  screeninfo,
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
  seatArr,
  userId,
  seatSelected,
  seatSelectedIndex,
  handleseatSelected,
  handleseatSelectedIndex,
  handleSeatArr,
  movies,
  cinemas,
  dates,
  getScreens,
  getInitScreens,
  InitState,
  getSCreensState,
}) => {
  // useEffect(() => {
  //   console.log(dates);
  // });
  return (
    <div>
      <div className="booking-container">
        <img src="/IMG.png" class="img-responsive" />
        <div className={"step1" + (currentStep !== 1 ? " hide" : "")}>
          <MovieSection
            movies={movies}
            movie={movie}
            movielist={movielist}
            selectMovie={selectMovie}
            selectScreen={selectScreen}
            getScreens={getScreens}
            group={group}
            theater={theater}
            date={date}
            getInitScreens={getInitScreens}
          />
          <TheatherSection
            getInitScreens={getInitScreens}
            movie={movie}
            date={date}
            region={region}
            selectRegion={selectRegion}
            theater={theater}
            theaterlist={theaterlist}
            regiontheater={regiontheater}
            selectTheater={selectTheater}
            selectScreen={selectScreen}
            cinemas={cinemas}
            getScreens={getScreens}
            group={group}
          />
          <Dates
            dates={dates}
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
        <div className={"step2" + (currentStep !== 2 ? " hide" : "")}>
          <SeatSelectSection
            theater={theater}
            timeData={timeData}
            date={date}
            person={person}
            screeninfo={screeninfo}
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
          />
        </div>
      </div>
      <BookInfo
        handleseatSelectedIndex={handleseatSelectedIndex}
        seatSelectedIndex={seatSelectedIndex}
        handleSeatArr={handleSeatArr}
        selectAdult={selectAdult}
        selectTeen={selectTeen}
        selectSenior={selectSenior}
        handleseatSelected={handleseatSelected}
        person={person}
        seatSelected={seatSelected}
        movie={movie}
        theater={theater}
        timeData={timeData}
        date={date}
        screeninfo={screeninfo}
        moveToBefore={moveToBefore}
        moveToNext={moveToNext}
        currentStep={currentStep}
      />
      <div className="test"></div>
    </div>
  );
};

export default Booking;
