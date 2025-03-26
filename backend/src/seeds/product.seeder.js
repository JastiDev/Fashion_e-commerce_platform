const faker = require("faker");
const mongoose = require("mongoose");
const Product = require("../models/product.model");
const Category = require("../models/category.model");

const seedProducts = async (count = 20) => {
  const categories = await Category.find();
  if (!categories.length) {
    console.log("No categories found. Please seed categories first.");
    return;
  }

  const products = Array.from({ length: count }).map(() => ({
    slug: faker.lorem.slug(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    details: faker.lorem.paragraph(),
    price: parseFloat(faker.commerce.price()),
    discountPrice: faker.datatype.boolean()
      ? parseFloat(faker.commerce.price())
      : undefined,
    category: faker.random.arrayElement(categories)._id,
    colors: Array.from({ length: 3 }).map(() => faker.commerce.color()),
    sizes: ["S", "M", "L", "XL"],
    images: Array.from({ length: 3 }).map(() => faker.image.imageUrl()),
    faqs: Array.from({ length: 2 }).map(() => ({
      question: faker.lorem.sentence(),
      answer: faker.lorem.paragraph(),
    })),
  }));

  await Product.insertMany(products);
  console.log(`${count} products seeded.`);
};

module.exports = seedProducts;
