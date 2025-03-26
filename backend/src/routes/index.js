const express = require("express");
const userRoutes = require("./user.route");
const reviewRoutes = require("./review.route");
const productRoutes = require("./product.route");
const categoryRoutes = require("./category.route");

const routes = express.Router();

routes.use("/users", userRoutes);
routes.use("/reviews", reviewRoutes);
routes.use("/products", productRoutes);
routes.use("/categories", categoryRoutes);

module.exports = routes;
