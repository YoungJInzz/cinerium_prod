import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getInitScreens,
  selectDate,
  selectRegion,
  selectTheater,
  getScreens,
  getShowtimeByCinema,
  initState,
} from "../modules/booking";
import TimetableByCinema from "../components/timetableByCinema";

const TimetableByCinemaContainer = ({
  getInitScreens,
  selectDate,
  cinemas,
  dates,
  date,
  region,
  selectRegion,
  selectTheater,
  theater,
  getScreens,
  getShowtimeByCinema,
  showtimeBycinema,
  loading,
  initState,
}) => {
  useEffect(() => {
    initState();
    getInitScreens();
  }, []);

  return (
    <TimetableByCinema
      getInitScreens={getInitScreens}
      cinemas={cinemas}
      selectDate={selectDate}
      dates={dates}
      date={date}
      region={region}
      selectRegion={selectRegion}
      selectTheater={selectTheater}
      theater={theater}
      getScreens={getScreens}
      getShowtimeByCinema={getShowtimeByCinema}
      showtimeBycinema={showtimeBycinema}
      initState={initState}
      loading={loading}
    />
  );
};

export default connect(
  ({ booking, loading }) => ({
    cinemas: booking.cinemas,
    dates: booking.dates,
    region: booking.region,
    theater: booking.theater,
    date: booking.date,
    showtimeBycinema: booking.showtimeBycinema,
    loading: loading.GET_SHOWTIMEBYCINEMA,
  }),
  {
    getInitScreens,
    selectDate,
    selectRegion,
    selectTheater,
    getScreens,
    getShowtimeByCinema,
    initState,
  }
)(TimetableByCinemaContainer);
