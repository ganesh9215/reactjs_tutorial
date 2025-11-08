// src/App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ padding: "20px" }}>
          <h1>🏢 Company Portal</h1>

          {/* Navbar */}
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/employees">Employees</Link>
          </nav>
          <hr />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/:id" element={<EmployeeDetails />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
