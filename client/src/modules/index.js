import { combineReducers } from "redux";
import booking, { bookingSaga } from "./booking";
import loading from "./loading";
import { all } from "redux-saga/effects";
const rootReducer = combineReducers({
  booking,
  loading,
});
export function* rootSaga() {
  yield all([bookingSaga()]);
}

export default rootReducer;
