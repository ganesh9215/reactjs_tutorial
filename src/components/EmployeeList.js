import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployeeList extends Component {
  state = {
    employees: [
      { id: 1, name: "John Doe", position: "Developer" },
      { id: 2, name: "Jane Smith", position: "Designer" },
      { id: 3, name: "Alex Johnson", position: "Manager" },
    ],
  };

  render() {
    return (
      <div>
        <h2>Employees</h2>
        <ul>
          {this.state.employees.map((emp) => (
            <li key={emp.id}>
              <Link to={`/employees/${emp.id}`}>
                {emp.name} - {emp.position}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
