import React from "react";

const NewsWidget = () => {
  // Simulate crash (e.g., broken API response)
  throw new Error("News API failed to fetch!");

  return (
    <div
      style={{
        background: "#e0ffe0",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>🗞 Latest News</h3>
      <p>React 19 introduces new compiler features!</p>
    </div>
  );
};

export default NewsWidget;
