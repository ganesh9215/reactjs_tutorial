import React, { Component } from "react";

class Cart extends Component {
  calculateTotal = () => {
    return this.props.cart.reduce((sum, item) => sum + item.price, 0);
  };

  render() {
    const { cart, removeFromCart } = this.props;
    return (
      <div style={{ marginTop: "30px" }}>
        <h2>🛍️ Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "5px 0",
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
              }}
            >
              <span>
                {item.name} - ${item.price}
              </span>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))
        )}
        <h3>Total: ${this.calculateTotal()}</h3>
      </div>
    );
  }
}

export default Cart;
