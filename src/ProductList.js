import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Laptop", price: 800 },
        { id: 2, name: "Headphones", price: 100 },
        { id: 3, name: "Mouse", price: 50 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>🧾 Available Products</h2>
        {this.state.products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={this.props.addToCart}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
