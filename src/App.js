// App.js
import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import withLoader from "./withLoader";

// ✅ Wrap ProductsList with Loader HOC
const ProductsWithLoader = withLoader(ProductsList);

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API call
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Laptop", price: 75000 },
        { id: 2, name: "Phone", price: 40000 },
        { id: 3, name: "Headphones", price: 5000 },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>🧩 React HOC — With Loader Example</h1>

      {/* ✅ Use HOC with props */}
      <ProductsWithLoader isLoading={loading} products={products} />
    </div>
  );
};

export default App;
