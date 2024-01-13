const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./api/category-routes')
const productRoutes = require('./api/product-routes');
const tagRoutes = require('./api/tag-routes'); 

router.use('/api', apiRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes); 

router.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

module.exports = router;
