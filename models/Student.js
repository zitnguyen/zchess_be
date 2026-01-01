const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  studentId: { type: Number, required: true, unique: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date },
  address: { type: String },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Parent" },
  enrollmentDate: { type: Date, default: Date.now }, // ngày nhập học
  skillLevel: { type: String }, //level
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
