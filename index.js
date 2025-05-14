const express = require('express');
const app = express();
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world! Your server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on https://localhost:${PORT}`);
});