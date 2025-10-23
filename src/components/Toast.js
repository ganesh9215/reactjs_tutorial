import React from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ message, targetRef }) => {
  if (!targetRef.current) return null;

  const rect = targetRef?.current.getBoundingClientRect();

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: rect.bottom + 5,
        left: rect.left,
        background: "#333",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        fontSize: "12px",
        pointerEvents: "none",
        zIndex: 2000,
      }}
    >
      {message}
    </div>,
    document.getElementById("tooltip-root")
  );
};

export default Tooltip;
