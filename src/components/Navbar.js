import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  return (
    <nav
      style={{
        background: theme === "light" ? "none" : "#333",
        color: theme === "light" ? "#333" : "#000",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>🛍️ MyShop</h2>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <span style={{ marginLeft: "20px" }}>🛒 {cart.length}</span>
        {user ? (
          <>
            <span style={{ marginLeft: "20px" }}>Welcome, {user.name}</span>
            <button onClick={logout} style={{ marginLeft: "10px" }}>
              Logout
            </button>
          </>
        ) : (
          <span style={{ marginLeft: "20px" }}>Please log in</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
