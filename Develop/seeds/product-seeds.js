const { Product } = require('../models');

const productData = [
  {
    product_name: 'Classic White Tee',
    price: 19.99,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Running Shoes for All',
    price: 100.0,
    stock: 30,
    category_id: 5,
  },
  {
    product_name: 'Signature Logo Cap',
    price: 24.99,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Golden Era Vinyl Collection',
    price: 15.99,
    stock: 60,
    category_id: 3,
  },
  {
    product_name: 'Adventure Cargo Shorts',
    price: 34.99,
    stock: 25,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
