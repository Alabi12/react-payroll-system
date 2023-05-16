import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicSalary: 0,
  allowance: 0,
  taxableIncome: 0,
  pensionTier1: 0,
  pensionTier2: 0,
  pensionTier3: 0,
  incomeTax: 0,
  netPay: 0,
};

const payrollSlice = createSlice({
  name: "payroll",
  initialState,
  reducers: {
    setBasicSalary: (state, action) => {
      state.basicSalary = action.payload;
    },
    setAllowance: (state, action) => {
      state.allowance = action.payload;
    },
    calculatePayroll: (state) => {
      state.taxableIncome = state.basicSalary + state.allowance;
      state.pensionTier1 = 0.1 * state.basicSalary;
      state.pensionTier2 = 0.05 * state.basicSalary;
      state.pensionTier3 = 0.02 * state.basicSalary;
      state.incomeTax = 0.2 * state.taxableIncome;
      state.netPay =
        state.taxableIncome -
        state.pensionTier1 -
        state.pensionTier2 -
        state.pensionTier3 -
        state.incomeTax;
    },
  },
});

export const { setBasicSalary, setAllowance, calculatePayroll } =
  payrollSlice.actions;

export default payrollSlice.reducer;
