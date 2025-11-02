// src/App.js
import React, { Component } from "react";
import Cart from "./Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      totalPrice: 0,
    };

    // 🧠 Cache (like useMemo cache)
    this.cachedCartLength = 0;
    this.cachedTotal = 0;
  }

  addRandomItem = () => {
    const newItem = {
      id: Date.now(),
      name: "Product " + (this.state.cartItems.length + 1),
      price: Math.floor(Math.random() * 1000 + 100),
    };

    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, newItem],
    }));
  };

  // 🧠 Expensive computation (simulate heavy calculation)
  calculateTotal(cart) {
    console.log("⚙️ Calculating total price... (expensive)");
    let total = 0;
    for (let i = 0; i < 10000000; i++) {
      // simulate CPU work
      total += 0;
    }
    return cart.reduce((sum, item) => sum + item.price, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartItems.length !== this.state.cartItems.length) {
      // cart changed → recalculate
      this.cachedCartLength = this.state.cartItems.length;
      this.cachedTotal = this.calculateTotal(this.state.cartItems);

      this.setState({ totalPrice: this.cachedTotal });
    }
  }

  render() {
    console.log("🧩 Rendering App...");

    return (
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>🧠 useMemo-like Example (Class Component)</h2>
        <Cart
          cartItems={this.state.cartItems}
          onAddItem={this.addRandomItem}
        />
        <h3>
          💰 Total Price:{" "}
          {this.state.totalPrice > 0 ? `₹${this.state.totalPrice}` : "₹0"}
        </h3>
      </div>
    );
  }
}

export default App;
