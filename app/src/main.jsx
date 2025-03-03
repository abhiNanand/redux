// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./CounterApp/App";
// import "./index.css";
// import { Provider } from "react-redux";
// import store from "./CounterApp/store/store";



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
 
import "./index.css";
import { Provider } from "react-redux";
 

import store from './Api/store.js'
import App2 from './Api/App2.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);
