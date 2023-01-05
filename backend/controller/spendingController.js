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
    return res.status(404).json({ error: "spending ID invalid" });
  }

  const spending = await Spending.findById(id);

  if (!spending) {
    return res.status(404).json({ error: "No such spending found" });
  }

  res.status(200).json(spending);
};

// create a spending
const createSpending = async (req, res) => {
  const { title, amount, category, userID} = req.body;

  try {
    const spending = await Spending.create({ title, amount, category, userID});
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