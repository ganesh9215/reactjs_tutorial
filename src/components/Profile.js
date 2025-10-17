import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, login } = useContext(UserContext);

  if (!user) {
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>No user logged in.</h3>
        <button onClick={() => login("Ganesh")}>Login as Ganesh</button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default Profile;
