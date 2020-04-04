import React, { useEffect } from "react";
import MovieItem from "./movieItem";
import Dates from "./date";

const Booking = ({
  movie,
  theater,
  screen,
  region,
  regiontheater,
  movielist,
  theaterlist,
  screenlist,
  selectMovie,
  selectTheater,
  selectScreen
}) => {
  const regionList = theaterlist.map(item => item.region);
  useEffect(() => {
    console.log(regiontheater);
  });
  return (
    <div>
      <div className="booking-container">
        <div className="step1">
          <div className="movie-section">
            <div className="head">영화</div>
            <div className="select">
              <div className="menu">
                <div className="btn-1">전체</div>
                <div className="btn-2">큐레이션</div>
              </div>
              <div className="list">
                {movielist.map(movie => (
                  <MovieItem movie={movie} />
                ))}
              </div>
            </div>
          </div>
          <div className="theater-section">
            <div className="head">극장</div>
            <div className="select">
              <div className="menu">
                <div className="btn-1">전체</div>
                <div className="btn-2">특별관</div>
              </div>
              <div className="regionList">
                {regionList.map(item => (
                  <div
                    className={"regionItem " + (item === region ? "on" : "")} //not working
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="regiontheater">
                {regiontheater.map(item => (
                  <div className={"theaterItem"}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          <Dates />
        </div>
      </div>
    </div>
  );
};

export default Booking;
