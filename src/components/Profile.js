import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, login } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>
      {!user ? (
        <>
          <h3>No user logged in</h3>
          <button onClick={() => login("Ganesh")}>Login as Ganesh</button>
        </>
      ) : (
        <>
          <h3>User Profile</h3>
          <p>Name: {user.name}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
