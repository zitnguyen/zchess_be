require("dotenv").config(); // << load .env phải ở đầu
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// import routes
const userRoutes = require("./routes/userRoutes");
const studentRoutes = require("./routes/studentRoutes");
const classRoutes = require("./routes/classRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
// import các routes khác như assignment, submission, payment…

const app = express();
app.use(cors());
app.use(express.json());

// map routes
app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/attendance", attendanceRoutes);
// map các route còn lại…

// chạy server
const PORT = process.env.PORT || 5000;

// debug: kiểm tra env
console.log("Mongo URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
