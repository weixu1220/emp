import Employee from "./Employee";

function EmployeeList({ employees,handleDelete }) {

    return (
        <div className="emp-list">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            employee={employee}
            handleDelete={handleDelete}  
          />
        ))}
      </div>
    )
}

export default EmployeeList;