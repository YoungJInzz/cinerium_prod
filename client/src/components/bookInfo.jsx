import React, { useState, useEffect } from "react";

const BookInfo = ({ movie, theater, screenId, date, screeninfo }) => {
  const [screen, setScreen] = useState();
  const [layer, setLayer] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    filterScreen();
  }, []);

  const filterScreen = () => {
    let filteredSreen = screeninfo.filter((item) => item.id === screenId);
    let result = filteredSreen[0];
    console.log(result);
    // setScreen("dd");
    // for (let key in result) {
    //   if (key === "screen") {
    //     setScreen(result[key]);
    //   }
    //   if ((key = "layer")) {
    //     setLayer(result[key]);
    //   }
    //   if ((key = "time")) {
    //     setTime(result[key]);
    //   }
    // }
    return;
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
            "choicePh" + (theater !== "" || screenId !== "" ? " disabled" : "")
          }
        >
          극장선택
        </div>
        <div className="theaterIt">극장</div>
        <div className="theaterContent">CGV {theater}</div>
        <div className="theaterIt">일시</div>
        <div className="theaterContent">
          {date.year}.{date.month}.
        </div>
        <div className="theaterIt">상영관</div>
        <div className="theaterContent"></div>
      </div>
      <div className="se Choice">
        <div className="choicePh">좌석선택</div>
      </div>
      <div className="pay Choice">
        <div className="choicePh">결제</div>
      </div>
      <div>{theater}</div>
      <div>{filterScreen()}</div>
    </div>
  );
};

export default BookInfo;
