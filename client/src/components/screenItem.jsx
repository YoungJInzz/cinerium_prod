import React, { useState, useEffect } from "react";
import TimeItem from "./timeItem";

const ScreenItem = ({ timeData, selectScreen, item }) => {
  const [screenId, setScreemId] = useState();
  useEffect(() => {
    setScreemId(item.id);
  }, [item]);
  return (
    <div className="timeItem">
      <span className="dimension">{item.dimension}</span>
      <span className="screen">{item.screen}관</span>
      <span className="layer">{item.layer}층</span>
      <span className="totalSeat">(총{item.totalSeat}석)</span>
      <br />
      <div seatSlot-section>
        {item.timeslot.map((entry) => (
          <TimeItem
            screenId={screenId}
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
