import React, { memo } from "react";
import Timetable from "../resources/ico-schedule-main.png";
import Boxoffice from "../resources/ico-boxoffice-main.png";
import Reserve from "../resources/ico-quick-reserve-main.png";

const serch = memo(() => {
  return (
    <>
      <div className="search-link">
        <div className="cell">
          <div className="search">
            <input
              type="text"
              placeholder="영화명을 입력해 주세요"
              title="영화 검색"
              class="input-text"
              id="movieName"
            />
            <a type="submit" className="search-btn"></a>
          </div>
        </div>

        <div className="cell">
          <a href="/booking/timetable">
          <img className="iconset" src={Timetable} alt="상영시간표 보기" />
            상영시간표
          </a>
        </div>

        <div className="cell">
          <a href="/movie" title="박스오피스 보기">
          <img className="iconset" src={Boxoffice} alt="상영시간표 보기" />
            박스오피스
          </a>
        </div>

        <div className="cell">
          <a href="/booking" title="빠른예매 보기">
          <img className="iconset" src={Reserve} alt="상영시간표 보기" />
            빠른예매
          </a>
        </div>
      </div>
    </>
  );
});

export default memo(serch);
