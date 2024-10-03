import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


const App = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList todos={todos} removeTodo={removeTodo}></TodoList>
    </div>
  );
};

export default App;
