import React, { useState, useEffect } from "react";

const SeatRow = ({
  item,
  userId,
  seatSelected,
  seatSelectedIndex,
  handleseatSelected,
  handleseatSelectedIndex,
  handleSeatArr,
  person,
}) => {
  const [rowName, setRowName] = useState(Object.keys(item)[0]);
  const [rowArr, setRowArr] = useState(item[rowName]);
  useEffect(() => {
    setRowName(Object.keys(item)[0]);
    setRowArr(item[rowName]);
  }, [item]);
  const handleSeat = (rowName, seatId) => {
    const mappingObj = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
    };
    let copySeatSelectedIndex = JSON.parse(JSON.stringify(seatSelectedIndex));
    let totalPerson = person.adult + person.teen + person.senior;
    let copySeatSelected = JSON.parse(JSON.stringify(seatSelected));
    let reA = /[^a-zA-Z]/g;
    let reN = /[^0-9]/g;
    const sortSeat = (a, b) => {
      var aA = a.replace(reA, "");
      var bA = b.replace(reA, "");
      if (aA === bA) {
        let aN = parseInt(a.replace(reN, ""), 10);
        let bN = parseInt(b.replace(reN, ""), 10);
        return aN === bN ? 0 : aN > bN ? 1 : -1;
      } else {
        return aA > bA ? 1 : -1;
      }
    };

    if (
      totalPerson > seatSelected.length &&
      copySeatSelected.includes(`${rowName}${seatId}`) === false
    ) {
      copySeatSelected.push(`${rowName}${seatId}`);
      copySeatSelectedIndex.push({
        rowName,
        rowIndex: mappingObj[rowName],
        columnIndex: Number(seatId) - 1,
      });
      handleseatSelected(copySeatSelected.sort(sortSeat));
      handleseatSelectedIndex(copySeatSelectedIndex);
      handleSeatArr({
        rowName,
        userId,
        rowIndex: mappingObj[rowName],
        columnIndex: Number(seatId) - 1,
      });
    } else if (totalPerson === seatSelected.length) {
      if (window.confirm("선택이완료되었습니다 다시선택하시겠습니까?")) {
        seatSelectedIndex.forEach((item) =>
          handleSeatArr({
            rowName: item.rowName,
            userId: "",
            rowIndex: item.rowIndex,
            columnIndex: item.columnIndex,
          })
        );
        handleseatSelectedIndex([]);
        handleseatSelected([]);
      } else {
      }
    }
  };

  return (
    <div className="opening-row">
      <div className="opening-row-name">{rowName} </div>
      {rowArr.map((seat) => (
        <div>
          <div
            className={
              "opening-item" +
              (seat.bookingUser !== "" && seat.bookingUser !== userId
                ? " notAvail"
                : "") +
              (seat.bookingUser === userId ? " seatSelected" : "")
            }
            onClick={() => handleSeat(rowName, seat.key)}
          >
            {seat.key}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatRow;
