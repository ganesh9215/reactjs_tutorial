import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmployee } from "../store/actions/employeeActions";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", department: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name: this.state.name,
      department: this.state.department,
    };

    this.props.addEmployee(newEmployee);
    this.setState({ name: "", department: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      >
        <h3>Add New Employee</h3>
        <input
          type="text"
          placeholder="Employee Name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={this.state.department}
          onChange={(e) => this.setState({ department: e.target.value })}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    );
  }
}

export default connect(null, { addEmployee })(AddEmployee);
