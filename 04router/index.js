const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Import and use the user routes
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
