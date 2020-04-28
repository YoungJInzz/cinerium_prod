import React, { useEffect } from "react";

const TheatherSection = ({
  cinemas,
  region,
  theater,
  theaterlist,
  regiontheater,
  selectRegion,
  selectTheater,
  selectScreen,
}) => {
  useEffect(() => {
    console.log(cinemas);
  });
  const Do = (item) => {
    selectTheater(item);
    selectScreen({ screenId: "", timeId: "" });
  };
  const regionList = theaterlist.map((item) => item.region);
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
                "regionItem " + (item === region ? " regionSelected" : "")
              }
              onClick={() => selectRegion(item)}
            >
              {item.cinemaArea}
            </div>
          ))}
        </div>
        <div className="regiontheater">
          {regiontheater.map((item) => (
            <div
              className={"theaterItem" + (item === theater ? " selected" : "")}
              onClick={() => Do(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheatherSection;
