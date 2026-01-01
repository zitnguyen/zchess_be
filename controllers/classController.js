const ClassModel = require("../models/Class");

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await ClassModel.find()
      .populate("courseId", "courseName level fee")
      .populate({
        path: "teacherId",
        select: "username specialization experienceYears",
        model: "User", // 👈 BẮT BUỘC vì Teacher nằm trong users
      });

    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo lớp học
exports.createClass = async (req, res) => {
  try {
    const newClass = new ClassModel(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cập nhật lớp
exports.updateClass = async (req, res) => {
  try {
    const updatedClass = await ClassModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa lớp
exports.deleteClass = async (req, res) => {
  try {
    await ClassModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Class deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
