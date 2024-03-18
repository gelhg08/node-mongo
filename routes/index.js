const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/v1/users", userController.getAllUsers);
router.get("/api/v1/user/id/:id", userController.getUserById);
router.get("/api/v1/user/name/:name", userController.getUserName);
router.post("/api/v1/users", userController.createUser);
router.patch("/api/v1/user/update/:nombres", userController.updateUser);
router.delete("/api/v1/user/delete/:nombres", userController.deleteUser);

module.exports = router;
