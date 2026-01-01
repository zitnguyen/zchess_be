const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");

// CRUD lớp học
router.get("/", classController.getAllClasses);
router.post("/", classController.createClass);
router.put("/:id", classController.updateClass);
router.delete("/:id", classController.deleteClass);

module.exports = router;
