const todoModel = require("../model/todo");

const getTodoByIdController = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "To-do item not found" });
    }
    res.status(200).json({ data: todo, message: "Todo fetched succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getTodoByIdController;
