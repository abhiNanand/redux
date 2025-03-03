import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducer";
import {rootSaga} from "./sagas";

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine reducers
const rootReducer = combineReducers({ user: userReducer });

// Create store with middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run Saga middleware
sagaMiddleware.run(rootSaga);

export default store;
