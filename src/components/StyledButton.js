import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.active ? "#28a745" : "#007bff")};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#218838" : "#0056b3")};
  }
`;

export default Button;
