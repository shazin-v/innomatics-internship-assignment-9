const todoModel = require("../model/todo");

const getTodoByIdController = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = getTodoByIdController;
