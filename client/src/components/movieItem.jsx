import React from "react";

const Movieitems = ({ movie, items, selectMovie }) => {
  const Doit = () => {
    console.log(items);
  };
  return (
    <div>
      <div
        className={
          "movieItem" + (items.title === movie ? " selected" : "")
        }
        onClick={() => selectMovie(items.title)}
      >
        <span
          className={
            "age " +
            (items.age === 12 ? "twe" : items.age === 15 ? "fif" : "nin")
          }
        >
          {items.age}
        </span>
        <span className="title">{items.title}</span>
      </div>
    </div>
  );
};

export default Movieitems;
