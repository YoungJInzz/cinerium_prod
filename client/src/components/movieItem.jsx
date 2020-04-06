import React from "react";

const MovieItem = ({ movie, selectMovie }) => {
  const Doit = () => {
    console.log("abc");
  };
  return (
    <div>
      <div className="movieItem" onClick={() => selectMovie(movie.title)}>
        <span
          className={
            "age " +
            (movie.age === 12 ? "twe" : movie.age === 15 ? "fif" : "nin")
          }
        >
          {movie.age}
        </span>
        <span className="title">{movie.title}</span>
      </div>
    </div>
  );
};

export default MovieItem;
