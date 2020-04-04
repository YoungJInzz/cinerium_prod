import React from "react";
import MovieItem from "./movieItem";

const MovieSection = ({ movielist }) => {
  return (
    <div className="movie-section">
      <div className="head">영화</div>
      <div className="select">
        <div className="menu"></div>
        <div className="btn-1">전체</div>
        <div className="btn-2">큐레이션</div>
        <div className="list">
          {movielist.map(movie => (
            <MovieItem movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
