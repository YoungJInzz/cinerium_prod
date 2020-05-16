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
  const [datesDivision, setDatesDivison] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setDatesDivison(divideDates(dates));
    // divideDates();
    for (let item of cinemas) {
      if (item.cinemaArea === region.cinemaArea) {
        setRegionCinemas(item.cinemaList);
      }
    }
  }, [dates]);

  const divideDates = (dates) => {
    const chunk = [];
    while (dates.length) chunk.push(dates.splice(0, 8));
    return chunk;
  };

  const moveToNext = () => {
    page < datesDivision.length - 1 ? setPage(page + 1) : setPage(page);
  };
  const moveToBefore = () => {
    page > 0 ? setPage(page - 1) : setPage(page);
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
            <FaRegHandPointLeft onClick={() => moveToBefore()} />
          </div>
          <div className="col2">
            {datesDivision[page] &&
              datesDivision[page].map((item) => (
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
            <FaRegHandPointRight onClick={() => moveToNext()} />
          </dvi>
        </div>
      </div>
    </div>
  );
};

export default TimetableByCinema;
