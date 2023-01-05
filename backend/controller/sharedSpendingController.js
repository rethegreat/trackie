const SharedSpending = require("../models/sharedSpendingModel");
const mongoose = require("mongoose");

// get all Spending
const getSharedSpendings = async (req, res) => {
  const sharedSpendings = await SharedSpending.find({}).sort({ createdAt: -1 });

  res.status(200).json(sharedSpendings);
};

// get a single spending
const getSharedSpending = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "spending ID invalid" });
  }

  const sharedSpending = await SharedSpending.findById(id);

  if (!sharedSpending) {
    return res.status(404).json({ error: "No such spending found" });
  }

  res.status(200).json(sharedSpending);
};

// create a spending
const createSharedSpending = async (req, res) => {
  const { title, amount, userID} = req.body;

  try {
    const sharedSpending = await SharedSpending.create({ title, amount, userID});
    res.status(200).json(sharedSpending);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    getSharedSpending,
    getSharedSpendings,
    createSharedSpending
  };