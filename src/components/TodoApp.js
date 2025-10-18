import React, { useState, useCallback } from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  console.log("⚙️ TodoApp Rendered");

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Project", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // ✅ useCallback to memoize the function
  const handleComplete = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: true } : t))
    );
  }, []);

  // 🚫 Without useCallback — every time parent re-renders,
  // this function would get a new reference, causing TodoList to re-render unnecessarily.
  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>✅ useCallback Real-World Example (Todo App)</h2>

      <input
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <hr />
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default TodoApp;
