import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getInitScreens, selectDate } from "../modules/booking";
import TimetableByCinema from "../components/timetableByCinema";

const TimetableByCinemaContainer = ({
  getInitScreens,
  selectDate,
  cinemas,
  dates,
}) => {
  useEffect(() => {}, []);
  return <TimetableByCinema getInitScreens={getInitScreens} />;
};

export default connect(
  ({ booking }) => ({ cinemas: booking.cinemas, dates: booking.cinemas }),
  { getInitScreens, selectDate }
)(TimetableByCinemaContainer);
