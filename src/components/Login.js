import React from "react";
import { UserContext } from "../contexts/UserContext";

class Login extends React.Component {
  static contextType = UserContext;

  handleLogin = () => {
    this.context.login("Ganesh", "ganesh@example.com");
  };

  render() {
    const { user } = this.context;

    return (
      <div style={{ marginTop: 20 }}>
        <h3>Profile Section</h3>

        {user ? (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ) : (
          <>
            <p>No user logged in.</p>
            <button onClick={this.handleLogin}>Login as Ganesh</button>
          </>
        )}
      </div>
    );
  }
}

export default Login;
