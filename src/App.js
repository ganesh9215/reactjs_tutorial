import React, { Component } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  // Add item to cart
  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  // Remove item from cart
  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id),
    }));
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>🛒 Shopping Cart Example (Class Components)</h1>
        <ProductList addToCart={this.addToCart} />
        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
      </div>
    );
  }
}

export default App;
