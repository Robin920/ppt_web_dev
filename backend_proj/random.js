const express = require('express');
const app = express();

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100); 

  res.json({ random: randomNumber }); 
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
