# E-Commerce Back End

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description

This project is the back end for an e-commerce website built using Express.js and Sequelize to interact with a MySQL database. The primary goal is to provide a functional API that enables the management of categories, products, and tags for an internet retail company.

### Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- MySQL Database

## Installation

To run this project locally, follow these steps:

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
   
    - Create a `.env` file in the root of your project and add the following:

      ```env
      DB_NAME=your_database_name
      DB_USER=your_mysql_username
      DB_PASSWORD=your_mysql_password
      ```

    - Run the following commands to set up the database schema and seed data:

      ```bash
      npm run db:setup
      ```

5. Start the server:

    ```bash
    npm start
    ```

## Usage

Video: https://drive.google.com/file/d/1vG8H_1MGnpguJW1C7X5QulHTHhk2DThp/view?usp=sharing
Github: https://github.com/Wolffkran/Rays_Ecommerce_Backend.git

### Database Connection

When the server is started, the Sequelize models are synced to the MySQL database using the provided credentials in the `.env` file.

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

Use a tool like [Insomnia](https://insomnia.rest/) to test API GET, POST, PUT, and DELETE routes for categories, products, and tags.

## License

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.