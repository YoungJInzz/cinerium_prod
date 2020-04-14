import React from "react";
import { FaArrowRight } from "react-icons/fa";

const RightBtn1 = ({
  movie,
  theater,
  date,
  timeData,
  title,
  moveToNext,
  currentStep,
  step,
}) => {
  return (
    <div
      className={
        "rightBtn" +
        (movie !== "" &&
        theater !== "" &&
        date !== "" &&
        timeData.screenId !== ""
          ? " red"
          : " gray") +
        (currentStep !== step ? " hide" : "")
      }
      onClick={() => moveToNext()}
    >
      <FaArrowRight className="rightArrow" />
      <div className="rightBtn-title">{title}</div>
    </div>
  );
};

export default RightBtn1;
