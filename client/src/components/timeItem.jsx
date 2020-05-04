import React, { useEffect, useState } from "react";

const TimeItem = ({
  timeData,
  selectScreen,
  entry,
  name,
  selectScreenName,
  totalSeat,
  setTotalSeat,
}) => {
  const [timeStr, setTimeStr] = useState("");
  useEffect(() => {
    setTimeStr(JSON.stringify(entry.startTime));
  });

  return (
    <div
      className={"seatSelect" + (entry.emptySeat === 0 ? " notClick" : "")}
      onClick={() => {
        setTotalSeat(totalSeat);
        selectScreenName(name);
        entry.emptySeat !== 0 && selectScreen(entry);
      }}
    >
      <div
        className={
          "time" +
          (entry.id === timeData.id ? " selected" : "") +
          (entry.emptySeat === 0 ? " sellout2" : "")
        }
      >
        {`${timeStr.substring(0, 2)}:${timeStr.substring(2, 4)}`}
      </div>
      <div className={"emptySeat" + (entry.emptySeat === 0 ? " sellout" : "")}>
        {entry.emptySeat !== 0 ? `${entry.emptySeat}석` : "매진"}
      </div>
    </div>
  );
};

export default TimeItem;
