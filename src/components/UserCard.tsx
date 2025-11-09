import React, { Component } from "react";

interface UserCardProps {
  name: string;
  age: number;
  active: boolean;
}

interface UserCardState {
  isActive: boolean;
}

class UserCard extends Component<UserCardProps, UserCardState> {
  constructor(props: UserCardProps) {
    super(props);
    this.state = {
      isActive: props.active,
    };
  }

  toggleStatus = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { name, age } = this.props;
    const { isActive } = this.state;

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
        <p>Status: {isActive ? "Active ✅" : "Inactive ❌"}</p>

        <button
          onClick={this.toggleStatus}
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
  }
}

export default UserCard;
