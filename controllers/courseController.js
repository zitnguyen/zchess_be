const Course = require("../models/Course");

// Lấy tất cả courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy course theo courseId
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({ courseId: req.params.id });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo course mới
exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cập nhật course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { courseId: req.params.id },
      req.body,
      { new: true }
    );
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({ courseId: req.params.id });
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
