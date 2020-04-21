import React from "react";
import ScreenItem from "./screenItem";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const TimeSection = ({ timeData, selectScreen, screeninfo }) => {
  return (
    <div className="timeSection">
      <div className="head">시간</div>
      <div className="time-option">
        <span className="morning">
          <FiSun className="sun" />
          조조
        </span>
        <span className="night">
          <FiMoon className="moon" />
          심야
        </span>
      </div>
      <div className="timeInfo">
        <div
          className={"placeholder" + (screeninfo.length !== 0 ? " hide" : "")}
        >
          영화,극장,날짜를 선택해주세요
        </div>
        {screeninfo.map((item) => (
          <ScreenItem
            timeData={timeData}
            selectScreen={selectScreen}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSection;
