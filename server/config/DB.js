const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("MongoDB Connected Successfully"));
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
