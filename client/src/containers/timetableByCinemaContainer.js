import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getInitScreens,
  selectDate,
  selectRegion,
  selectTheater,
  getScreens,
} from "../modules/booking";
import TimetableByCinema from "../components/timetableByCinema";

const TimetableByCinemaContainer = ({
  getInitScreens,
  selectDate,
  cinemas,
  dates,
  region,
  selectRegion,
  selectTheater,
  theater,
  getScreens,
}) => {
  useEffect(() => {
    getInitScreens();
  }, []);

  return (
    <TimetableByCinema
      getInitScreens={getInitScreens}
      cinemas={cinemas}
      selectDate={selectDate}
      dates={dates}
      region={region}
      selectRegion={selectRegion}
      selectTheater={selectTheater}
      theater={theater}
      getScreens={getScreens}
    />
  );
};

export default connect(
  ({ booking }) => ({
    cinemas: booking.cinemas,
    dates: booking.dates,
    region: booking.region,
    theater: booking.theater,
  }),
  { getInitScreens, selectDate, selectRegion, selectTheater, getScreens }
)(TimetableByCinemaContainer);
