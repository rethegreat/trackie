const User = require("../models/userModel");
const mongoose = require("mongoose");

// get a user for coresponding email
const getUser = async (req, res) => {
  const { email } = req.params;

  const user = await User.find({email: email});

  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { name, email, hash, userID } = req.body;

  try {
    const user = await User.create({ name, email, hash, userID });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  createUser
};
