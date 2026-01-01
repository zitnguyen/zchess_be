const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { discriminatorKey: "role" }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
