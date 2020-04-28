import React, { useEffect } from "react";
import MovieItem from "./movieItem";

const MovieSection = ({
  movies,
  movie,
  movielist,
  selectMovie,
  selectScreen,
}) => {
  useEffect(() => {
    console.log(movies);
  });
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
              selectScreen={selectScreen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
