// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port where the server will listen
const PORT = 3000;

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, this is a basic Express app!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
