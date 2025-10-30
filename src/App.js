import React from "react";
import { UserProvider } from "./contexts/UserContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return (
      <UserProvider>
        <div style={{ fontFamily: "sans-serif", padding: 20 }}>
          <Navbar />
          <hr />
          <Login />
        </div>
      </UserProvider>
    );
  }
}

export default App;
