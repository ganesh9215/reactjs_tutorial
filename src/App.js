import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 🔹 Lazy load pages (code splitting)
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>⚡ React Code Splitting Example</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/cart">Cart</Link>
        </nav>

        <hr />

        {/* Suspense fallback while loading */}
        <Suspense fallback={<h3>Loading page...</h3>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
