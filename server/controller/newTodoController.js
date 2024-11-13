const todoModel = require("../model/todo");

const newTodoController = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = newTodoController;
