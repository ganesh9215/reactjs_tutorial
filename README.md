We’ll build a Todo App where:

Parent component (TodoApp) manages todo state.

Child component (TodoList) renders list of todos.

Each todo has a “Complete” button that triggers a callback from parent.

Without useCallback, the child re-renders unnecessarily on every parent update.

With useCallback, we memoize the callback so the child only re-renders when needed.
