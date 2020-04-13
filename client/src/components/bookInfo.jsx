import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BookInfo = ({
  movie,
  theater,
  timeData,
  date,
  screeninfo,
  moveToBefore,
  moveToNext,
  currentStep,
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
              setTime(element.time);
            }
          }
        }
      }
    } else {
      setScreen("");
      setLayer("");
      setTime("");
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
          </div>
          <div className="row">
            <span className="content-title">상영관</span>
            <span className="content">{time}</span>
            <span className={"content" + (screen === "" ? " hide" : "")}>
              {screen}관
            </span>
            <span className={"content" + (layer === "" ? " hide" : "")}>
              {layer}층
            </span>
          </div>
        </div>
      </div>
      <div className="se Choice">
        <div className="choicePh">좌석선택</div>
      </div>
      <div className="pay Choice">
        <div className="choicePh">결제</div>
      </div>
      <div
        className={
          "btn-to-step2" +
          (movie !== "" &&
          theater !== "" &&
          date !== "" &&
          timeData.screenId !== ""
            ? " red"
            : "") +
          (currentStep !== 1 ? " hide" : "")
        }
        onClick={() => moveToNext()}
      >
        <FaArrowRight className="rightArrow" />
        <div className="btn-to-step2-title">좌석선택</div>
      </div>
    </div>
  );
};

export default BookInfo;
