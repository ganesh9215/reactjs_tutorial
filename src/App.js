import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import WeatherWidget from "./components/WeatherWidget";
import StockWidget from "./components/StockWidget";
import NewsWidget from "./components/NewsWidget";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>📊 Real-World Dashboard with Error Boundaries</h1>
      <p>
        Each widget is wrapped in its own error boundary.  
        If one crashes, the others continue to work!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {/* Each widget wrapped individually */}
        <ErrorBoundary>
          <WeatherWidget />
        </ErrorBoundary>

        <ErrorBoundary>
          <StockWidget />
        </ErrorBoundary>

        <ErrorBoundary>
          <NewsWidget />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
