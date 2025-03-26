const asyncHandler = require("../helper/asyncHandler");
const CategoryService = require("../services/category.service");

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await CategoryService.getAllCategories();
  res.json(categories);
});

module.exports = {
  getAllCategories,
};
