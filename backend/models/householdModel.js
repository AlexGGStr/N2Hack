const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Household = sequelize.define("household", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserId: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  school: {
    type: DataTypes.STRING,
  },
  bank: {
    type: DataTypes.STRING,
  },
  church: {
    type: DataTypes.STRING,
  },
  hospital: {
    type: DataTypes.STRING,
  },
  restaurant: {
    type: DataTypes.STRING,
  },
});

module.exports = Household;
