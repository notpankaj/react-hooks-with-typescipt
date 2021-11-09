import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoReducer from "./ReducerExample";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodoReducer />
  </React.StrictMode>,
  document.getElementById("root")
);
