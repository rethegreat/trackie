const Spending = require("../models/spendingModel");
const mongoose = require("mongoose");

// get all Spending
const getSpendings = async (req, res) => {
  const spendings = await Spending.find({}).sort({ createdAt: -1 });

  res.status(200).json(spendings);
};

// get a single spending
const getSpending = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const spending = await Spending.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(spending);
};

// create a spending
const createSpending = async (req, res) => {
  const { title, description, amount, userID } = req.body;

  try {
    const spending = await Spending.create({ title, description, amount, userID });
    res.status(200).json(spending);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    getSpending,
    getSpendings,
    createSpending
  };