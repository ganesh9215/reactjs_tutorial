// withLoader.js
import React from "react";

// ✅ HOC that wraps any component with a loader
const withLoader = (WrappedComponent) => {
  return function WithLoaderComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div style={{ padding: 20, textAlign: "center" }}>
          <h3>Loading data...</h3>
          <div
            style={{
              width: 30,
              height: 30,
              border: "3px solid #ddd",
              borderTop: "3px solid #333",
              borderRadius: "50%",
              margin: "10px auto",
              animation: "spin 1s linear infinite",
            }}
          />
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      );
    }

    // ✅ Return wrapped component when not loading
    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
