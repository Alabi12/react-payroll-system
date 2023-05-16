import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBasicSalary,
  setAllowance,
  calculatePayroll,
} from "./redux/payroll/payrollSlice";

function App() {
  const dispatch = useDispatch();
  const {
    basicSalary,
    allowance,
    taxableIncome,
    pensionTier1,
    pensionTier2,
    pensionTier3,
    incomeTax,
    netPay,
  } = useSelector((state) => state.payroll);

  const handleBasicSalaryChange = (e) => {
    dispatch(setBasicSalary(Number(e.target.value)));
  };

  const handleAllowanceChange = (e) => {
    dispatch(setAllowance(Number(e.target.value)));
  };

  const handleCalculateClick = () => {
    dispatch(calculatePayroll());
  };

  return (
    <div>
      <h1>Payroll Calculator</h1>
      <label htmlFor="basicSalary">Basic Salary:</label>
      <input
        type="number"
        id="basicSalary"
        value={basicSalary}
        onChange={handleBasicSalaryChange}
      />
      <br />
      <label htmlFor="allowance">Allowance:</label>
      <input
        type="number"
        id="allowance"
        value={allowance}
        onChange={handleAllowanceChange}
      />
      <br />
      <button onClick={handleCalculateClick}>Calculate</button>
      <br />
      <h2>Payroll Results</h2>
      <table>
        <thead>
          <tr>
            <th>Taxable Income</th>
            <th>First Tier </th>
            <th>Second Tier </th>
            <th>Profident fund</th>
            <th>Income Tax</th>
            <th>Net Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{taxableIncome}</td>
            <td>{pensionTier1}</td>
            <td>{pensionTier2}</td>
            <td>{pensionTier3}</td>
            <td>{incomeTax}</td>
            <td>{netPay}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
