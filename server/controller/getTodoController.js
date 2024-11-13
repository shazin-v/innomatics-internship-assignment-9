const todoModel = require("../model/todo");

const getTodoController = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = getTodoController;
