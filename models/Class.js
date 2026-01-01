const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  classId: { type: Number, required: true, unique: true },
  className: String,
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  startDate: Date,
  schedule: String,
  currentStudents: { type: Number, default: 0 },
  status: String,
});
const Class = mongoose.model("Class", classSchema);
module.exports = Class;
