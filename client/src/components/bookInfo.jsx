import React, { useState, useEffect } from "react";

const BookInfo = ({ movie, theater, screenId, date, screeninfo }) => {
  const [screen, setScreen] = useState();
  const [layer, setLayer] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    filterScreen();
  }, [movie, theater, screenId]);

  const filterScreen = () => {
    let filteredSreen = screeninfo.filter((item) => item.id === screenId);
    let result = filteredSreen[0];
    console.log(typeof result);
    setScreen("dd");
    for (let key in result) {
      if (key === "screen") {
        setScreen(result[key]);
      }
      if ((key = "layer")) {
        setLayer(result[key]);
      }
      if ((key = "time")) {
        setTime(result[key]);
      }
    }
  };

  return (
    <div className="bookInfo">
      <div className="mv Choice">
        <div className={"choicePh" + (movie !== "" ? " disabled" : "")}>
          영화선택
        </div>
        <div className="movieSelected">{movie}</div>
      </div>
      <div className="th Choice">
        <div
          className={
            "choicePh" + (theater !== "" || screenId !== ""  ||  date !=='' ? " disabled" : "")
          }
        >
          극장선택
        </div>
        <div className={"theaterInfo"+(theater ==='' && screenId === '' && date === ''?' disabled':'')}>
          <div className="row">
        <span className="content-title">극장</span>
        <span className="content"> {`CGV${theater}`}</span>
        </div>
        <div className="row">
        <span className="content-title">일시</span>
        <span className="content">
          {date.year}.{date.month}
        </span>
        </div>
        <div className="row">
        <span className="content-title">상영관</span>
        <span className="content">{time}</span>
        </div>
      </div>
      <div className="se Choice">
        <div className="choicePh">좌석선택</div>
      </div>
      </div>
      <div className="pay Choice">
        <div className="choicePh">결제</div>
      </div>
      <div>{theater}</div>
      
    </div>
  );
};

export default BookInfo;
