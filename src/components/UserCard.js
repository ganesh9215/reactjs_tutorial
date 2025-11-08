import React, { useState } from "react";
import styles from "./UserCard.module.css";
import Button from "./StyledButton";

const UserCard = ({ name, role }) => {
  const [active, setActive] = useState(false);

  const statusStyle = {
    color: active ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.username}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p style={statusStyle}>Status: {active ? "Active" : "Inactive"}</p>

      <Button active={active} onClick={() => setActive(!active)}>
        {active ? "Deactivate" : "Activate"}
      </Button>
    </div>
  );
};

export default UserCard;
