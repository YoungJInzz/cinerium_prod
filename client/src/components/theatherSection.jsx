import React, { useState, useEffect } from "react";

const TheatherSection = ({
  getInitScreens,
  movie,
  date,
  cinemas,
  region,
  theater,
  selectRegion,
  selectTheater,
  getScreens,
  group,
}) => {
  const [regionCinemas, setRegionCinemas] = useState([]);

  const ClickTheater = (item) => {
    if (item.isAvailable == true) {
      selectTheater(item);
      getScreens({ movieId: movie.Id, cinemaId: item.id, date, group });
    } else {
      if (
        window.confirm(
          "해당 상영스케줄이 없습니다.다시 선택하시겠습니까?(선택한 극장 및 날짜가 초기화됩니다)"
        )
      ) {
        getInitScreens();
      }
    }
  };

  useEffect(() => {
    for (let item of cinemas) {
      if (item.cinemaArea === region.cinemaArea) {
        setRegionCinemas(item.cinemaList);
      }
    }
  });

  return (
    <div className="theater-section">
      <div className="head">극장</div>
      <div className="select">
        <div className="menu">
          <div className="btn-1">전체</div>
          <div className="btn-2">특별관</div>
        </div>
        <div className="regionList">
          {cinemas.map((item) => (
            <div
              className={
                "regionItem " +
                (item.cinemaArea === region.cinemaArea ? " regionSelected" : "")
              }
              onClick={() => selectRegion(item)}
            >
              {item.cinemaArea}
            </div>
          ))}
        </div>
        <div className="regiontheater">
          {regionCinemas.map((item) => (
            <div
              className={
                "theaterItem" +
                (item === theater ? " selected" : "") +
                (item.isAvailable === false ? " blur2" : "")
              }
              onClick={() => ClickTheater(item)}
            >
              {item.cinemaName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheatherSection;
