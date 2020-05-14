import { combineReducers } from "redux";
import booking, { bookingSaga } from "./booking";
import loading from "./loading";
import { all } from "redux-saga/effects";
import { INITSTATE } from "./booking";
const appReducer = combineReducers({
  booking,
  loading,
});
export function* rootSaga() {
  yield all([bookingSaga()]);
}
const rootReducer = (state, action) => {
  if (action.type === INITSTATE) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
