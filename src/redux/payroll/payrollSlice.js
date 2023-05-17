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
  calculatedPayroll: null, // Added the calculatedPayroll initial state
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
    // Other reducers...
    setCalculatedPayroll: (state, action) => {
      state.calculatedPayroll = action.payload;
    },
  },
});

export const { setBasicSalary, setAllowance, setCalculatedPayroll } =
  payrollSlice.actions;
export default payrollSlice.reducer;
