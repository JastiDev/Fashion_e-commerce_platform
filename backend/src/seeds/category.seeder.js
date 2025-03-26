const faker = require("faker");
const mongoose = require("mongoose");
const Category = require("../models/category.model");

const seedCategories = async (count = 5) => {
  const categories = Array.from({ length: count }).map(() => ({
    slug: faker.lorem.slug(),
    title: faker.commerce.department(),
    image: faker.image.imageUrl(),
  }));

  await Category.insertMany(categories);
  console.log(`${count} categories seeded.`);
};

module.exports = seedCategories;
