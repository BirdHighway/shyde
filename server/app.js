const express = require('express');
const path = require('path');
const app = express();

// serve client dist directory as static files
const distDirectory = path.join('client', 'dist');
app.use(express.static(distDirectory));

// by default, send index file
const indexFile = path.resolve(__dirname, '..', 'client', 'dist', 'index.html');
app.get('/*', (req, res) => {
  res.sendFile(indexFile);
});

module.exports = app;
