import React from "react";

const SeatSelectSection = () => {
  return (
    <div>
      <div className="seat-header">인원/좌석</div>
      <div className="seat-info">
        <div className="seat-person">
          <div className="seat-row">
            <span className="seat-row-title">일반</span>
            <ul className="adult-person">
              <li>
                <a href="#">
                  <span className="adult-person-item">1</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>2</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>3</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>4</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>6</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>7</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>8</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="seat-row"></div>
          <div className="seat-row"></div>
        </div>
        <div className="seat-time"></div>
      </div>
    </div>
  );
};

export default SeatSelectSection;
