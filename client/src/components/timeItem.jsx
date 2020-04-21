import React from "react";

const TimeItem = ({ screenId, timeData, selectScreen, entry }) => {
  return (
    <div
      className="seatSelect"
      onClick={() =>
        entry.emptySeat !== 0 &&
        selectScreen({ screenId: screenId, timeId: entry.id })
      }
    >
      <div
        className={
          "time" +
          (entry.id === timeData.timeId && screenId === timeData.screenId
            ? " selected"
            : "") +
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
