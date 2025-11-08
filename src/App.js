import React, { Component } from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";

class App extends Component {
  render() {
    return (
      <div
        style={{
          padding: "30px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <h1>🏢 Corporate Employee Management System (Redux + Class)</h1>
        <AddEmployee />
        <EmployeeList />
      </div>
    );
  }
}

export default App;
