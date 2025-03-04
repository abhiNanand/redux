import { createStore, applyMiddleware } from "redux";

 
import createSagaMiddleware from "redux-saga";
import counterReducer from "./reducer";



// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store and apply the saga middleware
const store = createStore(counterReducer, applyMiddleware(sagaMiddleware));



//import { watchIncrementAsync } from "./sagas";
// Run the saga
//sagaMiddleware.run(watchIncrementAsync);


import rootSaga from "./sagas";
sagaMiddleware.run(rootSaga);

export default store;
