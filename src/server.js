// server.js
const express = require('express');
const app = express();
const log = require('./logger');

const PORT = 8080

app.get('/', (req, res) => {
  res.send('Hello, world!');
  log.info(req.headers);
});

app.get('/ping', (req, res) => {
  res.send('pong');
  log.info(req.headers);
});


app.get('/pong', (req, res) => {
  res.send('pong');
  log.info(req.headers);
});



app.listen(PORT, () => {
  log.info(`MINI Server running at http://localhost:${PORT}/`);
});
