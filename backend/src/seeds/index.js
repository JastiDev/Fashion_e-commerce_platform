const mongoose = require("mongoose");
const seedUsers = require("./user.seeder");
const seedReviews = require("./review.seeder");
const seedProducts = require("./product.seeder");
const seedCategories = require("./category.seeder");

require("dotenv").config();

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");

    await seedUsers();
    await seedCategories();
    await seedProducts();
    await seedReviews();

    console.log("Database seeding completed.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
