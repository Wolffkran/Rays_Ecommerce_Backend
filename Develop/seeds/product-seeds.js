const { Product } = require('../models');

const productData = [
  {
    product_name: 'Classic White Tee',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Shoes for All',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Signature Logo Cap',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Golden Era Vinyl Collection',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Adventure Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
