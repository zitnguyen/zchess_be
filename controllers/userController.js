const User = require("../models/User");
const Admin = require("../models/Admin");
const Teacher = require("../models/Teacher");
const Parent = require("../models/Parents");
// lấy all user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// tạo user mới
exports.createUser = async (req, res) => {
  try {
    const { role, ...data } = req.body; // role = "Admin" | "Teacher" | "Parent"
    let user;

    if (role === "Admin") user = new Admin(data);
    else if (role === "Teacher") user = new Teacher(data);
    else if (role === "Parent") user = new Parent(data);
    else return res.status(400).json({ message: "Invalid role" });

    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Cập nhật thông tin user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
