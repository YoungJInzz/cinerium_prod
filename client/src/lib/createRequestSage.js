import { call, put } from "redux-saga/effects";
import { startloading, finishloading } from "../modules/loading";

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  console.log("response");
  return function* (action) {
    console.log("asdasd");
    yield put(startloading(type));
    try {
      const response = yield call(request, action.payload);
      console.log("response", response);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishloading(type));
  };
}
