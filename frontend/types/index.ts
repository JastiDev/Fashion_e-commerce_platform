export interface Product {
  _id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: Category;
  colors: string[];
  sizes: string[];
  images: string[];
  faqs: { question: string; answer: string }[];
  reviews: Review[];
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  _id?: string;
  slug: string;
  title: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
  commentedAt: Date;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  mobile: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
