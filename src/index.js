import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import payrollReducer from "./redux/payroll/payrollSlice";
import App from "./App";

const store = configureStore({
  reducer: {
    payroll: payrollReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
