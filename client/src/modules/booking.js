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
const GET_POINT = "GET_POINT";
const GET_POINT_SUCCESS = "GET_POINT_SUCCESS";

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
const SET_SELECTEDSEATS = "booking/SET_SELECTEDSEATS";
const SET_SEATTOBOOKED = "booking/SET_SEATTOBOOKED";
const SET_BOOKEDTOEMPTY = "booking/SET_BOOKEDTOEMPTY";

export const getInitScreens = createAction(GET_INITSCREENS);
export const getScreens = createAction(GET_SCREENS, (payload) => payload);
export const initShowTimes = createAction(INIT_SHOWTIMES);
export const initTotal = createAction(INIT_TOTAL);
export const getSeatTable = createAction(GET_SEATTABLE);
export const changeTicketState = createAction(
  CHANGE_TICKETSTATE,
  (payload) => payload
);
export const getPoint = createAction(GET_POINT, (payload) => payload);

const getInitScreensSaga = createRequestSaga(GET_INITSCREENS, api.getInit);
const getScreenSaga = createRequestSaga(GET_SCREENS, api.getScreenInfo);
const getSeatTableSaga = createRequestSaga(GET_SEATTABLE, api.getSeats);
const changeTicketStateSaga = createRequestSaga(
  CHANGE_TICKETSTATE,
  api.changeTicketState
);
const getPointSaga = createRequestSaga(GET_POINT, api.getPoint);

export function* bookingSaga() {
  yield takeLatest(GET_INITSCREENS, getInitScreensSaga);
  yield takeLatest(GET_SCREENS, getScreenSaga);
  yield takeLatest(GET_SEATTABLE, getSeatTableSaga);
  yield takeLatest(CHANGE_TICKETSTATE, changeTicketStateSaga);
  yield takeLatest(GET_POINT, getPointSaga);
}

export const selectScreenName = createAction(
  SELECT_SCREENNAME,
  (input) => input
);
export const setSeatToBooked = createAction(SET_SEATTOBOOKED, (input) => input);
export const setBookedToEmpty = createAction(
  SET_BOOKEDTOEMPTY,
  (input) => input
);
export const setSectedSeats = createAction(SET_SELECTEDSEATS, (input) => input);
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
  pointInfo: { giftCards: [{ giftCardBalance: 0 }], movieCoupons: [] },
  seatTable: [],
  selectedSeats: [],
  ticketTokens: [],
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
    [CHANGE_TICKETSTATE_SUCCESS]: (state, action) => ({
      ...state,
      ticketTokens: state.ticketTokens.concat(action.payload.ticketTokens),
    }),
    [GET_POINT_SUCCESS]: (state, action) => ({
      ...state,
      pointInfo: action.payload,
    }),
    [SET_SELECTEDSEATS]: (state, action) => ({
      ...state,
      selectedSeats: state.selectedSeats.concat(action.payload),
    }),
    [SET_SEATTOBOOKED]: (state, action) => ({
      ...state,
      seatTable: state.seatTable.map((item1, index) =>
        index === action.payload.rowIndex
          ? {
              ...item1,
              [action.payload.rowName]: item1[
                action.payload.rowName
              ].map((item2, index) =>
                index === action.payload.columnIndex
                  ? { ...item2, ticketState: "0" }
                  : item2
              ),
            }
          : item1
      ),
    }),
    [SET_BOOKEDTOEMPTY]: (state, action) => ({
      ...state,
      seatTable: state.seatTable.map((item1, index) =>
        index === action.payload.rowIndex
          ? {
              ...item1,
              [action.payload.rowName]: item1[
                action.payload.rowName
              ].map((item2, index) =>
                index === action.payload.columnIndex
                  ? { ...item2, ticketState: "1" }
                  : item2
              ),
            }
          : item1
      ),
    }),
  },
  initialState
);

export default booking;
