const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const router = require("./routes/todos");

require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({}));

app.use(router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("MongoDB is connected");
    console.log(`Server is running on port ${PORT}`);
  });
});
