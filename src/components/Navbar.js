import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
const { user, logout } = useContext(UserContext);   
  return (
    <nav style={{ background: "#222", color: "#fff", padding: "10px" }}>
      <h2>MyApp</h2>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </nav>
  );
};

export default Navbar;
