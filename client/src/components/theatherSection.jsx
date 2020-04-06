import React from "react";

const TheatherSection = ({
  region,
  theater,
  theaterlist,
  regiontheater,
  selectRegion,
  selectTheater,
}) => {
  const show = () => {
    console.log(theater);
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
          {regionList.map((item) => (
            <div
              className={"regionItem " + (item === region ? " selected" : "")}
              onClick={() => selectRegion(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="regiontheater">
          {regiontheater.map((item) => (
            <div
              className={"theaterItem" + (item === theater ? " selected" : "")}
              onClick={() => selectTheater(item)}
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
