const todoModel = require("../model/todo");

const updateTodoByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    if (!title) {
      res
        .status(400)
        .json({ error: "please provide title, description and status" });
    }
    if (!id) {
      res.status(404).json({ error: "id not found" });
    }
    const todo = await todoModel.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true }
    );
    res.status(200).json({ data: todo, message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateTodoByIdController;
