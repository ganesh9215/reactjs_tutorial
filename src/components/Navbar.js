import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#282c34",
        color: "white",
      }}
    >
      <h3>🛍️ ShopMate</h3>
      <h4>🛒 Cart: {cartCount} items</h4>
    </nav>
  );
};

export default Navbar;
