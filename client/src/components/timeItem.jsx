import React from "react";

const TimeItem = ({ item }) => {
  return (
    <div className="timeItem">
      <span className="dimension">{item.dimension}</span>
      <span className="screen">{item.screen}</span>
      <span className="layer">{item.layer}</span>
      <span className="totalSeat">(총{item.totalSeat}석)</span>
      <br />
      <div className="seatSelect">
        <div className="time">{item.time}</div>
        <div className="emptySeat">{item.emptySeat}석</div>
      </div>
    </div>
  );
};

export default TimeItem;
