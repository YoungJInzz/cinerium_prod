import React, { useState, useEffect } from "react";
import { FaSquareFull } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import SeatRow from "./seatRow";
const Seatselect2Section = ({
  theater,
  timeData,
  date,
  screeninfo,
  person,
  selectAdult,
  selectTeen,
  selectSenior,
  seatArr,
  userId,
  seatSelected,
  seatSelectedIndex,
  handleseatSelected,
  handleseatSelectedIndex,
  handleSeatArr,
}) => {
  const [screen, setScreen] = useState("");
  const [layer, setLayer] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [emptySeat, setEmptySeat] = useState("");
  const [totalSeat, setTotalSeat] = useState("");

  useEffect(() => {
    filterScreen();
  }, [timeData]);

  const checkAdult = (e) => {
    Number(e.target.value) + Number(person.teen) + Number(person.senior) > 8
      ? alert(`최대 예매 가능한 인원수는 8명 까지 입니다.`)
      : selectAdult(Number(e.target.value));
  };

  const checkTeen = (e) => {
    Number(person.adult) + Number(e.target.value) + Number(person.senior) > 8
      ? alert(`최대 예매 가능한 인원수는 8명 까지 입니다.`)
      : selectTeen(Number(e.target.value));
  };

  const checkSenior = (e) => {
    Number(person.adult) + Number(person.teen) + Number(e.target.value) > 8
      ? alert(`최대 예매 가능한 인원수는 8명 까지 입니다.`)
      : selectSenior(Number(e.target.value));
  };

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
        if (key === "totalSeat") {
          setTotalSeat(result[key]);
        }
        if ((key = "layer")) {
          setLayer(result[key]);
        }
        if ((key = "timeslot")) {
          for (let element of result[key]) {
            if (element.id === timeData.timeId) {
              setEmptySeat(element.emptySeat);
              setStartTime(element.startTime);
              setEndTime(element.endTime);
            }
          }
        }
      }
    }
  };

  const refresh = () => {
    seatSelectedIndex.forEach((item) =>
      handleSeatArr({
        rowName: item.rowName,
        userId: "",
        rowIndex: item.rowIndex,
        columnIndex: item.columnIndex,
      })
    );
    handleseatSelectedIndex([]);
    selectAdult(0);
    selectTeen(0);
    selectSenior(0);
    handleseatSelected([]);
  };

  return (
    <div>
      <div className="seat-header">
        인원/좌석
        <div className="refresh" onClick={() => refresh()}>
          <div className="refresh-title">다시하기</div>
          <IoMdRefresh className="refresh-icon" />
        </div>
      </div>
      <div className="seat-info">
        <div className="seat-person">
          <div className="seat-row">
            <span className="seat-row-title">일반</span>

            <ul className="adult-person">
              <li>
                <button
                  value={0}
                  type="button"
                  className={
                    "person-btn" + (person.adult === 0 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  0
                </button>
              </li>
              <li>
                <button
                  value={1}
                  className={
                    "person-btn" + (person.adult === 1 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  value={2}
                  className={
                    "person-btn" + (person.adult === 2 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  value={3}
                  className={
                    "person-btn" + (person.adult === 3 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  3
                </button>
              </li>
              <li>
                <button
                  value={4}
                  className={
                    "person-btn" + (person.adult === 4 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  4
                </button>
              </li>
              <li>
                <button
                  value={5}
                  className={
                    "person-btn" + (person.adult === 5 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  5
                </button>
              </li>
              <li>
                <button
                  value={6}
                  className={
                    "person-btn" + (person.adult === 6 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  6
                </button>
              </li>
              <li>
                <button
                  value={7}
                  className={
                    "person-btn" + (person.adult === 7 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  7
                </button>
              </li>
              <li>
                <button
                  value={8}
                  className={
                    "person-btn" + (person.adult === 8 ? " select2" : "")
                  }
                  onClick={(e) => checkAdult(e)}
                >
                  8
                </button>
              </li>
            </ul>
          </div>
          <div className="seat-row">
            <span className="seat-row-title">청소년</span>
            <ul className="adult-person">
              <li>
                <button
                  value={0}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 0 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  0
                </button>
              </li>
              <li>
                <button
                  value={1}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 1 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  value={2}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 2 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  value={3}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 3 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  3
                </button>
              </li>
              <li>
                <button
                  value={4}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 4 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  4
                </button>
              </li>
              <li>
                <button
                  value={5}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 5 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  5
                </button>
              </li>
              <li>
                <button
                  value={6}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 6 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  6
                </button>
              </li>
              <li>
                <button
                  value={7}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 7 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  7
                </button>
              </li>
              <li>
                <button
                  value={8}
                  type="button"
                  className={
                    "person-btn" + (person.teen === 8 ? " select2" : "")
                  }
                  onClick={(e) => checkTeen(e)}
                >
                  8
                </button>
              </li>
            </ul>
          </div>
          <div className="seat-row">
            <span className="seat-row-title">우대</span>
            <ul className="adult-person">
              <li>
                <button
                  value={0}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 0 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  0
                </button>
              </li>
              <li>
                <button
                  value={1}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 1 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  value={2}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 2 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  value={3}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 3 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  3
                </button>
              </li>
              <li>
                <button
                  value={4}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 4 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  4
                </button>
              </li>
              <li>
                <button
                  value={5}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 5 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  5
                </button>
              </li>
              <li>
                <button
                  value={6}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 6 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  6
                </button>
              </li>
              <li>
                <button
                  value={7}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 7 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  7
                </button>
              </li>
              <li>
                <button
                  value={8}
                  type="button"
                  className={
                    "person-btn" + (person.senior === 8 ? " select2" : "")
                  }
                  onClick={(e) => checkSenior(e)}
                >
                  8
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
            <div className="seat-time-content left">
              남은좌석 <span>{emptySeat}</span>
              <span>{`/${totalSeat}`}</span>
            </div>
          </div>
          <div className="seat-time-row">
            <div className="seat-time-time">{`${date.year}.${date.month}.${date.date}`}</div>
            <div className="seat-time-time">{`${startTime}~${endTime}`}</div>
          </div>
        </div>
      </div>
      <div
        className={
          "seat-main" +
          (person.adult === 0 && person.teen === 0 && person.senior === 0
            ? " blur"
            : "")
        }
      >
        <div className="seat-screen">
          <div className="screen-img">screen</div>
          <div className="opening-container">
            {seatArr.map((item) => (
              <SeatRow
                item={item}
                userId={userId}
                seatSelected={seatSelected}
                seatSelectedIndex={seatSelectedIndex}
                handleseatSelected={handleseatSelected}
                handleseatSelectedIndex={handleseatSelectedIndex}
                handleSeatArr={handleSeatArr}
                person={person}
              />
            ))}
          </div>
        </div>
        <div className="legend">
          <div className="legend-content">
            <div className="legend-row">
              <FaSquareFull className="seat-icon-selected" />
              <div className="seat-icon-title">선택완료</div>
            </div>
            <div className="legend-row">
              <FaSquareFull className="seat-icon-selectable" />
              <div className="seat-icon-title">선택가능</div>
            </div>
            <div className="legend-row">
              <FaSquareFull className="seat-icon-booked" />
              <div className="seat-icon-title">예매완료</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seatselect2Section;
