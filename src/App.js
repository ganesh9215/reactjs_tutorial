import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Welcome";

const App = () => {
  const [username, setUsername] = useState(""); // Lifted state

  const handleLogin = (name) => {
    setUsername(name); // Update parent state from child
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🧠 React State Lifting Example</h1>
      <LoginForm onLogin={handleLogin} />
      <Welcome username={username} />
    </div>
  );
};

export default App;
