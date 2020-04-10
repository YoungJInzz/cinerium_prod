import React from "react";
import MovieItem from "./movieItem";

const MovieSection = ({ movie, movielist, selectMovie }) => {
  const Doit = () => {
    console.log(movie);
  };
  return (
    <div className="movie-section">
      <div className="head" onClick={() => Doit()}>
        영화
      </div>
      <div className="select">
        <div className="menu">
          <div className="btn-1">전체</div>
          <div className="btn-2">큐레이션</div>
        </div>
        <div className="list">
          {movielist.map((items) => (
            <MovieItem movie={movie} items={items} selectMovie={selectMovie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
