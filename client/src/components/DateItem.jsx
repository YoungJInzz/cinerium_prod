import React from "react";

const DateItem = ({
  getInitScreens,
  item,
  date,
  selectDate,
  numToDay,
  handleDate,
  handleDay,
  getScreens,
  movie,
  theater,
  group,
}) => {
  const clickDate = (item) => {
    if (item.isVailable === true) {
      selectDate(item.date);
      getScreens({ movieId: movie.Id, cinemaId: theater.id, date, group });
    } else {
      if (
        window.confirm(
          "해당 상영스케줄이 없습니다.다시 선택하시겠습니까?(선택한 극장 및 날짜가 초기화됩니다)"
        )
      ) {
        getInitScreens();
      }
    }
  };

  return (
    <div
      className={
        "dateItem" +
        (item.date === date ? " selected" : "") +
        (item.isVailable === false ? " blur2" : "")
      }
      onClick={() => clickDate(item)}
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

export default DateItem;
