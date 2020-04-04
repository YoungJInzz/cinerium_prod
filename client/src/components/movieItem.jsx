import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <div className="movieItem">
        <span
          className={
            "age " +
            (movie.age === 12 ? "twe" : movie.age === 15 ? "fif" : "nin")
          }
        >
          {movie.age}
        </span>
        <span>{movie.title}</span>
      </div>
    </div>
  );
};

export default MovieItem;
