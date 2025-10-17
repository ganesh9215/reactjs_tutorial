import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const sampleItem = { name: "React Book", price: 499 };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Shopping Cart</h3>
      <button onClick={() => addToCart(sampleItem)}>Add React Book</button>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} - ₹{item.price}
              <button
                onClick={() => removeFromCart(item.name)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
