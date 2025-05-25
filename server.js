const express = require('express');
const app = express();

// Route: Home
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Homepage!</h1>');
});

// TODO: Add /about route
// TODO: Add /contact route

// TODO: Add wildcard 404 route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
