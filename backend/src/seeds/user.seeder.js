const faker = require("faker");
const mongoose = require("mongoose");
const User = require("../models/user.model");

const seedUsers = async (count = 10) => {
  const users = Array.from({ length: count }).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isVerified: faker.datatype.boolean(),
    mobile: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
  }));

  await User.insertMany(users);
  console.log(`${count} users seeded.`);
};

module.exports = seedUsers;
