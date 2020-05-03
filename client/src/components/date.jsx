import React, { useState, useEffect } from "react";

const DateItem = ({
  item,
  date,
  selectDate,
  numToDay,
  handleDate,
  handleDay,
}) => {
  return (
    <div
      className={"dateItem" + (item.date === date ? " selected" : "")}
      onClick={() => selectDate(item.date)}
    >
      <span
        className={
          "day " + (item.day === 0 ? "sun" : item.day === 6 ? "sat" : "")
        }
      >
        {numToDay(item.day)}
      </span>
      <span className="date">{handleDate(item)}</span>
    </div>
  );
};

const Dates = ({ date, selectDate, selectScreen, dates }) => {
  const [year, setYear] = useState();
  const [thisMonth, setThisMonth] = useState();
  const [nextMonth, setNextMonth] = useState();
  const [thisDates, setThisDates] = useState([]);
  const [nextDates, setNextDates] = useState([]);

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
    let thisDatesArr = [];
    let nextDatesArr = [];
    for (let item of dates) {
      if (Number(JSON.stringify(item.date).substring(4, 6)) === thisMonth) {
        thisDatesArr.push(item);
      }
      if (Number(JSON.stringify(item.date).substring(4, 6)) === nextMonth) {
        nextDatesArr.push(item);
      }
    }
    setThisDates(thisDatesArr);
    setNextDates(nextDatesArr);
  };

  const handleDate = (item) => {
    let string = JSON.stringify(item.date);
    return string.substring(6, 8);
  };
  const handleDay = (item) => {
    let datInfo = new Date(
      Number(item.subString(0, 4)),
      Number(item.subString(4, 6)),
      Number(item.subString(6, 8))
    );
    return numToDay(datInfo.getDay());
  };
  useEffect(() => {
    setYear(new Date().getFullYear());
    setThisMonth(new Date().getMonth() + 1);
    if (thisMonth === 12) {
      setNextMonth(1);
    } else {
      setNextMonth(new Date().getMonth() + 2);
    }
    getDateArr();
  }, [dates]);

  return (
    <>
      <div className="dateSection">
        <div className="head">날짜</div>
        <div className="year">{year}</div>
        <div className="month">{thisMonth}</div>
        <div className="dates">
          {thisDates.map((item) => (
            <DateItem
              year={year}
              month={thisMonth}
              item={item}
              date={date}
              selectDate={selectDate}
              numToDay={numToDay}
              handleDate={handleDate}
              handleDay={handleDay}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dates;
