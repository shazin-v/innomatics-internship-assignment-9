const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("error connecting db", error);
  }
}

module.exports = connectDB;
