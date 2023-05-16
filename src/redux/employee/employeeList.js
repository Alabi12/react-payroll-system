import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
} from "./employeesSlice";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const loading = useSelector((state) => state.employees.loading);
  const error = useSelector((state) => state.employees.error);

  useEffect(() => {
    dispatch(fetchEmployeesStart());
    // Make an API call to fetch employees
    fetch("/api/employees")
      .then((response) => response.json())
      .then((data) => dispatch(fetchEmployeesSuccess(data)))
      .catch((error) => dispatch(fetchEmployeesFailure(error.message)));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  );
};

export default EmployeeList;
