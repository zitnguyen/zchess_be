const Attendance = require("../models/Attendance");
const Student = require("../models/Student");
const ClassModel = require("../models/Class");

exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find()
      .populate("studentId", "fullName")
      .populate("classId", "className schedule");
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Đánh dấu có mặt
exports.markPresent = async (req, res) => {
  try {
    const record = new Attendance({
      studentId: req.body.studentId,
      classId: req.body.classId,
      date: req.body.date,
      status: "Present",
      note: req.body.note || "",
    });
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Đánh dấu vắng mặt
exports.markAbsent = async (req, res) => {
  try {
    const record = new Attendance({
      studentId: req.body.studentId,
      classId: req.body.classId,
      date: req.body.date,
      status: "Absent",
      note: req.body.note || "",
    });
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cập nhật ghi chú
exports.updateNote = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      { note: req.body.note },
      { new: true }
    );
    res.json(attendance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
