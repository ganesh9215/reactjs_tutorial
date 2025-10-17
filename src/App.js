import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === "light" ? "none" : "#ddd",
      color: theme === "light" ? "#333" : "#000"}}>
      <Navbar />
      <Profile />
      <Cart />
    </div>
  );
}

export default App;
