import React from "react";

// React.memo ensures child re-renders only if props actually change
const TodoList = React.memo(({ todos, onComplete }) => {
  console.log("🧩 TodoList Rendered");

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>Mark Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
