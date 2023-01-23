const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  }
);

module.exports = mongoose.model("User", userSchema);
