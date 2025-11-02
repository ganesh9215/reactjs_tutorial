// src/App.js
import React, { Component } from "react";
import Product from "./Product";

class App extends Component {
  state = {
    cartCount: 0,
  };

  constructor(props) {
    super(props);
    // ✅ Bind once — like `useCallback` for class components
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(product) {
    this.setState((prev) => ({ cartCount: prev.cartCount + 1 }));
    console.log(`✅ Added ${product} to cart`);
  }

  render() {
    console.log("🛒 Rendering App Component...");

    const products = ["Apple", "Banana", "Orange"];

    return (
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>🛍️ Shopping Cart Example</h2>
        <h3>🛒 Cart Count: {this.state.cartCount}</h3>

        {products.map((product) => (
          <Product
            key={product}
            name={product}
            onAdd={this.handleAddToCart} // 👈 Same function reference each render
          />
        ))}

        <button
          onClick={() => this.forceUpdate()} // force re-render manually
          style={{ marginTop: "15px" }}
        >
          Force Re-render
        </button>
      </div>
    );
  }
}

export default App;
