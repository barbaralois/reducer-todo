import React, { useState, useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/todoReducer';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [currentTodo, setCurrentTodo] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (evt) => {
    setCurrentTodo(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: currentTodo });
    setCurrentTodo('');
  };

  const toggleTask = (todoId) => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: todoId });
  };

  const clearCompleted = (evt) => {
    evt.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  console.log('app', state);

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <AddTodo
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        currentTodo={currentTodo}
        clearCompleted={clearCompleted}
      />
      <TodoList todos={state} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
