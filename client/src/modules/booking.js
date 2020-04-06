import { createAction, handleActions } from "redux-actions";

const SELECT_MOVIE = "booking/SELECT_MOIVE";
const SELECT_THEATER = "booking/SELECT_THEATER";
const SELECT_SCREEN = "booking/SELECT_TIME";
const SELECT_REGION = "booking/SELECT_REGION";

export const selectMovie = createAction(SELECT_MOVIE, (input) => input);
export const selectTheater = createAction(SELECT_THEATER, (input) => input);
export const selectScreen = createAction(SELECT_THEATER, (input) => input);
export const selectRegion = createAction(SELECT_REGION, (input) => input);

const initialState = {
  movie: "주디",
  theater: "강남",
  screen: "1관",
  region: "서울",
  regiontheater: [
    "강남",
    "강변",
    "건대입구",
    "구로",
    "동대문",
    "마곡",
    "목동",
    "상봉",
    "상암월드컵",
    "성수",
    "센트럴",
    "송파",
    "신촌",
    "은평",
    "홍대",
    "강서",
    "이태원",
  ],
  movielist: [
    { title: "엽문", age: 12 },
    { title: "주디", age: 12 },
    { title: "1917", age: 15 },
    { title: "날씨의아이", age: 15 },
    { title: "마스터", age: 12 },
    { title: "야구왕", age: 19 },
    { title: "영웅", age: 15 },
    { title: "영웅본색", age: 15 },
    { title: "아큐정전", age: 12 },
    { title: "본얼티메이텀", age: 12 },
    { title: "007", age: 15 },
    { title: "백두산", age: 19 },
    { title: "우주전쟁", age: 15 },
    { title: "새마을운동", age: 15 },
    { title: "광복절", age: 12 },
    { title: "본얼티메이텀2", age: 12 },
    { title: "0073", age: 19 },
    { title: "백두산2", age: 15 },
  ],
  theaterlist: [
    {
      region: "서울",
      theaterlist: [
        "강남",
        "강변",
        "건대입구",
        "구로",
        "동대문",
        "마곡",
        "목동",
        "상봉",
        "상암월드컵",
        "성수",
        "센트럴",
        "송파",
        "신촌",
        "은평",
        "홍대",
      ],
    },
    {
      region: "경기",
      theaterlist: ["경기광주", "광교", "광교상현", "구리", "김포"],
    },
    {
      region: "인천",
      theaterlist: ["계양", "남주안", "부평", "인천"],
    },
    {
      region: "강원",
      theaterlist: ["걍릉", "춘천", "춘천명동"],
    },
    {
      region: "대전",
      theaterlist: ["당진", "대전", "서산", "천안"],
    },
  ],
  screeninfo: [
    {
      screen: "1관",
      layer: "5층",
      time: "16:15",
      dimension: "2D",
      totalSeat: 170,
      emptySeat: 50,
    },
    {
      screen: "2관",
      layer: "5층",
      time: "13:15",
      dimension: "2D",
      totalSeat: 180,
      emptySeat: 60,
    },
    {
      screen: "2관",
      layer: "5층",
      time: "18:15",
      dimension: "2D",
      totalSeat: 150,
      emptySeat: 70,
    },
  ],
};
const booking = handleActions(
  {
    [SELECT_MOVIE]: (state, action) => ({ ...state, movie: action.payload }),
    [SELECT_THEATER]: (state, action) => ({
      ...state,
      theater: action.payload,
    }),
    [SELECT_SCREEN]: (state, action) => ({ ...state, screen: action.payload }),
    [SELECT_REGION]: (state, action) => ({
      ...state,
      regiontheater: action.payload,
    }),
  },
  initialState
);

export default booking;
