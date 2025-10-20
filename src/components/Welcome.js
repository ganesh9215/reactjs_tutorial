import React from "react";

const Welcome = ({ username }) => {
  return (
    <div>
      {username ? (
        <h2>🎉 Welcome, {username}!</h2>
      ) : (
        <h2>👋 Please log in to continue.</h2>
      )}
    </div>
  );
};

export default Welcome;
