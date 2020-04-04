import React, { useState, useEffect } from "react";

const Dates = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <>
      <div className="dateSection">
        <div className="head">날짜</div>
        <div className="year">{date}</div>;
      </div>
    </>
  );
};

export default Dates;
