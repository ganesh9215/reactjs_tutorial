import React, { useState } from "react";

const StockWidget = () => {
  const [simulateError, setSimulateError] = useState(false);

  if (simulateError) {
    throw new Error("Stock API failed!");
  }

  return (
    <div
      style={{
        background: "#fff3cd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>💰 Stock Widget</h3>
      <p>Apple (AAPL): $190.45</p>
      <p>Google (GOOG): $138.12</p>

      <button
        onClick={() => setSimulateError(true)}
        style={{
          marginTop: "10px",
          padding: "6px 10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Simulate Error
      </button>
    </div>
  );
};

export default StockWidget;
