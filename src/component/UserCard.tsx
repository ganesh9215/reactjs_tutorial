import React, { useState } from "react";

interface UserCardProps {
  name: string;
  age: number;
  active: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, active }) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        width: "250px",
        margin: "10px auto",
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>

      <button
        onClick={() => setIsActive(!isActive)}
        style={{
          backgroundColor: isActive ? "green" : "gray",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

export default UserCard;
