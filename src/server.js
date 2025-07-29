// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});


app.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
