import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const LeftBtn1 = ({
  moveToBefore,
  currentStep,
  selectAdult,
  selectTeen,
  selectSenior,
  handleseatSelected,
}) => {
  const handlePage = () => {
    moveToBefore();
    handleseatSelected([]);
    selectAdult(0);
    selectTeen(0);
    selectSenior(0);
  };
  return (
    <div
      className={"leftBtn" + (currentStep !== 2 ? " hide" : "")}
      onClick={() => handlePage()}
    >
      <FaArrowLeft className="rightArrow" />
      <div className="rightBtn-title">영화선택</div>
    </div>
  );
};

export default LeftBtn1;
