const todoModel = require("../model/todo");

const deleteTodoByIdController = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = deleteTodoByIdController;
