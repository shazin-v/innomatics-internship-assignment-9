const express = require("express");

const router = express.Router();

const newTodoController = require("../controller/newTodoController");
const getTodoController = require("../controller/getTodoController");
const getTodoByIdController = require("../controller/getTodoByIdController");
const updateTodoByIdController = require("../controller/updateTodoByIdController");
const deleteTodoByIdController = require("../controller/deleteTodoByIdController");

router.post("/todos", newTodoController);
router.post("/todos", getTodoController);
router.post("/todos/:id", getTodoByIdController);
router.put("/todos/:id", updateTodoByIdController);
router.delete("/todos/:id", deleteTodoByIdController);

module.exports = router;
