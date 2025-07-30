// server.js
const express = require('express');
const app = express();
const log = require('./logger');

app.get('/', (req, res) => {
  res.send('Hello, world!');
  log.info(req.headers);
});

app.get('/ping', (req, res) => {
  res.send('pong');
  log.info(req.headers);
});



app.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
