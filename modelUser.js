const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number
  },
  gender: {
    type: String,
    required: true
  }
});
const User = mongoose.model("user", userSchema);
module.exports = User;