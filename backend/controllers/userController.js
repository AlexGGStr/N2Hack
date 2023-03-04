const { use } = require("passport");
const User = require("../models/userModel");

const createUser = async (req, res, next) => {
  try {
    await User.create(req.body);
    res.status(201).json({ message: "User Created" });
  } catch (error) {
    next(error);
  }
};

const checkUser = async (req, res) => {
  const user = await User.findOne({
    where: { username: req.query.username },
  });
  if (user) {
    if (user.password == req.query.password) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "Invalid Password" });
    }
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
};

const allUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    console.log(allUsers);
    if (allUsers) {
      res.status(200).json(allUsers);
    }
  } catch (error) {}
};

module.exports = { checkUser, createUser, allUsers };
