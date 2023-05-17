import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import payrollReducer from "./redux/payroll/payrollSlice";
import App from "./App";

const store = configureStore({
  reducer: {
    payroll: payrollReducer,
  },
});

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
