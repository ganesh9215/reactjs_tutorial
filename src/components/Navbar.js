import React from "react";
import { UserContext } from "../contexts/UserContext";

class Navbar extends React.Component {
  // 1️⃣ Connect to context
  static contextType = UserContext;

  render() {
    const { user, logout } = this.context;

    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>MyApp</h2>
        <div>
          {user ? (
            <>
              <span>Welcome, {user.name}! </span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <span>Please log in</span>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
