import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEmployee } from "../store/actions/employeeActions";
import EmployeeItem from "./EmployeeItem";

class EmployeeList extends Component {
  render() {
    const { employees, deleteEmployee } = this.props;
    return (
      <div>
        <h3>Employee Directory</h3>
        {employees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          employees.map((emp) => (
            <EmployeeItem
              key={emp.id}
              employee={emp}
              deleteEmployee={deleteEmployee}
            />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { deleteEmployee })(EmployeeList);
