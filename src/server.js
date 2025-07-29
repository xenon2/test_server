// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
