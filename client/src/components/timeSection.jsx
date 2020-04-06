import React from "react";
import TimeItem from "./timeItem";
const TimeSection = ({ screeninfo }) => {
  return (
    <div className="timeSection">
      <div className="head">시간</div>
      <div className="timeInfo">
        {screeninfo.map((item) => (
          <TimeItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default TimeSection;
