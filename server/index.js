const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/todos");
const app = express();
app.use(cors({}));

const PORT = 3000;
app.use("/api", router);

app.use(express.json());

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("MongoDB is connected");
    console.log(`Server is running on port ${PORT}`);
  });
});
