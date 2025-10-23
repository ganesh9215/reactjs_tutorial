import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Caught by Boundary:", error, errorInfo);
    // In real-world: log to Sentry, Datadog, or Firebase
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "20px",
            border: "1px solid red",
            borderRadius: "10px",
            color: "red",
            background: "#ffeaea",
          }}
        >
          <h3>⚠️ Oops! Something went wrong in this widget.</h3>
          <p>Don’t worry — the rest of your dashboard is safe.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
