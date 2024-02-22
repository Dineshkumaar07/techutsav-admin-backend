const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  fullName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  collegeName: {
    type: String,
  },
  department: {
    type: String,
  },
  paid: {
    type: Boolean,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
