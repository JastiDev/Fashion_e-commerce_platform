const express = require("express");
const {
  getProducts,
  getProductBySlug,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", getProducts);
router.get("/:slug", getProductBySlug);

module.exports = router;
