const express = require("express");
const app = express();

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.get("/users", (req, res) => {
    res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
  });
  app.get("/users/:id", (req, res) => {  //Route Parameters
    res.send(`User ID: ${req.params.id}`);
  });
  
  app.get("/search", (req, res) => {  //Query Parameters
    res.send(`You searched for: ${req.query.q}`);
  });
    
  app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });
  

// Start the server
const PORT = process.env.PORT || 3000;
console.log(process.env);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
