function Employee({ employee, handleDelete}) {
    return (
      <div
        className="emp"
        style={{ border: `1px solid ${employee.borderColor}` }}
      >
        <img src={employee.headshot} alt="employee" />
        <h4>{employee.name}</h4>
        <p>{employee.title}</p>
        <button className="delete" onClick={() => handleDelete(employee.id)}>X</button> 
      </div>
    );
  }
  
  export default Employee;
  