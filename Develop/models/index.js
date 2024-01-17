// Importing models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Establishing associations between models

// A Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Foreign key linking Product to Category
});

// A Category has many associated Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Foreign key linking Category to Product
});

// A Product belongs to many Tags through the ProductTag model
Product.belongsToMany(Tag, {
  through: ProductTag, // Intermediary model for the many-to-many relationship
  foreignKey: 'product_id', // Foreign key linking Product to Tag through ProductTag
});

// A Tag belongs to many Products through the ProductTag model
Tag.belongsToMany(Product, {
  through: ProductTag, // Intermediary model for the many-to-many relationship
  foreignKey: 'tag_id', // Foreign key linking Tag to Product through ProductTag
});

// Exporting models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
