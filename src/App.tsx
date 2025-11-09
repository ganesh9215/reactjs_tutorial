import React from "react";
import Header from "./component/Header";
import UserCard from "./component/UserCard";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Header title="User Dashboard" />
      <UserCard name="Ganesh Karade" age={25} active={true} />
    </div>
  );
};

export default App;
