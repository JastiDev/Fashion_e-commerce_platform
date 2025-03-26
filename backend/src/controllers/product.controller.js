const asyncHandler = require("../helper/asyncHandler");
const ProductService = require("../services/product.service");

const getProducts = asyncHandler(async (req, res) => {
  try {
    const { page = 1, limit = 9 } = req.query;
    const filter = {};

    if (req.query.category) {
      filter.category = req.query.category;
    }

    if (req.query.keyword) {
      console.log(req.query.keyword);
      filter.title = { $regex: req.query.keyword, $options: "i" };
    }

    if (req.query.price) {
      const [min, max] = req.query.price.split("-").map(Number);
      filter.price = { $gte: min, $lte: max };
    }

    if (req.query.color) {
      filter.colors = { $in: req.query.color.split(",") };
    }

    if (req.query.size) {
      filter.sizes = { $in: req.query.size.split(",") };
    }

    const products = await ProductService.getAllProducts(filter, page, limit);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

const getProductBySlug = asyncHandler(async (req, res) => {
  try {
    const product = await ProductService.getProductBySlug(req.params.slug);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
});

module.exports = {
  getProducts,
  getProductBySlug,
};
