import React from 'react';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: '10px' }}>
          {todo.text}
          <button
            onClick={() => removeTodo(todo.id)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
