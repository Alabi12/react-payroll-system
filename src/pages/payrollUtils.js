export const calculateNetSalary = (grossSalary) => {
  const taxRate = 0.2; // Assuming a 20% tax rate
  const netSalary = grossSalary * (1 - taxRate);
  return netSalary.toFixed(2); // Round to 2 decimal places
};
