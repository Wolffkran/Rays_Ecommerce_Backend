# E-Commerce Back End

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description

This repository serves as the back end for an e-commerce website, leveraging Express.js and Sequelize to interact with a MySQL database. The project's primary objective is to deliver a robust API facilitating the management of categories, products, and tags for an online retail business.

### Technologies Utilized

- Node.js
- Express.js
- Sequelize ORM
- MySQL Database

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/e-commerce-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd e-commerce-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up the database:
   
    - Create a `.env` file in the project's root and add the following:

      ```env
      DB_NAME=your_database_name
      DB_USER=your_mysql_username
      DB_PASSWORD=your_mysql_password
      ```

    - Execute the following commands to set up the database schema and seed data:

      ```bash
      npm run db:setup
      ```

5. Start the server:

    ```bash
    npm start
    ```

## Usage

[Video Demo](https://drive.google.com/file/d/1vG8H_1MGnpguJW1C7X5QulHTHhk2DThp/view?usp=sharing)
[GitHub Repository](https://github.com/Wolffkran/Rays_Ecommerce_Backend.git)

### Database Connection

Upon starting the server, Sequelize models are synchronized with the MySQL database using the credentials provided in the `.env` file.

### API Routes

- **Categories:** `/api/categories`
    - **GET:** Retrieve all categories with associated products.
    - **POST:** Create a new category.

- **Products:** `/api/products`
    - **GET:** Retrieve all products with associated category and tags.
    - **GET (by ID):** Retrieve a single product by its ID.
    - **POST:** Create a new product.
    - **PUT (by ID):** Update a product by its ID.
    - **DELETE (by ID):** Delete a product by its ID.

- **Tags:** `/api/tags`
    - **GET:** Retrieve all tags with associated products.
    - **POST:** Create a new tag.

### Testing

Utilize tools like [Insomnia](https://insomnia.rest/) to test API GET, POST, PUT, and DELETE routes for categories, products, and tags.

## License

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
