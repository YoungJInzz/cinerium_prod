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
  changeTicketState,
  timeData,
  getSeatTable,
}) => {
  const [rowName, setRowName] = useState("");
  const [rowArr, setRowArr] = useState([]);
  useEffect(() => {
    setRowName(item.rowName);
    setRowArr(item.row);
  }, [item, rowArr]);
  const handleSeat = async (seatNum, ticketId, ticketState) => {
    console.log(ticketState);
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
      copySeatSelected.includes(seatNum) === false
    ) {
      copySeatSelected.push(seatNum);
      console.log("ticketId", ticketId);
      handleseatSelected(copySeatSelected.sort(sortSeat));
      await changeTicketState({ ticketId: [ticketId], state: "0" });
      await getSeatTable(timeData.id);
      await getSeatTable(timeData.id);
    } else if (totalPerson === seatSelected.length) {
      if (window.confirm("선택이완료되었습니다 다시선택하시겠습니까?")) {
        handleseatSelectedIndex([]);
        handleseatSelected([]);
      } else {
      }
    }
  };

  return (
    <div className="opening-row">
      <div className="opening-row-name">{rowName} </div>
      <div className="opening-seat">
        {rowArr.map((seat) => (
          <div>
            <div
              className={
                "opening-item " +
                (seat.ticket.ticketState === "0" &&
                seatSelected.includes(seat.seat.seatNo)
                  ? " seatSelected"
                  : "") +
                (seat.ticket.ticketState === "2" ||
                (seat.ticket.ticketState === "0" &&
                  seatSelected.includes(seat.seat.seatNo) === false)
                  ? " notAvail"
                  : "")
              }
              onClick={() =>
                handleSeat(
                  seat.seat.seatNo,
                  seat.ticket.id,
                  seat.ticket.ticketState
                )
              }
            >
              {seat.seat.seatNo.substring(1, 2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatRow;
