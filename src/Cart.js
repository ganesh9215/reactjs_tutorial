// src/Cart.js
import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { cartItems, onAddItem } = this.props;

    return (
      <div style={{ padding: 20 }}>
        <h3>🛒 Cart Items ({cartItems.length})</h3>
        <button
          onClick={onAddItem}
          style={{ padding: "5px 10px", marginBottom: "10px" }}
        >
          Add Random Item
        </button>

        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;
