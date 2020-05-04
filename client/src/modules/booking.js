import { createAction, handleActions } from "redux-actions";
import { takeLatest, put, call } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSage";
import { startloading, finishloading } from "./loading";

const GET_INITSCREENS = "GET_INITSCREENS";
const GET_INITSCREENS_SUCCESS = "GET_INITSCREENS_SUCCESS";
const GET_INITSCREENS_FAILURE = "GET_INITSCREENS_FAILURE";
const GET_SCREENS = "GET_SCREENS";
const GET_SCREENS_SUCCESS = "GET_SCREENS_SUCCESS";
const GET_SCREENS_FAILURE = "GET_SCREENS_FAILURE";
const GET_SEATTABLE = "GET_SEATTABLE";
const GET_SEATTABLE_SUCCESS = "GET_SEATTABLE_SUCCESS";
const CHANGE_TICKETSTATE = "CHANGE_TICKETSTATE";
const CHANGE_TICKETSTATE_SUCCESS = "CHANGE_TICKETSTATE_SUCCESS";

const INIT_TOTAL = "booking/INIT_TOTAL";
const SET_TOTALSEAT = "booking/SET_TOTALSEAT";
const SELECT_SCREENNAME = "booking/SELECT_SCREENNAME";
const SELECT_MOVIE = "booking/SELECT_MOIVE";
const SELECT_REGION = "booking/SELECT_REGION";
const SET_CINEMAS = "booking/SET_CINEMAS";
const SELECT_THEATER = "booking/SELECT_THEATER";
const SELECT_DATE = "booking/SELECT_DATE";
const SELECT_SCREEN = "booking/SELECT_TIME";
const MOVE_TO_NEXT = "booking/MoveToNext";
const MOVE_TO_BEFORE = "booking/MoveToBefore";
const SELECT_ADULT = "booking/SELECT_ADULT";
const SELECT_SENIOR = "booking/SELECT_SENIOR";
const SELECT_TEEN = "booking/SELECT_TEEN";
const HANDLE_SEATSELECTED = "booking/HANDLE_SEATSELECTED";
const HANDLE_SEATSELECTEDINDEX = "booking/HANDLE_SEATSELECTEDINDEX";
const HANDLE_SEATARR = "booking/HANDLE_SEATARR";
const INIT_SHOWTIMES = "booking/INIT_SHOWTIMES";

export const getInitScreens = createAction(GET_INITSCREENS);
export const getScreens = createAction(GET_SCREENS, (payload) => payload);
export const initShowTimes = createAction(INIT_SHOWTIMES);
export const initTotal = createAction(INIT_TOTAL);
export const getSeatTable = createAction(GET_SEATTABLE);
export const changeTicketState = createAction(
  CHANGE_TICKETSTATE,
  (payload) => payload
);

const getInitScreensSaga = createRequestSaga(GET_INITSCREENS, api.getInit);
const getScreenSaga = createRequestSaga(GET_SCREENS, api.getScreenInfo);
const getSeatTableSaga = createRequestSaga(GET_SEATTABLE, api.getSeats);
const changeTicketStateSaga = createRequestSaga(
  CHANGE_TICKETSTATE,
  api.changeTicketState
);

export function* bookingSaga() {
  yield takeLatest(GET_INITSCREENS, getInitScreensSaga);
  yield takeLatest(GET_SCREENS, getScreenSaga);
  yield takeLatest(GET_SEATTABLE, getSeatTableSaga);
  yield takeLatest(CHANGE_TICKETSTATE, changeTicketStateSaga);
}

