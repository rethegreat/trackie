const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const spendingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String, 
      required: true
    },
    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Spending", spendingSchema);
