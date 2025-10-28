const Todo = require("../models/todoModel");

// @desc Get all leads
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get single lead by ID
// exports.getTodoById = async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (!todo) return res.status(404).json({ message: "Todo not found" });
//     res.json(todo);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
exports.getTodosByEmail = async (req, res) => {
  try {
    const todos = await Todo.find({ email: req.params.email });
    if (!todos) return res.status(404).json({ message: "Todo not found" });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Update lead by ID
exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Delete lead by ID
exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
