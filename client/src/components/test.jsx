import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const Test = ({ initState, getInitScreens, person }) => {
  let history = useHistory();
  useEffect(() => {
    console.log(person);
  });
  return (
    <dvi>
      <button
        onClick={() => {
          history.push("/booking");
        }}
      >
        button1
      </button>
      <Link to="cinema">
        <button>button2</button>
      </Link>
    </dvi>
  );
};
export default Test;
