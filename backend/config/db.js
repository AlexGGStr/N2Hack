const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

const db = () => {
  try {
    connString = process.env.CONN_STRING.replace(
      "<username>",
      process.env.USER_NAME
    ).replace("<password>", process.env.PASSWORD);

    const conn = mongoose.connect(connString);
    console.log("Connection succesful");
  } catch (error) {
    console.log("Unable to connect");
  }
};
module.exports = db;
