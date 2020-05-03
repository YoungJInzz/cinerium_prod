import React, { useState, useEffect } from "react";
import TimeItem from "./timeItem";

const ScreenItem = ({ timeData, selectScreen, item }) => {
  return (
    <div className="timeItem">
      <span className="dimension">{item.screen.dimension}</span>
      <span className="screen">{item.screen.name}</span>
      <span className="totalSeat">(총{item.screen.totalSeat}석)</span>
      <br />
      <div seatSlot-section>
        {item.timeTables.map((entry) => (
          <TimeItem
            timeData={timeData}
            selectScreen={selectScreen}
            entry={entry}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenItem;
