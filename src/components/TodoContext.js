import React, { createContext, useContext, useReducer } from 'react';

// Create a context for the Todo app
const TodoContext = createContext();

// Reducer to manage actions (add and remove todos)
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

// Provider component
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to access the Todo context
export const useTodos = () => useContext(TodoContext);
