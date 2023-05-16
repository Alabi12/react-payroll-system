import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    fetchEmployeesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEmployeesSuccess(state, action) {
      state.loading = false;
      state.employees = action.payload;
    },
    fetchEmployeesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },
    updateEmployee(state, action) {
      const updatedEmployee = action.payload;
      const index = state.employees.findIndex(
        (employee) => employee.id === updatedEmployee.id
      );
      if (index !== -1) {
        state.employees[index] = updatedEmployee;
      }
    },
    deleteEmployee(state, action) {
      const employeeId = action.payload;
      state.employees = state.employees.filter(
        (employee) => employee.id !== employeeId
      );
    },
  },
});

export const {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = employeesSlice.actions;

export default employeesSlice.reducer;
