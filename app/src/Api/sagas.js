import { call, put, takeEvery,all } from "redux-saga/effects";

const fetchUserFromApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return await response.json();
};

// Worker Saga: Handles the API call
function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUserFromApi); // ✅ Fixed function name
    yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
  } catch (error) {
    yield put({ type: "FETCH_USERS_FAILURE", payload: error.message });
  }
}

// Watcher Saga: Listens for "FETCH_USERS_REQUEST"
export function* watchFetchUsers() {
  yield takeEvery("FETCH_USERS_REQUEST", fetchUsersSaga);
}

export function* rootSaga() {
    yield all([watchFetchUsers()]);
}
