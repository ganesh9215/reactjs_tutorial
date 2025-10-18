import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 75000 },
  { id: 2, name: "Headphones", price: 2500 },
  { id: 3, name: "Smartphone", price: 30000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Products</h2>
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <span>
            {p.name} - ₹{p.price}
          </span>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
