import React, { useEffect } from "react";
import { setCalculatedPayroll } from "./redux/payroll/payrollSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBasicSalary, setAllowance } from "./redux/payroll/payrollSlice";

function App() {
  const dispatch = useDispatch();
  const {
    basicSalary,
    allowance,
    grossIncome,
    taxableIncome,
    pensionTier1,
    pensionTier2,
    pensionTier3,
    incomeTax,
    netPay,
  } = useSelector((state) => state.payroll);

  useEffect(() => {
    fetchPayrolls();
  }, []);

  const fetchPayrolls = async () => {
    try {
      const response = await axios.get("http://localhost:3001/payrolls");
      const data = response.data;
      console.log(data);
      // Dispatch an action to store the retrieved payrolls in the Redux store if needed.
    } catch (error) {
      console.log(error);
    }
  };

  const handleBasicSalaryChange = (e) => {
    dispatch(setBasicSalary(Number(e.target.value)));
  };

  const handleAllowanceChange = (e) => {
    dispatch(setAllowance(Number(e.target.value)));
  };

  const handleCalculateClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000", {
        basic_salary: basicSalary,
        allowance: allowance,
      });
      const data = response.data;
      console.log(data);

      // Dispatch the action to store the calculated payroll in the Redux store
      dispatch(setCalculatedPayroll(data));
    } catch (error) {
      console.error(error.message); // Log the error message
      // Handle the error appropriately (e.g., show an error message to the user)
    }
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
            <th>Basic Salary</th>
            <th>Allowance</th>
            <th>Gross Income</th>
            <th>Taxable Income</th>
            <th>Pension Tier 1</th>
            <th>Pension Tier 2</th>
            <th>Pension Tier 3</th>
            <th>Income Tax</th>
            <th>Net Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{basicSalary}</td>
            <td>{allowance}</td>
            <td>{grossIncome}</td>
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
