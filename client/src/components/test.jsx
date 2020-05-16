import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const Test = ({ initState, getInitScreens, person }) => {
  useEffect(() => {
    console.log(person);
  });
  let history = useHistory();
  return (
    <dvi>
      {/* <Link to="/booking"> */}
      <button onClick={() => history.push("/booking")}>button1</button>
      {/* </Link> */}
      <Link to="/cinema">
        <button>button2</button>
      </Link>
    </dvi>
  );
};
export default Test;
