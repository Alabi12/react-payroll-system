import React, { useEffect, useState } from "react";

const App = () => {
  const [payrolls, setPayrolls] = useState([]);
  const [newPayroll, setNewPayroll] = useState({
    basic_salary: "",
    allowance: "",
    taxable_income: "",
    pension_tier1: "",
    pension_tier2: "",
    pension_tier3: "",
    income_tax: "",
    net_pay: "",
  });

  useEffect(() => {
    const storedPayrolls = localStorage.getItem("payrolls");
    if (storedPayrolls) {
      setPayrolls(JSON.parse(storedPayrolls));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("payrolls", JSON.stringify(payrolls));
  }, [payrolls]);

  const fetchPayrollData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/payrolls");
      const data = await response.json();
      setPayrolls(data);
    } catch (error) {
      console.error("Error fetching payroll data:", error);
    }
  };

  const postPayrollData = async (payrollData) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/payrolls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payrollData),
      });

      if (!response.ok) {
        throw new Error("Error posting payroll data");
      }

      const data = await response.json();
      setPayrolls([...payrolls, data]);

      // Update local storage
      const updatedPayrolls = [...payrolls, data];
      localStorage.setItem("payrolls", JSON.stringify(updatedPayrolls));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postPayrollData(newPayroll);
    setNewPayroll({
      basic_salary: "",
      allowance: "",
      taxable_income: "",
      pension_tier1: "",
      pension_tier2: "",
      pension_tier3: "",
      income_tax: "",
      net_pay: "",
    });
  };

  return (
    <div>
      {payrolls.length > 0 ? (
        <ul>
          {payrolls.map((payroll, index) => (
            <li key={index}>
              Basic Salary: {payroll.basic_salary}
              <br />
              Allowance: {payroll.allowance}
              <br />
              Taxable Income: {payroll.taxable_income}
              <br />
              Pension Tier 1: {payroll.pension_tier1}
              <br />
              Pension Tier 2: {payroll.pension_tier2}
              <br />
              Pension Tier 3: {payroll.pension_tier3}
              <br />
              Income Tax: {payroll.income_tax}
              <br />
              Net Pay: {payroll.net_pay}
            </li>
          ))}
        </ul>
      ) : (
        <p>No payroll data available.</p>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Basic Salary:
          <input
            type="text"
            name="basic_salary"
            value={newPayroll.basic_salary}
            onChange={(e) =>
              setNewPayroll({ ...newPayroll, basic_salary: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Allowance:
          <input
            type="text"
            name="allowance"
            value={newPayroll.allowance}
            onChange={(e) =>
              setNewPayroll({ ...newPayroll, allowance: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Taxable Income:
          <input
            type="text"
            name="taxable_income"
            value={newPayroll.taxable_income}
            onChange={(e) =>
              setNewPayroll({ ...newPayroll, taxable_income: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Pension Tier 1:
          <input
            type="text"
            name="pension_tier1"
            value={newPayroll.pension_tier1}
            onChange={(e) =>
              setNewPayroll({ ...newPayroll, pension_tier1: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Pension Tier 2:
          <input
            type="text"
            name="pension_tier2"
            value={newPayroll.pension_tier2}
            onChange={(e) =>
              setNewPayroll({ ...newPayroll, pension_tier2: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Pension Tier 3:
          <input
            type="text"
            name="pension_tier3"
            value={newPayroll.pension_tier3}
            onChange={(e) =>
              setNewPayroll({ ...newPayroll, pension_tier3: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Income Tax:
          <input
            type="text"
            name="income_tax"
            value={newPayroll.income_tax}
            onChange={(e) =>
              setNewPayroll({ ...newPayroll, income_tax: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Net Pay:
          <input
            type="text"
            name="net_pay"
            value={newPayroll.net_pay}
            onChange={(e) =>
              setNewPayroll({ ...newPayroll, net_pay: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
