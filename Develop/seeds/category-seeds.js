const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Apparel Tops',
  },
  {
    category_name: 'Apparel Bottoms',
  },
  {
    category_name: 'Audio Essentials',
  },
  {
    category_name: 'Headwear Selection',
  },
  {
    category_name: 'Footwear Styles',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
