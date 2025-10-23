import React from "react";
import { Navigate } from "react-router-dom";

// 🔹 Higher-Order Component for authentication
const withAuthProtection = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem("authToken");

    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    // ✅ Return the original component if authenticated
    return <WrappedComponent {...props} />;
  };
};

export default withAuthProtection;
