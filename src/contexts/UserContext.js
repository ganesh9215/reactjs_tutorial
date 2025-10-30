import React from "react";

// 1️⃣ Create Context object
const UserContext = React.createContext();

// 2️⃣ Create a Provider component (Class-based)
class UserProvider extends React.Component {
  state = {
    user: null,
  };

  login = (name, email) => {
    this.setState({ user: { name, email } });
  };

  logout = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserContext, UserProvider };