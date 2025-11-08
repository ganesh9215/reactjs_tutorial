// src/components/EmployeeDetails.js
import React, { Component } from "react";
import { useParams } from "react-router-dom";

// Wrapper to use params in class component
function withRouter(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class EmployeeDetails extends Component {
  state = {
    employees: [
      { id: 1, name: "John Doe", position: "Developer", department: "IT" },
      { id: 2, name: "Jane Smith", position: "Designer", department: "UI/UX" },
      { id: 3, name: "Alex Johnson", position: "Manager", department: "HR" },
    ],
  };

  render() {
    const { id } = this.props.params;
    const employee = this.state.employees.find(
      (emp) => emp.id === parseInt(id)
    );

    if (!employee) return <h2>Employee not found</h2>;

    return (
      <div>
        <h2>Employee Details</h2>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Department:</strong> {employee.department}</p>
      </div>
    );
  }
}

export default withRouter(EmployeeDetails);
