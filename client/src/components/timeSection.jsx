import React from "react";
import TimeItem from "./timeItem";
const TimeSection = ({ screenId, selectScreen, screeninfo }) => {
  return (
    <div className="timeSection">
      <div className="head">시간</div>
      <div className="timeInfo">
        <div
          className={
            "placeholder" + (screeninfo.length !== 0 ? " disabled" : "")
          }
        >
          영화,극장,날짜를 선택해주세요
        </div>
        {screeninfo.map((item) => (
          <TimeItem
            screenId={screenId}
            selectScreen={selectScreen}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSection;
