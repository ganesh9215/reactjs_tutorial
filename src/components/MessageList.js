import React, { useEffect, useRef } from "react";

const MessageList = ({ messages }) => {
  const endRef = useRef(null);

  // ✅ Scroll to bottom every time a new message is added
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        height: "250px",
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        background: "#f9f9f9",
      }}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            background: msg.isUser ? "#d1e7ff" : "#e2e2e2",
            padding: "8px",
            borderRadius: "6px",
            marginBottom: "8px",
            alignSelf: msg.isUser ? "flex-end" : "flex-start",
            maxWidth: "70%",
          }}
        >
          {msg.text}
        </div>
      ))}

      {/* 🧠 Ref placed at the end of message list */}
      <div ref={endRef} />
    </div>
  );
};

export default MessageList;
