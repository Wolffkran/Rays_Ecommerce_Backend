// Import necessary modules
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Define routes for the `/api/tags` endpoint

// Route to get all tags and include associated products
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to get a specific tag by its `id` value and include associated products
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });

    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route to create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.json(newTag);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Route to update a tag by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    console.log(`Updating tag with ID: ${tagId}`);

    const updatedTag = await Tag.update(req.body, {
      where: {
        id: tagId,
      },
    });

    if (!updatedTag[0]) {
      console.log(`Tag with ID ${tagId} not found`);
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    console.log(`Tag with ID ${tagId} updated successfully`);
    res.json({ message: 'Tag updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Route to delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedTag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Export the router
module.exports = router;
