const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const leadRoutes = require("./routes/leadRoutes");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Student Lead API is running");
});
dotenv.config();
connectDB();

app.use("/api/leads", leadRoutes);
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
