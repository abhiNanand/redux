import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserList from "./UserList";

export default function App2() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux-Saga API Call Example</h1>
        <UserList />
      </div>
    </Provider>
  );
}
