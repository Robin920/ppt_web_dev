const http = require('http');

const menProducts = [
  { id: 1, name: 'Men Product 1' },
  { id: 2, name: 'Men Product 2' },
  { id: 3, name: 'Men Product 3' },
  { id: 4, name: 'Men Product 4' },
  { id: 5, name: 'Men Product 5' },
  { id: 6, name: 'Men Product 6' },
  { id: 7, name: 'Men Product 7' },
  { id: 8, name: 'Men Product 8' },
  { id: 9, name: 'Men Product 9' },
  { id: 10, name: 'Men Product 10' },
];

const womenProducts = [
  { id: 1, name: 'Women Product 1' },
  { id: 2, name: 'Women Product 2' },
  { id: 3, name: 'Women Product 3' },
  { id: 4, name: 'Women Product 4' },
  { id: 5, name: 'Women Product 5' },
  { id: 6, name: 'Women Product 6' },
  { id: 7, name: 'Women Product 7' },
  { id: 8, name: 'Women Product 8' },
  { id: 9, name: 'Women Product 9' },
  { id: 10, name: 'Women Product 10' },
];


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    res.statusCode = 200;
    res.end(JSON.stringify({ products: menProducts }));
  } else if (req.url === '/women') {
    res.statusCode = 200;
    res.end(JSON.stringify({ products: womenProducts }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
