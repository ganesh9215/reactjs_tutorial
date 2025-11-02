import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // 1️⃣ Create a reference to the input element
    this.inputRef = React.createRef();

    // Another example: Storing a mutable value (like a counter)
    this.clickCount = 0;
  }

  // 2️⃣ Focus input when button clicked
  handleFocus = () => {
    this.inputRef.current.focus(); // direct DOM access
    this.clickCount++;
    console.log(`Focus button clicked ${this.clickCount} times`);
  };

  // 3️⃣ Automatically focus input on mount
  componentDidMount() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Login Form (Class Component Example)</h1>

        {/* Input connected to ref */}
        <input
          type="text"
          ref={this.inputRef}
          placeholder="Enter your username"
          style={{ padding: "10px", fontSize: "16px", width: "250px" }}
        />

        <button
          onClick={this.handleFocus}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Focus the Input
        </button>
      </div>
    );
  }
}

export default App;
