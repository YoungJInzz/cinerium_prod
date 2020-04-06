import React from "react";

const BookInfo = ({ movie, theater }) => {
  return (
    <div className="bookInfo">
      <div>{movie}</div>
      <div>{theater}</div>
    </div>
  );
};

export default BookInfo;
