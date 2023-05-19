// reducers.js
import { combineReducers } from "redux";

const initialState = {
  basicSalary: 0, // Initial value for basicSalary
};

const basicSalaryReducer = (state = initialState.basicSalary, action) => {
  switch (action.type) {
    // Handle relevant actions for basicSalary here
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  basicSalary: basicSalaryReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
