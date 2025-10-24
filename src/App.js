import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, count: 0 };
    console.log("🟡 constructor() - State initialized");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("🟣 getDerivedStateFromProps() - Sync state with props if needed");
    return null; // return new state if you want to update based on props
  }

  componentDidMount() {
    console.log("🟢 componentDidMount() - Component mounted");
    // Simulate API call
    setTimeout(() => {
      this.setState({ user: { name: "Alice", email: "alice@gmail.com" } });
    }, 1000);

    // Example: start counter
    this.interval = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("🟤 shouldComponentUpdate() - Control re-render");
    // Allow update only when count is even
    return nextState.count % 2 === 0;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("🔵 getSnapshotBeforeUpdate() - Before DOM update");
    return { prevCount: prevState.count };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("🟠 componentDidUpdate() - After update", snapshot);
  }

  componentWillUnmount() {
    console.log("🔴 componentWillUnmount() - Cleanup before unmount");
    clearInterval(this.interval);
  }

  render() {
    console.log("⚪ render()");
    const { user, count } = this.state;

    return (
      <div style={{ fontFamily: "sans-serif", padding: 20 }}>
        <h2>🧩 Lifecycle Example (Class Component)</h2>
        {user ? (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Count:</strong> {count}</p>
          </>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    );
  }
}

export default UserProfile;
