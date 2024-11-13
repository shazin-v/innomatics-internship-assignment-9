const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://a97298570:utiJwOJ8xkO9qVUw@cluster0.gpsbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (error) {
    console.log("error connecting db", error);
  }
}

module.exports = connectDB;
