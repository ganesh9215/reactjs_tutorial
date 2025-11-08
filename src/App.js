import React from "react";
import "./App.css";
import Header from "./components/Header";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="flex flex-wrap gap-4 justify-center">
        <UserCard name="Ganesh Karade" role="Frontend Developer" />
        <UserCard name="Sneha Patil" role="Backend Developer" />
        <UserCard name="Ravi Kumar" role="UI Designer" />
      </div>
    </div>
  );
}

export default App;
