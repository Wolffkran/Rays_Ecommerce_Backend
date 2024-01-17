// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define the Product model by extending Sequelize's Model class
class Product extends Model {}

// Initialize the Product model with specific attributes and options
Product.init(
  {
    // Define the 'id' attribute
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Define the 'product_name' attribute
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define the 'price' attribute
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // Define the 'stock' attribute
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // Define the 'category_id' attribute
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
      onDelete: 'CASCADE', // Enables cascade deletion
    },
  },
  {
    // Set model options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'products',
  }
);

// Export the Product model
module.exports = Product;
