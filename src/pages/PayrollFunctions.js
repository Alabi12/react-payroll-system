import { useState } from "react";

const PayrollFunctions = () => {
  const [grossSalary, setGrossSalary] = useState("");
  const [netSalary, setNetSalary] = useState(null);

  const calculateNetSalary = (grossSalary) => {
    const taxRate = 0.2; // Assuming a 20% tax rate
    const netSalary = grossSalary * (1 - taxRate);
    return netSalary.toFixed(2); // Round to 2 decimal places
  };

  const handleCalculateNetSalary = () => {
    const netSalary = calculateNetSalary(grossSalary);
    setNetSalary(netSalary);
  };

  return (
    <div>
      <h2>Payroll Functions</h2>
      <div>
        <label>Gross Salary: </label>
        <input
          type="number"
          value={grossSalary}
          onChange={(e) => setGrossSalary(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleCalculateNetSalary}>Calculate Net Salary</button>
      </div>
      {netSalary && <div>Net Salary: { netSalary }</div>}
    </div>
  );
};

export default PayrollFunctions;
