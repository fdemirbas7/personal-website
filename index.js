const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(PORT, () => {
  console.log(`Server has been initialized on Port: ${PORT}`);
});
