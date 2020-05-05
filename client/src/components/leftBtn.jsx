import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const LeftBtn1 = ({
  moveToBefore,
  currentStep,
  selectAdult,
  selectTeen,
  selectSenior,
  handleseatSelected,
  seatSelectedIndex,
  handleSeatArr,
  handleseatSelectedIndex,
  ticketTokens,
  changeTicketState,
}) => {
  const handlePage = () => {
    seatSelectedIndex.forEach((item) =>
      handleSeatArr({
        rowName: item.rowName,
        userId: "",
        rowIndex: item.rowIndex,
        columnIndex: item.columnIndex,
      })
    );
    handleseatSelectedIndex([]);

    moveToBefore();
    handleseatSelected([]);
    selectAdult(0);
    selectTeen(0);
    selectSenior(0);
  };
  return (
    <div
      className={"leftBtn" + (currentStep !== 2 ? " hide" : "")}
      onClick={() => {
        changeTicketState({ state: "1", ticketTokens: ticketTokens });
        handlePage();
      }}
    >
      <FaArrowLeft className="rightArrow" />
      <div className="rightBtn-title">영화선택</div>
    </div>
  );
};

export default LeftBtn1;
