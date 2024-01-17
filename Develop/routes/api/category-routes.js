// Import necessary modules
const router = require('express').Router();
const { Category, Product } = require('../../models');

// Define routes for the `/api/categories` endpoint

// Route to get all categories and include their associated products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to get a specific category by its `id` value and include associated products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product,
    });

    if (!category) {
      res.status(404).json({ message: 'Category not discovered' });
      return;
    }

    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'Category not discovered' });
      return;
    }

    res.json({ message: 'Category successfully updated!' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not located' });
      return;
    }

    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;
