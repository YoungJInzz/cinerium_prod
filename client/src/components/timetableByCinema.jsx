import React, { useEffect, useState } from "react";
import Ribbon from "../resources/ribbon.svg";
import {
  FaHandPointRight,
  FaRegHandPointLeft,
  FaRegHandPointRight,
} from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
const TimetableByCinema = ({
  cinemas,
  region,
  selectRegion,
  theater,
  selectTheater,
  getScreens,
  dates,
  date,
  getShowtimeByCinema,
  selectDate,
  showtimeBycinema,
}) => {
  const [regionCinemas, setRegionCinemas] = useState([]);
  const [datesDivision, setDatesDivison] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    getShowtimeByCinema({ cinemaId: theater.id, date });
    setDatesDivison(divideDates(dates));
    if (dates.length !== 0) {
      selectDate(dates[0].date);
    }
    for (let item of cinemas) {
      if (item.cinemaArea === region.cinemaArea) {
        setRegionCinemas(item.cinemaList);
      }
    }
  }, [dates, region]);

  const history = useHistory();
  const divideDates = (dates) => {
    const copyDates = JSON.parse(JSON.stringify(dates));
    const chunk = [];
    const chunk2 = [];
    for (let i of copyDates) {
      if (i.isVailable === true) {
        chunk2.push(i);
      }
    }
    while (chunk2.length) chunk.push(chunk2.splice(0, 8));
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
                  date: date,
                });
                getShowtimeByCinema({ cinemaId: item.id, date });
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
                  {`${item.date}`.substring(6, 8)}
                </div>
              ))}
          </div>
          <dvi className="col3">
            <FaRegHandPointRight onClick={() => moveToNext()} />
          </dvi>
        </div>
        <div className="showtimeContainer">
          {showtimeBycinema.map((item) => (
            <div className="movieContainer">
              <div className="showtime-movie-title">
                <span
                  className={
                    "age " +
                    (item.movie.movieRating === "전체"
                      ? " all"
                      : item.movie.movieRating === "12"
                      ? "twe"
                      : item.movie.movieRating === "15"
                      ? "fif"
                      : "nin")
                  }
                >
                  {item.movie.movieRating}
                </span>
                <span>{item.movie.movieTitle}</span>
              </div>
              <div className="showtime-cinemasContainer">
                {item.screens.map((item2) => (
                  <div className="showtime-cinema">
                    <div>{item2.screen.name}</div>
                    <div>
                      {item2.timeTables.map((item3) => (
                        <span>{item3.startTime}</span>
                      ))}{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimetableByCinema;
