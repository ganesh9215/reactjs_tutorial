import React, { Component } from "react";
import Header from "./components/Header";
import UserCard from "./components/UserCard";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Header title="User Dashboard (Class Component)" />
        <UserCard name="Ganesh Karade" age={25} active={true} />
      </div>
    );
  }
}

export default App;
