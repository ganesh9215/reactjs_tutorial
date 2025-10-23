import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import withAuthProtection from "./withAuthProtection";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

// 🔹 Wrap protected routes
const ProtectedDashboard = withAuthProtection(Dashboard);
const ProtectedSettings = withAuthProtection(Settings);

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>🔒 React HOC - Auth Example</h1>
        <nav>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/settings">Settings</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>
        <hr />

        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedDashboard />} />
            <Route path="/settings" element={<ProtectedSettings />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
