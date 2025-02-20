// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Home route to serve the registration page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
