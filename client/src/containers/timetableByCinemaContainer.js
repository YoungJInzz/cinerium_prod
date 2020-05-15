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
  const [preDatesDivision, setDateDivison] = useState({
    0: [
      { date: 20200501, isVailable: true },
      { date: 20200502, isVailable: true },
      { date: 20200503, isVailable: true },
      { date: 20200504, isVailable: true },
      { date: 20200505, isVailable: true },
      { date: 20200506, isVailable: true },
      { date: 20200507, isVailable: true },
      { date: 20200508, isVailable: true },
    ],
  });

  useEffect(() => {
    // divideDates();
    getInitScreens();
  }, []);

  const divideDates = () => {
    let pre = () => {
      let result = {};
      let num = Math.ceil(dates.length / 8);
      let count = 0;
      for (let i = 0; i < num; i++) {
        let item = [];
        for (let j = count; j < count + 8; j++) {
          if (dates[j] !== undefined) item.push(dates[j]);
        }
        count = count + 8;
        result[i] = item;
      }
      return result;
    };
    setDateDivison(pre());
  };
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
      preDatesDivision={preDatesDivision}
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
