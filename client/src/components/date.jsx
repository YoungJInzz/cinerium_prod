import React, { useState, useEffect } from "react";

const DateItem = ({ item }) => {
  return (
    <div className="dateItem">
      <span
        className={
          "day " + (item.day === "일" ? "sun" : item.day === "토" ? "sat" : "")
        }
      >
        {item.day}
      </span>
      <span className="date">{item.date}</span>
    </div>
  );
};

const Dates = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [dates, setDates] = useState([]);

  const getDateArr = () => {
    let arr = [];
    var weekday = new Array(7);
    weekday[0] = "일";
    weekday[1] = "월";
    weekday[2] = "화";
    weekday[3] = "수";
    weekday[4] = "목";
    weekday[5] = "금";
    weekday[6] = "토";
    for (let i = 0; i < 20; i++) {
      let d = new Date();
      d.setDate(d.getDate() - i);
      let date = d.getDate();
      let day = weekday[d.getDay()];
      arr.push({ day, date });
    }
    // console.log(arr);
    return arr;
  };
  useEffect(() => {
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth() + 1);
    setDates(getDateArr());
  }, []);

  return (
    <>
      <div className="dateSection">
        <div className="head">날짜</div>
        <div className="year">{year}</div>
        <div className="month">{month}</div>
        <div className="dates">
          {dates && dates.map((item) => <DateItem item={item} />)}
        </div>
      </div>
    </>
  );
};

export default Dates;
