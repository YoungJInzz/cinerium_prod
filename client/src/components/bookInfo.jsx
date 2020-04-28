import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import RightBtn1 from "./rightBtn1";
import RightBtn2 from "./rightBtn2";
import LeftBtn1 from "./leftBtn";

const BookInfo = ({
  movie,
  theater,
  timeData,
  date,
  screeninfo,
  moveToBefore,
  moveToNext,
  currentStep,
  seatSelected,
  person,
  selectAdult,
  selectTeen,
  selectSenior,
  handleseatSelected,
  handleseatSelectedIndex,
  seatSelectedIndex,
  handleSeatArr,
}) => {
  const [screen, setScreen] = useState("");
  const [layer, setLayer] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    filterScreen();
  }, [timeData]);

  const filterScreen = () => {
    let filteredSreen = screeninfo.filter(
      (item) => item.id === timeData.screenId
    );
    let result = filteredSreen[0]; //setScreen(result.screen) don't work!
    if (result !== undefined) {
      for (let key in result) {
        if (key === "screen") {
          setScreen(result[key]);
        }
        if ((key = "layer")) {
          setLayer(result[key]);
        }
        if ((key = "timeslot")) {
          for (let element of result[key]) {
            if (element.id === timeData.timeId) {
              setTime(element.startTime);
            }
          }
        }
      }
    }
  };

  return (
    <div className="bookInfo">
      <div className="mv Choice">
        <div className={"choicePh" + (movie !== "" ? " hide" : "")}>
          영화선택
        </div>
        <div className="movieSelected">{movie}</div>
      </div>
      <div className="th Choice">
        <div
          className={
            "choicePh" +
            (theater !== "" || timeData !== "{}" || date !== "" ? " hide" : "")
          }
        >
          극장선택
        </div>
        <div
          className={
            "theaterInfo" +
            (theater === "" && timeData === "{}" && date === "" ? "hide" : "")
          }
        >
          <div className="row">
            <span className="content-title">극장</span>
            <span className={"content" + (theater === "" ? " hide" : "")}>
              {" "}
              {`CGV ${theater}`}
            </span>
          </div>
          <div className="row">
            <span className="content-title">일시</span>
            <span className={"content" + (date === "" ? " hide" : "")}>
              {`${date.year}.${date.month}.${date.date}`}
            </span>
            <span className="content-time">{time}</span>
          </div>
          <div className="row">
            <span className="content-title">상영관</span>
            <span className={"content" + (screen === "" ? " hide" : "")}>
              {screen}관
            </span>
            <span className={"content-layer" + (layer === "" ? " hide" : "")}>
              {layer}층
            </span>
          </div>
          <div className="row">
            <span className="content-title">인원</span>
          </div>
        </div>
      </div>
      <div className="se Choice">
        <div
          className={"choicePh" + (seatSelected.length !== 0 ? " hide" : "")}
        >
          좌석선택
        </div>
        <div className={"row" + (seatSelected.length === 0 ? " hide" : "")}>
          <span className="content-seat">좌석번호</span>
          <div className="seatSelectedContainer">
            {seatSelected.map((item) => (
              <div className="eachSeat">
                <span>{item},</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pay Choice">
        <div
          className={
            "choicePh" +
            (person.adult + person.teen + person.senior !== 0 ? " hide" : "")
          }
        >
          결제
        </div>
        <div className={"row" + (person.adult === 0 ? " hide" : "")}>
          <span className="content-seat">일반</span>
          <span className="price">{person.adult * 8000} 원</span>
        </div>
        <div className={"row" + (person.teen === 0 ? " hide" : "")}>
          <span className="content-seat">청소년</span>
          <span className="price">{person.teen * 8000} 원</span>
        </div>
        <div className={"row" + (person.senior === 0 ? " hide" : "")}>
          <span className="content-seat">우대</span>
          <span className="price">{person.senior * 8000} 원</span>
        </div>
        <div
          className={
            "row" +
            (person.adult + person.teen + person.senior === 0 ? " hide" : "")
          }
        >
          <span className="content-seat">총금액</span>
          <span className="price red-font">
            {(person.adult + person.teen + person.senior) * 8000} 원
          </span>
        </div>
      </div>
      <LeftBtn1
        moveToBefore={moveToBefore}
        currentStep={currentStep}
        selectAdult={selectAdult}
        selectSenior={selectSenior}
        selectTeen={selectTeen}
        handleseatSelected={handleseatSelected}
        handleseatSelectedIndex={handleseatSelectedIndex}
        seatSelectedIndex={seatSelectedIndex}
        handleSeatArr={handleSeatArr}
      />
      <RightBtn1
        movie={movie}
        theater={theater}
        date={date}
        timeData={timeData}
        title="좌석선택"
        moveToNext={moveToNext}
        currentStep={currentStep}
        step={1}
      />
      <RightBtn2
        person={person}
        seatSelected={seatSelected}
        title="결제선택"
        moveToNext={moveToNext}
        currentStep={currentStep}
        step={2}
      />
    </div>
  );
};

export default BookInfo;
