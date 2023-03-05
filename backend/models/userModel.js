const mongoose = require("mongoose");
const { Schema } = mongoose.model;
const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
  kind: {
    type: DataTypes.STRING,
    required: true,
  },
});
module.exports = User;
