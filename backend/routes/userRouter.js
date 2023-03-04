const express = require("express");
const {
  createUser,
  checkUser,
  allUsers,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/register", createUser);
userRouter.get("/check", checkUser);
userRouter.get("/all", allUsers);

module.exports = userRouter;
