const todoModel = require("../model/todo");

const deleteTodoByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: "To-do item not found" });
    }
    res.status(200).json({ data: todo, message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteTodoByIdController;
