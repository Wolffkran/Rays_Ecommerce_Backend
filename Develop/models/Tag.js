// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Tag model by extending Sequelize's Model class
class Tag extends Model {}

// Initialize the Tag model with specific attributes and options
Tag.init(
  {
    // Define the 'id' attribute
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // Define the 'tag_name' attribute
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Set model options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export the Tag model
module.exports = Tag;
