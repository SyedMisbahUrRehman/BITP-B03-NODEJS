// Import the built-in HTTP module
const http = require('http');

// Define the port where the server will listen
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set the response header with a 200 status code and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send a response message
    res.end('Hello, this is a simple Node.js HTTP server!\n');
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
