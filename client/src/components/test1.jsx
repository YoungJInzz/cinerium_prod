import React, { useEffect, useState } from "react";

const Dates = ({ dates }) => {
  const [datesDivision, setDatesDivison] = useState({
    0: [{ date: 20200501, isVailable: true }],
  });

  useEffect(() => {
    setDatesDivison(divideDates());
  }, [dates]);

  const divideDates = () => {
    let result = {
      0: [{ date: 20200501, isVailable: true }],
      1: [{ date: 20200501, isVailable: true }],
      2: [{ date: 20200501, isVailable: true }],
    };
    let num = Math.ceil(dates.length / 8); //function to seperate dates
    let count = 0;
    for (let i = 0; i < num; i++) {
      let item = [];
      for (let j = count; j < count + 8; j++) {
        if (dates[j] !== undefined) item.push(dates[j]);
      }
      count = count + 8;
      result[i] = item;
    }
    return result;
  };

  return (
    <div>
      <div className="col2">
        {datesDivision[0].map((item) => (
          <div>{item.date.toString().substring(6, 8)}</div>
        ))}
      </div>
    </div>
  );
};

// dates props
// [
// {date: 20200501, isVailable: true},
// {date: 20200502, isVailable: true},
// {date: 20200503, isVailable: true},
// {date: 20200504, isVailable: true},
// {date: 20200505, isVailable: true},
// {date: 20200506, isVailable: true},
// {date: 20200507, isVailable: true},
// {date: 20200508, isVailable: true},
// {date: 20200509, isVailable: true},
// {date: 20200510, isVailable: true},
// {date: 20200511, isVailable: true},
// {date: 20200512, isVailable: true},
//]
