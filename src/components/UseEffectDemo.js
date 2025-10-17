import React, { useState, useEffect,useRef  } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Ganesh");

  console.log("🎨 Component Rendered");
  /* --------------------------------------------
     1️⃣ useEffect → Skipping first effect (first ever visit)
  -------------------------------------------- */
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      console.log("🚫 Skipping first effect (first ever visit)");
      localStorage.setItem("hasVisited", true);
      return;
    }

    console.log("✅ Effect runs on update only:", count);
  }, [count]);

  /* --------------------------------------------
     1️⃣ useEffect → Runs on EVERY render
  -------------------------------------------- */
  useEffect(() => {
    console.log("🌀 useEffect (no dependency) → Runs on every render");
  });

  /* --------------------------------------------
     2️⃣ useEffect → Runs only ONCE (on mount)
  -------------------------------------------- */
  useEffect(() => {
    console.log("🏁 useEffect ([]) → Runs only once when mounted");
    // Simulate API call
    const timer = setTimeout(() => {
      console.log("📦 Fetched user data from API...");
    }, 1000);

    // Cleanup runs when component unmounts
    return () => {
      clearTimeout(timer);
      console.log("🧹 Cleanup on unmount");
    };
  }, []);

  /* --------------------------------------------
     3️⃣ useEffect → Runs when `count` changes
  -------------------------------------------- */
  useEffect(() => {
    console.log(`🔁 useEffect ([count]) → Count changed: ${count}`);
  }, [count]);

  /* --------------------------------------------
     4️⃣ useEffect → Runs when EITHER `user` or `count` changes
  -------------------------------------------- */
  useEffect(() => {
    console.log(`👤 useEffect ([user, count]) → User: ${user}, Count: ${count}`);
  }, [user, count]);

  /* --------------------------------------------
     5️⃣ useEffect with Cleanup (e.g. event listener)
  -------------------------------------------- */
  useEffect(() => {
    const handleResize = () => console.log("📏 Window resized:", window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("❌ Cleanup: Removed resize listener");
    };
  }, []); // only add once

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🧠 useEffect Demo</h2>
      <p><strong>Count:</strong> {count}</p>
      <p><strong>User:</strong> {user}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setUser(user === "Ganesh" ? "Karan" : "Ganesh")}>
        Change User
      </button>
    </div>
  );
};

export default UseEffectDemo;
