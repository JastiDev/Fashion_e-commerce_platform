const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      String(process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce")
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
