const Review = require("../models/review.model");
const Product = require("../models/product.model");

class ReviewService {
  static async createReview(reviewData, productId) {
    try {
      const review = new Review(reviewData);
      const savedReview = await review.save();

      await Product.findByIdAndUpdate(productId, {
        $push: { reviews: savedReview._id },
      });

      return savedReview;
    } catch (error) {
      throw new Error(`Error creating review: ${error.message}`);
    }
  }

  static async getReviewById(reviewId) {
    try {
      const review = await Review.findById(reviewId);
      if (!review) {
        throw new Error("Review not found");
      }
      return review;
    } catch (error) {
      throw new Error(`Error fetching review: ${error.message}`);
    }
  }

  static async updateReview(reviewId, updates) {
    try {
      const review = await Review.findByIdAndUpdate(reviewId, updates, {
        new: true,
      });
      if (!review) {
        throw new Error("Review not found");
      }
      return review;
    } catch (error) {
      throw new Error(`Error updating review: ${error.message}`);
    }
  }

  static async deleteReview(reviewId, productId) {
    try {
      const review = await Review.findByIdAndDelete(reviewId);
      if (!review) {
        throw new Error("Review not found");
      }

      await Product.findByIdAndUpdate(productId, {
        $pull: { reviews: reviewId },
      });

      return review;
    } catch (error) {
      throw new Error(`Error deleting review: ${error.message}`);
    }
  }

  static async getReviewsByProductId(productId) {
    try {
      const product = await Product.findById(productId).populate("reviews");
      if (!product) {
        throw new Error("Product not found");
      }
      return product.reviews;
    } catch (error) {
      throw new Error(`Error fetching reviews: ${error.message}`);
    }
  }
}

module.exports = ReviewService;
