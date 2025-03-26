const express = require("express");
const { getAllCategories } = require("../controllers/category.controller");

const router = express.Router();

router.get("/", getAllCategories);

module.exports = router;
