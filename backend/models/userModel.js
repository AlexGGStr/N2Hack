const mongoose = require("mongoose");
const { Schema } = mongoose.model;

const UserSchema = new mongoose.Schema({
  google: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    kind: {
      type: String,
    },
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;