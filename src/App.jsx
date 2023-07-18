import "./index.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import { data } from "./data";

export default function App() {

  let [employees, setEmployees] = useState(data);
  function handleDelete(id) {
    let newEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(newEmployees);}
  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }

  return (
    <div className="App">
      <HomePage employees={employees} addEmployee={addEmployee} handleDelete={handleDelete} />
    </div>
  );
}
