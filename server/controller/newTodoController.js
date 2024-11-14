const Todo = require("../model/todo");

const newTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      res.status(400).json({ error: "please provide title and description" });
    }
    const todo = await Todo.create({ title, description });
    console.log(todo, "todos data");
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = newTodoController;
