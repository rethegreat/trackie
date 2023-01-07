const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sharedSpendingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    sharedWithUserID: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("sharedSpending", sharedSpendingSchema);