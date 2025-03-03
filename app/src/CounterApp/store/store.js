import { createStore, applyMiddleware } from "redux";


import createSagaMiddleware from "redux-saga";
import counterReducer from "./reducer";
import { watchIncrementAsync } from "./sagas";

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store and apply the saga middleware
const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));

// Run the saga
sagaMiddleware.run(watchIncrementAsync);

export default store;
