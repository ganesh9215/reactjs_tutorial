import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
