const Todo = require("../model/todo");

const getAllTodoController = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ data: todos, message: "Todos fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getAllTodoController;
