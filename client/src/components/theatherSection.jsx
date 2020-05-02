import React, { useState, useEffect } from "react";

const TheatherSection = ({
  cinemas,
  region,
  theater,
  selectRegion,
  selectTheater,
}) => {
  const [regionCinemas, setRegionCinemas] = useState([]);
  useEffect(() => {
    for (let item of cinemas) {
      if (item.cinemaArea === region) {
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
                (item.cinemaArea === region ? " regionSelected" : "")
              }
              onClick={() => selectRegion(item.cinemaArea)}
            >
              {item.cinemaArea}
            </div>
          ))}
        </div>
        <div className="regiontheater">
          {regionCinemas.map((item) => (
            <div
              className={
                "theaterItem" + (item.cinemaName === theater ? " selected" : "")
              }
              onClick={() => selectTheater(item.cinemaName)}
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
