import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const RightBtn = ({
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
        "btn-to-step2" +
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
      <FaArrowLeft className="rightArrow" />
      <div className="btn-to-step2-title">{title}</div>
    </div>
  );
};

export default RightBtn;
