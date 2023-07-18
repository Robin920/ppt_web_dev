import React, { useState } from 'react';
import "./Todo.css"

const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      const newTodo = { id: Date.now(), task, status: 'Incomplete' };
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const handleUpdateStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, status: todo.status === 'Incomplete' ? 'Complete' : 'Incomplete' }
        : todo
    );
    setTodos(updatedTodos);
  };

  const handleRemoveTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form className='search-wrapper cf' onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleInputChange} placeholder="Enter a task" />
        <button className='form-btn' type="submit">Add Task</button>
      </form>
      <div className="cont">
      {todos.map((todo,i) => (
        <div key={todo.id} className="task-card">
          <p>{i+1}. {todo.task}</p>
          <p>Status: {todo.status}</p>
          <button className='card-btn' onClick={() => handleUpdateStatus(todo.id)}>Update Status</button>
          <button className='card-btn' onClick={() => handleRemoveTask(todo.id)}>Remove Task</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Todo;
