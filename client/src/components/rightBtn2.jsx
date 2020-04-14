import React from "react";
import { FaArrowRight } from "react-icons/fa";

const RightBtn2 = ({ title, moveToNext, currentStep, step }) => {
  return (
    <div
      className={"rightBtn gray" + (currentStep !== step ? " hide" : "")}
      onClick={() => moveToNext()}
    >
      <FaArrowRight className="rightArrow" />
      <div className="rightBtn-title">{title}</div>
    </div>
  );
};

export default RightBtn2;
