const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://0.0.0.0:27017/PITP", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Import user routes
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello, Express with MongoDB!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
