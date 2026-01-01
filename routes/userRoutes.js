const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
router.get("/", userController.getAllUsers); // Lấy tất cả user
router.post("/", userController.createUser); // Tạo user mới
router.put("/:id", userController.updateUser); // Cập nhật user theo id
router.delete("/:id", userController.deleteUser); // Xóa user theo id

module.exports = router;
