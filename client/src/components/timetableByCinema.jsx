import React, { useEffect, useState } from "react";
import Ribbon from "../resources/ribbon.svg";
import {
  FaHandPointRight,
  FaRegHandPointLeft,
  FaRegHandPointRight,
} from "react-icons/fa";
const TimetableByCinema = ({
  cinemas,
  region,
  selectRegion,
  theater,
  selectTheater,
  getScreens,
  dates,
  preDatesDivision,
}) => {
  const [regionCinemas, setRegionCinemas] = useState([]);
  const [datesDivision, setDatesDivison] = useState({
    0: [{ date: 20200501, isVailable: true }],
  });
  const [page, setPage] = useState(0);
  useEffect(() => {
    setDatesDivison(divideDates());
    // divideDates();
    for (let item of cinemas) {
      if (item.cinemaArea === region.cinemaArea) {
        setRegionCinemas(item.cinemaList);
      }
    }
  }, [dates]);

  const divideDates = () => {
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

  return (
    <div>
      <div className="cinemas">
        <div className="selectMenu">
          <span className="col1">
            <FaHandPointRight className="icon" />
            극장별 상영시간표
          </span>
          <span className="col2">영화별 상영시간표</span>
        </div>
        <div className="regionList2">
          {cinemas.map((item) => (
            <span className="col" onClick={() => selectRegion(item)}>
              {item.cinemaArea}
            </span>
          ))}
        </div>
        <div className="cinemaList">
          {regionCinemas.map((item) => (
            <span
              className="col"
              onClick={() => {
                selectTheater(item);
                getScreens({
                  cinemaId: item.id,
                });
              }}
            >
              {item.cinemaName}
            </span>
          ))}
        </div>
      </div>
      <div className="timeData-container">
        <div className={"cinemaName"}>
          <span className={theater === "" ? " hide" : ""}>
            {" "}
            CGV {theater.cinemaName}
          </span>
        </div>
        <div className="datesList">
          <div className="col1">
            <FaRegHandPointLeft />
          </div>
          <div className="col2">
            {datesDivision[0] &&
              datesDivision[0].map((item) => (
                <div
                  className={
                    "dateItem2" + (item.isVailable === false ? " hide" : "")
                  }
                >
                  {item.date.toString().substring(6, 8)}
                </div>
              ))}
          </div>
          <dvi className="col3">
            <FaRegHandPointRight />
          </dvi>
        </div>
      </div>
    </div>
  );
};

export default TimetableByCinema;
