import React, { useState, useEffect } from "react";

const SeatSelectSection = ({
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
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    filterScreen();
  }, [timeData]);

  const filterScreen = () => {
    let filteredSreen = screeninfo.filter(
      (item) => item.id === timeData.screenId
    );
    let result = filteredSreen[0]; //setScreen(result.screen) don't work!
    console.log(result);
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
              setStartTime(element.startTime);
              setEndTime(element.endTime);
            }
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="seat-header">인원/좌석</div>
      <div className="seat-info">
        <div className="seat-person">
          <div className="seat-row">
            <span className="seat-row-title">일반</span>
            <ul className="adult-person">
              <li>
                <button className="person-btn">1</button>
              </li>
              <li>
                <button className="person-btn">
                  <span>2</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>3</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>4</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>5</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>6</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>7</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>8</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="seat-row">
            <span className="seat-row-title">청소년</span>
            <ul className="adult-person">
              <li>
                <button className="person-btn">1</button>
              </li>
              <li>
                <button className="person-btn">
                  <span>2</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>3</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>4</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>5</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>6</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>7</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>8</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="seat-row">
            <span className="seat-row-title">우대</span>
            <ul className="adult-person">
              <li>
                <button className="person-btn">1</button>
              </li>
              <li>
                <button className="person-btn">
                  <span>2</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>3</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>4</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>5</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>6</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>7</span>
                </button>
              </li>
              <li>
                <button className="person-btn">
                  <span>8</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="seat-time">
          <div className="seat-time-row">
            <div className="seat-time-content thea">cgv {theater}</div>
            <div className="seat-time-content scr">
              {`${screen}관 ${layer}층`}
            </div>
            <div className="seat-time-content left">cgv {theater}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectSection;
