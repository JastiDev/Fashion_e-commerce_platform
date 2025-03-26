const Category = require("../models/category.model");

class CategoryService {
  static async createCategory(categoryData) {
    try {
      const category = new Category(categoryData);
      return await category.save();
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  static async getAllCategories() {
    try {
      return await Category.find();
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }

  static async getCategoryById(categoryId) {
    try {
      const category = await Category.findById(categoryId);
      if (!category) {
        throw new Error("Category not found");
      }
      return category;
    } catch (error) {
      throw new Error(`Error fetching category: ${error.message}`);
    }
  }

  static async updateCategory(categoryId, updates) {
    try {
      const category = await Category.findByIdAndUpdate(categoryId, updates, {
        new: true,
      });
      if (!category) {
        throw new Error("Category not found");
      }
      return category;
    } catch (error) {
      throw new Error(`Error updating category: ${error.message}`);
    }
  }

  static async deleteCategory(categoryId) {
    try {
      const category = await Category.findByIdAndDelete(categoryId);
      if (!category) {
        throw new Error("Category not found");
      }
      return category;
    } catch (error) {
      throw new Error(`Error deleting category: ${error.message}`);
    }
  }
}

module.exports = CategoryService;
