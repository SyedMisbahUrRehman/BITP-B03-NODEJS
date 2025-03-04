const mongoose = require("mongoose");

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create User Model
const User = mongoose.model("User", userSchema);

module.exports = User;
