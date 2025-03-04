const express = require("express");
const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

// Get a single user by ID
router.get("/:id", (req, res) => {
  res.json({ message: `User ID: ${req.params.id}` });
});

// Create a new user
router.post("/", (req, res) => {
  res.status(201).json({ message: "User created", user: req.body });
});

// Update a user
router.put("/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} updated`, updatedData: req.body });
});

// Delete a user
router.delete("/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} deleted` });
});

module.exports = router;
