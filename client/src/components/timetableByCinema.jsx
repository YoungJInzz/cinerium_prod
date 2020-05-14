import React from "react";
import Ribbon from "../resources/ribbon.svg";
import { FaHandPointRight } from "react-icons/fa";
const TimetableByCinema = () => {
  return (
    <div>
      <div className="cinemas">
        <div className="selectMenu">
          <span className="col1">
            <FaHandPointRight className="icon" />
            극장별 상영시간표
          </span>
          <span className="col2">영화별 상영시간표</span>
        </div>
      </div>
      <div>testtest</div>
      <div>testtest</div>
      <div>testtest</div>
      <div>testtest</div>
    </div>
  );
};

export default TimetableByCinema;
