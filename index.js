const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send(`
  <h1>🍋 Welcome to the Landing Page! 🍊</h1>
  <h2> Work in Progress (obviously) </h2>  
   `);
});

app.listen(PORT, () => {
  console.log(`Server has been initialized on Port: ${PORT}`);
});
