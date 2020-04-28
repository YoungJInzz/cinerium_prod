import { combineReducers } from "redux";
import booking, { bookingSaga } from "./booking";
import { all } from "redux-saga/effects";
const rootReducer = combineReducers({
  booking,
});
export function* rootSaga() {
  yield all([bookingSaga()]);
}

export default rootReducer;
