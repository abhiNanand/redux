import { takeEvery, put, delay } from "redux-saga/effects";

// Worker saga: performs async increment
function* incrementAsync() {
  yield delay(1000); // Wait 1 second
  yield put({ type: "INCREMENT" });

//   ✅ Yeh function 1 second wait karega aur phir Redux me "INCREMENT" action bhej dega.
}

// Watcher saga: watches for "INCREMENT_ASYNC" and triggers incrementAsync
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

/* 
Redux-Saga Ka Mukhya Concept. Redux-Saga do tarah ke functions ka use karta hai:
1. Watch Saga-  Yeh actions ko sunta hai aur worker saga ko activate karta hai.
2. Worker Saga- Yeh async kaam karta hai jaise API call, delay, ya kuch aur processing.


*/