// import { takeEvery, put, delay } from "redux-saga/effects";


// console.log("forth");
// // Worker saga: performs async increment
// function* incrementAsync() {
//   yield delay(1000); // Wait 1 second
//   yield put({ type: "INCREMENT" });

// //   ✅ Yeh function 1 second wait karega aur phir Redux me "INCREMENT" action bhej dega.
// }

// // Watcher saga: watches for "INCREMENT_ASYNC" and triggers incrementAsync
// export function* watchIncrementAsync() {
//   yield takeEvery("INCREMENT_ASYNC", incrementAsync);
// }

// /* 
// Redux-Saga Ka Mukhya Concept. Redux-Saga do tarah ke functions ka use karta hai:
// 1. Watch Saga-  Yeh actions ko sunta hai aur worker saga ko activate karta hai.
// 2. Worker Saga- Yeh async kaam karta hai jaise API call, delay, ya kuch aur processing.


// */

import { put, takeEvery, all } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}


//============================================================================
//test
 