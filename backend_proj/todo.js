const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, task: 'Task 1' },
  { id: 2, task: 'Task 2' },
];

app.get('/', (req, res) => {
  res.json({ todos });
});

const validateTaskInput = (req, res, next) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: 'Validation failed. Task is required.' });
  }
  next();
};

app.post('/add', validateTaskInput, (req, res) => {
  const { task } = req.body;
  const newTodo = {
    id: todos.length + 1,
    task
  };
  todos.push(newTodo);
  res.json({ message: 'Todo created successfully.', data: todos });
});

app.put('/update/:id', validateTaskInput, (req, res) => {
  const todoId = parseInt(req.params.id);
  const { task } = req.body;
  
  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found.' });
  }
  
  todos[todoIndex].task = task;
  res.json({ message: 'Todo updated successfully.', data: todos });
});


app.delete('/delete/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  
  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found.' });
  }
  
  todos.splice(todoIndex, 1);
  res.json({ message: 'Todo deleted successfully.', data: todos });
});


const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
