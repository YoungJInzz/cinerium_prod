import React from "react";

const Movieitems = ({ movie, items, selectMovie, selectScreen }) => {
  const clickmovie = (title) => {
    selectMovie(title);
    selectScreen({ screenId: "", timeId: "" });
  };

  return (
    <div>
      <div
        className={
          "movieItem" + (items.movieTitle === movie ? " selected" : "")
        }
        onClick={() => clickmovie(items.movieTitle)}
      >
        <span
          className={
            "age " +
            (items.movieRating === "전체"
              ? " all"
              : items.movieRating === "12"
              ? "twe"
              : items.movieRating === "15"
              ? "fif"
              : "nin")
          }
        >
          {items.movieRating}
        </span>
        <span className="title">{items.movieTitle}</span>
      </div>
    </div>
  );
};

export default Movieitems;
