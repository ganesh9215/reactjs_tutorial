// ProductsList.js
import React from "react";

const ProductsList = ({ products }) => {
  return (
    <div style={{ padding: 20 }}>
      <h2>🛍️ Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
