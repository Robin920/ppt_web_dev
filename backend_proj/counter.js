const express = require('express');
const app = express();


let counter = 0;

app.get('/', (req, res) => {
  res.json({ counter });
});

app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