export const selectScreenName = createAction(
  SELECT_SCREENNAME,
  (input) => input
);
export const setTotalSeat = createAction(SET_TOTALSEAT, (input) => input);
export const selectMovie = createAction(SELECT_MOVIE, (input) => input);
export const selectRegion = createAction(SELECT_REGION, (input) => input);
export const selectTheater = createAction(SELECT_THEATER, (input) => input);
export const selectDate = createAction(SELECT_DATE, (input) => input);
export const selectScreen = createAction(SELECT_SCREEN, (input) => input);
export const moveToNext = createAction(MOVE_TO_NEXT);
export const moveToBefore = createAction(MOVE_TO_BEFORE);
export const selectAdult = createAction(SELECT_ADULT);
export const selectTeen = createAction(SELECT_TEEN);
export const selectSenior = createAction(SELECT_SENIOR);
export const handleseatSelected = createAction(
  HANDLE_SEATSELECTED,
  (input) => input
);
export const handleseatSelectedIndex = createAction(
  HANDLE_SEATSELECTEDINDEX,
  (input) => input
);
export const handleSeatArr = createAction(HANDLE_SEATARR, (input) => ({
  rowName: input.rowName,
  userId: input.userId,
  rowIndex: input.rowIndex,
  columnIndex: input.columnIndex,
}));

export const setCinemas = createAction(SET_CINEMAS, (input) => input);

