const express = require("express");
const {
  registerUser,
  loginUser,
  deleteUser,
} = require("../controllers/user.Controller");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/delete", authMiddleware, deleteUser);

module.exports = router;
