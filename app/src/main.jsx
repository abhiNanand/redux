// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./CounterApp/App";
// import "./index.css";
// import { Provider } from "react-redux";
// import store from "./CounterApp/store/store";


 
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider  store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
 
import "./index.css";
import { Provider } from "react-redux";
 

import store from './Api/store.js'
import App from './Api/App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./LoginPage/App";
// import "./index.css";
// import { Provider } from "react-redux";
// import store from "./LoginPage/store";

// console.log("first");
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
// <App/>
//   </React.StrictMode>
// );
//   //  <Provider  store={store}>
//  // <App />
//  // </Provider>