const initialState = {
  seatTable: [],
  totalSeat: "",
  screenName: "",
  movies: [],
  cinemas: [],
  dates: [],
  showTimes: [],
  selectedCinemas: "",
  userId: "58645",
  group: "0",
  seatSelected: [],
  seatSelectedIndex: [],
  currentStep: 1,
  person: { adult: 0, teen: 0, senior: 0 },
  movie: "",
  theater: "",
  screen: "",
  timeData: "",
  region: { cinemaArea: "서울" },
  date: "",
  seatArr: [
    {
      A: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      B: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "123" },
        { key: 3, bookingUser: "123" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "123" },
        { key: 7, bookingUser: "123" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      C: [
        { key: 1, bookingUser: "123" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "123" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "123" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      D: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "123" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "123" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      E: [
        { key: 1, bookingUser: "123" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "123" },
        { key: 8, bookingUser: "123" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "123" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      F: [
        { key: 1, bookingUser: "123" },
        { key: 2, bookingUser: "123" },
        { key: 3, bookingUser: "123" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "123" },
        { key: 14, bookingUser: "123" },
        { key: 15, bookingUser: "123" },
      ],
    },
    {
      G: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      H: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      I: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      J: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      K: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      L: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      M: [
        { key: 1, bookingUser: "" },
        { key: 2, bookingUser: "" },
        { key: 3, bookingUser: "" },
        { key: 4, bookingUser: "" },
        { key: 5, bookingUser: "" },
        { key: 6, bookingUser: "" },
        { key: 7, bookingUser: "" },
        { key: 8, bookingUser: "" },
        { key: 9, bookingUser: "" },
        { key: 10, bookingUser: "" },
        { key: 11, bookingUser: "" },
        { key: 12, bookingUser: "" },
        { key: 13, bookingUser: "" },
        { key: 14, bookingUser: "" },
        { key: 15, bookingUser: "" },
      ],
    },
    {
      M: [],
    },
  ],
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
      id: "0",
      screen: "1",
      layer: "4",
      totalSeat: 170,
      timeslot: [
        {
          id: 0,
          startTime: "16:15",
          endTime: "18:15",
          dimension: "2D",
          emptySeat: 0,
        },
        {
          id: 1,
          startTime: "18:15",
          endTime: "20:15",
          dimension: "2D",
          emptySeat: 110,
        },
        {
          id: 2,
          startTime: "19:15",
          endTime: "21:15",
          dimension: "2D",
          emptySeat: 0,
        },
        {
          id: 3,
          startTime: "20:15",
          endTime: "22:15",
          dimension: "2D",
          emptySeat: 40,
        },
        {
          id: 4,
          startTime: "21:15",
          endTime: "23:15",
          dimension: "2D",
          emptySeat: 50,
        },
        {
          id: 5,
          startTime: "22:15",
          endTime: "00:15",
          dimension: "2D",
          emptySeat: 110,
        },
      ],
    },
    {
      id: "1",
      screen: "2",
      layer: "5",
      totalSeat: 180,
      timeslot: [
        {
          id: 0,
          startTime: "16:15",
          endTime: "18:15",
          dimension: "2D",
          emptySeat: 110,
        },
        {
          id: 1,
          startTime: "18:15",
          endTime: "20:15",
          dimension: "2D",
          emptySeat: 20,
        },
      ],
    },
    {
      id: "2",
      screen: "3",
      layer: "5",
      totalSeat: 190,
      timeslot: [
        {
          id: 0,
          startTime: "16:15",
          endTime: "18:15",
          dimension: "2D",
          emptySeat: 1,
        },
        {
          id: 1,
          startTime: "18:15",
          endTime: "20:15",
          dimension: "2D",
          emptySeat: 15,
        },
      ],
    },
  ],
};
const booking = handleActions(
  {
    [SELECT_MOVIE]: (state, action) => ({ ...state, movie: action.payload }),
    [SELECT_REGION]: (state, action) => ({ ...state, region: action.payload }),
    [SELECT_THEATER]: (state, action) => ({
      ...state,
      theater: action.payload,
    }),
    [SELECT_SCREEN]: (state, action) => ({
      ...state,
      timeData: action.payload,
    }),
    [SELECT_DATE]: (state, action) => ({ ...state, date: action.payload }),
    [MOVE_TO_NEXT]: (state, action) => ({
      ...state,
      currentStep: state.currentStep + 1,
    }),
    [MOVE_TO_BEFORE]: (state, action) => ({
      ...state,
      currentStep: state.currentStep - 1,
    }),
    [SELECT_ADULT]: (state, action) => ({
      ...state,
      person: { ...state.person, adult: action.payload },
    }),
    [SELECT_TEEN]: (state, action) => ({
      ...state,
      person: { ...state.person, teen: action.payload },
    }),
    [SELECT_SENIOR]: (state, action) => ({
      ...state,
      person: { ...state.person, senior: action.payload },
    }),
    [HANDLE_SEATSELECTED]: (state, action) => ({
      ...state,
      seatSelected: action.payload,
    }),
    [HANDLE_SEATSELECTEDINDEX]: (state, action) => ({
      ...state,
      seatSelectedIndex: action.payload,
    }),
    [HANDLE_SEATARR]: (state, action) => ({
      ...state,
      seatArr: state.seatArr.map((item1, index) =>
        index === action.payload.rowIndex
          ? {
              ...item1,
              [action.payload.rowName]: item1[action.payload.rowName].map(
                (item2, index) =>
                  index === action.payload.columnIndex
                    ? {
                        key: action.payload.columnIndex + 1,
                        bookingUser: action.payload.userId,
                      }
                    : item2
              ),
            }
          : item1
      ),
    }),
    [GET_INITSCREENS_SUCCESS]: (state, action) => ({
      ...state,
      movies: action.payload.movies,
      cinemas: action.payload.cinemas,
      dates: action.payload.dates,
    }),
    [GET_SCREENS_SUCCESS]: (state, action) => ({
      ...state,
      movies:
        action.payload.movies === undefined
          ? state.movies
          : action.payload.movies,
      cinemas:
        action.payload.cinemas === undefined
          ? state.cinemas
          : action.payload.cinemas,
      dates:
        action.payload.dates === undefined ? state.dates : action.payload.dates,
      showTimes:
        action.payload.showtimes === undefined
          ? state.showTimes
          : action.payload.showtimes,
    }),
    [GET_SEATTABLE_SUCCESS]: (state, action) => ({
      ...state,
      seatTable: action.payload.seats,
    }),
    [INIT_SHOWTIMES]: (state, action) => ({
      ...state,
      showTimes: [],
    }),
    [INIT_TOTAL]: (state, action) => ({
      ...state,
      totalSeat: "",
      screenName: "",
      seatTable: [],
      movies: [],
      cinemas: [],
      dates: [],
      showTimes: [],
      selectedCinemas: "",
      userId: "58645",
      group: "0",
      seatSelected: [],
      seatSelectedIndex: [],
      currentStep: 1,
      person: { adult: 0, teen: 0, senior: 0 },
      movie: "",
      theater: "",
      screen: "",
      timeData: "",
      region: { cinemaArea: "서울" },
      date: "",
    }),
    [SELECT_SCREENNAME]: (state, action) => ({
      ...state,
      screenName: action.payload,
    }),
    [SET_TOTALSEAT]: (state, action) => ({
      ...state,
      totalSeat: action.payload,
    }),
  },
  initialState
);

export default booking;
