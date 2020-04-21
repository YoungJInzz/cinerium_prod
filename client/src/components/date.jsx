import React, { useState, useEffect } from "react";

const DateItem = ({ year, month, item, date, selectDate, numToDay }) => {
  return (
    <div
      className={
        "dateItem" +
        (item.day === date.day && item.date === date.date ? " selected" : "")
      }
      onClick={() =>
        selectDate({ year, month, day: item.day, date: item.date })
      }
    >
      <span
        className={
          "day " + (item.day === 0 ? "sun" : item.day === 6 ? "sat" : "")
        }
      >
        {numToDay(item.day)}
      </span>
      <span className="date">{item.date}</span>
    </div>
  );
};

const Dates = ({ date, selectDate, selectScreen }) => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [dates, setDates] = useState([]);

  const numToDay = (num) => {
    var weekday = new Array(7);
    weekday[0] = "일";
    weekday[1] = "월";
    weekday[2] = "화";
    weekday[3] = "수";
    weekday[4] = "목";
    weekday[5] = "금";
    weekday[6] = "토";
    return weekday[num];
  };

  const getDateArr = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      let d = new Date();
      d.setDate(d.getDate() - i);
      let date = d.getDate();
      let day = d.getDay();
      arr.push({ day, date });
    }
    return arr;
  };
  useEffect(() => {
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth() + 1);
    setDates(getDateArr());
    selectScreen({ screenId: "", timeId: "" });
  }, [date]);

  return (
    <>
      <div className="dateSection">
        <div className="head">날짜</div>
        <div className="year">{year}</div>
        <div className="month">{month}</div>
        <div className="dates">
          {dates &&
            dates.map((item) => (
              <DateItem
                year={year}
                month={month}
                item={item}
                date={date}
                selectDate={selectDate}
                numToDay={numToDay}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Dates;
