import React, { useState, useMemo } from "react";

const ProductDashboard = () => {
  console.log("🌀 Component Rendered");

  const [category, setCategory] = useState("All");
  const [discount, setDiscount] = useState(false);

  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
    { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000 },
    { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
    { id: 5, name: "Fruits", category: "Grocery", price: 500 },
  ];

  // 🧮 Expensive operation (simulate with loop)
  const totalPrice = useMemo(() => {
    console.log("💰 Calculating total price (expensive operation)");

    let filtered = products;
    if (category !== "All") {
      filtered = products.filter((p) => p.category === category);
    }

    // Simulate heavy computation
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += 0; // just to simulate CPU work
    }

    const sum = filtered.reduce((acc, item) => acc + item.price, 0);
    return discount ? sum * 0.9 : sum; // 10% off if discount enabled
  }, [category, discount, products]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🧠 useMemo Real-Time Example</h2>

      <div>
        <label>Filter Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Grocery</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={discount}
            onChange={() => setDiscount(!discount)}
          />{" "}
          Apply 10% Discount
        </label>
      </div>

      <hr />

      <h3>Filtered Products:</h3>
      <ul>
        {products
          .filter((p) => category === "All" || p.category === category)
          .map((p) => (
            <li key={p.id}>
              {p.name} — ₹{p.price}
            </li>
          ))}
      </ul>

      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
};

export default ProductDashboard;
