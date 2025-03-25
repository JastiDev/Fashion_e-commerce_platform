# Fabrique - Fashion E-commerce Platform
A full-stack fashion e-commerce platform allowing users to browse and shop a variety of fashion products, featuring a sleek, responsive UI and smooth user experience.

## Table of Contents

- [Author](#author)
- [Technologies](#technologies)
- [Optimizations](#Optimizations)
- [Features](#features)
- [Contributions](#contributions)
- [Status](#status)
- [Feedback](#feedback)
- [Run Locally (Setup)](#run-locally-setup)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)

## Technologies
**Client:**
- React.js
- Next.js
- Tailwind CSS
- Vercel Hosting

**Server:**
- Node.js
- Express.js
- MongoDB 
- Render Hosting

## Optimizations

- Next.js **Image** component for optimized image loading
- Next.js **file-system based routing**
- Next.js **Server-side rendering** (SSR)
- Function components with **React hooks**
- TypeScript for type safety

## Features

**(Users)**  
- View all products in a responsive catalog
- Search products by name
- Filter products by categories (e.g., dresses, shoes, accessories)
- Product details page with in-depth information (images, description, reviews)

### Features to be added:
- User authentication & roles management
- Add to cart and User account features
- Stripe integration for payments
- Admin panel for managing users and products
- Email notifications for orders and promotions


## Contributions
Contributions are always welcome!  
Feel free to open **issues** and submit **pull requests**.


## Status
- Project is: **In progress** (Features being added)


## Inspiration
- Project inspired by fashion e-commerce platforms like **ATBW**.

## Run Locally (Setup)

1. **Clone the project**
   ```bash
   git clone https://github.com/Tanisboxed/fabrique
   ```
2. Navigate to project directory
   ```
   cd fabrique
   ```
3. For Frontend and Backend, install dependencies
   ```
   npm install
   #or
   yarn install
   ```
4. Start the development server
   ```
   npm run dev
   #or
   yarn dev
   ```

## Deployment 

**Frontend**
The frontend of this project is deployed on Vercel. 
You can access the live website here: [Frontend - Vercel](https://fabrique-tau.vercel.app)

**Backend**
The backend API is deployed on Render. 
You can access the live backend API here: [Backend - Render](https://fabriqueapi.onrender.com)

## API Endpoints
- Retrieve the list of all products:
  ```https
  GET https://fabriqueapi.onrender.com/api/products
  ```
- Retrieve details of a specific product:
  ```https
  GET https://fabriqueapi.onrender.com/api/products/product/:id
  ```
- Retrieve search results based on the query:
  ```https
  GET https://fabriqueapi.onrender.com/api/products?keyword=#
  ```
  
Feel free to explore the available API endpoints!

