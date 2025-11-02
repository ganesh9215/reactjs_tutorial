import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          margin: "10px",
          width: "250px",
          borderRadius: "10px",
        }}
      >
        <h3>{product.name}</h3>
        <p>💰 Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  }
}

export default ProductItem;
