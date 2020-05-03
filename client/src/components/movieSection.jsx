import React, { useEffect } from "react";
import MovieItem from "./movieItem";

const MovieSection = ({
  movies,
  movie,
  movielist,
  selectMovie,
  selectScreen,
  getScreens,
  theater,
  date,
  getInitScreens,
  group,
}) => {
  useEffect(() => {});
  return (
    <div className="movie-section">
      <div className="head">영화</div>
      <div className="select">
        <div className="menu">
          <div className="btn-1">전체</div>
          <div className="btn-2">큐레이션</div>
        </div>
        <div className="list">
          {movies.map((items) => (
            <MovieItem
              movie={movie}
              items={items}
              selectMovie={selectMovie}
              getScreens={getScreens}
              theater={theater}
              date={date}
              getInitScreens={getInitScreens}
              group={group}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
