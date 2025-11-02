// src/Product.js
import React, { Component } from "react";

class Product extends Component {
  shouldComponentUpdate(nextProps) {
    // ✅ Prevent re-render if props haven’t changed
    return (
      nextProps.name !== this.props.name ||
      nextProps.onAdd !== this.props.onAdd
    );
  }

  render() {
    console.log(`🧾 Rendering Product: ${this.props.name}`);

    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          marginBottom: "8px",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-between",
          width: "250px",
        }}
      >
        <span>{this.props.name}</span>
        <button onClick={() => this.props.onAdd(this.props.name)}>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Product;
