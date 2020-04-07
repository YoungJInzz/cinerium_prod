import React from "react";

const BookInfo = ({ movie, theater, screenId, date, screeninfo }) => {
  const filterScreen = () => {
    let filteredSreen = screeninfo.filter((item) => item.id === screenId);
    let result = filteredSreen[0];
    let screen = "";
    let layer = "";
    for (let key in result) {
      if (key === "screen") {
        screen = result[key];
      }
      if ((key = "layer")) {
        layer = result[key];
      }
    }
    return `${screen} ${layer} `;
  };

  return (
    <div className="bookInfo">
      <div className="mv Choice">
        <div className={"choicePh" + (movie !== "" ? " disabled" : "")}>
          영화선택
        </div>
      </div>
      <div className="th Choice">
        <div
          className={
            "choicePh" + (theater !== "" || screenId !== "" ? " disabled" : "")
          }
        >
          극장선택
        </div>
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
