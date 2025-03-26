const Product = require("../models/product.model");

class ProductService {
  static async createProduct(productData) {
    try {
      const product = new Product(productData);
      return await product.save();
    } catch (error) {
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  static async getProductById(id) {
    try {
      const product = await Product.findById(id).populate("reviews");
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw new Error(`Error fetching product: ${error.message}`);
    }
  }

  static async getProductBySlug(slug) {
    try {
      const product = await Product.findOne({ slug });
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw new Error(`Error fetching product: ${error.message}`);
    }
  }

  static async updateProduct(id, updates) {
    try {
      const product = await Product.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  }

  static async deleteProduct(id) {
    try {
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    } catch (error) {
      throw new Error(`Error deleting product: ${error.message}`);
    }
  }

  static async getAllProducts(filters = {}, page = 1, limit = 10) {
    try {
      const skip = (page - 1) * limit;
      const products = await Product.find(filters).skip(skip).limit(limit);
      const totalRecord = await Product.countDocuments(filters);

      return {
        products,
        limit: Number(limit),
        totalRecord,
        currentPage: Number(page),
        totalPages: Math.ceil(totalRecord / limit),
      };
    } catch (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }
}

module.exports = ProductService;
