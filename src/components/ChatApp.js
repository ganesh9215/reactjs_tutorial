import React, { useState, useRef } from "react";
import MessageList from "./MessageList";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! 👋", isUser: false },
    { text: "Welcome to ChatGPT demo.", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null); // ✅ For focusing input after sending

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = { text: input, isUser: true };
    setMessages((prev) => [...prev, newMsg]);

    // Simulate bot response after delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Got it! 😊", isUser: false },
      ]);
    }, 800);

    setInput("");
    inputRef.current.focus(); // ✅ Focus input again
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "400px", margin: "0 auto" }}>
      <h2>💬 Chat App (Real useRef Example)</h2>

      <MessageList messages={messages} />

      <div style={{ marginTop: "10px", display: "flex", gap: "5px" }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
