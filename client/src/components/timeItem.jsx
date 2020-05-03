import React from "react";

const TimeItem = ({ timeData, selectScreen, entry }) => {
  return (
    <div
      className="seatSelect"
      onClick={() => {
        console.log(entry);
        entry.emptySeat !== 0 && selectScreen(entry.id);
      }}
    >
      <div
        className={
          "time" +
          (entry.id === timeData ? " selected" : "") +
          (entry.emptySeat === 0 ? " sellout2" : "")
        }
      >
        {entry.startTime}
      </div>
      <div className={"emptySeat" + (entry.emptySeat === 0 ? " sellout" : "")}>
        {entry.emptySeat !== 0 ? `${entry.emptySeat}석` : "매진"}
      </div>
    </div>
  );
};

export default TimeItem;
