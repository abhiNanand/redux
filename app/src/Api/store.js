// src/redux/store.js

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducer";
import watchFetchUser from "./sagas";

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store with middleware
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

// Run the saga
sagaMiddleware.run(watchFetchUser);

export default store;
