// src/redux/sagas.js

import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_USER_REQUEST, fetchUserSuccess, fetchUserFailure } from "./reducer";

// Simulated API call
const fetchUserApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json());

// Worker Saga: Handles the API call
function* fetchUserSaga() {
  try {
    const user = yield call(fetchUserApi); // Call the API
    yield put(fetchUserSuccess(user)); // Dispatch success action
  } catch (error) {
    yield put(fetchUserFailure(error.message)); // Dispatch failure action
  }
}

// Watcher Saga: Listens for FETCH_USER_REQUEST
function* watchFetchUser() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}

export default watchFetchUser;
