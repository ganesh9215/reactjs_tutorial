import React, { Component } from "react";

class EmployeeItem extends Component {
  render() {
    const { employee, deleteEmployee } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: "1px solid #ccc",
          width: "300px",
        }}
      >
        <span>
          {employee.name} ({employee.department})
        </span>
        <button onClick={() => deleteEmployee(employee.id)}>❌</button>
      </div>
    );
  }
}

export default EmployeeItem;
