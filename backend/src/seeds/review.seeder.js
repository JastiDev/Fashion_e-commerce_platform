const faker = require("faker");
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Review = require("../models/review.model");
const Product = require("../models/product.model");

const seedReviews = async (count = 50) => {
  const users = await User.find();
  const products = await Product.find();
  if (!users.length || !products.length) {
    console.log(
      "No users or products found. Please seed users and products first."
    );
    return;
  }

  const reviews = Array.from({ length: count }).map(() => ({
    user: faker.random.arrayElement(users)._id,
    rating: faker.datatype.number({ min: 1, max: 5 }),
    comment: faker.lorem.sentences(),
  }));

  await Review.insertMany(reviews);
  console.log(`${count} reviews seeded.`);
};

module.exports = seedReviews;
