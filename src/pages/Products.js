import React from "react";

const Products = () => {
  const items = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Phone", price: 40000 },
    { id: 3, name: "Headphones", price: 5000 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>🛍️ Products</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} — ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
