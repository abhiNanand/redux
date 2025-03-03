import { all } from "redux-saga/effects";
import { watchFetchUsers } from "./sagas.js";
export default function* rootSaga() {
    yield all([watchFetchUsers()]);
  }