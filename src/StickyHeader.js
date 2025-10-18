import React, { useState, useRef, useLayoutEffect } from "react";

const StickyHeader = () => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [headerTop, setHeaderTop] = useState(0);

  // Measure header's offsetTop *before* painting
  useLayoutEffect(() => {
    if (headerRef.current) {
      const top = headerRef.current.getBoundingClientRect().top + window.scrollY;
      setHeaderTop(top);
    }

    const handleScroll = () => {
      if (window.scrollY > headerTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerTop]);

  return (
    <div>
      <header
        ref={headerRef}
        style={{
          position: isSticky ? "fixed" : "static",
          top: 0,
          width: "100%",
          background: isSticky ? "#333" : "#555",
          color: "white",
          padding: "15px",
          transition: "all 0.3s ease",
        }}
      >
        <h2>{isSticky ? "📌 Sticky Header" : "🧭 Normal Header"}</h2>
      </header>

      <div style={{ height: "150vh", padding: "20px" }}>
        <p>Scroll down to see the header become sticky.</p>
      </div>
    </div>
  );
};

export default StickyHeader;
