import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const products = [
    { id: 1, name: "Laptop", price: 75000, inStock: true },
    { id: 2, name: "Phone", price: 35000, inStock: false },
    { id: 3, name: "Headphones", price: 5000, inStock: true },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍️ React Rendering Techniques Demo</h1>

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <h2>Welcome, Ganesh!</h2>
      ) : (
        <h2>Please Login to see products.</h2>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Show product list only if logged in */}
      {isLoggedIn && (
        <div style={{ marginTop: "20px" }}>
          <h3>Available Products:</h3>
          <ul>
            {products.map((item) => (
              <li
                key={item.id}
                style={{
                  color: item.inStock ? "green" : "red",
                  marginBottom: "8px",
                }}
              >
                {item.name} - ₹{item.price}{" "}
                {!item.inStock && <span>(Out of Stock)</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
