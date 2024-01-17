// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the ProductTag model by extending Sequelize's Model class
class ProductTag extends Model {}

// Initialize the ProductTag model with specific attributes and options
ProductTag.init(
  {
    // Define the 'id' attribute
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Define the 'product_id' attribute
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    // Define the 'tag_id' attribute
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    // Set model options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Export the ProductTag model
module.exports = ProductTag;
