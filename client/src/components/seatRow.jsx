import React, { useState, useEffect } from "react";

const SeatRow = ({ item }) => {
  const [rowName, setRowName] = useState(Object.keys(item)[0]);
  const [rowArr, setRowArr] = useState(item[rowName]);
  // useEffect(() => {
  //   console.log(rowName);
  //   console.log(rowArr);
  // });
  return (
    <div className="opening-row">
      <div className="opening-row-name">{rowName} </div>
      {rowArr.map((seat) => (
        <div>
          <div
            className={
              "opening-item" + (seat.isEmpty === false ? " notAvail" : "")
            }
          >
            {seat.key}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatRow;
