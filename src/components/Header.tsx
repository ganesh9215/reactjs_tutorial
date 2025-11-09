import React, { Component } from "react";

interface HeaderProps {
  title: string;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
